import React, { Component } from 'react'

export default class ChangeColorCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: "./img/imgRedCar.jpg",
        }
    }
    
    change_red = () => {
        this.setState({
            img: "./img/imgRedCar.jpg"
        })
        
    }

    change_silver = () => {
        this.setState({
            img: "./img/imgSilverCar.jpg"
        })
    }

    change_black = () => {
        this.setState({
            img: "./img/imgBlackCar.jpg"
        })
    }

    render() {
        //spread destructuring
        const { img } = this.state;
        return (
            <div className="container">
                <h3>changColorCar</h3>
                <div className="row">
                    <div className="col-md-6">
                        <img src={img} className="img-fluid"/>
                    </div>
                    <div className="col-md-6">
                        {/* Này dùng virtual dom chứ ko có đụng vào cây dom như js thuần */}
                        <button className="btn btn-danger" onClick={this.change_red}>Red</button>
                        <button className="btn btn-light mx-3" onClick={this.change_silver}>Silver</button>
                        <button className="btn btn-dark" onClick={this.change_black}>Black</button>
                    </div>
                </div>
            </div>
        )
    }
}
