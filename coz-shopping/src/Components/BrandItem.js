import React from "react";
import "./item.css"

const BrandItem = ({data, idx}) => {
    if(data.length === 0){
        return 
    } else {
    return (
        <section>
            <div className="img_container">
                <img src={data[idx].brand_image_url} alt='' className="background"></img>
                <img src="img/북마크 아이콘.png" className="bookmark"></img>
            </div>
            <div className="item_content">
                <div className="first">
                    <div className="first_left">{data[idx].brand_name}</div>
                    <div className="first_right_br">관심고객수</div>
                </div>
                <div className="second_br">
                    {data[idx].follower}
                </div>
            </div>
        </section>
    )
    }
}

export default BrandItem