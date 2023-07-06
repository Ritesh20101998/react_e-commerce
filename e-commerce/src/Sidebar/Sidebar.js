import React from 'react'
import "./Sidebar.css";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colours from "./Colours/Colours";
// import {BsCart4} from from "react-icons/bs";


function Sidebar({handleChange}) {
  return (
    <>
        <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colours handleChange={handleChange} />
        </section>
    </>
  )
}

export default Sidebar