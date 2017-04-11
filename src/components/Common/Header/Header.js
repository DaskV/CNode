import React from 'react';
import {NavBar, Icon} from 'antd-mobile'
import './style.scss';
const Header = () => {
    return (
        <div className="Headers">
            <NavBar
                leftContent="返回"
                mode="light"
                onLeftClick={() => window.history.go(-1)}
                rightContent={[< Icon key = "0" type = "search" style = {{ marginRight: '0.32rem' }}/>, <Icon key="1" type="ellipsis" / >]}>
                NavBar</NavBar>
        </div>
    );
};

export default Header;