import React, { useState } from "react";
import "./services.css";
const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Why Ivy Wallet ?</h2>
            <span className="section__subtitle">Reasons to choose Ivy Wallet</span>
            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">
                            <span className="red">Free</span> and  <br /> <span className="red">Open Source</span>
                        </h3>
                    </div>
                    <span
                        className="services__button" onClick={() => {
                            toggleTab(1);
                        }}
                    >
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div
                        className={
                            toggleState === 1
                                ? "services__modal active-modal"
                                : "services__modal"
                        }
                    >
                        <div className="services__modal-content">
                            <i
                                onClick={() => toggleTab(0)}
                                className="uil uil-times services__modal-close"
                            ></i>

                            <h3 className="services__modal-title">Free and Open source</h3>
                            <p className="services__modal-description">
                                We believe that people (not only corporations) can create innovative,
                                open-source, and free software that can make the world a better place.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Completely Free</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Completely Open Source</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Community Driven Project</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow  services__icon"></i>
                        <h3 className="services__title">
                            <span className="red">   Awesome UI </span> <br />  and<span className="red"> Ease of use </span>
                        </h3>
                    </div>
                    <span
                        onClick={() => {
                            toggleTab(2);
                        }}
                        className="services__button"
                    >
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div
                        className={
                            toggleState === 2
                                ? "services__modal active-modal"
                                : "services__modal"
                        }
                    >
                        <div className="services__modal-content">
                            <i
                                onClick={() => toggleTab(0)}
                                className="uil uil-times services__modal-close"
                            ></i>

                            <h3 className="services__modal-title">Projects</h3>
                            <p className="services__modal-description">
                                I have been managing certain projects{" "}
                                {/* <a href="https://everyotaku.blogspot.com/">here</a>. */}
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Manager of Project MIUISR.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Contributer in Ivy-Wallet.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow  services__icon"></i>
                        <h3 className="services__title">
                            <span className="red">  Backup Feature </span><br /> Using Github.
                        </h3>
                    </div>
                    <span
                        onClick={() => {
                            toggleTab(3);
                        }}
                        className="services__button"
                    >
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div
                        className={
                            toggleState === 3
                                ? "services__modal active-modal"
                                : "services__modal"
                        }
                    >
                        <div className="services__modal-content">
                            <i
                                onClick={() => toggleTab(0)}
                                className="uil uil-times services__modal-close"
                            ></i>

                            <h3 className="services__modal-title"> <span className="red"> Backup Feature</span> using Github</h3>
                            <p className="services__modal-description">
                                I have consistently been a leader in various aspects of my life, from school
                                projects to Open Source Softwares, few of which are listed below.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I've Been School Captain for 2 years</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I've Mentored Student's Council for more than 3 Years.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Lead Project Manager in cloud Department for Project MIUISR.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lead Web Manager of Team SR.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Services;
