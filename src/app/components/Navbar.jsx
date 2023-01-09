import './navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'
import profile1 from '../img/profile-1.jpg'
import profile2 from '../img/profile-2.jpg'
import profile3 from '../img/profile-3.jpg'
import profile4 from '../img/profile-4.jpg'





const Navbar = () => {



    return (
        <div className="container">
            {
                //! ASIDE
            }
            <aside>
                <div className="top">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                        <h2 className="text-muted">EGA<span className="danger">TOR</span></h2>
                        <div className="close" id="close-btn">
                            <i className='bx bx-x-circle'></i>
                        </div>
                    </div>
                </div>

                <div className="sidebar">

                    <Link to="/dashboard">
                        <span className="material-icons-sharp active">grid_view</span>
                        <h3>Dashboard</h3>
                    </Link>

                    <Link to="/inventory">
                        <span className="material-icons-sharp">receipt_long</span>
                        <h3>Inventario</h3>
                    </Link>


                    <Link to="/admin">
                        <span className="material-icons-sharp">insights</span>
                        <h3>Análisis</h3>
                    </Link>

                    <Link to="#">
                        <span className="material-icons-sharp">inventory</span>
                        <h3>Products</h3>
                    </Link>

                    <Link to="/users">
                        <span className="material-icons-sharp">settings</span>
                        <h3>Settings</h3>
                    </Link>


                    <Link to="#">
                        <span className="material-icons-sharp">add</span>
                        <h3>Add Product</h3>
                    </Link>


                    <Link to="/">
                        <span className="material-icons-sharp">logout</span>
                        <h3>Logout</h3>
                    </Link>

                </div>
            </aside>
            {
                //! END ASIDE
            }
            {
                //! MAIN
            }
            <main>
                <h1>Dashboard</h1>

                <div className="date">
                    <input type="date" />
                </div>

                {
                    //! INSIGHTS
                }

                <div className="insights">
                    <div className="sales">
                        <span className="material-icons-sharp">analytics</span>
                        <div className="middle">
                            <div className="left">
                                <h3>Total Sales</h3>
                                <h1>$25,024</h1>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div className="number">
                                    <p>81%</p>
                                </div>
                            </div>
                        </div>
                        <small className="text-muted">Last 24 Hours</small>
                    </div>

                    {
                        //! EXPENSES
                    }

                    <div className="expenses">
                        <span className="material-icons-sharp">bar_chart</span>
                        <div className="middle">
                            <div className="left">
                                <h3>Total Expenses</h3>
                                <h1>$15,024</h1>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div className="number">
                                    <p>62%</p>
                                </div>
                            </div>
                        </div>
                        <small className="text-muted">Last 24 Hours</small>
                    </div>

                    {
                        //! INCOME
                    }

                    <div className="income">
                        <span className="material-icons-sharp">stacked_line_chart</span>
                        <div className="middle">
                            <div className="left">
                                <h3>Total Income</h3>
                                <h1>$10,024</h1>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div className="number">
                                    <p>44%</p>
                                </div>
                            </div>
                        </div>
                        <small className="text-muted">Last 24 Hours</small>
                    </div>
                </div>

                {
                    //! END OF INSIGHTS
                }

                <div className="recent-orders">
                    <h2>Recent Orders</h2>

                    <table>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Product Number</th>
                                <th>Payment</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                //!     <tr>
                                //!        <td>Foldable Mini Drone</td>
                                //!      <td>85631</td>
                                //!       <td>Due</td>
                                //!       <td className="warning">Pending</td>
                                //!       <td className="primary">Details</td>
                                //!   </tr>
                            }

                        </tbody>

                    </table>
                    <Link to="#">Show All</Link>
                </div>
            </main>
            {
                //! END MAIN
            }

            {
                //! RIGHT
            }
            <div className="right">
                <div className="top">
                    <button id="menu-btn">
                        <span className="material-icons-sharp">menu</span>
                    </button>
                    <div className="theme-toggler">
                        <span className="material-icons-sharp active">light_mode</span>
                        <span className="material-icons-sharp">dark_mode</span>
                    </div>
                    <div className="profile">
                        <div className="info">
                            <p>Hey, <b>Jorge</b></p>
                            <small className="text-muted">Admin</small>
                        </div>
                    </div>
                    <div className="profile-photo">
                        <img src={profile1} alt="Profile" />
                    </div>
                </div>
                {
                    //! STATE
                }
                <div className="recent-updates">
                    <h2>Recent Updates</h2>
                    <div className="updates">
                        <div className="update">
                            <div className="profile-photo">
                                <img src={profile2} alt="Profile-2" />
                            </div>
                            <div className="message">
                                <p><b>Mike Tyson</b>received his order of Night lion tech GPS drone</p>
                                <small className="text-muted">2 Minutes Ago</small>
                            </div>
                        </div>

                        <div className="update">
                            <div className="profile-photo">
                                <img src={profile3} alt="Profile-3" />
                            </div>
                            <div className="message">
                                <p><b>Mike Tyson</b>received his order of Night lion tech GPS drone</p>
                                <small className="text-muted">2 Minutes Ago</small>
                            </div>
                        </div>

                        <div className="update">
                            <div className="profile-photo">
                                <img src={profile4} alt="Profile-4" />
                            </div>
                            <div className="message">
                                <p><b>Mike Tyson</b>received his order of Night lion tech GPS drone</p>
                                <small className="text-muted">2 Minutes Ago</small>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    //! END STATE
                }

                {
                    //! INFO ANALYTICS
                }
                <div className="sales-analytics">
                    <h2>Sales Analytics</h2>
                    <div className="item online">
                        <div className="icon">
                            <span className="material-icons-sharp">shopping_cart</span>
                        </div>

                        <div className="right">
                            <div className="info">
                                <h3>ONLINE ORDERS</h3>
                                <small className="text-muted">Last 24 Horas</small>
                            </div>
                            <h5 className="success">+39%</h5>
                            <h3>3849</h3>
                        </div>
                    </div>

                    <div className="item offline">
                        <div className="icon">
                            <span className="material-icons-sharp">local_mall</span>
                        </div>

                        <div className="right">
                            <div className="info">
                                <h3>OFFLINE ORDERS</h3>
                                <small className="text-muted">Last 24 Horas</small>
                            </div>
                            <h5 className="danger">-17%</h5>
                            <h3>1100</h3>
                        </div>
                    </div>

                    <div className="item customers">
                        <div className="icon">
                            <span className="material-icons-sharp">person</span>
                        </div>

                        <div className="right">
                            <div className="info">
                                <h3>NEW CUSTOMERS</h3>
                                <small className="text-muted">Last 24 Horas</small>
                            </div>
                            <h5 className="success">+25%</h5>
                            <h3>849</h3>
                        </div>
                    </div>

                    {
                        //! ADD PRODUCT
                    }
                    <div className="item add-product">

                        <div>
                            <span className="material-icons-sharp">add</span>
                            <h3>Add Product</h3>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar
