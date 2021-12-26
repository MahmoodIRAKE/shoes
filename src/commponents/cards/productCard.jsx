/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { removeData } from "../../api/firebaseApi";
const ProductCard = ({ obj}) => {
   
    return (
        <div>
            <div className="ui card">
                <div className="image">
                    <img src={obj.img} alt='profile' />
                </div>
                <div className="content">
                    <a className="header">{obj.productName}</a>
                    <div className="meta">
                        <span className="date">Count: {obj.count}</span>
                    </div>
                    <div className="description">
                       {obj.description}
                    </div>
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                    <Link to={`/product/:${obj.id}`} className="item ui basic green button">
                       Update
                     </Link>
                        
                    <div className="ui basic red button" onClick={()=>{removeData(obj.id)}}>Delete</div>
                    </div>
                </div>
            </div>
        </div>

    );

}
export default ProductCard;