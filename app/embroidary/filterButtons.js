import React from "react";
import {ButtonGroup, Button, TextField} from "@mui/material";
import {flattenFilter, laplacianFilter, edgeY, edgeX} from "./filters";
import ChangePixelButton from "./changePixelButton";
import DecreaseColorButton from "./decreaseColorButton";
import CreateDiagramButton from "./createDiagramButton";

const FilterButtons = (props) => {
    const kMeans = async (k) => {
        const max_itr = 50
        const rgba = []
        const src = props.previewRef.current.getImageData()
        const dst = props.previewRef.current.createImageData()
        for (let i = 0; i < src.data.length; i += 4) {
            rgba.push(
                {
                    r: src.data[i],
                    g: src.data[i + 1],
                    b: src.data[i + 2],
                    a: src.data[i + 3],
                    i: i,
                    j: i + 1,
                    k: i + 2,
                    l: i + 3
                }
            )
        }
        const g = new Array(k) //重心たち
        for (let i = 0; i < k; i++) {
            const random = Math.floor(Math.random() * rgba.length)
            g[i] = rgba[random]  //初期の重心
            g[i].r += Math.random() * 6 - 3 //被り無いように少し乱数加える
            g[i].g += Math.random() * 6 - 3 // -3~3
            g[i].b += Math.random() * 6 - 3
        }
        let clusters = [...Array(k)].map(() => Array().fill([]))
        for (let itr = 0; itr < max_itr; itr++) {
            let preG = g.concat(g)
            for (let i = 0; i < rgba.length; i++) {
                let r = 3 * 255 ** 2 //最大誤差
                let cluster_num = 0
                //重心との距離によりクラスター分け
                for (let j = 0; j < k; j++) {
                    const r1 = (rgba[i].r - g[j].r) ** 2 + (rgba[i].g - g[j].g) ** 2 + (rgba[i].b - g[j].b) ** 2 //重心との距離
                    if (r1 < r) {
                        r = r1
                        cluster_num = j
                    }
                }
                clusters[cluster_num].push(rgba[i])
            }
            // 重心再計算
            clusters.forEach((cluster, cluster_num) => {
                const g_tmp = {r: 0, g: 0, b: 0, a: 0}
                const item_num = cluster.length
                cluster.forEach(_rgba => {
                    g_tmp.r += _rgba.r / item_num
                    g_tmp.g += _rgba.g / item_num
                    g_tmp.b += _rgba.b / item_num
                })
                g[cluster_num].r = Math.round(g_tmp.r)
                g[cluster_num].g = Math.round(g_tmp.g)
                g[cluster_num].b = Math.round(g_tmp.b)
            })
        }
        clusters.map((cluster, i) => {
            cluster.map(_rgba => {
                dst.data[_rgba.i] = g[i].r
                dst.data[_rgba.j] = g[i].g
                dst.data[_rgba.k] = g[i].b
                dst.data[_rgba.l] = g[i].a
            })
        })
        props.previewRef.current.setImageData(dst)
    }

    const applyFilter = async (srcImage, filter) => {
        const src = srcImage
        const filterX = filter[0].length
        const filterY = filter.length
        const px = src.width
        const py = src.height
        const image = new ImageData(px, py)
        for (let x = filterX; x < px - filterX; x++) for (let y = filterY; y < py - filterY; y++) {
            const redIdx = 4 * x + px * 4 * y
            for (let fx = 0; fx < filterX; fx++) for (let fy = 0; fy < filterY; fy++) {
                const fxRefIdx = fx - (filterX - 1) / 2
                const fyRefIdx = fy - (filterY - 1) / 2
                image.data[redIdx] += src.data[4 * (x + fxRefIdx) + px * 4 * (y + fyRefIdx)] * filter[fy][fx]
                image.data[redIdx + 1] += src.data[4 * (x + fxRefIdx) + 1 + px * 4 * (y + fyRefIdx)] * filter[fy][fx]
                image.data[redIdx + 2] += src.data[4 * (x + fxRefIdx) + 2 + px * 4 * (y + fyRefIdx)] * filter[fy][fx]
            }
            image.data[redIdx] = ~~image.data[redIdx]
            image.data[redIdx + 1] = ~~image.data[redIdx + 1]
            image.data[redIdx + 2] = ~~image.data[redIdx + 2]
            image.data[redIdx + 3] = src.data[redIdx + 3]
        }
        return image
    }

    const kernel = async () => {
        const filtered = await applyFilter(props.previewRef.current.getImageData(), laplacianFilter)
        props.previewRef.current.setImageData(filtered)
    }

    const edge = async () => {
        const src = props.previewRef.current.getImageData()
        const flatten = await applyFilter(src, flattenFilter(5))
        const edgedX = await applyFilter(flatten, edgeX)
        const edgedY = await applyFilter(flatten, edgeY)
        const image = new ImageData(edgedX.width, edgedX.height)
        const emphasisBorder = 20
        for (let i = 0; i < edgedX.data.length; i += 4) {
            const r = (edgedX.data[i] + edgedY.data[i]) + (edgedX.data[i + 1] + edgedY.data[i + 1]) + (edgedX.data[i + 2] + edgedY.data[i + 2]) / 2
            image.data[i] = (edgedX.data[i] + edgedY.data[i]) / 2
            image.data[i + 1] = (edgedX.data[i + 1] + edgedY.data[i + 1]) / 2
            image.data[i + 2] = (edgedX.data[i + 2] + edgedY.data[i + 2]) / 2
            image.data[i + 3] = r < 20? 0 : 255
            src.data[i + 3] = r < emphasisBorder? 150:255
        }
        props.previewRef.current.setImageData(src)
    }


    const pixelate = (width, height) => {
        const canvas = document.createElement('canvas')
        canvas.width = width
        canvas.height = height
        const src = props.previewRef.current.getCanvas()
        canvas.getContext('2d').drawImage(src, 0, 0, width, height)
        props.previewRef.current.setImageData(canvas.getContext('2d').getImageData(0, 0, width, height))
    }

    return (
        <ButtonGroup>
            <ChangePixelButton func={pixelate}/>
            <DecreaseColorButton func={kMeans}/>
            <Button onClick={edge} variant='contained'>輪郭を強調する</Button>
            <CreateDiagramButton getSrcImg={() => {return props.previewRef.current?.getImageData()}}/>
        </ButtonGroup>
    )
}

export default FilterButtons