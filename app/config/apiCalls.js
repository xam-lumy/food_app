import axios from 'axios'
import { useState } from 'react'
export const getProducts = async ({queryKey}) => {
    const [_, cat] = queryKey
    
     const response = await axios.get(`https://7d9c-102-89-33-70.ngrok-free.app/api/product?category=${cat}`)
     return response.data
 }

 export const getDinner = async() => {

  const response = await axios.get('https://7d9c-102-89-33-70.ngrok-free.app/api/product?category=dinner')
 return response.data 
}

export const getProduct = async ({queryKey}) => {
    
    const [_, id] = queryKey

  const res = await axios.get('https://7d9c-102-89-33-70.ngrok-free.app/api/product/' + id)
    return res.data

   
}

// export const createNewUser = async (user) => {
  
//   const response = await axios.post ('http://localhost:8080/api/user', user)
//   return response.json()
// }
 
 


