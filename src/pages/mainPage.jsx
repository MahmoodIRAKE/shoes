import React,{useEffect} from "react";
import '../utils/utils.css'
import './style.css'
import { getPayload } from "../api/firebaseApi";
import Spinner1 from "../commponents/loader/spinner1";
import ProductCard from "../commponents/cards/productCard";
const MainPage=()=>{
    
    const [data,setData]=React.useState([]);
    useEffect(()=>{
        async function getProduct(){
           await getPayload('',setData);
        }
       getProduct();
    },[data.length])
    if(!data){
        return <Spinner1/>
    }

    const showCards=()=>{
        return Object.values(data).map((item)=>{
          return <ProductCard obj={item} key={item.id}/>
        })
    }

    return(
      <div className="flexing-center container space">
         {showCards()}
        
      </div>
    );
}
export default MainPage;