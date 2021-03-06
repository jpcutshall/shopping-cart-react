import { useState } from 'react';
import { useQuery } from 'react-query';

import { Item } from './Item/Item'
import { Header } from './layout/Header'
import { Cart } from './Cart/Cart'

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
  const [ aboutOpen, setAboutOpen ] = useState(false)


  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products', 
    getProducts
  )
  console.log(data)

  const getTotalItems = (items: CartItemType[]) => 
    items.reduce( (ack: number, item) => ack + item.amount, 0);
   

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      // is the item already in the cart? addto count
      const isItemInCart = prev.find(item => item.id === clickedItem.id)

      if (isItemInCart) {
        return prev.map(item => 
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1}
            : item
        );
      }

      return [...prev, { ...clickedItem, amount: 1 }];
    })
  };

  const handleAboutOpen = (): void => {
    setAboutOpen(!aboutOpen)
  }

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => (
    prev.reduce( (ack, item) => {
      if (item.id === id) {
        if (item.amount === 1) return ack;
        return [...ack, { ...item, amount: item.amount - 1}]
      } else {
        return [...ack, item]
      }
    }, [] as CartItemType[])
    ))
  };

  const handleOpenCart = (): void => {
    setCartOpen(true);
  }

  const handleCloseCart = (): void => {
    setCartOpen(false);
  }

  if(isLoading) {
    return (
        <div className="App">
          <Header 
            handleOpenCart={handleOpenCart} 
            handleCloseCart={handleCloseCart} 
            getTotalItems={getTotalItems}
            cartItems={cartItems}
            handleAboutOpen={handleAboutOpen}
          />
          <Dimmer active>
            <Loader size="massive">Loading</Loader>
          </Dimmer>
        </div>
    )
  }

  if(aboutOpen) {
    return (
        <div className="App">
          <Header 
            handleOpenCart={handleOpenCart} 
            handleCloseCart={handleCloseCart} 
            getTotalItems={getTotalItems}
            cartItems={cartItems}
            handleAboutOpen={handleAboutOpen}
            
          />
          <div className="about-page">
            <h3>
              Hello! This is my first React App created with Typescript!
              It taught me a lot about TS and how much easier it makes coding with fewer errors.
              I used the fake store api to fill the data for this project!
            </h3>
            <hr />
            <button onClick={ (e) => {
              e.preventDefault()
              window.location.href='https://www.buymeacoffee.com/jpcutshall'
            }} >
              Buy me a beer! ????
            </button>
          </div>
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
          <Cart 
            cartItems={cartItems} 
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}  
            handleAboutOpen={handleAboutOpen}
          />
          <button onClick={handleCloseCart} >Hide</button>
        </Sidebar>
        

        
        <Sidebar.Pusher dimmed={cartOpen} >
          <Header 
            handleOpenCart={handleOpenCart} 
            handleCloseCart={handleCloseCart} 
            cartItems={cartItems}
            getTotalItems={getTotalItems} 
            handleAboutOpen={handleAboutOpen}
          />

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
