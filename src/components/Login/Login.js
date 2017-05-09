import React, { Component, PropTypes } from 'react'
import {WingBlank,List, InputItem,Switch,Button,Toast} from 'antd-mobile'
import { createForm } from 'rc-form'
import  Header from '../Common/Header/Header'
const Item = List.Item;

class Login extends Component {
    
    onSubmit=()=>{
         this.props.form.validateFields({ force: true }, (error) => {
            if (!error) {
                const {accesstoken,remember}={...this.props.form.getFieldsValue()};
                this.props.submitClick(accesstoken,remember);

            } else {
                alert('校验失败');
            }
         });
    }
    render() {
        const { getFieldProps, getFieldError } = this.props.form;
        return (
            <div>
                <Header title={"登录"}  search={false} ellipsis={false}/>       
                    <form style={{paddingTop:'3rem',position:'relative'}}>
                        <List renderFooter={() => getFieldError('accesstoken') && getFieldError('accesstoken').join(',')}>
                            <InputItem  {...getFieldProps('accesstoken', {
                                rules: [{ required: true, message: '请输入Access Token' }],
                            })}
                            clear
                            error={!!getFieldError('accesstoken')}
                            placeholder="请输入Access Token">                  
                            </InputItem>                      
                        </List>
                        <WingBlank size="lg">
                            <div style={{textAlign:"right",marginBottom:"1rem"}}>
                                 <label>记住登录信息</label>
                                 <Switch {...getFieldProps('remember', { initialValue: true, valuePropName: 'checked' })}  />
                            </div>                     
                            <Button type="primary" onClick={this.onSubmit}>登录</Button>
                        </WingBlank>   
                    </form>                       
            </div>
        );
    }
}

const LoginField=createForm()(Login)

export default LoginField;