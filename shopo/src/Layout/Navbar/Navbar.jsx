import React from "react";
import { Link } from "react-router-dom";
import router from "../../MockData/router";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import styled from "../Navbar/Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styled.navbar}>
      <div className="container">
        <div className="row">
          <div className="col-4 m-0 p-0">
            <div className={styled.logo}>
              <img
                src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                alt=""
              />
            </div>
          </div>

          <div className="col-8 m-0 p-0">
            <div className={styled.menu}>
              <ul>
                {router &&
                  router.map((router) => (
                    <li>
                      <Link to={router.path}>
                        {router.name} <BsChevronDown />{" "}
                      </Link>
                    </li>
                  ))}
              </ul>

              <button>
                Become a seller <BsChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
