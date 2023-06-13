import React, {useEffect, useRef, useState} from "react";
import {Popover, TextField, Button, Card, Modal, Box, Typography} from "@mui/material";
import Diagram from "./diagram";

const CreateDiagramButton = (props) => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)


    const handleClose = () => setOpen(false)

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    }

    return(
        <>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Diagram imageData={props.getSrcImg()}/>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}

export default CreateDiagramButton