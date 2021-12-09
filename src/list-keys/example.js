import React, { Component } from "react";
//lấy dữ liệu từ file json mốt muốn lấy cho nó json
import data from "./data.json";
export default class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listMovie: data,
        }
    }

    renderListMovie = () => {
        //lấy cái tên trong object của this.state
        const { listMovie } = this.state;
        return listMovie.map((movie)=>{
            return (
                <div className="col-md-4" key={movie.maPhim}>
                    <div className="card">
                        <img className="card-img-top" src={movie.hinhAnh} alt />
                        <div className="card-body">
                            <h4 className="card-title">{movie.tenPhim}</h4>
                            <p className="card-text">{movie.moTa}</p>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
        <div className="container">
            <h3>Example List Keys</h3>
            <div className="row">
            {/* <div className="col-md-4">
                <div className="card">
                    <img className="card-img-top" src="holder.js/100x180/" alt />
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Text</p>
                    </div>
                </div>
            </div> */}
            {
                this.renderListMovie()
            }
            </div>
        </div>
        );
    }
}
