import React from "react";
import styled from "../Arrivals/Arrivals.module.scss";
// import img1 from '../../../Assets/product-img-1.jpg';
import { BsStarFill } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { BsArrowsFullscreen } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { AiOutlineReload } from "react-icons/ai";
import Productitem from "../../../MockData/Products";
import { useState } from "react";

const Arrivals = () => {
  const [filtered, SetFiltered] = new useState(Productitem);
  const filterSearch = (event) => {
    const query = event.target.value;
    var updatedList = [...Productitem];
    updatedList = updatedList.filter((item) => {
      return item.desc.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    SetFiltered(updatedList);
  };

  return (
    <section className={styled.arrivals}>
      <div className="container my-5">
        <div className="row ">
          <div className="col-6 m-0 ">
            {" "}
            <h1>New Arrivals</h1>
          </div>
          <div className="col-6  text-end">
            <input
              type="text"
              placeholder="Search..."
              onChange={filterSearch}
            />
            <button className="search">
              <BsSearch />
            </button>
          </div>
        </div>
        <div className="row">
          {filtered &&
            filtered.map((element) => {
              return (
                <div className="col-3 mb-3" key={`product_id${element.id}`}>
                  <div className={styled.card}>
                    <img src={element._Img} className="card-img-top" alt="" />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <h4>{element.desc}</h4>
                    <p className={styled.text}>{element.title}</p>
                    <div className={styled.price}>
                      <span className={styled.main_price}>${element.prev}</span>
                      <span className={styled.offer_price}>
                        ${element.next}
                      </span>
                    </div>

                    <button className={styled.add_cart}>
                      {" "}
                      <BsCart />
                      Add to Cart
                    </button>

                    <div className={styled.right_icons}>
                      <BsArrowsFullscreen />
                      <BsHeart />
                      <AiOutlineReload />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Arrivals;
