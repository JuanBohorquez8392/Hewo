import React from 'react'
import '../Styles/main.css'
import '../Styles/normalize.css'
import '../Styles/responsive.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { AiOutlineInstagram } from 'react-icons/ai'


class Footer extends React.Component{
    render(){
        return(
            <div class="container-fluid alith_footer_right_reserved">
                 <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-12 bottom-logo">
                            <h1 class="logo"><a href="index.html">HELLO WORLD</a></h1>
                            <div class="tagline social">
                                <ul>
                                    <li class="facebook"><a href=""><i> < FaFacebookF /></i></a></li>
                                    <li class="twitter"><a href=""><i>< FaTwitter /></i></a></li>
                                    <li class="google-plus"><a href=""><i>< FaGooglePlusG  /></i></a></li>
                                    <li class="instagram"><a href=""><i>< AiOutlineInstagram /> </i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-12 col-md-12 coppyright"> <p>© Copyright 2018, All rights reserved. Design by <a href="https://alithemes.com" title="AliTheme">Alithemes.com</a></p> </div>                        </div>
                        </div>
                    <div class="gototop js-top active">
                    <a href="#" class="js-gotop"><span>Take Me Top</span></a>
                </div>  
            </div>
        );
    }
}



export default Footer