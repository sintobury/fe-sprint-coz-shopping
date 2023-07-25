import { BookmarkButton } from "./bookmarkbutton";
import React from "react";

export default {
    title: 'Atoms/BookmarkButton',
    component: BookmarkButton,
    parameters: {
        background: { default: { value: 'light' } },
        controls: { hideNoControlsWarning: true },
    },
};

export const Bookmarkbutton = () => (
    <BookmarkButton/>
);
