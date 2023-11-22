import {React, useState, useEffect} from 'react'

function Nav() {
  const [isAuth, setIsAuth] = useState(true);
  useEffect(() => {
    if (localStorage.getItem('access_token') !== null) {
       setIsAuth(false); 
     }
   }, [isAuth]);
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="min-h-full">
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={toggleDropdown}
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-lg md:hidden"
              >
                MinedFul
              </button>
              <div className={`hidden md:block ml-10 flex items-baseline space-x-4 ${isAuth && 'md:space-x-6'}`}>
                <a
                  href="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-blue-500 rounded-md px-3 py-2 text-lg font-lg"
                >
                  MinedFul
                </a>
                {isAuth ? (
                  <a
                    href="dash"
                    className="text-gray-300 hover:bg-gray-700 hover:text-blue-500 rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Dashboard
                  </a>
                ) : null}
                {isAuth ? (
                  <a
                    href="report"
                    className="text-gray-300 hover:bg-gray-700 hover:text-blue-500 rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Reports
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </nav>
      {isDropdownOpen && (
        <div className="md:hidden ml-10 flex flex-col space-y-2">
          {isAuth ? (
            <a href="dash" className="text-gray-800 hover:text-blue-500 text-md font-medium">
              Dashboard
            </a>
          ) : null}
          {isAuth ? (
            <a href="report" className="text-gray-800 hover:text-blue-500 text-md font-medium">
              Reports
            </a>
          ) : null}
        </div>
      )}
    </div>
  
  )
}

export default Nav
