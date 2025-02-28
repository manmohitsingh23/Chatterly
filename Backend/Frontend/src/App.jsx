import React, { useState } from 'react';
import Left from './home/left/left';
import Right from './home/right/right';
import Logout from './home/left1/Logout';
import { useAuth } from './context/AuthProvider';
import { Toaster } from 'react-hot-toast';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  const [authUser] = useAuth();
  const [drawerOpen, setDrawerOpen] = useState(true);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              <div className="flex h-screen">
                {/* Pass toggleDrawer as a prop to Logout */}
                <Logout toggleDrawer={toggleDrawer} />
                
                <div className={`drawer ${drawerOpen ? 'lg:drawer-open' : ''} h-screen`}>
                  {/* Drawer toggle input */}
                  <input
                    id="my-drawer-2"
                    type="checkbox"
                    checked={drawerOpen}
                    onChange={toggleDrawer}
                    className="drawer-toggle hidden"
                  />
                  <div className={`drawer-content h-screen w-full ${drawerOpen ? 'lg:w-[]' : 'w-full'}`}>
                    {/* Page content */}
                    <Right />
                  </div>
                  <div className={`drawer-side ${drawerOpen ? 'block' : 'hidden'} absolute lg:relative w-[92vw] h-full bg-gray-800`}>
                    <label
                      htmlFor="my-drawer-2"
                      aria-label="close sidebar"
                      className="drawer-overlay hidden"
                      onClick={toggleDrawer}
                    ></label>
                    <Left />
                  </div>
                </div>
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        {/* Login and Signup routes */}
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />} />
      </Routes>

      {/* Toast notifications */}
      <Toaster />
    </>
  );
};

export default App;
