import React from 'react'
// import AboutImg from '../../assets/about.jpg'
import './contact.css'

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in Touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                {/* <img src={AboutImg} alt="" className="about__img" />  */}

                <div className="contact__button">
                    <a href="https://github.com/Ivy-Apps/ivy-wallet/" className="button button--flex" target="_blank" rel="noopener noreferrer">
                        <i class="uil uil-github contact__icon"></i>Github</a>
                    <a href="https://t.me/+ETavgioAvWg4NThk" className="button button--flex" target="_blank" rel="noopener noreferrer">
                        <i class="uil uil-telegram contact__icon"></i>Telegram</a>
                    {/* <a href="https://instagram.com/me_adx" className="button button--flex" target="_blank" rel="noopener noreferrer">
                        <i class="uil uil-instagram contact__icon"></i>Instagram</a> */}
                    <a href="mailto:me@aditya.tk" className="button button--flex" target="_blank" rel="noopener noreferrer">
                        <i class="uil uil-envelope contact__icon"></i>Email</a>
                </div>

            </div>
        </section>
    )
}

export default Contact