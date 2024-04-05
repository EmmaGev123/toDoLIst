import { Outlet } from "react-router-dom";
import { Menu } from "../../component/Menu";
import React from "react";

export const Layout: React.FC = () => {    
    return (
        <div>
            <Menu />
            <Outlet />
        </div>
    );
};
