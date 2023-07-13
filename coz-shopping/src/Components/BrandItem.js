import React ,{useState, useEffect} from "react";
import "./item.css"
import Modal from "./Modal";

const BrandItem = ({data, idx}) => {
    const [clicked, setClicked] = useState(false);
    const [list, setList] = useState([]);
    const [open, setOpen] = useState(false);

    const handleModal = () => {
        setOpen(!open);
    }

    const handleBookmark = () => {
        setList([...list, data[idx]]);
        setClicked(!clicked);
    }
    const deleteBookmark = () => {
        setList([...list.filter((el)=> el!==data[idx])]);
        setClicked(!clicked);
    }

    const setBookmarkList = () => {
        window.localStorage.setItem('BrandBookmark', JSON.stringify(list));
        console.log(JSON.parse(window.localStorage.getItem('BrandBookmark')))
    }
    useEffect(() => {
        setBookmarkList();
    }, [list]);

    if(data.length === 0){
        return 
    } else {
    return (
        <section>
            {open ? <Modal data={data[idx]} setOpen={setOpen} setClicked={setClicked} setList={setList} list={list} clicked={clicked}/> : null}
            <div className="img_container">
                <img src={data[idx].brand_image_url} alt='' className="background" onClick={handleModal}></img>
                <img src="img/북마크 해제 아이콘.png" className={!clicked ? "bookmark" : 'hide'} onClick={handleBookmark}></img>
                <img src="img/북마크됨 아이콘.png" className={clicked ? "bookmark": 'hide'} onClick={deleteBookmark}></img>
            </div>
            <div className="item_content">
                <div className="first">
                    <div className="first_left">{data[idx].brand_name}</div>
                    <div className="first_right_br">관심고객수</div>
                </div>
                <div className="second_br">
                    {Number(data[idx].follower).toLocaleString()}
                </div>
            </div>
        </section>
        )
    }
}

export default BrandItem