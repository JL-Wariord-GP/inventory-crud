import React from 'react'
import { Link } from 'react-router-dom'

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
                    </div>

                    <div className='text header-text'>
                        <span className='name'>Name Inventario</span>
                    </div>

                    <ul>
                        <li>
                            <Link to='/home'>Home</Link>
                        </li>
                        <li>
                            <Link to='/dashboard'>Dashboard</Link>
                        </li>
                        <li>
                            <Link to='/users'>Users</Link>
                        </li>
                        <li>
                            <Link to='/inventory'>Inventory</Link>
                        </li>
                        <li>
                            <Link to='/admin'>Admin</Link>
                        </li>
                        <li>
                            <Link to='/'>Logout</Link>
                        </li>
                    </ul>
                </header>
            </nav>
        </div>
    )
}

export default Navbar