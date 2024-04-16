import "./style.css"
import { Helmet } from 'react-helmet'
import ProductHero from '../../components/heroSection/ProductHero'
import products from '../../assets/productData/product'
import { useParams } from 'react-router-dom';
import AskQuestion from '../../components/askQuestion.jsx/AskQuestion'
import ProductPageVideo from "../../components/ProductPageVideo/ProductPageVideo";
import ProductItem from "./ProductItem";
function Products() {
    const {name}= useParams()
   const data= products.find((item)=>item.name===name)
    return (
        <>
            <Helmet>
                <title>Products - AIWIZE LABS</title>
            </Helmet>
            <ProductHero data={data}/>
            {/* <ProductPageAbout features={data}/> */}
            <ProductItem data={data}/>
            <ProductPageVideo />
            <AskQuestion />
        </>
    )
}

export default Products