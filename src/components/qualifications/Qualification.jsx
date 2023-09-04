import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    {/* Education Section */}

                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">College</h3>
                                <span className="qualification__subtitle">In Progess</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2023 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/*  */}

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Grade 11 - 12</h3>
                                <span className="qualification__subtitle">FIITJEE Ltd.</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2021 - 2023
                                </div>
                            </div>
                        </div>

                        {/*  */}
                        {/*  */}

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Grade 1 - 10</h3>
                                <span className="qualification__subtitle">Infant Jesus School</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2011 - 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/*  */}

                        {/* <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">UX Expert</h3>
                                <span className="qualification__subtitle">Spain Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2017 - 2018
                                </div>
                            </div>
                        </div> */}

                    </div>

                    {/* =====================Section Divider ===================== */}

                    {/* Experience Section */}

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Project Manager</h3>
                                <span className="qualification__subtitle">MIUISR</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2020 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/*  */}

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Contributer</h3>
                                <span className="qualification__subtitle">Ivy Wallet</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2023
                                </div>
                            </div>
                        </div>

                        {/*  */}
                        {/*  */}

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Student's Council</h3>
                                <span className="qualification__subtitle">School Captain @ IJS</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2018 - 2020
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section >
    )
}

export default Qualification