import React, {useEffect, useRef, useState} from "react";
import {Box} from "@mui/material";

// ImageDataを受け取って刺繍用ダイアグラムの作製と表示

const Diagram = (props) => {
    const diagramRef = useRef()

    useEffect(() => {
        const diagram = diagramRef.current  //描画先キャンバス
        const src = props.imageData  // 元画像ImageData
        const sw = src.width   // 元画像幅
        const sh = src.height  // 元画像高さ
        const charSize = 10  // characterSize ダイアグラムに書く文字の大きさ
        // 描画先の大きさ変更
        diagram.width = sw * charSize
        diagram.height = sh * charSize
        const ctx = diagram?.getContext('2d')

        for (let x = 0; x < sw; x++) for (let y = 0; y < sh; y++) {
            const redIdx = 4 * x + sw * 4 * y
            const r = src.data[redIdx]
            const g = src.data[redIdx + 1]
            const b = src.data[redIdx + 2]
            const a = src.data[redIdx + 3]
            ctx.fillStyle = `rgb(${r},${g},${b})`
            ctx.fillRect(x * charSize, y * charSize, charSize, charSize)
            ctx.fillStyle = `rgb(255, 255, 255)`
            ctx.fillText("A", x * charSize, y * charSize, 10);
        }
    })

    return(
        <>
            <Box sx={{overflow: 'auto', width:800, height: 800, maxWidth: 0.8, maxHeight: 0.8}}>
                <h1>Diagram</h1>
                <canvas ref={diagramRef}/>
            </Box>
        </>
    )
}

export default Diagram