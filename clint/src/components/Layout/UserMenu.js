import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const UserMenu = () => {
    return (
        <div>
            <div className="text-center dashboard-menu">
                <div className="list-group">
                    <h4>Dashboard</h4>
                    <NavLink
                        to="/dashboard/user/profile"
                        className="list-group-item list-group-item-action"
                    >
                        <AiFillHome style={{ marginRight: "8px" }} />
                        Profile
                    </NavLink>
                    <NavLink
                        to="/dashboard/user/orders"
                        className="list-group-item list-group-item-action"
                    >
                        Orders
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default UserMenu;
