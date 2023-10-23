import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import component
import App from './App';
import Product from './Layouts/product';


// import Shopping from './Layouts/shopping';
import SignUpPage from './Layouts/signUpPage';
import Cart from './Layouts/cart';
import LogInPage from './Layouts/LogInPage';
import ErrorPage from './Layouts/NotFound';
import DarkModePage from './Layouts/DarkMode';
import ProductInfo from './Layouts/productInfo';

const router = createBrowserRouter([

  // header
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/cart",
    element: <Cart/>,
  },

  // body
  {
    path:"/Product",
    element:<Product/>,
  },
  {
    path:"/SignUpPage",
    element:<SignUpPage/>,
  },
  {
    path: "/LogInPage",
    element: <LogInPage/>,
    children:[
      {
        path:"SignUpPage",
        element:<SignUpPage/>
      }
    ]
  },
  {
    path:'/ErrorPage',
    element: <ErrorPage/>
  },
  {
    path:'/DarkModePage',
    element: <DarkModePage/>
  },
  {
    path:'/productInfo', // path này đặt tên gì cũng được, để Link gọi đúng tên
    element: <ProductInfo/> // element name is always an uppercase.
  }
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
