import React from "react";
import Header from "./header";
import Carousel from "./carousel";
import ListItems from "./list_items";
import Footer from "./footer";

export default function BTVN_REACTJS() {
    return(
        <body className="bg-dark">
            <Header/>
            <Carousel/>
            <ListItems/>
            <Footer/>
        </body>
    );
};