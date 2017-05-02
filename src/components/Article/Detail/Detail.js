import React, { Component, PropTypes } from 'react';
import {WingBlank,List} from 'antd-mobile'
import Header from '../../Common/Header/Header'
import './style.scss'

const Item = List.Item;

class Detail extends Component {
    render() {
        return (
            <div>
                <Header search={false} ellipsis={false} title={"主题"}></Header>
                <div className="topic">
                    <WingBlank>
                        <header>
                            <span className="title">adasdasdsa</span>
                            <List className="my-list">

                                                                   
                                 {/*<Item
                                    multipleLine
                                    thumb={item.author.avatar_url}
                                    onClick={() => {this.handlClick(item.id)}}
                                    platform="android"
                                    key={index}
                                 >
                                 </Item>*/}
                                
                            </List>
                        </header>
                    </WingBlank>
                </div>              
            </div>
        );
    }
}

Detail.propTypes = {

};

export default Detail;