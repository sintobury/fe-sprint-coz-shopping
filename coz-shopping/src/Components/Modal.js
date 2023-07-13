import React from "react";
import "./Modal.css"

const Modal = ({data, setOpen, setClicked, setList,list, clicked}) => {

    const handleBookmark = () => {
        setList([...list, data]);
        setClicked(!clicked);
    }
    const deleteBookmark = () => {
        setList([...list.filter((el)=> el!==data)]);
        setClicked(!clicked);
    }
    let title, url
    if(data.type == 'Brand'){
        title = data.brand_name;
        url = data.brand_image_url;
    } else if(data.type === 'Category'){
        title = `# ${data.title}`;
        url = data.image_url;
    }
    else {
        title = data.title;
        url = data.image_url;
    }

    return (
        <>
            <div className="Modal_container">
                <div className="modalBackdrop" onClick={()=>setOpen(false)}>
                    <div className="modalview" onClick={(e)=> e.stopPropagation()}>
                        <img className="view" src={url}></img>
                        <img src="img/북마크 해제 아이콘.png" className={!clicked ? "modal_bookmark" : 'modal_hide'} onClick={handleBookmark}></img>
                        <img src="img/북마크됨 아이콘.png" className={clicked ? "modal_bookmark": 'modal_hide'} onClick={deleteBookmark}></img>
                        <button onClick={()=>setOpen(false)}>X</button>
                        <div className="title">{title}</div> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal