import React from "react";

const CategoryItem = ({data, idx}) => {
    if(data.length === 0){
        return 
    } else {

    return (
        <section>
            <img src={data[idx].image_url} alt=''></img>
            <div className="item_content">
                <div className="first_category">
                    <div>#{data[idx].title}</div>
                </div>
            </div>
        </section>
    )
    }
}

export default CategoryItem