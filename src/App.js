import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'
import Jobs from './Jobs/Jobs'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'element={<Dashboard/>} />
                <Route path='/jobs' element={<Jobs />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App