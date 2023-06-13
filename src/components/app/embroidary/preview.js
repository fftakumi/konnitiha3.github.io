import React from "react";

class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef()
    }

    maxWidth = 700
    maxHeight = 700

    setImageData(imageData) {
        const sw = imageData.width
        const sh = imageData.height
        this.canvasRef.current.width = sw
        this.canvasRef.current.height = sh
        const ctx = this.canvasRef.current.getContext('2d')
        const aspectRatio = sw/sh
        /*if (aspectRatio > 1) {
            this.canvasRef.current.style.width = this.maxWidth + "px"
            this.canvasRef.current.style.height = ""
        } else {
            this.canvasRef.current.style.width = ""
            this.canvasRef.current.style.height = this.maxHeight + "px"
        }*/

        this.canvasRef.current.style.width = (aspectRatio > 1)? '100%': aspectRatio * 100 + '%'
        ctx.putImageData(imageData, 0, 0)

    }

    getImageData() {
        return this.canvasRef.current.getContext('2d').getImageData(0, 0, this.canvasRef.current.width, this.canvasRef.current.height)
    }

    createImageData() {
        return this.canvasRef.current.getContext('2d').createImageData(this.canvasRef.current.width, this.canvasRef.current.height)
    }

    getContext = () => {
        return this.canvasRef.current.getContext('2d')
    }

    getCanvas = () => {
        return this.canvasRef.current
    }

    setSize = (width, height) => {
        this.canvasRef.current.width = width
        this.canvasRef.current.height = height
    }

    clear = () => {
        this.canvasRef.current.getContext('2d').clearRect(0, 0, this.canvasRef.current.width, this.canvasRef.current.height)
    }

    render() {
        return (
            <canvas ref={this.canvasRef} style={{maxWidth: this.maxWidth, maxHeight:this.maxHeight}}/>
        )
    }

}

export default Preview