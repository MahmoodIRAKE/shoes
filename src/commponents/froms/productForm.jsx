import React, { useEffect } from "react";
import '../../utils/utils.css'
import './form.css'
import {useParams} from 'react-router-dom';
import {putData,getPayload} from '../../api/firebaseApi'
import Spinner1 from "../loader/spinner1";
const ProductForm = () => {
    // const [loader,setLaoder]=React.useState(false);
    const [data,setData]=React.useState({
        id:0,
        productName:'',
        description:'',
        count:0,
        img:''
    });

    const params = useParams();
    
    useEffect(()=>{
        async function getProduct(id){
           await getPayload(id,setData);
        }
        if(params.id){
            getProduct(params.id);   
        }
    },[params.id])


    const handleChange=(e)=>{
       const{name,value}=e.target;
       setData(prevState=>({
           ...prevState,
           [name]:value
       }))
    }

    const handleSubmit=(e)=>{
       e.preventDefault();
       putData(data);
    }

    if(!data){
        return <Spinner1/>
    }

    return (
        <div className="flexing-center">
            <form className="ui form product-form" onSubmit={(e)=>handleSubmit(e)}>
                <div className="field">
                    <label>Product Name</label>
                    <input required value={data.productName} type="text" name="productName" placeholder="Product Name" onChange={(e)=>handleChange(e)} />
                </div>

                <div className="field">
                    <label>Description</label>
                    <textarea required name="description" value={data.description} placeholder="Product Description..." onChange={(e)=>handleChange(e)} ></textarea>
                </div>

                <div className="field">
                    <label>Count</label>
                    <input required type="number" value={data.count} name="count" placeholder="Count" onChange={(e)=>handleChange(e)} />
                </div>
                <div className="field">
                    <label>Img Url</label>
                    <input required type="text" value={data.img} name="img" placeholder="Image Url" onChange={(e)=>handleChange(e)}/>
                </div>
                
                <button className="ui button" type="submit">Insert</button>
               
            </form>

        </div>
    );
}
export default ProductForm;