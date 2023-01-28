import React from "react";
import { Feature } from "../../MockData/FooterMock";
import { General } from "../../MockData/FooterMock";
import { Helpful } from "../../MockData/FooterMock";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import styled from "../Footer/Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={`row ${styled.foot}`}>
          <div className="col-12">
            <div className={styled.logo}>
              <img
                src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                alt=""
              />
            </div>
          </div>
          <div className="col-12">
            <div className={`row ${styled.logo}`}>
              <div className="col-3">
                <h5>About us</h5>
                <p>
                  We know there are a lot of threa developers our but we pride
                  into a firm in the industry.
                </p>
              </div>
              <div className="col-3">
                <h5>Feature</h5>

                <ul>
                  {Feature &&
                    Feature.map((element) => (
                      <li key={`footer_id${element.id}`}>{element.name}</li>
                    ))}
                </ul>
              </div>
              <div className="col-3">
                <h5>General</h5>

                <ul>
                  {General &&
                    General.map((element) => (
                      <li key={`footer_id${element.id}`}>{element.name}</li>
                    ))}
                </ul>
              </div>
              <div className="col-3">
                <h5>Helpful</h5>

                <ul>
                  {Helpful &&
                    Helpful.map((element) => (
                      <li key={`footer_id${element.id}`}>{element.name}</li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className={`row ${styled.icons}`}>
              <div className="col-6">
                <ul>
                  <li>
                    {" "}
                    <BsInstagram />{" "}
                  </li>
                  <li>
                    <BsFacebook />
                  </li>
                  <li>
                    <BsYoutube />
                  </li>
                  <li>
                    ©2022 <span>Quomodosoft</span> All rights reserved
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <div className={styled.media}>
                  <img
                    src="https://www.citypng.com/public/uploads/preview/-11597193844xtj2mnv37b.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
