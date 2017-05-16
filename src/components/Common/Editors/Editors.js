import React, { Component, PropTypes } from 'react';
import Editors from 'react-md-editor'
import './style.scss'
class MyEditors extends Component {
    constructor(){
        super()
        this.state={
            code:"",
            placeholder:"block"
        }
    }
    updateCode=(newcode)=>{      
        this.setState({
            code:newcode,
            placeholder:"none"
        },function(){
            this.props.getContent(newcode)
        })
        if(newcode===""){
            this.setState({
                code:newcode,
                placeholder:"block"
            },function(){
                this.props.getContent(newcode)
            })
        }
        
    }
    render() {
        return (
            <div className="ed-content">               
               <Editors value={this.state.code || this.props.loginname } onChange={this.updateCode} />
               <span className="placeholder" style={{display:this.state.placeholder}} >请说点什么吧...</span>
            </div>
        );
    }
}

export default MyEditors;