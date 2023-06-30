import ProductDetailScreen from "../screens/ProductDetailScreen";
import { DataContext } from "../context/context";
import React,{useContext, useState} from "react";
import ProductDetailModel from "../models/ProductDetailModel";



const ProductDetailController =()=>{

    const{productInfo}=useContext(DataContext)
    
   
    const[nn,setNN]=useState(new ProductDetailModel(
        productInfo.name,
        productInfo.price,
        productInfo.thumbnail,
        productInfo.description,
        productInfo.rating

    ))


  return(
    <ProductDetailScreen detPro={nn} />
  )
}

export default ProductDetailController
