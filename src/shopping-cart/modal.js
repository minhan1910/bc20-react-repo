import React, { Component } from "react";

export default class Modal extends Component {
  handeleDelete = (maSp) => {
    this.props.deleteCart(maSp);
  }

  renderListCart = () => {
    //nhớ return về cái mảng của map
     return this.props.listCart.map((product)=>{
      //  bên reactjs thì nó render cái html về qua cái return () xong ko cần phải string template gì hết 
      // cứ pass cái code của html vào xong truyền các biến thông qua cái {} để có thể dễ dàng xử lý dữ liệu 
        return (
            <tr key={product.maSP}>
                <td>${product.maSP}</td>
                <td>${product.tenSP}</td>
                <td>
                  <img src={product.hinhAnh} width={50} alt="" />
                </td>
                <td>
                  <button onClick={() => {
                    //Ở đây nó cứ trả về giá trị thôi để thằng ở index nó nhận được
                    this.props.productUpdateQuantity(product, false)
                  }}>-</button>
                    {product.soLuong}
                  <button onClick={() => {
                    this.props.productUpdateQuantity(product, true)
                  }}>+</button>
                </td>
                <td>{product.donGia}</td>
                <td>{product.soLuong * product.donGia}</td>
                <td>
                  <button className="btn btn-danger" onClick={()=>{
                    this.handeleDelete(product.maSP)
                  }}>Delete</button>
                </td>
           </tr>
        );
     });
  }

  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: "1000px" }}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>tên sản phẩm</th>
                    <th>hình ảnh</th>
                    <th>số lượng</th>
                    <th>đơn giá</th>
                    <th>thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.renderListCart()
                  }
                  {/* <tr>
                    <td>1</td>
                    <td>VinSmart Live</td>
                    <td>
                      <img src="./img/vsphone.jpg" width={50} alt="" />
                    </td>
                    <td>
                      <button>-</button>1<button>+</button>
                    </td>
                    <td>5700000</td>
                    <td>5700000</td>
                    <td>
                      <button className="btn btn-danger">Delete</button>
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
