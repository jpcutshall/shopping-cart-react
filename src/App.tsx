import { useState } from 'react';
import { useQuery } from 'react-query';

import { Item } from './Item/Item'
import { Header } from './layout/Header'

import './App.css';
import { Dimmer, Loader, Sidebar, Segment } from 'semantic-ui-react'


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
  const products = await fetch('https://fakestoreapi.com/products').then((res) => res.json())
  return products
}

const App = () => {
  const [ cartOpen, setCartOpen ] = useState(false)
  const [ cartItems, setCartItems ] = useState([] as CartItemType[])


  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products', 
    getProducts
  )
  console.log(data)

  const getTotalItems = (items: CartItemType[]) => 
    items.reduce( (ack: number, item) => ack + item.amount, 0);
   

  const handleAddToCart = (clickedItem: CartItemType) => null;

  const handleRemoveFromCart = (clickedItem: CartItemType) => null;

  const handleOpenCart = (): void => {
    setCartOpen(true);
  }

  const handleCloseCart = (): void => {
    setCartOpen(false);
  }

  if(isLoading) {
    return (
        <div className="App">
          <Header handleOpenCart={handleOpenCart} handleCloseCart={handleCloseCart} />
          <Dimmer active>
            <Loader size="massive">Loading</Loader>
          </Dimmer>
        </div>
    )
  }

  if(error) {
    return (
      <div className="App">
        Something went wrong...
      </div>
    )
  }

  
  

  return (
    
    <div className="App">
      
      <Sidebar.Pushable as={Segment}>

        <Sidebar
          className="sidebar"
          animation='push'
          direction='right'
          inverted='true'
          onHide={handleCloseCart}
          vertical='true'
          visible={cartOpen}
          width="very wide"
        >
          <h2>
            Shopping Cart
          </h2>
          <hr />
          cart goes here
          <button onClick={handleCloseCart} >Hide</button>
        </Sidebar>
        

        
        <Sidebar.Pusher dimmed={cartOpen} >
          <Header handleOpenCart={handleOpenCart} handleCloseCart={handleCloseCart}  />

          <div className="items-container">
          {data?.map( item => (
            <div key={item.id} className='grid-item'>
              <Item item={item} handleAddToCart={handleAddToCart} />
            </div>
          ))}
          </div>


        </Sidebar.Pusher>

      </Sidebar.Pushable>
      
    </div>
  );
}

export default App;
