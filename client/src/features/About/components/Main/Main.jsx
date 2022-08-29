import React from "react";
import { FaHome } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AboutImg } from "../../assets";
import { useTranslation } from "react-i18next";

import "./Main.scss";

const Main = () => {
  const { t } = useTranslation();

  return (
    <div className="about__main">
      <div className="container">
        <div className="header__navbar--layout">
          <div className="navbar__icon">
            <FaHome />
          </div>
          <ul className="navbar__menu">
            <li className="menu__item">
              <Link to="/" className="item__link">
                Головна
              </Link>
            </li>
            <li className="menu__item menu__item--active">
              <span className="item_arrow">
                <HiArrowRight />
              </span>
              <Link to="/about" className="item__link">
                Про мене
              </Link>
            </li>
          </ul>
        </div>
        <div className="main__content">
          <div className="header__banner">
            <h1 className="banner__text">about</h1>
          </div>
          <div className="content__left">
            <h1 className="main__title">{t("about_title")}</h1>
            <p className="left__text">{t("about_main_text1")}</p>
            <p className="left__text">{t("about_main_text2")}</p>
            <p className="left__text">
              {t("about_main_text3")}
              <span className="text--outlined">
                {" "}
                {t("about_main_text3_outlined")}
              </span>
            </p>
          </div>
          <div className="content__right">
            <div className="right__img">
              <img src={AboutImg} alt="about-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
