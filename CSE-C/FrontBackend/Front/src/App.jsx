import React, { useEffect,useState } from 'react'
import './App.css'
import axios from 'axios'

const App = () => {
  const [products,setproducts]=useState([]);



  useEffect(()=>{
    const fetchdata=async()=>{
      const apidata= await axios.get("http://localhost:3000/api");
      setproducts(apidata.data)

    }
    fetchdata()
  },[])
  return (
    <div>
      <h1>All the product details are given below:</h1>
      {/* {JSON.stringify(products)} //to show q product summary */}
      {products.map((product)=>{
        return (
          <div className='div'>
            <h1 className='title'>{product.title}</h1>
            <img className='image' src={product.thumbnail}></img>
            </div>
        )
      })}
    </div>
  )
}

export default App
