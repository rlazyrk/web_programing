import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom';
import Landing_page from "./landing_page/landing_page";
import Catalog from "./catalog_page/catalog";
import ItemPage from "./item_page/item_page";
import {Provider} from "react-redux";
import CartPage from "./cart_page/cart_page";
import {store, persistor} from './cart_page/Redux/store';
import FormikPage from "./cart_page/formik/formik_page";
import SuccessFormik from "./cart_page/formik/success_formik";
import Register from "./register_page/register";
import Login from "./login_page/login";
import ProtectedRoute from "./protectedRoute";

function App() {

    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Routes>
                        <Route element={<ProtectedRoute/>}>
                            <Route path="" element={<Landing_page/>}/>
                            <Route path="/catalog" element={<Catalog/>}/>
                            <Route path="/catalog/:id" element={<ItemPage/>}/>
                            <Route path="/cart" element={<CartPage/>}/>
                            <Route path="/cart_formik" element={<FormikPage/>}/>
                            <Route path="/formik_success" element={<SuccessFormik/>}/>
                        </Route>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
