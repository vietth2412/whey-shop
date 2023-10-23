import React from 'react';
import {Link} from 'react-router-dom';


// import Logo from '/Users/HUY/Documents/Project 1/landing/src/Image/appliedNutrition-log.png'; // đg dẫn tuyệt đối rồi



const signUpPage = () => {
    return(
        <>
        {/* <Outlet/>/ */}
            <div className="signUp-page">
                <div className="signUp--form">
                    <div className="signUp--box">
                        <div className="box">
            
                            <div className="box_title">
                                <h1> Create Your Account </h1>
                                <span> Let's get started with your 7 days free trial. </span>
                            </div>
                            <form action="" className="box_form">
                                <div className="top--box">
                                    <input type="text"  name="email" required  className="email-input" placeholder=" "/>
                                    <label htmlFor="email" className="email"> Email </label>
                                </div>

                                <div className="bottom--box">
                                    <input type="password"  name="psw" required className="psw-input" placeholder=" "/>
                                    <label htmlFor="psw" className="password"> Password</label>
                                </div>

                                <div className="bottom--box">
                                    <input type="password"  name="psw-repeat" required className="psw-input" placeholder=" " />
                                    <label htmlFor="psw" className="password"> Password</label>
                                </div>

                            </form>
                            <div className="box_btn">
                                <button type="submit" className="sg-up-btn"> Create Now </button>
                                <span> Back To Home Page ?
                                    <Link   rel="stylesheet"
                                            className="lg-in"
                                            to= '/'
                                            > Home
                                    </Link>
                                </span>
                                {/* <button type="submit" className="lg-in-btn"> Log In </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
// const page = createBrowserRouter([
//     {
//       path: "/LogIn",
//       element: {LogInPage},
//     },
//   ]);
// <RouterProvider router={page} />

export default signUpPage;