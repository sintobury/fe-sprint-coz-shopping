import React from "react";

const BookmarkList = ({setBookmarkList}) => {
    const product = JSON.parse(window.localStorage.getItem('ProductBookmark'))
    
    setBookmarkList()

    return (
        <div className="bookmarklist_container">
            <h2>북마크 리스트</h2>
            <div className="bookmark_container">

            </div>
        </div>
    )
}

export default BookmarkList