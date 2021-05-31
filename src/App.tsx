import { useState } from 'react';
import { useQuery } from 'react-query';

import { Item } from './Item/Item'
import { Header } from './layout/Header'

import './App.css';
import { Dimmer, Loader } from 'semantic-ui-react'


//types
export type CartItemType = {
  id: number;
  category: string;
  title: string;
  price: number;
  description: string;
  image: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> => {
  return await (await fetch('https://fakestoreapi.com/products')).json();
}

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products', 
    getProducts
  )
  console.log(data)

  const getTotalItems = () => null;

  const handleAddToCart = (clickedItem: CartItemType) => null;

  const handleRemoveFromCart = (clickedItem: CartItemType) => null;

  if(isLoading) {
    return (
        <div>
          <Header />
          <Dimmer active>
            <Loader size="massive">Loading</Loader>
          </Dimmer>
        </div>
    )
  }

  if(error) {
    return (
      <div>
        Something went wrong...
      </div>
    )
  }
  

  return (
    
    <div className="App">
      <Header />
      <div className="items-container">
        {data?.map( item => (
          <div key={item.id} className='grid-item'>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default App;
