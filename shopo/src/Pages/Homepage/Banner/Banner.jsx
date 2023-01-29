import React from "react";
import styled from "../Banner/Banner.module.scss";
import png1 from "../../../Assets/banner-1.png";
import png2 from "../../../Assets/banner-2.png";
import png3 from "../../../Assets/banner-3.png";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineReload } from "react-icons/ai";
import { BsFileLock2 } from "react-icons/bs";
import { BsTrophy } from "react-icons/bs";
const Banner = () => {
  return (
    <section className={styled.banner}>
      <div className="container">
        <div className="row my-5 ">
          <div className={styled.banner_left}>
            <div className="col-7 g-5  ">
              <img src={png1} alt="" />
            </div>
            <div className="col-5 g-5 ">
              <div className={styled.banner_right}>
                <img src={png2} alt="" />
                <img src={png3} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className={styled.item_wrap}>
            <div className="col-3">
              <div className={styled.item}>
                <BsCart3 />
                <div className={styled.item_text}>
                  <h4>Free Shipping</h4>
                  <p>When ordering over $100</p>
                </div>
              </div>
            </div>
            <div className="col-3  ">
              <div className={styled.item}>
                <AiOutlineReload />
                <div className={styled.item_text}>
                  <h4>Free Return</h4>
                  <p>Get Return within 30 days</p>
                </div>
              </div>
            </div>
            <div className="col-3 ">
              <div className={styled.item}>
                <BsFileLock2 />
                <div className={styled.item_text}>
                  <h4>Secure Payment</h4>
                  <p>100% Secure Online Payment</p>
                </div>
              </div>
            </div>
            <div className="col-3 ">
              <div className={styled.item}>
                <BsTrophy />
                <div className={styled.item_text}>
                  <h4>Best Quality</h4>
                  <p>Original Product Guarenteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
