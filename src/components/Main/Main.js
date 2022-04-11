import React from 'react';
import './main.scss';
import Title from '../Title/Title';
import html from '../../assets/badge/html.png'
import css from "../../assets/badge/css.png"
import sass from "../../assets/badge/sass.png"
import javascript from "../../assets/badge/javascript.png"
import sql from "../../assets/badge/database.png"
import react from "../../assets/badge/react.png"
import node from "../../assets/badge/node.png"
import express from "../../assets/badge/express.svg"
import mongodb from "../../assets/badge/mongodb.png"
import firebase from "../../assets/badge/firebase.png"
import jwt from "../../assets/badge/jwt.png"
function Main(props) {
    return (
        <div className='main'>
            <Title title="Skills" />
<div className='main-wrapper'>
    <img className='main-image' src={html} alt="html-icon"/>
    <img className='main-image' src={css} alt="css-icon"/>
    <img className='main-image main-sass' src={sass} alt="scss-icon"/>
    <img className='main-image' src={react} alt="react-icon"/>
    <img className='main-image' src={javascript} alt="javascript-icon" />
    <img className='main-image' src={sql} alt="sql-icon" />
    <img className='main-image' src={node} alt="node-icon" />
    <img className='main-image main-express' src={express} alt="express-icon" />
    <img className='main-image' src={mongodb} alt="mongodb-icon" />
    <img className='main-image' src={firebase} alt="firebase-icon" />
    <img className='main-image main-jwt' src={jwt} alt="jwt-icon" />
</div>
            
        </div>
    );
}

export default Main;