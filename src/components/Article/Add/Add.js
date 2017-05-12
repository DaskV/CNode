import React, { Component, PropTypes } from 'react';
import {WingBlank, InputItem,Picker,Button,Toast} from 'antd-mobile'
import Editors from '../../Common/Editors/Editors'



class Add extends Component {
    render() {
        return (
            <div style={{marginTop:"100px"}}>
                <InputItem placeholder="标题,字数10字以上"></InputItem>
                <Editors/>
            </div>
        );
    }
}

Add.propTypes = {

};

export default Add;