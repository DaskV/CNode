import React, { Component, PropTypes } from 'react'
import {WingBlank,List, InputItem,Switch,Button} from 'antd-mobile'
import { createForm } from 'rc-form'
import  Header from '../Common/Header/Header'

const Item = List.Item;

class Login extends Component {
    
    onSubmit=()=>{
         this.props.form.validateFields({ force: true }, (error) => {
            if (!error) {
                console.log(this.props.form.getFieldsValue());
            } else {
                alert('校验失败');
            }
         });
    }
    validateAccount = (rule, value, callback) => {
        if (value && value.length > 4) {
        callback();
        } else {
        callback(new Error('帐号至少4个字符'));
        }
    }
    render() {
        const { getFieldProps, getFieldError } = this.props.form;
        return (
            <div>
                <Header title={"登录"}  search={false} ellipsis={false}/>       
                    <form style={{paddingTop:"3rem"}}>
                        <List renderFooter={() => getFieldError('account') && getFieldError('account').join(',')}>
                            <InputItem  {...getFieldProps('account', {
                                rules: [
                                { required: true, message: '请输入帐号' },
                                { validator: this.validateAccount },
                                ],
                            })}
                            clear
                            error={!!getFieldError('account')}
                            placeholder="请输入Access Token">                  
                            </InputItem>                      
                        </List>
                        <WingBlank size="lg">
                            <div style={{textAlign:"right",marginBottom:"1rem"}}>
                                 <label>记住登录信息</label>
                                 <Switch {...getFieldProps('1', { initialValue: true, valuePropName: 'checked' })} />
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