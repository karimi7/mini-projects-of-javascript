import React from 'react';
import './SideBar.css';
import {
    LineStyle,
    Timeline,
    TrendingUp,
    // PremIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    // Messages,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
} from '@mui/icons-material';
import { Link } from 'react-router';

// import Link from 'react-router';

export default function SideBar() {
    return (
        <>
            <div className="sideBar">
                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">DashBoard</h3>
                    <ul className="sideBarList">
                        <Link to="/">
                            <li className="sideBarListItem active">
                                <LineStyle className="sideBarIcon" />
                                <div className="item-before">Home</div>
                            </li>
                        </Link>

                        <li className="sideBarListItem">
                            <Timeline className="sideBarIcon" />
                            Analytics
                        </li>

                        <li className="sideBarListItem">
                            <TrendingUp className="sideBarIcon" />
                            Sales
                        </li>
                    </ul>
                </div>

                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Quick Menu</h3>
                    <ul className="sideBarList">
                        <Link to="/users">
                            <li className="sideBarListItem">
                                {/* change Icon */}
                                <LineStyle className="sideBarIcon" />
                                <div className="item-before">Users</div>
                            </li>
                        </Link>

                        <Link to="/newUser">
                            <li className="sideBarListItem">
                                <Storefront className="sideBarIcon" />
                                <div className="item-before">New Users</div>
                            </li>
                        </Link>

                        <Link to="/products">
                            <li className="sideBarListItem">
                                <AttachMoney className="sideBarIcon" />
                                <div className="item-before">Products</div>
                            </li>
                        </Link>

                        <li className="sideBarListItem">
                            <BarChart className="sideBarIcon" />
                            Transactions
                        </li>
                        <li className="sideBarListItem">
                            <Report className="sideBarIcon" />
                            Reports
                        </li>
                    </ul>
                </div>

                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Notifications</h3>
                    <ul className="sideBarList">
                        <li className="sideBarListItem">
                            <MailOutline className="sideBarIcon" />
                            Mail
                        </li>
                        <li className="sideBarListItem">
                            <ChatBubbleOutline className="sideBarIcon" />
                            Feedback
                        </li>
                        <li className="sideBarListItem">
                            {/* Change Icon */}
                            <LineStyle className="sideBarIcon" />
                            Messages
                        </li>
                    </ul>
                </div>

                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Staff</h3>
                    <ul className="sideBarList">
                        <li className="sideBarListItem">
                            <LineStyle className="sideBarIcon" />
                            Manage
                        </li>
                        <li className="sideBarListItem">
                            <Timeline className="sideBarIcon" />
                            Analytics
                        </li>
                        <li className="sideBarListItem">
                            <TrendingUp className="sideBarIcon" />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
