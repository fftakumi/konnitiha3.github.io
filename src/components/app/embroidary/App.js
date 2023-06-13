import Header from "./header";
import Preview from "./preview";
import FilterButtons from "./filterButtons";
import ColorList from "./components/colorList";
import {ThemeProvider, Box, Grid, ButtonGroup, Button, IconButton} from "@mui/material";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import themeOptions from "./muiTheme";
import React, {useRef} from "react";
import {Cropper} from "react-cropper";
import "cropperjs/dist/cropper.css";
import logo from "./test.jpg"

const App = (props) => {
    const cropperRef = useRef(null)
    const previewRef = useRef(null)
    return (
        <ThemeProvider theme={themeOptions}>
            <Header/>
            <Grid container spacing={1} direction='row' justifyContent='center' sx={{pt: '20px'}}>
                <Grid item xs={1}>
                    <ColorList previewRef={previewRef}/>
                </Grid>
                <Grid item xs={5}>
                    <Box component={'div'} sx={{width:'100%'}}>
                        <Box component={'div'}>
                            <FilterButtons previewRef={previewRef}/>
                        </Box>
                        <Box component={'div'} sx={{textAlign: "center", backgroundColor: "#FFFFFF", padding:'10px'}}>
                            <Preview ref={previewRef}/>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <ButtonGroup
                        variant="contained"
                        aria-label="outlined primary button group"
                        sx={{display: 'block',
                        textAlign: 'right'}}>
                        <IconButton
                            onClick={() => {
                            console.log('aa')
                            const input = document.createElement('input')
                            input.type = 'file'
                            input.accept = "image/*"
                            input.onchange = (e) => {
                                const reader = new FileReader()
                                reader.onload = () => {
                                    cropperRef?.current.cropper.replace(reader.result)
                                }
                                reader.readAsDataURL(e.target.files[0])
                            }
                            input.click()
                        }}
                        >
                            <AddPhotoAlternateIcon/>
                        </IconButton>

                    </ButtonGroup>
                    <Box component={'div'} sx={{
                        maxWidth: 300,
                        maxHeight: 300
                    }}>
                        <Cropper
                            src={logo}
                            viewMode={1}
                            style={{aspectRatio: 1, width: '100%'}}
                            crop={() => {
                                const canvas = cropperRef.current.cropper.getCroppedCanvas()
                                previewRef.current.setImageData(canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height))
                            }
                            }
                            guide={true}
                            ref={cropperRef}
                        />
                        <ButtonGroup
                            variant="contained"
                            aria-label="outlined primary button group"
                            sx={{display: 'block'}}>
                            <Button onClick={() => {
                                cropperRef?.current.cropper.setAspectRatio(1)
                            }}>1:1</Button>
                            <Button onClick={() => {
                                cropperRef?.current.cropper.setAspectRatio(16 / 9)
                            }}>16:9</Button>
                            <Button onClick={() => {
                                cropperRef?.current.cropper.setAspectRatio(null)
                            }}>FREE</Button>
                        </ButtonGroup>
                    </Box>

                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default App;
