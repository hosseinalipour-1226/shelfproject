import React, { Component } from 'react';
import './choosepage.css'
import Writeinbookbnav from './Writeinbooknavbar'

class ChoosePage extends Component {
    
    render() {    
        return ( 
            <div>          
                <div className="bg-image"></div>
                <div className="choosepage">
                    <div className="bg-text">
                        <div className="container">
                            <img id="img1" src="https://images.pexels.com/photos/34627/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Avatar" className="image"/>
                            <span id="img1" className="under-img">با اجاره کتاب خود دیگران را هم در کتابخوانی سهیم کنید</span>
                            <div className="middle">
                                <a href="./borrow">
                                    <div className="text">اجاره</div>
                                </a>    
                            </div>    
                    </div>  
                    <div>
                    <div className="container">
                        <br/>   
                            <img id="img1" src="https://images.pexels.com/photos/375903/pexels-photo-375903.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Avatar" className="image"/>
                            <span id="img1" className="under-img">میتوانید کتاب خود را به فروش برسانید</span>
                            <div className="middle">
                                <a href="./sell">
                                    <div className="text">فروش</div>
                                </a>    
                            </div>    
                            </div>
                    </div> 
                    <div>
                        <div className="container">
                            <br/>
                            <img id="img1" src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Avatar" className="image"/>
                            <span id="img1" className="under-img">با اجاره کتاب خود دیگران را هم در کتابخوانی سهیم کنید</span>
                            <div className="middle">
                                <a href="./Lecture">
                                    <div className="text">جزوه</div>
                                </a>    
                            </div>    
                    </div>
                    </div>
                    <div>
                        <div className="container">
                            <br/>
                            <img id="img1" src="https://images.unsplash.com/photo-1456953180671-730de08edaa7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80" alt="Avatar" className="image"/>
                            <span id="img1" className="under-img">با اجاره کتاب خود دیگران را هم در کتابخوانی سهیم کنید</span>
                            <div className="middle">
                                <a href="./E-Book">
                                    <div className="text">کتاب الکرونیک</div>
                                </a>    
                            </div>    
                    </div>
                    <div className="back">
                        <a href="./">
                        <p><br/><br/><br/></p>
                        <button className="btn"><i className="fa fa-home"></i></button>
                        </a>
                    </div>
                    
                    </div>
                    </div>
                </div>    
            </div>    
    );
    }
}
 
export default ChoosePage;
