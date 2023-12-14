import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom';
import Landing_page from "./landing_page/landing_page";
import Catalog from "./catalog_page/catalog";
import ItemPage from "./item_page/item_page";
import {Provider} from "react-redux";
import CartPage from "./cart_page/cart_page";
import { store, persistor } from './cart_page/Redux/store';

function App() {

    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Routes>
                        <Route path="" element={<Landing_page/>} />
                        <Route path="/catalog" element={<Catalog/>}/>
                        <Route path="/catalog/:id" element={<ItemPage/>} />
                        <Route path="/cart" element={<CartPage/>}/>
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
