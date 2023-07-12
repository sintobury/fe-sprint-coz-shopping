import React from "react";

const ProductItem = ({data, idx}) => {
    if(data.length === 0){
        return 
    } else {
    return (
        <section>
            <img src={data[idx].image_url} alt=''></img>
            <div className="item_content">
                <div className="first">
                    <div>{data[idx].title}</div>
                    <div>{data[idx].discountPercentage}%</div>
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