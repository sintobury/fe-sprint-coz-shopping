import React from "react";
import { Menu } from "./Menu";
import { menulist } from "./Menu";

export default {
    title: 'Atoms/Menu',
    component: Menu,
    parameters: {
        background: { default: { value: 'light' } },
        controls: { hideNoControlsWarning: true },
    },
};

export const All = () => {
    return menulist.map((menu) => {
        return <Menu menu={menu} key={menu}/>
    })
}