import React, { Component, PropTypes } from 'react';
import './style.scss'
class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                Powered by<span onClick={()=>{ window.location.href="https://github.com/DaskV/CNode" }}>@DaskV</span>
            </div>
        );
    }
}



export default Footer;