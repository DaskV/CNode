import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router'
import './style.scss'
import {scrolltoTop, swipeUp} from '../../utils/scrolltoTop';
class BacktoTop extends Component {
    componentDidMount() {
        swipeUp(true)
    }
    componentWillUnmount() {
        swipeUp()     
    }
    render() {
        return (
            <div>           
                <div className="back animated fadeInUp"  onClick={()=>{scrolltoTop()}}>
                    <i className="iconfont">&#xe619;</i>
                </div>
                <Link to="/">
                    <div className="release">
                        <i className="iconfont">&#xe6b9;</i>
                    </div>
                </Link>
             </div>

        );
    }
}

export default BacktoTop;