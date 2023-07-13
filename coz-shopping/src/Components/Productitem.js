import React, {useState, useEffect} from "react";
import './item.css'

const ProductItem = ({data, idx, addBookmark ,list}) => {
    //addBookmark= setBookmarkList
    const [clicked, setClicked] = useState(false);

    const handleBookmark = () => {
        addBookmark([...list, data[idx]]);
        setClicked(!clicked);
    }
    const deleteBookmark = () => {
        addBookmark([...list.filter((el)=> el!==data[idx])]);
        setClicked(!clicked);
    }

    const setBookmarkList = () => {
        window.localStorage.setItem('bookmarklist', JSON.stringify(list));
        console.log(JSON.parse(window.localStorage.getItem('bookmarklist')))
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
                    <img src="img/북마크 아이콘.png" className={!clicked ? "bookmark" : 'hide'} onClick={handleBookmark}></img>
                    <img src="img/북마크됨 아이콘.png" className={clicked ? "bookmark": 'hide'} onClick={deleteBookmark}></img>
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