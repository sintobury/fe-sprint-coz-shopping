import React, {useState} from "react";
import { Icon } from "./Icon";
import './Icon.css'

export const BookmarkButton = () => {
    const [isBookmarked, setBookmarked] = useState('BookmarkOffButton');
    const handleBookmark = () => {
        if(isBookmarked === 'BookmarkOffButton'){
            setBookmarked('BookmarkOnButton')
        } else {
            setBookmarked('BookmarkOffButton')
        }
    }
    return (
        <div onClick={handleBookmark}>
            <Icon icon={isBookmarked}/>
        </div>
    )
}