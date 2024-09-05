import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import Feeds from "./components/pages/Feeds";
import Community from "./components/pages/Community";
import Finance from "./components/pages/Finance";
import About from "./components/pages/About";
import Login from "./components/pages/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <div className="w-screen h-screen bg-[#1e1e1e]">
            <Login />
          </div>
        </>
      ),
    },
    {
      path: "/community",
      element: (
        <>
          <div className="w-screen h-screen bg-[#1e1e1e]">
            <Navbar />
            <SideNav />
            <Community />
          </div>
        </>
      ),
    },
    {
      path: "/finance",
      element: (
        <>
          <div className="w-screen h-screen bg-[#1e1e1e]">
            <Navbar />
            <SideNav />
            <Finance />
          </div>
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <div className="w-screen h-screen bg-[#1e1e1e]">
            <Navbar />
            <SideNav />
            <About />
          </div>
        </>
      ),
    },
    {
      path: "/feeds",
      element: (
        <>
          <div className="w-screen h-screen bg-[#1e1e1e]">
            <Navbar />
            <SideNav />
            <Feeds />
          </div>
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
