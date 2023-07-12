import React from "react";
import './item.css'

const ProductItem = ({data, idx}) => {
    if(data.length === 0){
        return 
    } else {
    return (
        <section>
            <div>
                <div className="img_container">
                    <img src={data[idx].image_url} alt='' className="background"></img>
                    <img src="img/북마크 아이콘.png" className="bookmark"></img>
                </div>
            </div>
            <div className="item_content">
                <div className="first">
                    <div className="first_left">{data[idx].title}</div>
                    <div className="first_right">{data[idx].discountPercentage}%</div>
                </div>
                <div className="second">
                    {data[idx].price}원
                </div>
            </div>
        </section>
    )
    }
}

export default ProductItem