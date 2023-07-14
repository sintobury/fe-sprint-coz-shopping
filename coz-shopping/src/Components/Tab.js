import React from "react";
import "./Tab.css"

const Tab = ({data, idx, setCondition}) => {
    if(data[0] === undefined)return 
    let type
    if(idx === 0){
        type = '전체'
    } else if(idx === 1) {
        type = '상품'
    } else if(idx === 2) {
        type = '카테고리'
    } else if(idx === 3) {
        type = '기획전'
    } else if(idx === 4) {
        type = '브랜드'
    }
    
    const handleMenu = () => {
        setCondition(idx);
    }

    return (
        <div className="tab_menu" onClick={handleMenu}>
            <div className="img_container">
                <img src={data[5].image_url || data[5].brand_image_url} className="tab_img"></img>
            </div>
            <div className="menu_name">
                {type}
            </div>
        </div>
    )
}

export default Tab