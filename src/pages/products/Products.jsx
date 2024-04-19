import "./style.css"
import { Helmet } from 'react-helmet'
import ProductHero from '../../components/heroSection/ProductHero'
import products from '../../assets/productData/product'
import { useParams } from 'react-router-dom';
import AskQuestion from '../../components/askQuestion.jsx/AskQuestion'
import ProductPageVideo from "../../components/ProductPageVideo/ProductPageVideo";
import ProductItem from "./ProductItem";
import ProductPageAbout from "./productPageAbout/ProductPageAbout";
import { useEffect } from "react";
import ReactGA from 'react-ga';

function Products() {
    const {name}= useParams()
   const data= products.find((item)=>item.name===name)
   const productVideoContent = data.productVideoContent;

   useEffect(()=>{
     // Add the google analaytics service
     ReactGA.initialize(data.googleId); // Your GA tracking ID
     ReactGA.pageview(window.location.pathname + window.location.search);
   },[])
   
    return (
        <>
            <Helmet>
                <title>Products - AIWIZE LABS</title>
            </Helmet>
            <ProductHero data={data}/>
            {/* <ProductPageAbout features={data}/> */}
            <ProductItem data={data}/>
            <ProductPageVideo productVideoContent={productVideoContent}/>
            <AskQuestion />
        </>
    )
}

export default Products