import React, {useEffect} from "react";
import './item.css'

const ProductItem = ({data, idx, addBookmark ,list}) => {
    //addBookmark= setBookmarkList
    const handleBookmark = () => {
        addBookmark([...list, data[idx]]);
    }
    const setBookmarkList = () => {
        window.localStorage.setItem('bookmarklist', list);
    }
    useEffect(() => {
        setBookmarkList();
    }, [list]);

    if(data.length === 0){
        return 
    } else {
    return (
        <section>
            <div>
                <div className="img_container">
                    <img src={data[idx].image_url} alt='' className="background"></img>
                    <img src="img/북마크 아이콘.png" className="bookmark" onClick={handleBookmark}></img>
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