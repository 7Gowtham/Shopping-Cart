import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  let data = [
    {   
        sale: false,
        product_name: "Fancy Product",
        old_price: null,
        new_price: "$40.00 - $80.00",
        ratings: "0"
    },
    {   
        sale: true,
        product_name: "Special Item",
        old_price: "$20.00",
        new_price: "$18.00",
        ratings: "5"
    },
    {
      sale: true,
      product_name: "Sale Item",
      old_price: "$50.00",
      new_price: "$25.00",
      ratings: "0"
    },
    {
      sale: false,
      product_name: "Popular Item",
      old_price: null,
      new_price: "$40.00",
      ratings: "5"
    },
    {
      sale: true,
      product_name: "Sale Item",
      old_price: "$50.00",
      new_price: "$25.00",
      ratings: "0"
    },
    {
      sale: false,
      product_name: "Fancy Product",
      old_price: null,
      new_price: "$120.00 - $280.00",
      ratings: "0"
    },
    {
      sale: true,
      product_name: "Special Item",
      old_price: "$20.00",
      new_price: "$18.00",
      ratings: "5"
    },
    {
      sale: false,
      product_name: "Popular Item",
      old_price: null,
      new_price: "$40.00",
      ratings: "5"
    }
  ]
  let [cart, setCart] = useState(0)

  return <>
    <Navbar cart={cart} />
    <Header />
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {
            data.map((e,i) => {
              return <Card data = {e} setCart={setCart} key={i}/>
            })
          }
        </div>
      </div>
    </section>
    <Footer/>
  </>
}

export default App