import React from "react";
import {AppBar, Toolbar} from "@mui/material";

const Header = (props) => {

    return (
        <AppBar color='primary' sx={{position:'relative'}}>
            <Toolbar>Embroidery</Toolbar>
        </AppBar>
    )
}

export default Header