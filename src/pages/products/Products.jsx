import React from 'react'
import "./style.css"
import { Helmet } from 'react-helmet'
import ProductHero from '../../components/heroSection/ProductHero'
function Products() {
    return (
        <>
            <Helmet>
                <title>Products - AIWIZE LABS</title>
            </Helmet>
            <ProductHero/>
        </>
    )
}

export default Products