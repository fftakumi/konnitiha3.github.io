import React from "react";
import Color from "./color";
import {Button, Stack} from "@mui/material";
import {cosmos} from "./stringColors";

class ColorList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {colors: []}
        this.colorListRef = React.createRef()
    }

    componentToHex = (c) => {
        const hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }

    rgbToHex = (r, g, b) => {
        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    }

    update = async (imageData) => {
        let colors = new Set()
        for (let i = 0; i < imageData.data.length; i += 4) {
            colors.add(this.rgbToHex(imageData.data[i], imageData.data[i + 1], imageData.data[i + 2]))
        }
        if (colors.size > 100) {
            alert('色が多すぎて表示出来ません')
        } else {

            this.setState({
                colors: [...colors]
            })
        }
    }

    clickUpdate = () => {
        console.log("a")
        this.update(this.props.previewRef.current.getImageData()).then(r => console.log('complete'))
    }

    render() {
        return (
            <div style={{maxHeight: 600, overflow: "auto"}}>
                <h3>Color List</h3>
                <Button variant='contained' onClick={this.clickUpdate}>UPDATE</Button>
                <Stack spacing={1}>
                    {this.state.colors.map(color => {
                        return <Color key={color} hex={color}/>
                    })}
                </Stack>
            </div>
        )
    }
}

export default ColorList