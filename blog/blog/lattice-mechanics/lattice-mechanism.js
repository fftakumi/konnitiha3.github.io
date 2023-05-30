import React from "react";

class Matrix extends React.Component {
    constructor(props) {
        super(props);
        this.matrixCanvas = React.createRef(null);
        this.randomButton = React.createRef(null);
        this.requestAnime = React.createRef(null);

        this.state = {
            aveM: 0, // 長距離秩序
            ps: 0, // 短距離秩序
            Hm: 0, // ハミルトニアン
            j: 1,
            B: 0,
            k: 1,
            T: 1,
            step: 1000
        }

        this.canvasWidth = 100;
        this.canvasHeight = 100;
        this.row = props.row;
        this.col = props.col;
        this.matrix = Array.from(new Array(this.row), _ => new Array(this.col).fill().map(e => 0));
        this.isUpdate = false;

        this.randomSetUp = this.randomSetUp.bind(this);
        this.draw = this.draw.bind(this);
        this.calcParams = this.calcParams.bind(this);
        this.hamiltonian = this.hamiltonian.bind(this);
        this.montecarloStep = this.montecarloStep.bind(this);
        this.montecarlo = this.montecarlo.bind(this);
        this.tick = this.tick.bind(this);
    }

    randomSetUp() {
        this.matrix = this.matrix.map((_col) => {
            return _col.map((_v) => {
                return (Math.random() > 0.5) ? 1 : -1
            })
        })
        this.draw();
        this.calcParams();
    }

    hamiltonian(i, j) {
        const ip1 = (i + 1 === this.row) ? 0 : i;
        const im1 = (i - 1 === -1) ? this.row - 1 : i;
        const jp1 = (j + 1 === this.col) ? 0 : j;
        const jm1 = (j - 1 === -1) ? this.col - 1 : j
        const g = this.matrix[ip1][j] + this.matrix[im1][j] + this.matrix[i][jp1] + this.matrix[i][jm1]
        return -2 * this.matrix[i][j] + (this.state.j * g + this.state.B);
    }

    montecarloStep(i, j) {
        for (let i = 0; i < this.row; i++) {
            for (let j = 0; j < this.col; j++) {
                const hm1 = this.hamiltonian(i, j);
                this.matrix[i][j] *= -1;
                const hm2 = this.hamiltonian(i, j);
                const r = Math.exp(hm1 - hm2 / (this.state.k * this.state.T));
                if (Math.random() >= r) {
                    this.matrix[i][j] *= -1;
                }
            }
        }
        this.draw();
        this.calcParams();
    }

    montecarlo() {
        for (let i = 0; i < this.state.step; i++) {
            this.montecarloStep(Math.floor(Math.random() * this.row), Math.floor(Math.random() * this.col));
        }
    }

    calcParams() {
        let sum = 0;
        let N = 0;
        this.matrix.forEach((_col, i) => {
            N += _col.length;
            _col.forEach((mag, j) => {
                sum += mag;
            })
        })
        this.setState({
            aveM: sum / N
        })
    }

    draw() {
        const ctx = this.matrixCanvas.current.getContext("2d");
        const cellWidth = this.canvasWidth / this.col;
        const cellHeght = this.canvasHeight / this.row;
        this.matrix.forEach((_col, i) => {
            _col.forEach((elem, j) => {
                ctx.fillStyle = (elem === 1) ? "white" : "black"
                ctx.fillRect(cellWidth * j, cellHeght * i, cellWidth, cellHeght);
            })
        })
        setInterval(()=>{}, 10);
    }

    tick() {
        if (this.isUpdate) {
            this.draw();
            this.requestAnime.current = requestAnimationFrame(this.tick);
        }
    }

    componentDidMount() {
        //this.requestAnime.current = requestAnimationFrame(this.tick);
        const ctx = this.matrixCanvas.current.getContext("2d");
        this.canvasWidth = ctx.canvas.width;
        this.canvasHeight = ctx.canvas.height;

        ctx.lineWidth = 1;
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(this.canvasWidth, 0);
        ctx.lineTo(this.canvasWidth, this.canvasHeight);
        ctx.lineTo(0, this.canvasHeight);
        ctx.lineTo(0, 0);
        ctx.closePath();
        ctx.stroke();
    }

    render() {
        return (
            <>
                <div>
                    <button ref={this.randomButton} onClick={this.randomSetUp}>random</button>
                    <button onClick={this.montecarlo}>montecarlo</button>
                    <label>j</label><input type="number" value={this.state.j} onChange={(e) => { this.setState({ j: e.target.value }) }} />
                    <label>B</label><input type="number" value={this.state.B} onChange={(e) => { this.setState({ B: e.target.value }) }} />
                    <p>{this.state.aveM}</p>
                    <p>{this.state.ps}</p>
                </div>
                <canvas ref={this.matrixCanvas} />
            </>
        );
    }

}

export default Matrix;
