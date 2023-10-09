import React, { useContext } from 'react'
import { MyContext } from '../../../Context'
import products from '../../data'



const DatailsPage = () => {
const {valueOne} = useContext(MyContext)
console.log("ddddddd", valueOne)

const prod = products.find(pro => pro.id == valueOne)
console.log(prod)

  return (
    <div>
      <h1>datails page</h1>  
    </div>
  )
}

export default DatailsPage
