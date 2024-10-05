import {Outlet, Link} from 'react-router-dom';

const Layout = () => {
    return (
        <>
        <nav className="bg-blue-500 shadow-md z-50">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/shopping">Shopping</Link>
                </li>
                <li>
                    <Link to="/nopage">No Page</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
        </>
    )
};
export default Layout;