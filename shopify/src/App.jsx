import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  let data = [
    {   
        sale: false,
        image: "nothing2a.jpg",
        product_name: "Nothing 2A",
        old_price: null,
        new_price: "$349.00",
        ratings: "0"
    },
    {   
        sale: true,
        image: "oneplus12.png",
        product_name: "OnePlus 12 R",
        old_price: "$647.00",
        new_price: "$597.00",
        ratings: "5"
    },
    {
      sale: false,
      image: "x14.jpg",
      product_name: "Xiaomi 14 Ultra",
      old_price: "$1499.00",
      new_price: "$1449.00",
      ratings: "0"
    },
    {
      sale: true,
      image: "Iphone14.jpg",
      product_name: "Iphone 14",
      old_price: null,
      new_price: "$879.00",
      ratings: "5"
    },
    {
      sale: true,
      image: "pocof6.jpg",
      product_name: "Poco F6",
      old_price: "$453.00",
      new_price: "$369.00",
      ratings: "0"
    },
    {
      sale: false,
      image: "ce4.jpg",
      product_name: "One Plus Nord CE4",
      old_price: null,
      new_price: "$120.00 - $280.00",
      ratings: "0"
    },
    {
      sale: true,
      image: "asus10.jpg",
      product_name: "Asus ROG 10",
      old_price: "$324.00",
      new_price: "$300.00",
      ratings: "5"
    },
    {
      sale: false,
      image: "s24.jpg",
      product_name: "Samsung S24 Ultra",
      old_price: null,
      new_price: "$1300.00",
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