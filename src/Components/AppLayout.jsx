import React from 'react'
import { Navbar } from './Shared/Navbar'
import { Footer } from './Shared/Footer'

export const AppLayout = () => {
    return (
        <div className="app-layout">
            <Navbar />
            <div className="content">
                {/* Your page content goes here */}
            </div>
            <Footer />
        </div>
    )
}
