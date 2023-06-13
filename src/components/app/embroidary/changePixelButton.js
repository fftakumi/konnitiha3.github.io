import React from "react";
import {Popover, TextField, Button, Card} from "@mui/material";

const ChangePixelButton = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [width, setWidth] = React.useState(null)
    const [height, setHeight] = React.useState(null)
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleApply = () => {
        props.func(width, height)
        handleClose()
    }
    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
        <div>
            <Button variant="contained" onClick={handleClick}>
                ピクセル変換
            </Button>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Card sx={{width: '200px'}}>
                    <p>
                        <TextField size="small"
                                   variant="filled"
                                   label={'width'}
                                   onChange={(e)=>{
                                       setWidth(e.target.value)
                                   }}
                                   inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}/>
                        <TextField size="small"
                                   variant="filled"
                                   label={'height'}
                                   onChange={(e)=>{
                                       setHeight(e.target.value)
                                   }}
                                   inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}/>
                    </p>
                    <Button onClick={handleApply}>Apply</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </Card>
            </Popover>
        </div>
    )
}

export default ChangePixelButton