import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'
import Header from '../components/Common/Header/Header'
import Add from '../components/Article/Add/Add'
import MyEditors from '../components/Common/Editors/Editors'
import {Toast,Modal} from 'antd-mobile'
import {fetch_AddArticle} from '../action'
const alert = Modal.alert;

class ArticleAdd extends Component {
    constructor(props){
        super(props)
        this.state={
            info:{},
            content:""
        }
    }
    combineInfo=(stuff)=>{
        if(typeof(stuff)==='object'){
              this.setState({
                info:stuff
             })
        }
        else{
             this.setState({
                 content:stuff
             })
        }     
    }
    submitInfo=()=>{       
        if(this.state.content===""){
             Toast.info('请输入内容',2,null,false)
             return
        }
        if(this.state.info===""){
            Toast.info('请输入标题',2,null,false)
        } 
        else{
            if(this.state.info.title.length<10){
                 Toast.info('标题不得少于10个字',2,null,false)
                 return
            }
        }
        const {dispatch,accessToken}=this.props;
        Toast.loading('发布中...',30)
        dispatch(fetch_AddArticle(accessToken,this.state)) 
        localStorage.removeItem('AddInfo')

    }
    //未发表本地存储
    storeAddInfo=()=>{   
        if(this.state.info.title!=undefined|| this.state.content){
             alert('提示','有未发布的信息未保存,是否立即保存?',[
                {text:'取消',onPress:()=>{console.warn('取消存储'),window.history.go(-1)}},
                {text:'确定',onPress:()=>{
                     window.localStorage.setItem('AddInfo',JSON.stringify(this.state))
                     window.history.go(-1);    
                }}
            ])
        }
        else{
            window.history.go(-1);    
        }
                
    }
    componentWillReceiveProps(nextProps) {
        const {addArticle} =nextProps;
        if(addArticle.success){
            Toast.hide()
            Toast.info('添加成功',1)
            setTimeout(function() {
                hashHistory.push(`/article/${addArticle.artcleId}`)
            }, 1000);            
        }
        
    }
    render() {
        return (
            <div>
                <Header title={"发布"} submit={true} submitClick={this.submitInfo} backRequest={this.storeAddInfo} needBack={true}></Header>
                <Add  getInfo={this.combineInfo} />
                <MyEditors getContent={this.combineInfo}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {accessToken} =state.login
    const {addArticle} =state.article
    return {accessToken,addArticle}
}

export default  connect(mapStateToProps)(ArticleAdd);