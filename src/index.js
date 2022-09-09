import React from "react";
import {createRoot} from 'react-dom/client'
import {BrowserRouter as Router ,Route ,Routes} from 'react-router-dom'

import App from "./App";
import AddMobile from "./components/AddMobile";
import EditMobile from "./components/EditMobile";
import MobileDetail from "./components/MobileDetail";
import './index.css'


createRoot(document.getElementById('root')).render(
    <Router>
        <Routes>
            <Route path='/' element={<App/>}></Route>
            <Route path='/addmobile' element={<AddMobile/>}></Route>
            <Route path='/mobiledetails/:id' element={<MobileDetail/>}></Route>
            <Route path='/editmobiledetails/:id' element={<EditMobile/>}></Route>
        </Routes>
    </Router>
)
