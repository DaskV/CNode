import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {WingBlank, WhiteSpace, Card} from 'antd-mobile'
import Header from '../Common/Header/Header'
import getTime from '../.././utils/getTime'
import './style.scss'
class PersonInfoField extends Component {
    render() {
        return (
            <div>
                <Header search={false} ellipsis={false} title={"个人主页"}/>
                <WingBlank size='lg'>
                    <div className="User">
                        <img src={this.props.allinfo.avatar_url}/>
                        <p className="UserName">{this.props.allinfo.loginname}</p>
                        <p>积分:{this.props.allinfo.score}</p>
                        <p>注册时间:{getTime(this.props.allinfo.create_at)}</p>
                        <p>github账号:{this.props.allinfo.githubUsername}</p>
                    </div>
                    <Card className="collect card">
                        <Card.Header title="收藏的话题" />
                        <Card.Body>
                            {
                                this.props.allinfo.collect.map((item,index)=>
                                    <Link to={`/article/${item.id}`}>
                                        <div className="cardiv" key={item.id}>
                                            <img src={item.author.avatar_url} />
                                            <span>{item.title}</span>
                                        </div>
                                    </Link>
                                )
                            }
                            
                        </Card.Body>
                    </Card>
                    <Card className="join card">
                        <Card.Header title="最近参与的话题" />
                        <Card.Body>
                            {
                                this.props.allinfo.recent_replies.map((item,index)=>
                                    <Link to={`/article/${item.id}`}>
                                        <div className="cardiv" key={item.id}>
                                            <img src={item.author.avatar_url} />
                                            <span>{item.title}</span>
                                        </div>
                                    </Link>
                                )
                            }
                            
                        </Card.Body>
                    </Card>
                     <Card className="join card">
                        <Card.Header title="最近创建的话题" />
                        <Card.Body>
                            {
                                this.props.allinfo.recent_topics.map((item,index)=>
                                    <Link to={`/article/${item.id}`}>
                                        <div className="cardiv" key={item.id}>
                                            <img src={item.author.avatar_url} />
                                            <span>{item.title}</span>
                                        </div>
                                    </Link>
                                )
                            }
                            
                        </Card.Body>
                    </Card>
                </WingBlank>
            </div>
        );
    }
}

PersonInfoField.propTypes = {};

export default PersonInfoField;