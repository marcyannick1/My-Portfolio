import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.scss";

class Nav extends Component {
    render() {
        function navVisible() {
            const nav = document.querySelector("nav");
            const openBtn = document.querySelector(".fa-bars");
            const closeBtn = document.querySelector(".fa-xmark");
            nav.style.display = "flex";
            closeBtn.classList.remove("hidden");
            openBtn.classList.add("hidden");
        }
        function navHidden() {
            const nav = document.querySelector("nav");
            const openBtn = document.querySelector(".fa-bars");
            const closeBtn = document.querySelector(".fa-xmark");
            nav.style.display = "none";
            closeBtn.classList.add("hidden");
            openBtn.classList.remove("hidden");
        }
        function stickersHidden() {
            const stickerSmile = document.querySelector(".stickersSmile");
            const stickerWink = document.querySelector(".stickersWink");
            stickerSmile.classList.add("hidden");
            stickerWink.classList.remove("hidden");
        }
        function stickersVisible() {
            const stickerSmile = document.querySelector(".stickersSmile");
            const stickerWink = document.querySelector(".stickersWink");
            stickerSmile.classList.remove("hidden");
            stickerWink.classList.add("hidden");
        }
        return (
            <React.Fragment>
                <div className="menu shadow">
                    <div className="stickers">
                        <NavLink to="/">
                            <img
                                src="images/Stickers 2.png"
                                alt=""
                                className="stickersSmile"
                                onMouseEnter={stickersHidden}
                            />
                            <img
                                src="images/Stickers 3.png"
                                alt=""
                                className="stickersWink hidden"
                                onMouseLeave={stickersVisible}
                            />
                        </NavLink>
                    </div>

                    <i
                        className="fa-solid fa-bars mouseover"
                        onClick={navVisible}
                    ></i>
                    <i
                        className="fa-solid fa-xmark mouseover hidden"
                        onClick={navHidden}
                    ></i>
                </div>
                <nav>
                    <ul>
                        <NavLink to="/">
                            <li className="mouseover">
                                <i className="fa-solid fa-house-user"></i>
                                Acceuil
                            </li>
                        </NavLink>
                        <NavLink to="/About">
                            <li className="mouseover">
                                <i className="fa-solid fa-user"></i>A propos
                            </li>
                        </NavLink>
                        <NavLink to="/Portfolio">
                            <li className="mouseover">
                                <i className="fa-solid fa-laptop-code"></i>Mon
                                portfolio
                            </li>
                        </NavLink>
                        <NavLink to="/Contact">
                            <li className="mouseover">
                                <i className="fa-solid fa-address-card"></i>
                                Contact
                            </li>
                        </NavLink>
                    </ul>
                </nav>
            </React.Fragment>
        );
    }
}

export default Nav;
