import React, { useEffect, useState } from 'react'
import BaseURL from "../../BaseURL.js";
import StarsRating from '../Shared/StarsRating.js';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

function AdminAllProducts() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [ allProduct , setAllProduct ]= useState([])
//   console.log(allProduct)

  const getAlProduct = async ()=>{
      try {
              const response = await BaseURL.get('/api/products')
              setAllProduct(response.data.data)
          } catch (error) {
              console.log(error.response.data.message)
          }
  }
  
  useEffect(()=>{
      getAlProduct();
  },[])

  const singleMove = ((item) => {
    navigate(`/MainProductDetails/${item.id}`, {
        state: {
            item
        }
    })
})

  return(
    <>
        <div className="row mx-auto pt-3 ">
            {
            allProduct.map((item)=>{
                return(
                    
                        <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3 ">
                            <hr/>
                            <div className="" >
                                <img src={item.imageCover} className="card-img-top " style={{"height": "15rem"}}
                                alt="" 
                                onClick={() => singleMove(item)}/>
                                <div className="card-body">
                                    <div className="">
                                        <p className="card-text m-0">{item.title}</p>
                                        
                                        <p className="card-text m-0">
                                            <sup className="" style={{fontSize:"12px"}}> EGP </sup> 
                                            <span className="fs-4 fw-semibold">{item.price}</span>
                                            <sup className="" style={{fontSize:"12px"}}> 00 </sup> 
                                        </p>
                                        
                                        <StarsRating Rating={item.ratingAverage}/>
                                        <span className='px-3 text-danger'><FontAwesomeIcon icon={faTrashCan} /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                )})
            }
                
        </div>
    </>
)
}

export default AdminAllProducts