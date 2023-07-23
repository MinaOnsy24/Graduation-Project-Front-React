import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import BaseURL from '../../BaseURL.js'


function AllOrders() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [ allOrders , setAllOrders ]= useState([])
  // console.log(allOrders)

  const getAlOrders = async ()=>{
    try {
      const response =await  BaseURL.get(`https://amazon-project.onrender.com/api/orders` ,{ headers:{'Authorization': `Bearer ${token}`}})
      setAllOrders(response.data.data)

    } catch (error) {
      alert(error.response.data.message)
    }

  }

  useEffect(()=>{
    getAlOrders();
  },[])

const showDetalisItem = ((item) => {
  navigate(`/Admin/Orders/${item._id}`, {
      state: {
          item
      }
  })
})
  return (
    <div>
        <div className='my-4 pro-text'>Manage all Orders</div>
        <Row className='justify-content-start'>
          {
            allOrders.map((item,index)=>{
              return(
                <>
                  <Col sm="12">
                    <div key={index} className='cart-item-body my-2 px-1 d-flex' onClick={() => showDetalisItem(item)}>

                        <img className='rounded-3' width="160px" height="197px" src={item.cartItems[0].product.imageCover} alt="" />
                        
                        <div className='w-100'>
                            <Row className='justify-content-between mx-1'>
                                <Col sm="12" className='d-flex flex-row  justify-content-between'>
                                    <div className='d-inline pt-2 cat-text'>Number Order {index+1}</div>
                                    <div className='d-inline pt-2 cat-text del-text'>delete</div>
                                </Col>
                            </Row>
                            <Row className='justify-content-center mt-2 mx-1'>
                                <Col sm='12' className='d-flex flex-row justify-content-start'>
                                    <div className='d-inline cat-title'>
                                        Order by <span className='fw-bold'>{item.user.name} </span>  
                                    </div>
                                </Col>
                            </Row>

                            <Row className='justify-content-between mx-1'>
                                <Col sm='12' className='d-flex flex-row justify-content-between'>
                                    <div className='d-inline pt-2 d-flex'>
                                        <span className='cat-text pt-1 d-inline me-1'>Total Price : </span>
                                        <span className='d-inline pt-1 brand-text'> {item.totalOrderPrice} EGY</span>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                    </div>
                  </Col>
                </>
              )
            })
          }
        </Row>
    </div>
  )
}

export default AllOrders