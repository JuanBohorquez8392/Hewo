import React from 'react'
import SubHeader from '../Componentes/SubHeader'
import Footer from '../Componentes/Footer'
import $ from 'jquery'
import '../Styles/main.css'
import '../Styles/normalize.css'
import '../Styles/responsive.css'
import '../Styles/animate.css'
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaFacebookF, FaThumbsDown } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoGoogleplus} from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import imagenImg from '../images/700x475.png'
import imagenImg2 from '../images/200x175.png'
import imagenImg3 from '../images/647x898.png'

class Header extends React.Component {
    constructor(props){
        super(props) 
        this.state={
            canvas_toggled:false
        }
    }		
    onClickHandle= (event) => {
        
        if (this.state.canvas_toggled){ 
            this.setState({
                canvas_toggled:false
    
            })
        }
        else{
            this.setState({
                canvas_toggled:true
    
            })
        }
    } 
    render() {
        return (
            
            <div id="wrapper" className={this.state.canvas_toggled? "toggled":""}  >{/*Sidebar*/}
                <div id="sidebar-wrapper" >
                    <div className="sidebar-inner" >
                        <div className="off-canvas-close"><span><a href="">CLOSE</a></span></div>
                        <div className="widget-little-cover">
                            <div className="sidebar-widget">
                                <h4 class="widget-title"><span>Popular Articles</span></h4>
                                <ul id="sidebar-menu" className="menu">
                                    <li className="menu-item">
                                        <a href="#">Trending</a>
                                    </li>
                                    <li className="menu-item menu-item-has-children">
                                        <a href="#">Thinking</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item">
                                                <a href="#">Home &amp; Living</a>
                                            </li>
                                            <li className="menu-item menu-item-has-children">
                                                <a href="#">Lifestyle</a>
                                                <ul className="sub-menu">
                                                <li className="menu-item"><a href="#">Travel</a></li>
                                                <li className="menu-item"><a href="#">Inspirations</a></li>
                                                <li className="menu-item"><a href="#">Gardering</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-has-children">
                                                <a href="#">Inspirations</a>
                                            </li>
                                            <li className="menu-item menu-item-has-children">
                                                <a href="#">Gardering</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item menu-item-has-children"><a href ="#">Inspirations</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item"><a href="#">House & Living</a></li>
                                            <li className="menu-item"><a href="#">Travel</a></li>
                                        </ul>
                                        </li>
                                    <li className="menu-item"><a href="#">Contact</a></li>
                                </ul>
                            </div>
                            <div className="sidebar-widget">
                                <div className="widget-title-cover">
                                        <h4 className="widget-title"><span>Trending</span></h4>
                                        </div>
                                        <div className="latest_style_2">
                                        <div class="latest_style_2_item_first">							                                                  
                                            <figure class="alith_post_thumb_big">
                                            <span class="post_meta_categories_label">Legal, Blog</span>
                                             <a href="single.html"><img src={imagenImg} /></a>
                                            </figure>
                                        <h3 className="alith_post_title">
                                            <a href="single.html"><strong>Nor again is there anyone who loves or pursues or desires to obtain</strong></a>
                                        </h3>
                                    </div>
                                    <div className="latest_style_2_item">
                                        <figure className="alith_news_img"><a href="single.html"><img src={imagenImg2}/></a></figure>
                                        <h3 className="alith_post_title">
                                        <a href="single.html">Magna aliqua ut enim ad minim veniam quis </a></h3>
                                        <div className="post_meta"><p className="meta"><span>2 sep, 2018</span><span>268 views</span></p>
                                        </div>
                                    </div>
                                    <div className="latest_style_2_item">
                                        <figure className="alith_news_img"><a href="single.html"><img src={imagenImg2}/></a></figure>
                                        <h3 className="alith_post_title">
                                        <a href="single.html">Magna aliqua ut enim ad minim veniam quis </a></h3>
                                        <div className="post_meta"><p className="meta"><span>18 sep, 2018</span><span></span></p>
                                        </div>
                                    </div>
                                    <div className="latest_style_2_item">
                                        <figure className="alith_news_img"><a href="single.html"><img src={imagenImg2}/></a></figure>
                                        <h3 className="alith_post_title">
                                        <a href="single.html">Magna aliqua ut enim ad minim veniam quis </a></h3>
                                        <div className="post_meta"><p className="meta"><span>23 sep, 2018</span><span></span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-widget">
                                    <div className="widget-title-cover"><h4 className="widget-title"><span>Advertise</span></h4></div>
                                    <div className="banner-adv">
                                        <div className="adv-thumb"><a href="#"><img src={imagenImg3}/></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Sidebar*/}
                
                <div id="page-content-wrapper" className="transform: none;">
                    <div class="container-fluid">
                        <div class="container">
                            <div class="top_bar margin-15">
                                <div class="row">
                                    <div class="col-md-6 col-sm-12 time">
                                        <div className="off-canvas-toggle hidden" id="off-canvas-toggle" onClick={this.onClickHandle}>
                                            <span></span>
                                            <p class="sidebar-open">MORE</p>
                                            </div>
                                        <i>< AiOutlineClockCircle /></i><span>&nbsp;&nbsp; Wednesday, 29 January 2020</span>               
                                    </div>
                                    <div class="col-md-6 col-sm-12 social">
                                        <ul>
                                            <li><a href="" ><i>< FaFacebookF  /></i></a></li>
                                            <li><a href=""><i>< FaTwitter /></i></a></li>
                                            <li><a href=""><i>< IoLogoGoogleplus fontSize="small"  /> </i></a></li>						
                                        </ul>
                                        <div class="top-search" onClick={this.onClickHandle1}>
                                            <i>< FaSearch /></i><span>SEARCH</span>
                                        </div>
                                        <div class="top-search-form" style={{display: 'block' }}>
                                            <form action="#" class="search-form" method="get" role="search"> 
                                                <label> 
                                                    <span class="screen-reader-text">Search for:</span>
                                                    <input type="search" name="s" value="" placeholder="Search …" class="search-field" /> 
                                                </label> 
                                                <input type="submit" value="Search" class="search-submit"/>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div class="container-fluid">
                        <div class="container">
                            <div class="row">
                                <div class="col-12 col-md-12 header">
                                    <h1 class="logo"><a href="index.html">HELLO WORLD</a></h1>
                                    <p class="tagline">NEWSPAPER / MAGAZINE / PUBLISHER</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SubHeader />
                <Footer />
            </div>
        );
    }
}



export default Header 