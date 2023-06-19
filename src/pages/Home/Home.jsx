import React, { useEffect, useRef, useState } from 'react'
import './Home.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from 'react-router-dom';

export default function Home() {
    const isMobile = window.outerWidth < 800

    const [showMenu, setShowMenu] = useState(!isMobile)
    const [showVideo, setShowVideo] = useState(false)
    const [scrollTopShow, setScrollTopShow] = useState(false)
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        function onScroll() {
            setScrollTop(window.pageYOffset)
            if (window.pageYOffset > 500) {
                setScrollTopShow(true)
            } else {
                setScrollTopShow(false)
            }

        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop])

    const slider = useRef(null)
    const blockToScroll = useRef(null)
    const parts = useRef(null)
    const gallery = useRef(null)
    const contacts = useRef(null)

    const settings = {
        customPaging: function (i) {
            return (
                <div class="dot"></div>
            );
        },
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        arrows: false,

    };

    const settings2 = {
        infinite: true,
        // slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,

        customPaging: function (slider, i) {
            return <div class="dot"></div>;
        },
        // centerPadding: 0,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },

            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1008,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 800,
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        ]
    }

    const scroll = (e, block) => {
        e.preventDefault()
        block.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (

        <div className='home-wrapper'>

            {scrollTopShow && (
                <div style={{ position: 'fixed', fontSize: '20px', bottom: '100px', right: '100px' }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    scroll top
                </div>
            )}

            <header className="header" >
                <div className="support">
                    <h3> ЩОБ ПІДТРИМАТИ АРМІЮ - ТИСНИ НА СЕРДЕЧКО <span> → </span></h3><span>
                        <a href="https://savelife.in.ua/donate/#donate-army-card-monthly"><img
                            src="./assets/icons/heart-7039299.svg" alt="heart" /></a></span>
                </div>

                <div className="container">
                    <nav className="navigation">
                        <a
                            href="https://uk.wikipedia.org/wiki/14-%D1%82%D0%B0_%D0%BE%D0%BA%D1%80%D0%B5%D0%BC%D0%B0_%D0%BC%D0%B5%D1%85%D0%B0%D0%BD%D1%96%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B0_%D0%B1%D1%80%D0%B8%D0%B3%D0%B0%D0%B4%D0%B0_(%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0)"><img
                                className="navigation__logo" src="./assets/icons/логотип.png" alt="logo" /></a>

                        <div className='burger' onClick={() => setShowMenu(!showMenu)}>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>

                        {showMenu && (
                            <>
                                <ul className="navigation__menu">
                                    <li><a href="#" className="nav-link" onClick={(e) => scroll(e, blockToScroll)}>АВТОМОБІЛІ</a></li>
                                    <li><a href="#" className="nav-link" onClick={(e) => scroll(e, parts)}>ЗАПЧАСТИНИ</a></li>
                                    <li><NavLink to="/calculate" className="nav-link">РОЗРАХУНOК (Л, КМ)</NavLink></li>
                                    <li><a href="#" className="nav-link" onClick={(e) => scroll(e, gallery)}>ГАЛЕРЕЯ</a></li>
                                    <li><a href="#" className="nav-link" onClick={(e) => scroll(e, contacts)}>КОНТАКТИ</a></li>
                                </ul>

                                <div className="social">
                                    <a href="https://www.facebook.com/14ombr"><svg width="60" height="60" viewBox="0 0 40 40"
                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M23.7188 21H21.375V28H18.25V21H15.7188V18.0938H18.25V15.9062C18.25 15.0729 18.4062 14.3646 18.7188 13.7812C19.0312 13.1979 19.4688 12.7604 20.0312 12.4688C20.6146 12.1562 21.2812 12 22.0312 12C22.3646 12 22.7188 12.0208 23.0938 12.0625C23.4688 12.0833 23.7604 12.1146 23.9688 12.1562L24.2812 12.1875V14.6562H23.0312C22.4479 14.6562 22.0208 14.8125 21.75 15.125C21.5 15.4167 21.375 15.7812 21.375 16.2188V18.0938H24.1562L23.7188 21Z"
                                            fill="white" />
                                        <circle opacity="0.4" cx="20" cy="20" r="19.5" stroke="white" />
                                    </svg></a>
                                    <a href="https://www.instagram.com/14ombr/"><svg width="60" height="60" viewBox="0 0 40 40"
                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M17.4688 17.4688C18.1771 16.7604 19.0312 16.4062 20.0312 16.4062C21.0312 16.4062 21.875 16.7604 22.5625 17.4688C23.2708 18.1562 23.625 19 23.625 20C23.625 21 23.2708 21.8542 22.5625 22.5625C21.875 23.25 21.0312 23.5938 20.0312 23.5938C19.0312 23.5938 18.1771 23.25 17.4688 22.5625C16.7812 21.8542 16.4375 21 16.4375 20C16.4375 19 16.7812 18.1562 17.4688 17.4688ZM18.375 21.6562C18.8333 22.1146 19.3854 22.3438 20.0312 22.3438C20.6771 22.3438 21.2292 22.1146 21.6875 21.6562C22.1458 21.1979 22.375 20.6458 22.375 20C22.375 19.3542 22.1458 18.8021 21.6875 18.3438C21.2292 17.8854 20.6771 17.6562 20.0312 17.6562C19.3854 17.6562 18.8333 17.8854 18.375 18.3438C17.9167 18.8021 17.6875 19.3542 17.6875 20C17.6875 20.6458 17.9167 21.1979 18.375 21.6562ZM24.3438 15.6875C24.5104 15.8333 24.5938 16.0208 24.5938 16.25C24.5938 16.4792 24.5104 16.6771 24.3438 16.8438C24.1979 17.0104 24.0104 17.0938 23.7812 17.0938C23.5521 17.0938 23.3542 17.0104 23.1875 16.8438C23.0208 16.6771 22.9375 16.4792 22.9375 16.25C22.9375 16.0208 23.0208 15.8333 23.1875 15.6875C23.3542 15.5208 23.5521 15.4375 23.7812 15.4375C24.0104 15.4375 24.1979 15.5208 24.3438 15.6875ZM27 17.125C27.0208 17.6875 27.0312 18.6458 27.0312 20C27.0312 21.3542 27.0208 22.3125 27 22.875C26.9375 24.1458 26.5521 25.1354 25.8438 25.8438C25.1562 26.5312 24.1771 26.8958 22.9062 26.9375C22.3438 26.9792 21.3854 27 20.0312 27C18.6771 27 17.7188 26.9792 17.1562 26.9375C15.8854 26.875 14.9062 26.5 14.2188 25.8125C13.9479 25.5625 13.7292 25.2708 13.5625 24.9375C13.3958 24.6042 13.2708 24.2812 13.1875 23.9688C13.125 23.6562 13.0938 23.2917 13.0938 22.875C13.0521 22.3125 13.0312 21.3542 13.0312 20C13.0312 18.6458 13.0521 17.6771 13.0938 17.0938C13.1562 15.8438 13.5312 14.875 14.2188 14.1875C14.9062 13.4792 15.8854 13.0938 17.1562 13.0312C17.7188 13.0104 18.6771 13 20.0312 13C21.3854 13 22.3438 13.0104 22.9062 13.0312C24.1771 13.0938 25.1562 13.4792 25.8438 14.1875C26.5521 14.875 26.9375 15.8542 27 17.125ZM25.5 24.125C25.5625 23.9583 25.6146 23.75 25.6562 23.5C25.6979 23.2292 25.7292 22.9167 25.75 22.5625C25.7708 22.1875 25.7812 21.8854 25.7812 21.6562C25.7812 21.4271 25.7812 21.1042 25.7812 20.6875C25.7812 20.2708 25.7812 20.0417 25.7812 20C25.7812 19.9375 25.7812 19.7083 25.7812 19.3125C25.7812 18.8958 25.7812 18.5729 25.7812 18.3438C25.7812 18.1146 25.7708 17.8229 25.75 17.4688C25.7292 17.0938 25.6979 16.7812 25.6562 16.5312C25.6146 16.2604 25.5625 16.0417 25.5 15.875C25.25 15.2292 24.8021 14.7812 24.1562 14.5312C23.9896 14.4688 23.7708 14.4167 23.5 14.375C23.25 14.3333 22.9375 14.3021 22.5625 14.2812C22.2083 14.2604 21.9167 14.25 21.6875 14.25C21.4792 14.25 21.1562 14.25 20.7188 14.25C20.3021 14.25 20.0729 14.25 20.0312 14.25C19.9896 14.25 19.7604 14.25 19.3438 14.25C18.9271 14.25 18.6042 14.25 18.375 14.25C18.1458 14.25 17.8438 14.2604 17.4688 14.2812C17.1146 14.3021 16.8021 14.3333 16.5312 14.375C16.2812 14.4167 16.0729 14.4688 15.9062 14.5312C15.2604 14.7812 14.8125 15.2292 14.5625 15.875C14.5 16.0417 14.4479 16.2604 14.4062 16.5312C14.3646 16.7812 14.3333 17.0938 14.3125 17.4688C14.2917 17.8229 14.2812 18.1146 14.2812 18.3438C14.2812 18.5521 14.2812 18.875 14.2812 19.3125C14.2812 19.7292 14.2812 19.9583 14.2812 20C14.2812 20.0833 14.2812 20.2812 14.2812 20.5938C14.2812 20.8854 14.2812 21.1354 14.2812 21.3438C14.2812 21.5312 14.2812 21.7812 14.2812 22.0938C14.3021 22.4062 14.3229 22.6771 14.3438 22.9062C14.3646 23.1146 14.3958 23.3333 14.4375 23.5625C14.4792 23.7917 14.5208 23.9792 14.5625 24.125C14.8333 24.7708 15.2812 25.2188 15.9062 25.4688C16.0729 25.5312 16.2812 25.5833 16.5312 25.625C16.8021 25.6667 17.1146 25.6979 17.4688 25.7188C17.8438 25.7396 18.1354 25.75 18.3438 25.75C18.5729 25.75 18.8958 25.75 19.3125 25.75C19.75 25.75 19.9896 25.75 20.0312 25.75C20.0938 25.75 20.3229 25.75 20.7188 25.75C21.1354 25.75 21.4583 25.75 21.6875 25.75C21.9167 25.75 22.2083 25.7396 22.5625 25.7188C22.9375 25.6979 23.25 25.6667 23.5 25.625C23.7708 25.5833 23.9896 25.5312 24.1562 25.4688C24.8021 25.1979 25.25 24.75 25.5 24.125Z"
                                            fill="white" />
                                        <circle opacity="0.4" cx="20" cy="20" r="19.5" stroke="white" />
                                    </svg></a>
                                </div>
                            </>
                        )}

                    </nav>
                </div>

                {/* <!-- Slider --> */}

                <Slider {...settings} className="header-slides">
                    <div className="header-slides-1">
                        <div className="container">
                            <div className="heading-title">
                                <h1>РЕМБАТ</h1>
                                <h3>14 ОМБР</h3>
                                <h3>імені князя Романа Великого</h3>
                            </div>
                        </div>
                    </div>

                    <div className="header-slides-2">
                        <div className="container">
                            <div className="heading-title">
                                <h1>РЕМБАТ</h1>
                                <h3>14 ОМБР</h3>
                                <h3>імені князя Романа Великого</h3>
                            </div>
                        </div>
                    </div>

                    <div className="header-slides-3">
                        <div className="container">
                            <div className="heading-title">
                                <h1>РЕМБАТ</h1>
                                <h3>14 ОМБР</h3>
                                <h3>імені князя Романа Великого</h3>
                            </div>
                        </div>
                    </div>

                    <div className="header-slides-4">
                        <div className="container">
                            <div className="heading-title">
                                <h1>РЕМБАТ</h1>
                                <h3>14 ОМБР</h3>
                                <h3>імені князя Романа Великого</h3>
                            </div>
                        </div>
                    </div>

                    <div className="header-slides-5">
                        <div className="container">
                            <div className="heading-title">
                                <h1>РЕМБАТ</h1>
                                <h3>14 ОМБР</h3>
                                <h3>імені князя Романа Великого</h3>
                            </div>
                        </div>
                    </div>
                </Slider>
                <div className="arrow_block">
                    <div className="arrow" onClick={() => blockToScroll.current.scrollIntoView({ behavior: 'smooth' })}>
                        <img src="./assets/icons/Arrow.svg" alt="" />
                    </div>
                </div>
            </header>


            {/* <!-- CARS --> */}

            <section className="projects" id="prjcts" ref={blockToScroll}>
                <div className="title">
                    <hr />
                    <h2>ВАНТАЖНІ АВТОМОБІЛІ</h2>
                </div>

                <div className="proj-container">
                    <div className="project-1">
                        <div className="project-1__images">
                            <img className="project-1__bg-img" src="./assets/imgs/камуфляж.jpg" alt="background-img" />
                            <img className="project-1__img" src="./assets/imgs/960px-2S7_Pion_and_KrAZ-6446,_Kyiv_2018,_53.jpg"
                                alt="image" />
                        </div>
                        <div className="project-1__title">
                            <h4>сідловий тягач</h4>
                            <h2>КрАЗ-6446</h2>
                            <p>Призначений для перевезення різних вантажів у зчепі з напівпричепом та експлуатації по дорогах всіх
                                категорій і бездоріжжю.</p>
                            <form><button className="projects__btn" type="submit">ДЕТАЛЬНІШЕ</button></form><br />
                            <a className="projects__link" href="https://uk.wikipedia.org/wiki/КрАЗ-6446">
                                <span><img src="./assets/icons/location.svg" /></span>
                                Вікіпедія
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project-2">
                    <div className="project-2__title">
                        <h4>базова модель тягача</h4>
                        <h2>МАЗ-537</h2>
                        <p>Має дуже високі тягові якості, що дозволяє йому успішно буксирувати важкі причепи, в тому числі з
                            танками і балістичними ракетами.</p>
                        <form><button className="projects__btn" type="submit">ДЕТАЛЬНІШЕ</button></form><br />
                        <a className="projects__link" href="https://uk.wikipedia.org/wiki/МАЗ-537">
                            <span><img src="./assets/icons/location.svg" /></span>
                            Вікіпедія
                        </a>
                    </div>
                    <div className="project-2__images">
                        <img className="project-2__bg-img" src="./assets/imgs/камуфляж.jpg" alt="" />
                        <img className="project-2__img" src="./assets/imgs/640px-MAZ-537G_Hun_2010_1.jpg" alt="" />
                    </div>
                </div>
            </section >

            {/* <!-- Запчастини --> */}

            <section className="news" id="nws" ref={parts} >
                <div className="news__title">
                    <hr />
                    <h2>КАТАЛОГ ЗАПЧАСТИН</h2>
                </div>


                <div className="container" style={{ position: 'relative' }}>
                    {/* <div className="arrowLeft" onClick={() => slider?.current?.slickPrev()}><img src="./assets/icons/ArrowLeft.svg" /></div> */}
                    {/* <div className="arrowRight" onClick={() => slider?.current?.slickNext()}><img src="./assets/icons/ArrowRight.svg" /></div> */}

                    <Slider {...settings2} ref={slider} className="articles">

                        <div>
                            <article className="cards">
                                <img className='img-cards' src="./assets/imgs/моделька-1.jpg" alt="" />
                                <div className="cards__content">
                                    <h5>ЗАПЧАСТИНИ КУЗОВА І КАБІНИ: КрАЗ+МАЗ</h5>
                                    <p>Free directories: directories are perfect for customers that are searching for...</p>
                                </div>
                                <div>
                                    <button className="auto-shop" type="submit">ПЕРЕЙТИ ДО МАГАЗИНУ</button>
                                </div>
                            </article>
                        </div>

                        <div>
                            <article className="cards">
                                <img className='img-cards' src="./assets/imgs/двигун МАЗ.jpg" alt="" />
                                <div className="cards__content">
                                    <h5>ЗАПЧАСТИНИ ДВИГУНА: КрАЗ+МАЗ</h5>
                                    <p>Having a home based business is a wonderful asset to your life...</p>
                                </div>
                                <div>
                                    <a href='https://orbita-zip.com.ua/ua/g9492010-dvigatel-gruppa
'  > <button className="auto-shop" type="submit">ПЕРЕЙТИ ДО МАГАЗИНУ</button></a>
                                </div>
                            </article>
                        </div>

                        <div>
                            <article className="cards">
                                <img className='img-cards' src="./assets/imgs/деталі.webp" alt="" />
                                <div className="cards__content">
                                    <h5>ХОДОВА ЧАСТИНА (ПІДВІСКА): КрАЗ + МАЗ</h5>
                                    <p>There are many things that are important to catalog design...</p>
                                </div>
                                <div>
                                    <button className="auto-shop" type="submit">ПЕРЕЙТИ ДО МАГАЗИНУ</button>
                                </div>
                            </article>
                        </div>

                        <div>
                            <article className="cards">
                                <img className='img-cards' src="./assets/imgs/моделька-1.jpg" alt="" />
                                <div className="cards__content">
                                    <h5>ЗАПЧАСТИНИ КУЗОВА І КАБІНИ: КрАЗ+МАЗ</h5>
                                    <p>Free directories: directories are perfect for customers that are searching for...</p>
                                </div>
                                <div>
                                    <button className="auto-shop" type="submit">ПЕРЕЙТИ ДО МАГАЗИНУ</button>
                                </div>
                            </article>
                        </div>

                        <div>
                            <article className="cards">
                                <img className='img-cards' src="./assets/imgs/двигун МАЗ.jpg" alt="" />
                                <div className="cards__content">
                                    <h5>ЗАПЧАСТИНИ ДВИГУНА: КрАЗ+МАЗ</h5>
                                    <p>Having a home based business is a wonderful asset to your life...</p>
                                </div>
                                <div>
                                    <button className="auto-shop" type="submit">ПЕРЕЙТИ ДО МАГАЗИНУ</button>
                                </div>
                            </article>
                        </div>

                        <div>
                            <article className="cards">
                                <img className='img-cards' src="./assets/imgs/деталі.webp" alt="" />
                                <div className="cards__content">
                                    <h5>ХОДОВА ЧАСТИНА (ПІДВІСКА): КрАЗ + МАЗ</h5>
                                    <p>There are many things that are important to catalog design...</p>
                                </div>
                                <div>
                                    <button className="auto-shop" type="submit">ПЕРЕЙТИ ДО МАГАЗИНУ</button>
                                </div>
                            </article>
                        </div>
                    </Slider>
                </div>
            </section >


            <section className="gallery" id="gall" ref={gallery}>
                <div className="title">
                    <hr />
                    <h2>ГАЛЕРЕЯ</h2>
                </div>
                <div className="gallery__images">

                    <a data-fslightbox="second-lightbox" href="./assets/imgs/dog.jpg" alt="img">
                        <img className="img-1" src="./assets/imgs/dog.jpg" alt="img" />
                    </a>
                    <div className="gallery__four-photos">
                        <a data-fslightbox="second-lightbox" href="./assets/imgs/car.jpg">
                            <img className="img-2" src="./assets/imgs/car.jpg" alt="img" />
                        </a>
                        <a data-fslightbox="second-lightbox" href="./assets/imgs/galeryyyyyyyyy.jpg">
                            <img className="img-3" src="./assets/imgs/galeryyyyyyyyy.jpg" alt="img" />
                        </a>
                        <a data-fslightbox="second-lightbox" href="./assets/imgs/galeryyyyy.jpg">
                            <img className="img-4" src="./assets/imgs/galeryyyyy.jpg" alt="img" />
                        </a>
                        <a data-fslightbox="second-lightbox" href="./assets/imgs/galeryy.jpg">
                            <img className="img-5" src="./assets/imgs/galeryy.jpg" alt="img" />
                        </a>
                    </div>
                </div>
                <div className="gallery__button_container">
                    <button className="gallery__button" onClick={() => setShowVideo(!showVideo)}>ДИВИТИСЯ ВІДЕО</button>
                </div>
                {showVideo && (

                    <iframe className="video" id="vd"
                        src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F14ombr%2Fvideos%2F790751735985094%2F&show_text=false&width=560&t=0"
                        width="560" height="314" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameborder="0"
                        allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media;
                        picture-in-picture; web-share" allowFullScreen="true">
                    </iframe>
                )}

            </section>

            {/* CONTACTS */}

            <section className="contact" id="cntct" ref={contacts}>
                <div className='container'>
                    <footer className="footer">

                        <div className="footer-nav">
                            <div className="footer__logo">
                                <img className='footer__logo' src="./assets/icons/логотип.png" alt="logo" />
                            </div>
                            <div className="social">
                                <a href="https://www.facebook.com/14ombr"><svg width="60" height="60" viewBox="0 0 40 40"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M23.7188 21H21.375V28H18.25V21H15.7188V18.0938H18.25V15.9062C18.25 15.0729 18.4062 14.3646 18.7188 13.7812C19.0312 13.1979 19.4688 12.7604 20.0312 12.4688C20.6146 12.1562 21.2812 12 22.0312 12C22.3646 12 22.7188 12.0208 23.0938 12.0625C23.4688 12.0833 23.7604 12.1146 23.9688 12.1562L24.2812 12.1875V14.6562H23.0312C22.4479 14.6562 22.0208 14.8125 21.75 15.125C21.5 15.4167 21.375 15.7812 21.375 16.2188V18.0938H24.1562L23.7188 21Z"
                                        fill="white" />
                                    <circle opacity="0.4" cx="20" cy="20" r="19.5" stroke="white" />
                                </svg></a>
                                <a href="https://www.instagram.com/14ombr/"><svg width="60" height="60" viewBox="0 0 40 40"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17.4688 17.4688C18.1771 16.7604 19.0312 16.4062 20.0312 16.4062C21.0312 16.4062 21.875 16.7604 22.5625 17.4688C23.2708 18.1562 23.625 19 23.625 20C23.625 21 23.2708 21.8542 22.5625 22.5625C21.875 23.25 21.0312 23.5938 20.0312 23.5938C19.0312 23.5938 18.1771 23.25 17.4688 22.5625C16.7812 21.8542 16.4375 21 16.4375 20C16.4375 19 16.7812 18.1562 17.4688 17.4688ZM18.375 21.6562C18.8333 22.1146 19.3854 22.3438 20.0312 22.3438C20.6771 22.3438 21.2292 22.1146 21.6875 21.6562C22.1458 21.1979 22.375 20.6458 22.375 20C22.375 19.3542 22.1458 18.8021 21.6875 18.3438C21.2292 17.8854 20.6771 17.6562 20.0312 17.6562C19.3854 17.6562 18.8333 17.8854 18.375 18.3438C17.9167 18.8021 17.6875 19.3542 17.6875 20C17.6875 20.6458 17.9167 21.1979 18.375 21.6562ZM24.3438 15.6875C24.5104 15.8333 24.5938 16.0208 24.5938 16.25C24.5938 16.4792 24.5104 16.6771 24.3438 16.8438C24.1979 17.0104 24.0104 17.0938 23.7812 17.0938C23.5521 17.0938 23.3542 17.0104 23.1875 16.8438C23.0208 16.6771 22.9375 16.4792 22.9375 16.25C22.9375 16.0208 23.0208 15.8333 23.1875 15.6875C23.3542 15.5208 23.5521 15.4375 23.7812 15.4375C24.0104 15.4375 24.1979 15.5208 24.3438 15.6875ZM27 17.125C27.0208 17.6875 27.0312 18.6458 27.0312 20C27.0312 21.3542 27.0208 22.3125 27 22.875C26.9375 24.1458 26.5521 25.1354 25.8438 25.8438C25.1562 26.5312 24.1771 26.8958 22.9062 26.9375C22.3438 26.9792 21.3854 27 20.0312 27C18.6771 27 17.7188 26.9792 17.1562 26.9375C15.8854 26.875 14.9062 26.5 14.2188 25.8125C13.9479 25.5625 13.7292 25.2708 13.5625 24.9375C13.3958 24.6042 13.2708 24.2812 13.1875 23.9688C13.125 23.6562 13.0938 23.2917 13.0938 22.875C13.0521 22.3125 13.0312 21.3542 13.0312 20C13.0312 18.6458 13.0521 17.6771 13.0938 17.0938C13.1562 15.8438 13.5312 14.875 14.2188 14.1875C14.9062 13.4792 15.8854 13.0938 17.1562 13.0312C17.7188 13.0104 18.6771 13 20.0312 13C21.3854 13 22.3438 13.0104 22.9062 13.0312C24.1771 13.0938 25.1562 13.4792 25.8438 14.1875C26.5521 14.875 26.9375 15.8542 27 17.125ZM25.5 24.125C25.5625 23.9583 25.6146 23.75 25.6562 23.5C25.6979 23.2292 25.7292 22.9167 25.75 22.5625C25.7708 22.1875 25.7812 21.8854 25.7812 21.6562C25.7812 21.4271 25.7812 21.1042 25.7812 20.6875C25.7812 20.2708 25.7812 20.0417 25.7812 20C25.7812 19.9375 25.7812 19.7083 25.7812 19.3125C25.7812 18.8958 25.7812 18.5729 25.7812 18.3438C25.7812 18.1146 25.7708 17.8229 25.75 17.4688C25.7292 17.0938 25.6979 16.7812 25.6562 16.5312C25.6146 16.2604 25.5625 16.0417 25.5 15.875C25.25 15.2292 24.8021 14.7812 24.1562 14.5312C23.9896 14.4688 23.7708 14.4167 23.5 14.375C23.25 14.3333 22.9375 14.3021 22.5625 14.2812C22.2083 14.2604 21.9167 14.25 21.6875 14.25C21.4792 14.25 21.1562 14.25 20.7188 14.25C20.3021 14.25 20.0729 14.25 20.0312 14.25C19.9896 14.25 19.7604 14.25 19.3438 14.25C18.9271 14.25 18.6042 14.25 18.375 14.25C18.1458 14.25 17.8438 14.2604 17.4688 14.2812C17.1146 14.3021 16.8021 14.3333 16.5312 14.375C16.2812 14.4167 16.0729 14.4688 15.9062 14.5312C15.2604 14.7812 14.8125 15.2292 14.5625 15.875C14.5 16.0417 14.4479 16.2604 14.4062 16.5312C14.3646 16.7812 14.3333 17.0938 14.3125 17.4688C14.2917 17.8229 14.2812 18.1146 14.2812 18.3438C14.2812 18.5521 14.2812 18.875 14.2812 19.3125C14.2812 19.7292 14.2812 19.9583 14.2812 20C14.2812 20.0833 14.2812 20.2812 14.2812 20.5938C14.2812 20.8854 14.2812 21.1354 14.2812 21.3438C14.2812 21.5312 14.2812 21.7812 14.2812 22.0938C14.3021 22.4062 14.3229 22.6771 14.3438 22.9062C14.3646 23.1146 14.3958 23.3333 14.4375 23.5625C14.4792 23.7917 14.5208 23.9792 14.5625 24.125C14.8333 24.7708 15.2812 25.2188 15.9062 25.4688C16.0729 25.5312 16.2812 25.5833 16.5312 25.625C16.8021 25.6667 17.1146 25.6979 17.4688 25.7188C17.8438 25.7396 18.1354 25.75 18.3438 25.75C18.5729 25.75 18.8958 25.75 19.3125 25.75C19.75 25.75 19.9896 25.75 20.0312 25.75C20.0938 25.75 20.3229 25.75 20.7188 25.75C21.1354 25.75 21.4583 25.75 21.6875 25.75C21.9167 25.75 22.2083 25.7396 22.5625 25.7188C22.9375 25.6979 23.25 25.6667 23.5 25.625C23.7708 25.5833 23.9896 25.5312 24.1562 25.4688C24.8021 25.1979 25.25 24.75 25.5 24.125Z"
                                        fill="white" />
                                    <circle opacity="0.4" cx="20" cy="20" r="19.5" stroke="white" />
                                </svg></a>
                            </div>
                        </div>
                        <div className="footer-title">
                            <h1>РЕМБАТ</h1>
                            <h3>14 ОМБР</h3>
                            <h3>імені князя Романа Великого</h3>
                        </div>
                        <div className="form-items">
                            <div className="form-items__title">
                                <hr />
                                <h2>ЗВ'ЯЗАТИСЯ З БРИГАДОЮ</h2>
                            </div>

                            <div className="form-wrapper">
                                <div className="contacts-form">
                                    <p>
                                        <span></span>
                                        <a href="tel:+380683275259" className="contact-link">Кол-центр: (068)2341968</a><br />
                                    </p>
                                    <p>
                                        <span></span>
                                        <a href="tel:+380634353959" className="contact-link">Фінансова служба: (063)4353959</a><br />
                                    </p>
                                    <p>
                                        <span></span>
                                        <a href="mailto:volodymyrmuseum@gmail.com" className="contact-link">e-mail:
                                            volodymyrmuseum@gmail.com</a><br />
                                    </p>
                                    <p>
                                        <span></span>
                                        <a href="tel:+380996296476" className="contact-link">Робота зі ЗМІ: (099)6296476</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </footer>
                    <div className='year'>
                        <p>2023</p>
                    </div>
                </div>
            </section>
        </div >
    )
}
