
import React, { useEffect } from "react";

import { jarallax, jarallaxVideo } from "jarallax";
import "jarallax/dist/jarallax.min.css";

// Optional video extension
jarallaxVideo();

function HomeVideo() {

    useEffect(() => {
        jarallax(document.querySelectorAll(".jarallax"), {
            speed: 0.2,
            videoSrc: 'https://www.youtube.com/watch?v=JPe2mwq96cw'
        });
    }, [])

    return (
        <>
            <div className="ppb_wrapper d-none ">
                <div className="one withsmallpadding ppb_tour_search_youtube parallax withbg " data-jarallax-video="https://www.youtube.com/watch?v=JPe2mwq96cw" style={{ textAlign: 'center', height: '800px', color: '#ffffff' }} data-jarallax-original-styles="text-align:center;height:800px;color:#ffffff;">
                    <div className="overlay_background" style={{ background: 'rgba(0,0,0,0.3)' }} />
                    <div className="center_wrapper">
                        <div className="inner_content">
                            <div className="standard_wrapper">
                                <h2 className="ppb_title" style={{ color: '#ffffff' }}>Where do you want to go?</h2>
                                <div className="page_tagline" style={{ color: '#ffffff' }}>Trips, experiences, and places. All in one service.</div>
                                <form id="tour_search_form" className="tour_search_form" method="get" action="https://themes.themegoods.com/grandtour/demo/tours/tour-3-columns-grid/">
                                    <div className="tour_search_wrapper">
                                        <div className="one_fourth themeborder">
                                            <input id="keyword" name="keyword" type="text" autoComplete="off" placeholder="Destination, city" />
                                            <span className="ti-search" />
                                            <div id="autocomplete" className="autocomplete" data-mousedown="false" />
                                        </div>
                                        <div className="one_fourth themeborder">
                                            <select id="month" name="month">
                                                <option value>Any Month</option>
                                                <option value="january">January</option>
                                                <option value="february">February</option>
                                                <option value="march">March</option>
                                                <option value="april">April</option>
                                                <option value="may">May</option>
                                                <option value="june">June</option>
                                                <option value="july">July</option>
                                                <option value="august">August</option>
                                                <option value="september">September</option>
                                                <option value="october">October</option>
                                                <option value="november">November</option>
                                                <option value="december">December</option>
                                            </select>
                                            <span className="ti-calendar" />
                                        </div>
                                        <div className="one_fourth themeborder">
                                            <select id="sort_by" name="sort_by">
                                                <option value="date">Sort By Date</option>
                                                <option value="price_low">Price Low to High</option>
                                                <option value="price_high">Price High to Low</option>
                                                <option value="name">Sort By Name</option>
                                                <option value="popular">Sort By Popularity</option>
                                                <option value="review">Sort By Review Score</option>
                                            </select>
                                            <span className="ti-exchange-vertical" />
                                        </div>
                                        <div className="one_fourth last themeborder">
                                            <input id="tour_search_btn" type="submit" className="button" defaultValue="Search" />
                                        </div>
                                        <br className="clear" />
                                        <div className="tour_advance_search_wrapper">
                                            <div className="one_fourth themeborder">
                                                <select id="tourcat" name="tourcat">
                                                    <option value>All Categories</option>
                                                    <option value="mountain">Mountain</option>
                                                    <option value="rural">Rural</option>
                                                    <option value="snow-ice">Snow &amp; Ice</option>
                                                    <option value="wildlife">Wildlife</option>
                                                </select>
                                                <span className="ti-angle-down" />
                                            </div>
                                            <div className="one_fourth themeborder">
                                                <select id="destination_id" name="destination_id">
                                                    <option value>Any Destinations</option>
                                                    <option value={277}>Tokyo</option>
                                                    <option value={278}>Seoul</option>
                                                    <option value={279}>Paris</option>
                                                    <option value={284}>London</option>
                                                    <option value={285}>Venice</option>
                                                    <option value={287}>Miami</option>
                                                    <option value={289}>Rome</option>
                                                    <option value={270}>Prague</option>
                                                    <option value={291}>California</option>
                                                    <option value={292}>Kyoto</option>
                                                    <option value={293}>Hong Kong</option>
                                                    <option value={294}>Santorini</option>
                                                </select>
                                                <span className="ti-angle-down" />
                                            </div>
                                            <div className="one_fourth themeborder">
                                                <input id="budget" name="budget" type="text" placeholder="Max budget ex. 500" />
                                                <span>$</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tour_advance_search_wrapper_link">
                                        <a id="tour_advance_search_toggle" href="javascript:;" style={{ color: '#ffffff' }}>
                                            <span className="icon ti-angle-down" />Advanced Search </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div id="jarallax-container-0" style={{ position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%', overflow: 'hidden', zIndex: -100 }}>
                        <div style={{ backgroundPosition: '50% 50%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: 'url("https://img.youtube.com/vi/JPe2mwq96cw/maxresdefault.jpg")', position: 'fixed', top: '0px', left: '0px', width: '1424px', height: '896px', overflow: 'hidden', pointerEvents: 'none', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', willChange: 'transform, opacity', marginTop: '48px', transform: 'translate3d(0px, -446.5px, 0px)', display: 'none' }} />
                        <iframe id="VideoWorker-0" frameBorder={0} allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Spectacular Norway - from the air" width={640} height={360} src="https://www.youtube.com/embed/JPe2mwq96cw?autohide=1&rel=0&autoplay=0&playsinline=1&iv_load_policy=3&modestbranding=1&controls=0&showinfo=0&disablekb=1&enablejsapi=1&origin=https%3A%2F%2Fthemes.themegoods.com&widgetid=1" style={{ position: 'fixed', inset: '0px', width: '1592.89px', height: '1296px', maxWidth: 'none', maxHeight: 'none', margin: '-152px 0px 0px -84.4444px', zIndex: -1, transform: 'translate3d(0px, -48px, 0px)' }} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeVideo;
