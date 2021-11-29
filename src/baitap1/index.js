import React, { Component } from "react";
import Header from "./header";
import Content from "./content";
import Sidebar from "./sidebar";
import Footer from "./footer";


//Cấu trúc stateful component
//Sau khi extends Component từ react thì giờ nó thành component
class Baitap1 extends Component {
    render() {
       return (
        //    Dùng thẻ gì bao cũng đc giống XML vl
           <div>
               <Header />
               <div className="contents">
                    <Content/>
                    <Sidebar />
               </div>
               <Footer/>
           </div>
       );
    }
}

export default Baitap1

