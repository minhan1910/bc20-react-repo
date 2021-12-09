import React, { Component } from "react";
import SanPham from "./san-pham";

export default class DanhSachSanPham extends Component {
  renderListProduct = (listProduct) => {
    return listProduct.map((product)=>{
        return (<SanPham 
        product={product}
        detailProduct={this.props.detailProduct}
        addCart={this.props.addCart}
        key={product.maSP}
        />);
    });
  }

  render() {
    const { listProduct } = this.props;
    console.log(listProduct);
    return (
      <div className="container">
        <div className="row">
          {
            this.renderListProduct(listProduct)
          }
        </div>
      </div>
    );
  }
}
