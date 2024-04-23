import './App.css';
import Home from './component/home';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import SingleImg from './component/SingleImg'
import Allimgs from './component/Allimgs'
import Nav from './component/Nav'

function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export const RoutingApp = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/:id",
    element: <SingleImg />
  },
  {
    path: "/allimg",
    element: <Allimgs />
  }
])



export default App;

