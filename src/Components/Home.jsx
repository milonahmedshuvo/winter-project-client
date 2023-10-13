import React from 'react'
import Bannar from './Bannar/Bannar'
import Category from './Category/Category'
import Products from './Products/Products'
import FutureProducts from './FutureProducts/FutureProducts'



const Home = () => {


  return (
    <div>
        <Bannar></Bannar> 
         <Category></Category> 
         <Products></Products>
         <FutureProducts></FutureProducts>
    </div>
  )
}

export default Home
