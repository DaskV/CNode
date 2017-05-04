import {Modal} from  'antd-mobile'
import {hashHistory} from 'react-router'
const alert =Modal.alert;

export default function checkAuth(nextState,replaceSate){
    const token = JSON.stringify(window.localStorage.getItem('token'))
    const pathname=replaceSate.location.pathname;
    if(token==="null"){             //未登录
       if(pathname!=='/login' && pathname!=='/'){
          document.getElementById("whitepage").style.display='block';
          alert('暂未登录','是否立即登录?',[
              {text:'返回',onPress:()=>{
                  hashHistory.goBack()
                  document.getElementById("whitepage").style.display='none';
              }},
              {text:'确定',onPress:()=>{
                  document.getElementById("whitepage").style.display='none';
                  hashHistory.push('/login')

              }}
          ])
       }        
    }
}