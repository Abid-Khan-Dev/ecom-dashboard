import { Link, Outlet } from "react-router-dom";

function Layout() {
  // const linkClass = ({ isActive }) =>
  //   `block px-4 py-2 rounded ${isActive ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-200"
  //   }`;

  return (
    <div className="flex min-h-screen bg-gray-50">


      {/* Sidebar start */}
      <div className="w-56 border-r bg-white p-4 space-y-1">
        <Link to="/products" className='block px-4 py-2 rounded text-gray-700 hover:bg-gray-200'>
          Products
        </Link>
        <Link to="/categories" className='block px-4 py-2 rounded text-gray-700 hover:bg-gray-200'>
          Categories
        </Link>
      </div>
      {/* Sidebar end */}


      {/* Har page ka main area */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>


    </div>
  );
}

export default Layout;
