import React ,{useState, useEffect} from "react";
import "./item.css"
import Modal from "./Modal";

const BrandItem = ({data, idx, setBookmarkList, bookmarkList}) => {
    const [clicked, setClicked] = useState(false);
    const [open, setOpen] = useState(false);

    const handleModal = () => {
        setOpen(!open);
    }

    const handleBookmark = () => {
        setBookmarkList([...bookmarkList, data[idx]])
        setClicked(!clicked);
    }
    const deleteBookmark = () => {
        setBookmarkList(bookmarkList.filter((el)=> el.id!==data[idx].id));
        setClicked(!clicked);
    }
    useEffect(()=>{
        if(data[idx] === undefined){
            return
        }
        if(bookmarkList.filter((el)=>el.id===data[idx].id).length !== 0){
            setClicked(true);
        } else {
            setClicked(false);
        }
        window.localStorage.setItem('bookmarkList', JSON.stringify(bookmarkList));
    },[data, idx, bookmarkList])

    if(data.length === 0){
        return 
    } 
    return (
        <section>
            {open ? <Modal data={data[idx]} setOpen={setOpen} setClicked={setClicked} setList={setBookmarkList} list={bookmarkList} clicked={clicked}/> : null}
            <div className="img_container">
                <img src={data[idx].brand_image_url} alt='' className="background" onClick={handleModal}></img>
                <img src="/img/북마크 해제 아이콘.png" className={!clicked ? "bookmark" : 'hide'} onClick={handleBookmark}></img>
                <img src="/img/북마크됨 아이콘.png" className={clicked ? "bookmark": 'hide'} onClick={deleteBookmark}></img>
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

export default BrandItem