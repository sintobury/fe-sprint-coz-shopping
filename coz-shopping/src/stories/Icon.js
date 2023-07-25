import React from "react"
import './Icon.css'

export const IconNames = [
    'Menu',
    'BookmarkOffButton',
    'BookmarkOnButton',
    'Bookmark',
    'Product',
    'Logo'
]

export const Icon = ({icon}) => {
    let img_url
    if(icon === 'Menu'){
        img_url = '/img/아이콘.png'
    }else if(icon === 'BookmarkOffButton'){
        img_url = '/img/북마크 해제 아이콘.png'
    }else if(icon === 'BookmarkOnButton'){
        img_url = '/img/북마크됨 아이콘.png'
    }else if(icon === 'Bookmark'){
        img_url = '/img/북마크 아이콘.png'
    }else if(icon === 'Product'){
        img_url = '/img/상품 아이콘.png'
    }else if(icon === 'Logo'){
        img_url = '/img/로고.png'
    }

    return (
        <div>
            <img src={img_url} alt={icon} className={icon}/>
        </div>
    )
}