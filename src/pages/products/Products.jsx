import React from 'react'
import "./style.css"
import { Helmet } from 'react-helmet'
import ProductHero from '../../components/heroSection/ProductHero'
import products from '../../assets/productData/product'
import { useParams } from 'react-router-dom';
import ProductPageAbout from './productPageAbout/ProductPageAbout'
function Products() {
    const {name}= useParams()
   const data= products.find((item)=>item.name===name)
    console.log(data);
    return (
        <>
            <Helmet>
                <title>Products - AIWIZE LABS</title>
            </Helmet>
            <ProductHero data={data}/>
            <ProductPageAbout features={data}/>
        </>
    )
}

export default Products