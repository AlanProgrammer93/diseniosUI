import React, { useState } from 'react'
import logo from '../../assets/images/logo.png'
import profile1 from '../../assets/images/profile-1.jpg'
import profile2 from '../../assets/images/profile-2.jpg'
import profile3 from '../../assets/images/profile-3.jpg'
import profile4 from '../../assets/images/profile-4.jpg'
import plus from '../../assets/images/plus.png'

import { GrClose } from 'react-icons/gr'
import {
    MdVolumeUp,
    MdMoreVert,
    MdDashboard,
    MdReport,
    MdSettings,
    MdLogout,
    MdSunny,
    MdNotifications,
    MdModeEdit
} from 'react-icons/md'
import { FaUserAlt, FaClipboardList, FaPlus, FaMoon } from 'react-icons/fa'
import { RiFilePaper2Fill } from 'react-icons/ri'
import { IoMdAnalytics, IoMdMail } from 'react-icons/io'
import { GiHamburgerMenu } from 'react-icons/gi'

import { Orders } from '../../orders'

import './DashboardResponsive.css'
import { useEffect } from 'react'


const DashboardResponsive = () => {
    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <div className='container_Dash'>
            {/* {
                showSidebar && ( */}
                    <aside className='aside_Dash'>
                        <div className='toggle_Dash'>
                            <div className='logo_Dash'>
                                <img src={logo} />
                                <h2>Asmr<span className='danger_Dash'>Prog</span></h2>
                            </div>
                            <div className='close_Dash' id='close_btn' onClick={() => setShowSidebar(false)}>
                                <GrClose />
                            </div>
                        </div>

                        <div className='sidebar_Dash'>
                            <a href='#'>
                                <MdDashboard />
                                <h3>Dashboard</h3>
                            </a>
                            <a href='#'>
                                <FaUserAlt />
                                <h3>Users</h3>
                            </a>
                            <a href='#'>
                                <RiFilePaper2Fill />
                                <h3>History</h3>
                            </a>
                            <a href='#' className='active_Dash'>
                                <IoMdAnalytics />
                                <h3>Analytics</h3>
                            </a>
                            <a href='#'>
                                <IoMdMail />
                                <h3>Tickets</h3>
                                <span className='message_count_Dash'>27</span>
                            </a>
                            <a href='#'>
                                <FaClipboardList />
                                <h3>Sale List</h3>
                            </a>
                            <a href='#'>
                                <MdReport />
                                <h3>Reports</h3>
                            </a>
                            <a href='#'>
                                <MdSettings />
                                <h3>Settings</h3>
                            </a>
                            <a href='#'>
                                <FaPlus />
                                <h3>New Login</h3>
                            </a>
                            <a href='#'>
                                <MdLogout />
                                <h3>Logout</h3>
                            </a>
                        </div>
                    </aside>
           {/*      )
            } */}

            <main className='main_Dash'>
                <h1>Analytics</h1>
                <div className='analyse_Dash'>
                    <div className='sales_Dash'>
                        <div className='status_Dash'>
                            <div className='info_Dash'>
                                <h3>Total Sales</h3>
                                <h1>$65,024</h1>
                            </div>
                            <div className='progress_Dash'>
                                <svg>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div className='percentage_Dash'>
                                    <p>+81%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='visits_Dash'>
                        <div className='status_Dash'>
                            <div className='info_Dash'>
                                <h3>Site Visit</h3>
                                <h1>24,981</h1>
                            </div>
                            <div className='progress_Dash'>
                                <svg>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div className='percentage_Dash'>
                                    <p>-48%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='searches_Dash'>
                        <div className='status_Dash'>
                            <div className='info_Dash'>
                                <h3>Searches</h3>
                                <h1>14,147</h1>
                            </div>
                            <div className='progress_Dash'>
                                <svg>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div className='percentage_Dash'>
                                    <p>+21%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='new_users_Dash'>
                    <h2>New Users</h2>
                    <div className='user_list_Dash'>
                        <div className='user_Dash'>
                            <img src={profile2} />
                            <h2>Jack</h2>
                            <p>54 Min Ago</p>
                        </div>
                        <div className='user_Dash'>
                            <img src={profile3} />
                            <h2>Alan</h2>
                            <p>4 Hours Ago</p>
                        </div>
                        <div className='user_Dash'>
                            <img src={profile4} />
                            <h2>Sofi</h2>
                            <p>12 Hours Ago</p>
                        </div>
                        <div className='user_Dash'>
                            <img src={plus} />
                            <h2>More</h2>
                            <p>New User</p>
                        </div>
                    </div>
                </div>

                <div className='recent_orders_Dash'>
                    <h2>Recent Orders</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Course Name</th>
                                <th>Course Number</th>
                                <th>Payment</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Orders.map(order => (
                                    <tr key={order.productNumber}>
                                        <td>{order.productName}</td>
                                        <td>{order.productNumber}</td>
                                        <td>{order.paymentStatus}</td>
                                        <td
                                            className={
                                                `${order.status === 'Declined'
                                                    ? 'danger_Dash'
                                                    : order.status === 'Pending'
                                                        ? 'warning_Dash'
                                                        : 'primary_Dash'}`
                                            }
                                        >
                                            {order.status}
                                        </td>
                                        <td className='primary_Dash'>Details</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <a href='#'>Show All</a>
                </div>
            </main>


            <div className='right_section_Dash'>
                <div className='nav_Dash'>
                    <button id='menu_btn_Dash' onClick={() => setShowSidebar(true)}>
                        <GiHamburgerMenu />
                    </button>
                    <div className='dark_mode_Dash'>
                        <MdSunny className='active_Dash' />
                        <FaMoon />
                    </div>
                    <div className='profile_Dash'>
                        <div className='info_Dash'>
                            <p>Hey, <b>Reza</b></p>
                            <small className='text_muted_Dash'>Admin</small>
                        </div>
                        <div className='profile_photo_Dash'>
                            <img src={profile1} />
                        </div>
                    </div>
                </div>
                <div className='user_profile_Dash'>
                    <div className='logo_Dash'>
                        <img src={logo} />
                        <h2>AsmrProg</h2>
                        <p>Fullstack Web Developer</p>
                    </div>
                </div>
                <div className='reminders_Dash'>
                    <div className='header_Dash'>
                        <h2>Reminders</h2>
                        <MdNotifications />
                    </div>
                    <div className='notification_Dash'>
                        <div className='icon_Dash'>
                            <MdVolumeUp />
                        </div>
                        <div className='content_Dash'>
                            <div className='info_Dash'>
                                <h3>Workshop</h3>
                                <small className='text_muted_Dash'>
                                    08:00 AM - 12:00 PM
                                </small>
                            </div>
                            <MdMoreVert />
                        </div>
                    </div>
                    <div className='notification_Dash deactive_Dash'>
                        <div className='icon_Dash'>
                            <MdModeEdit />
                        </div>
                        <div className='content_Dash'>
                            <div className='info_Dash'>
                                <h3>Workshop</h3>
                                <small className='text_muted_Dash'>
                                    08:00 AM - 12:00 PM
                                </small>
                            </div>
                            <MdMoreVert />
                        </div>
                    </div>
                    <div className='notification_Dash add_reminder_Dash'>
                        <div>
                            <FaPlus />
                            <h3>Add Reminder</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardResponsive