import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const myImage = '100'
let NewImage = require('./image/' + myImage + '.jpg');

class Mycard extends Component {
    state = {}
    render() {
        return (
            <div className='card'>
                <img src={NewImage} alt="" />
            </div>
        );
    }
}

export default Mycard;