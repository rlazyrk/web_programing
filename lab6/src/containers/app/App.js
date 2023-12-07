import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom';
import Landing_page from "./landing_page/landing_page";
import Catalog from "./catalog_page/catalog";
import ItemPage from "./item_page/item_page";

function App() {

    return (
        <Router>
            <div>
                <Routes>
                    <Route path="" element={<Landing_page/>} />
                    <Route path="/catalog" element={<Catalog/>}/>
                    <Route path="/catalog/:id" element={<ItemPage/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
