import React from 'react'

//Này là tên của component
export default function ChildrenComponent(props) {
    return (
        <div>
            <h3>Children</h3>
            {/* Này là từ khóa ko có liên quan
                đến tên file cú pháp props.children
            */}
            {props.children}
        </div>
    )
}
