import React from "react";
import { Icon } from "./Icon";
import './Menu.css';

export const menulist = ['Product', 'Bookmark', '']

export const Menu = ({menu}) => {
    let explain;
    if(menu === 'Product'){
        explain = `상품리스트 페이지`;
    }else if(menu === 'Bookmark'){
        explain = `북마크 페이지`
    } else {
        explain = '환영합니다'
    }
    return (
        <div className="menu_container">
            {menu && menu !== '' ? <Icon icon={menu} /> : null}
            <span>{explain}</span>
        </div>
    )
}