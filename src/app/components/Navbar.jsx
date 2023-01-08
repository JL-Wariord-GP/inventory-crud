import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'



const Navbar = () => {



    return (
        <div>
            <h1>Hello is Navbar !!!!</h1>

            <nav className='sidebar'>

                <header>

                    <div className='image-text'>
                        <span className='image'>
                            <img src={'https://i.pinimg.com/736x/1f/04/9a/1f049ada9040b9311078aa28110badde.jpg'} alt="Logo" />
                        </span>

                        <div className='text header-text'>
                            <span className='name'>Name Inventario</span>
                        </div>
                    </div>

                    <i className='bx bx-chevron-right toggle'></i>

                    <div className='menu-bar'>
                        <div className='menu'>

                            <li className='search-box'>
                                <i className='bx bx-search icon'></i>
                                <input type="search" placeholder='Search ...' />
                            </li>


                            <ul className='menu-links'>

                                <li className='nav-link'>
                                    <Link to='/home'>
                                        <i className='bx bx-home-alt icon'></i>
                                        <span className='text nav-text'>Home</span>
                                    </Link>
                                </li>

                                <li className='nav-link'>
                                    <Link to='/Dashboard'>
                                        <i className='bx bxs-dashboard icon' ></i>
                                        <span className='text nav-text'>Dashboard</span>
                                    </Link>
                                </li>

                                <li className='nav-link'>
                                    <Link to='/Users'>
                                        <i className='bx bxs-user-detail icon'></i>
                                        <span className='text nav-text'>Users</span>
                                    </Link>
                                </li>

                                <li className='nav-link'>
                                    <Link to='/Inventory'>
                                        <i className='bx bxs-store icon'></i>
                                        <span className='text nav-text'>Inventory</span>
                                    </Link>
                                </li>

                                <li className='nav-link'>
                                    <Link to='/Admin'>
                                        <i className='bx bxs-user-circle icon'></i>
                                        <span className='text nav-text'>Admin</span>
                                    </Link>
                                </li>


                            </ul>
                        </div>


                        <div className='bottom-content'>

                            <li className='nav-link'>
                                <Link to='/'>
                                    <i className='bx bx-log-out icon'></i>
                                    <span className='text nav-text'>Logout</span>
                                </Link>
                            </li>

                            <li className='mode'>
                                <div className='moon-sun'>
                                    <i className='bx bx-moon icon moon'></i>
                                    <i className='bx bx-sun icon sun'></i>
                                </div>
                                <span className='mode-text text'>Dark Mode</span>

                                <div className="toggle-switch">
                                    <span className="switch"></span>
                                </div>

                            </li>



                        </div>



                    </div>

                </header>
            </nav>
        </div>
    )
}

export default Navbar
