import React from "react";

const ExhibitionItem = ({data, idx}) => {
    if(data.length === 0){
        return 
    } else {
    return (
        <section>
            <img src={data[idx].image_url} alt=''></img>
            <div className="item_content">
                <div className="first_ex">
                    {data[idx].title}
                </div>
                <div className="second_ex">
                    {data[idx].subtitle}
                </div>
            </div>
        </section>
    )
    }
}

export default ExhibitionItem