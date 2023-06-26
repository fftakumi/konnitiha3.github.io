import React, { useState } from "react";
import { Button } from "@mui/material";

const Main = (props) => {
    const [itemNum, setItemNum] = useState(100);
    const [sortTarget, setSortTarget] = useState([...Array(itemNum)].map((_, i) => i))

    const random = () => {
        const cloneArray = [...sortTarget]

        for (let i = cloneArray.length - 1; i >= 0; i--) {
            let rand = Math.floor(Math.random() * (i + 1))
            // 配列の要素の順番を入れ替える
            let tmpStorage = cloneArray[i]
            cloneArray[i] = cloneArray[rand]
            cloneArray[rand] = tmpStorage
        }

        setSortTarget(cloneArray);

    }

    const bubleSort = () => {
        let clone = [...sortTarget]
        for(let i = 0; i < sortTarget.length - 1; i++) {
            for(let j = 0; j < sortTarget.length - i - 1; j++) {
                if (clone[j] > clone[j+1]) {
                    let _tmp = clone[j]
                    clone[j] = clone[j+1]
                    clone[j+1] = _tmp
                }
            }
            setSortTarget(clone);
        }
    }

    return (
        <>
            <Button onClick={random}>Random</Button>
            <Button onClick={bubleSort}>Buble</Button>
            {
                (function () {
                    const list = [];
                    sortTarget.forEach((num) => {
                        list.push(<Number key={num} num={num} />)
                    })
                    return <div>{list}</div>;
                }())
            }
        </>
    )
}

const Number = (props) => {
    return (
        <>
            <div style={{transition:"position 1s"}}>
                {props.num}
            </div>
        </>
    )
}

export default Main