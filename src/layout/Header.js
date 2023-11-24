import React, { useEffect } from 'react';

function Header(props) {
    const { } = props


    return (
        <>
            <div className="header_style_wrapper scroll_up" data-st={0} data-lastscrolltop={0}>
                {/* End top bar */}
                <div className="top_bar scroll_up hasbg">
                    <div className="standard_wrapper">
                        {/* Begin logo */}
                        <div id="logo_wrapper">
                            <div id="logo_normal" className="logo_container">
                                <div className="logo_align">
                                    <a id="custom_logo" className="logo_wrapper hidden" href="https://themes.themegoods.com/grandtour/demo/" style={{ marginTop: '0px' }}>
                                        <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x.png" alt="" width={92} height={22} data-lazy-src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x.png" data-ll-status="loaded" className="entered lazyloaded" /><noscript>&lt;img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x.png" alt="" width="92" height="22"/&gt;</noscript>
                                    </a>
                                </div>
                            </div>
                            <div id="logo_transparent" className="logo_container">
                                <div className="logo_align">
                                    <a id="custom_logo_transparent" className="logo_wrapper default" href="https://themes.themegoods.com/grandtour/demo/" style={{ marginTop: '0px' }}>
                                        <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x_white.png" alt="" width={92} height={22} data-lazy-src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x_white.png" data-ll-status="loaded" className="entered lazyloaded" /><noscript>&lt;img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x_white.png" alt="" width="92" height="22"/&gt;</noscript>
                                    </a>
                                </div>
                            </div>
                            {/* End logo */}
                            <div id="menu_wrapper">
                                <div id="nav_wrapper">
                                    <div className="nav_wrapper_inner">
                                        <div id="menu_border_wrapper">
                                            <div className="menu-main-menu-container"><ul id="main_menu" className="nav"><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home current-menu-ancestor current-menu-parent menu-item-has-children arrow menu-item-11"><a href="https://themes.themegoods.com/grandtour/demo/" style={{ paddingTop: '26px', paddingBottom: '26px' }}>Home</a>
                                                <ul className="sub-menu">
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-3125"><a href="https://themes.themegoods.com/grandtour/demo/">Home 1 – Background Image</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-3119 current_page_item menu-item-3124"><a href="https://themes.themegoods.com/grandtour/demo/home-2/" aria-current="page">Home 2 – Youtube Video</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3148"><a href="https://themes.themegoods.com/grandtour/demo/home-3-google-inspired/">Home 3 – Google Inspired</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3152"><a href="https://themes.themegoods.com/grandtour/demo/home-4-travel-site/">Home 4 – Travel Site</a></li>
                                                </ul>
                                            </li>
                                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children arrow menu-item-12"><a href="#" style={{ paddingTop: '26px', paddingBottom: '26px' }}>Tours</a>
                                                    <ul className="sub-menu">
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children arrow menu-item-198"><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-3-columns-classic/">Tour Classic Fullwidth</a>
                                                            <ul className="sub-menu">
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-213"><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-2-columns-classic/">2 Columns</a></li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-199"><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-3-columns-classic/">3 Columns</a></li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-210"><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-4-columns-classic/">4 Columns</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children arrow menu-item-230"><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-2-columns-classic-right-sidebar/">Tour Classic Sidebar</a>
                                                            <ul className="sub-menu">
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-231"><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-2-columns-classic-right-sidebar/">Right Sidebar</a></li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-234"><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-2-columns-classic-left-sidebar/">Left Sidebar</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children arrow menu-item-237"><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-3-columns-grid/">Tour Grid Fullwidth</a>
                                                            <ul className="sub-menu">
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-241"><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-2-columns-grid/">2 Columns</a></li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-238"><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-3-columns-grid/">3 Columns</a></li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-244"><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-4-columns-grid/">4 Columns</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children arrow menu-item-247"><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-grid-right-sidebar/">Tour Grid Sidebar</a>
                                                            <ul className="sub-menu">
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-248"><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-grid-right-sidebar/">Right Sidebar</a></li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-253"><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-grid-left-sidebar/">Left Sidebar</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children arrow menu-item-256"><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-list-right-sidebar/">Tour List Sidebar</a>
                                                            <ul className="sub-menu">
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-257"><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-list-right-sidebar/">Right Sidebar</a></li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-260"><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-list-left-sidebar/">Left Sidebar</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children arrow menu-item-261"><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-3-columns-grid/">Tour Header Type</a>
                                                            <ul className="sub-menu">
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-262"><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-3-columns-grid/">Featured Image</a></li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-265"><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-3-columns-video-header/">Video</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children arrow menu-item-3477"><a href="#">Tour Categories</a>
                                                            <ul className="sub-menu">
                                                                <li className="menu-item menu-item-type-taxonomy menu-item-object-tourcat menu-item-3478"><a href="https://themes.themegoods.com/grandtour/demo/tourcat/rural/">Rural</a></li>
                                                                <li className="menu-item menu-item-type-taxonomy menu-item-object-tourcat menu-item-3480"><a href="https://themes.themegoods.com/grandtour/demo/tourcat/snow-ice/">Snow &amp; Ice</a></li>
                                                                <li className="menu-item menu-item-type-taxonomy menu-item-object-tourcat menu-item-3481"><a href="https://themes.themegoods.com/grandtour/demo/tourcat/wildlife/">Wildlife</a></li>
                                                                <li className="menu-item menu-item-type-taxonomy menu-item-object-tourcat menu-item-3479"><a href="https://themes.themegoods.com/grandtour/demo/tourcat/mountain/">Mountain</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-tour menu-item-has-children arrow menu-item-200"><a href="https://themes.themegoods.com/grandtour/demo/tour/the-new-california/" style={{ paddingTop: '26px', paddingBottom: '26px' }}>Booking</a>
                                                    <ul className="sub-menu">
                                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children arrow menu-item-3509"><a href="#">Online Payment for Booking</a>
                                                            <ul className="sub-menu">
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-tour menu-item-3515"><a href="https://themes.themegoods.com/grandtour/demo/tour/grand-switzerland/">Variable Tour Pricing</a></li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-tour menu-item-204"><a href="https://themes.themegoods.com/grandtour/demo/tour/swiss-alps-trip/">Simple Tour Pricing</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children arrow menu-item-3507"><a href="#">Custom Booking Form</a>
                                                            <ul className="sub-menu">
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-tour menu-item-202"><a href="https://themes.themegoods.com/grandtour/demo/tour/the-new-california/">Booking Form + Sub Tour Date</a></li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-tour menu-item-314"><a href="https://themes.themegoods.com/grandtour/demo/tour/niko-trip/">Booking Form + Custom Date</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children arrow menu-item-3521"><a href="#">Tour Durations</a>
                                                            <ul className="sub-menu">
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-tour menu-item-3522"><a href="https://themes.themegoods.com/grandtour/demo/tour/hong-kong/">Single Day Tour</a></li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-tour menu-item-3523"><a href="https://themes.themegoods.com/grandtour/demo/tour/grand-switzerland/">Multiple Days Tour</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-tour menu-item-276"><a href="https://themes.themegoods.com/grandtour/demo/tour/5-lake-of-fuji-san/">Custom Booking URL for Affiliate Tour</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-tour menu-item-3624"><a href="https://themes.themegoods.com/grandtour/demo/tour/exclusive-prague-trip/">Custom Booking using custom HTML &amp; Shortcode</a></li>
                                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children arrow menu-item-3508"><a href="#">Header Options</a>
                                                            <ul className="sub-menu">
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-tour menu-item-205"><a href="https://themes.themegoods.com/grandtour/demo/tour/french-autumn/">Standard Background Header</a></li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-tour menu-item-201"><a href="https://themes.themegoods.com/grandtour/demo/tour/great-britain-travel/">Video Background Header</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children arrow menu-item-3620"><a href="#">Layout Options</a>
                                                            <ul className="sub-menu">
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-tour menu-item-3621"><a href="https://themes.themegoods.com/grandtour/demo/tour/colorful-singapore/">With Sidebar</a></li>
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-tour menu-item-3623"><a href="https://themes.themegoods.com/grandtour/demo/tour/discover-japan/">Fullwidth</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children arrow menu-item-13"><a href="#" style={{ paddingTop: '26px', paddingBottom: '26px' }}>Destinations</a>
                                                    <ul className="sub-menu">
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-299"><a href="https://themes.themegoods.com/grandtour/demo/destination-fullwidth/">Destination Fullwidth</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-311"><a href="https://themes.themegoods.com/grandtour/demo/destination-video-header/">Destination + Video Header</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-303"><a href="https://themes.themegoods.com/grandtour/demo/destination-right-sidebar/">Destination Right Sidebar</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-307"><a href="https://themes.themegoods.com/grandtour/demo/destination-left-sidebar/">Destination Left Sidebar</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-destination menu-item-286"><a href="https://themes.themegoods.com/grandtour/demo/destination/venice/">Single Destination</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-destination menu-item-283"><a href="https://themes.themegoods.com/grandtour/demo/destination/paris/">Single Destination + Video</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children arrow menu-item-14"><a href="#" style={{ paddingTop: '26px', paddingBottom: '26px' }}>Pages</a>
                                                    <ul className="sub-menu">
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2468"><a href="https://themes.themegoods.com/grandtour/demo/about-us/">About Us</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3093"><a href="https://themes.themegoods.com/grandtour/demo/contact-us/">Contact Us</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-323"><a href="https://themes.themegoods.com/grandtour/demo/faqs/">FAQs</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-galleries menu-item-313"><a href="https://themes.themegoods.com/grandtour/demo/galleries/gallery/">Gallery</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2456"><a href="https://themes.themegoods.com/grandtour/demo/page-fullwidth/">Page Fullwidth</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2460"><a href="https://themes.themegoods.com/grandtour/demo/page-video-header/">Page + Video Background Header</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2455"><a href="https://themes.themegoods.com/grandtour/demo/page-right-sidebar/">Page Right Sidebar</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2454"><a href="https://themes.themegoods.com/grandtour/demo/page-left-sidebar/">Page Left Sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children arrow menu-item-15"><a href="#" style={{ paddingTop: '26px', paddingBottom: '26px' }}>Blog</a>
                                                    <ul className="sub-menu">
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-94"><a href="https://themes.themegoods.com/grandtour/demo/blog/blog-right-sidebar/">Blog Right Sidebar</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-98"><a href="https://themes.themegoods.com/grandtour/demo/blog/blog-left-sidebar/">Blog Left Sidebar</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-102"><a href="https://themes.themegoods.com/grandtour/demo/blog/blog-fullwidth/">Blog Fullwidth</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-106"><a href="https://themes.themegoods.com/grandtour/demo/blog/blog-grid-right-sidebar/">Blog Grid Right Sidebar</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-110"><a href="https://themes.themegoods.com/grandtour/demo/blog/blog-grid-left-sidebar/">Blog Grid Left Sidebar</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-114"><a href="https://themes.themegoods.com/grandtour/demo/blog/blog-grid-fullwidth/">Blog Grid Fullwidth</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-120"><a href="https://themes.themegoods.com/grandtour/demo/blog/blog-full-grid-right-sidebar/">Blog Full + Grid Right Sidebar</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-124"><a href="https://themes.themegoods.com/grandtour/demo/blog/blog-full-grid-left-sidebar/">Blog Full + Grid Left Sidebar</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-128"><a href="https://themes.themegoods.com/grandtour/demo/blog/blog-full-grid-fullwidth/">Blog Full + Grid Fullwidth</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children arrow menu-item-16"><a href="#" style={{ paddingTop: '26px', paddingBottom: '26px' }}>Shortcodes</a>
                                                    <ul className="sub-menu">
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-342"><a href="https://themes.themegoods.com/grandtour/demo/shortcodes/accordion-toggles/">Accordion &amp; Toggles</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-348"><a href="https://themes.themegoods.com/grandtour/demo/shortcodes/alert-boxes/">Alert Boxes</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-353"><a href="https://themes.themegoods.com/grandtour/demo/shortcodes/animated-content/">Animated Content</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-360"><a href="https://themes.themegoods.com/grandtour/demo/shortcodes/buttons-social-icons/">Buttons &amp; Social Icons</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-366"><a href="https://themes.themegoods.com/grandtour/demo/shortcodes/columns/">Columns</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-376"><a href="https://themes.themegoods.com/grandtour/demo/shortcodes/google-maps/">Google Maps</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-381"><a href="https://themes.themegoods.com/grandtour/demo/shortcodes/image-frame-animation/">Image Frame &amp; Animation</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-389"><a href="https://themes.themegoods.com/grandtour/demo/shortcodes/image-teasers/">Image Teasers</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-394"><a href="https://themes.themegoods.com/grandtour/demo/shortcodes/pricing-tables/">Pricing Tables</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2421"><a href="https://themes.themegoods.com/grandtour/demo/shortcodes/tabs/">Tabs</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children arrow menu-item-2442"><a href="https://themes.themegoods.com/grandtour/demo/shop/" style={{ paddingTop: '26px', paddingBottom: '26px' }}>Shop</a>
                                                    <ul className="sub-menu">
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2443"><a href="https://themes.themegoods.com/grandtour/demo/shop/">Shop Fullwidth</a></li>
                                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2444"><a href="https://themes.themegoods.com/grandtour/demo/shop/?sidebar=1">Shop Sidebar</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-product menu-item-2445"><a href="https://themes.themegoods.com/grandtour/demo/shop/beach-shoe/">Single Product Fullwidth</a></li>
                                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2462"><a href="https://themes.themegoods.com/grandtour/demo/shop/safety-set/?sidebar=1">Single Product With Sidebar</a></li>
                                                    </ul>
                                                </li>
                                            </ul></div>	        		</div>
                                    </div>
                                    {/* Begin right corner buttons */}
                                    <div id="logo_right_button">
                                        {/* Begin side menu */}
                                        <a href="javascript:;" id="mobile_nav_icon"><span className="ti-menu" /></a>
                                        {/* End side menu */}
                                        <div className="header_cart_wrapper">
                                            <div className="cart_count">0</div>
                                            <a href="https://themes.themegoods.com/grandtour/demo/cart/" title="View Cart"><span className="ti-shopping-cart" /></a>
                                        </div>
                                    </div>
                                    {/* End right corner buttons */}
                                </div>
                                {/* End main nav */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Header