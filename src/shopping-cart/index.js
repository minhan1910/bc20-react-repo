import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import data from "./data.json";

export default class LiftingStateUpCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: data,
      detailProduct: data[0],
      //Cho caí mảng vì khách hàng có thể mua nhièu đt
      listCart: []
    };
  };

  handleDetailProduct = (product) => {
    //Nhận product từ component SanPham truyền ra
    //Cập nhật lại state để cập nhập lại => để component render lại
    this.setState({
      detailProduct: product
    });
  }

  //đặt _ để không trùng với tên của javascript 
  _findIndex = (maSP) => {
    return this.state.listCart.findIndex((item) => {
      return item.maSP === maSP;
    })
  }

  handleAddCart = (product) => {
    //Thay vì gán bth thì lấy cái mảng gán qua cái mảng mới
    let listCart = [...this.state.listCart];

    //Tìm kiếm product có  tồn tại trong  state.listCart hay chưa
    //trả về index tại index nó tìm thấy
    
    const index = this._findIndex(product.maSP);

    if(index !== -1) {
      //tìm thấy => cập nhập lại soLuong
      listCart[index].soLuong++;
    } else {
      // thêm product vào listCart
      //các thông tin để bỏ vào giỏ hàng là object
      const productCart = {
        maSP: product.maSP,
        tenSP: product.tenSP,
        hinhAnh: product.hinhAnh,
        soLuong: 1,
        donGia: product.giaBan,
      };
      listCart.push(productCart);
    }

    this.setState({
      listCart, // listCart: listCart
    }, () => {
      //Do bất đồng bộ nên phải cho cái callback vào
      //in ra thông tin sản phẩm mà muốn thêm
      console.log(this.state);
    });
  };

  handleDelete = (maSP) => {
    let listCart = [...this.state.listCart];
    
    const indexDelete = this._findIndex(maSP);

    listCart.splice(indexDelete, 1);

    this.setState({
      listCart
    });
  };
  
  handleUpdateQuantity = (product, status) => {
    //Nhận product từ model truỳen vào
    console.log(product, status);
    const indexUpdate = this._findIndex(product.maSP);
    if(indexUpdate !== -1) {
      let listCart = [...this.state.listCart];
      if(status) {
          listCart[indexUpdate].soLuong++;
      } else {
        if(listCart[indexUpdate].soLuong > 1) {
          listCart[indexUpdate].soLuong--;
        }  
      }
  
      this.setState({
        listCart
      });
    ;}
  };

  totalQuantity = () => {
    //Không cần state vì các cái add rồi + - này nọ thì đã setState nó đã refresh lại hết rồi
    let listCart = [...this.state.listCart];
    return listCart.reduce((total, product)=>{
      return total + product.soLuong;
    }, 0);
  };

  render() {
    const { listProduct, detailProduct } = this.state;
    return (
      <div>
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.totalQuantity()})
          </button>
        </div>
          <DanhSachSanPham 
            listProduct={listProduct} 
            detailProduct={this.handleDetailProduct}
            addCart={this.handleAddCart}
          />
          <Modal 
            listCart={this.state.listCart} 
            deleteCart={this.handleDelete}
            productUpdateQuantity={this.handleUpdateQuantity}
          />
        <div className="row">
          <div className="col-sm-5">
            <img className="img-fluid" src="./img/vsphone.jpg" alt="" />
          </div>
          <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{detailProduct.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{detailProduct.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{detailProduct.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{detailProduct.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{detailProduct.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{detailProduct.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
