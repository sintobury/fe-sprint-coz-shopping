import React from "react";
import "./item.css"

const CategoryItem = ({data, idx, addBookmark ,list}) => {
    if(data.length === 0){
        return 
    } else {

    return (
        <section>
            <div className="img_container">
                <img src={data[idx].image_url} alt='' className="background"></img>
                <img src="img/북마크 아이콘.png" className="bookmark"></img>
            </div>
            <div className="item_content">
                <div className="first_category"># {data[idx].title}</div>
            </div>
        </section>
    )
    }
}

export default CategoryItem