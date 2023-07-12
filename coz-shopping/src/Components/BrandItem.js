import React from "react";

const BrandItem = ({data, idx}) => {
    if(data.length === 0){
        return 
    } else {
    return (
        <section>
            <img src={data[idx].brand_image_url} alt=''></img>
            <div className="item_content">
                <div className="first_br">
                    <div>{data[idx].brand_name}</div>
                    <div>관심고객수</div>
                </div>
                <div className="second">
                    {data[idx].follower}
                </div>
            </div>
        </section>
    )
    }
}

export default BrandItem