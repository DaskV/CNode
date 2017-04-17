import React, { Component, PropTypes } from 'react'
import './style.scss'
class BacktoTop extends Component {
    render() {
        return (
            <div>
                <i className="iconfont back" onClick={()=>{window.scrollTo(0,0)}}>&#xe619;</i>
            </div>
        );
    }
}

export default BacktoTop;