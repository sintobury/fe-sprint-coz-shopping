import React ,{useState, useEffect} from "react";
import ProductItem from "./Productitem";
import CategoryItem from "./CategoryItem";
import ExhibitionItem from "./ExhibitionItem";
import BrandItem from "./BrandItem";
import "./Bookmark.css"

const BookmarkList = ({bookmarkList, setBookmarkList}) => {
    
   //타입별로 나누지말고 북마크 속성을 true로 할당해서 products에 저장
    const [viewList,setViewlist] = useState([]);
   
    useEffect(()=> {
        if(bookmarkList !== undefined ){
            const view = [];
            for(let i=0; i<bookmarkList.length; i++){
                view.push(bookmarkList[i]);
                if(i===3){
                    break;
                }
            }
        setViewlist(view);
        }
    },[bookmarkList])
    console.log(viewList)
    return (
        <div className="bookmarklist_container">
            <h2>북마크 리스트</h2>
            <div className="bookmark_container">
                {viewList.map((el) => {
                    if(el.type === 'Product') {
                        return <ProductItem data={[el]} idx={0} key={el.id} setBookmarkList={setBookmarkList} bookmarkList={bookmarkList} />
                    } else if(el.type === "Category"){
                        return <CategoryItem data={[el]} idx={0} key={el.id} setBookmarkList={setBookmarkList} bookmarkList={bookmarkList}/>
                    } else if(el.type ==="Exhibition"){
                        return <ExhibitionItem data={[el]} idx={0} key={el.id} setBookmarkList={setBookmarkList} bookmarkList={bookmarkList}/>
                    } else if(el.type ==="Brand"){
                        return <BrandItem data={[el]} idx={0} key={el.id} setBookmarkList={setBookmarkList} bookmarkList={bookmarkList}/>
                    }
                })
                }
            </div>
        </div>
    )
}

export default BookmarkList