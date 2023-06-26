import React from "react";
import {Paper} from "@mui/material";
import {ColorLens} from "@mui/icons-material";
import {cosmos} from "./stringColors";

const Color = (props) => {
    return (
        <Paper elevation={3} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <ColorLens color={props.hex} htmlColor={props.hex}/>
            <span>{props.hex}</span>
            <hr/>
        </Paper>
    )

}

export default Color