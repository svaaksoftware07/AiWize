import React from 'react'
import "./style.css"
import { Helmet } from 'react-helmet'
function Products() {
    return (
        <>
        <Helmet>
            <title>Products - AIWIZE LABS</title>
        </Helmet>
        <div className="grid place-content-center h-screen bg-slate-800">
                <div className="text-center w-100 text-white text-2xl">
                    <h1 >Hello AIWize Labs </h1>
                    <h3>Products</h3>
                </div>
            </div>
        </>
    )
}

export default Products