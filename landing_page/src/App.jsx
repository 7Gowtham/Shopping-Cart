import React from 'react'
import Navbar from './components/Navbar'
import Masthead from './components/Masthead'
import Iconsgrid from './components/Iconsgrid'
import Imageshow from './components/Imageshow'
import Testimonials from './components/Testimonials'
import FormTail from './components/FormTail'
import Footer from './components/Footer'


function App() {
  let iconsData = [
    {
      title: "Fully Responsive",
      desc: "This theme will look great on any device, no matter the size!",
      icon: "bi-window"
    },
    {
      title: "Bootstrap 5 Ready",
      desc: "Featuring the latest build of the new Bootstrap 5 framework!",
      icon: "bi-layers"
    },
    {
      title: "Easy to Use",
      desc: "Ready to use with your own content, or customize the source files!",
      icon: "bi-terminal"
    }
  ]

  let imageData = [
    {
      image: "bg-showcase-1.jpg",
      index: "0",
      heading: "Fully Responsive Design",
      details: "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!"
    },
    {
      image: "bg-showcase-2.jpg",
      index: "1",
      heading: "Updated For Bootstrap 5",
      details: "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!"
    },
    {
      image: "bg-showcase-3.jpg",
      index: "2",
      heading: "Easy to Use & Customize",
      details: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!"
    }
  ]

  let reviews = [
    {
      img: "testimonials-1.jpg",
      name: "Margaret E.",
      stat: "This is fantastic! Thanks so much guys!"
    },
    {
      img: "testimonials-2.jpg",
      name: "Fred S.",
      stat: "Bootstrap is amazing. I've been using it to create lots of super nice landing pages."
    },
    {
      img: "testimonials-3.jpg",
      name: "Sarah W.",
      stat: "Thanks so much for making these free resources available to us!"
    }
  ]

  return <>
    <Navbar />
    <Masthead />
    <section className="features-icons bg-light text-center">
      <div className="container">
        <div className="row">
          {
            iconsData.map((e, i) => {
              // console.log(e,i)
              return <Iconsgrid iconsData={e} key={i} />
            })
          }
        </div>
      </div>
    </section>
    <section className="showcase">
      <div className="container-fluid p-0">
        {
          imageData.map((e, i) => {
            console.log(i, e)
            return <Imageshow imageData={e} key={i} />
          })
        }
      </div>
    </section>
    <section className="testimonials text-center bg-light">
      <div className="container">
        <h2 className="mb-5">What people are saying...</h2>
        <div className="row">
          {
            reviews.map((e, i) => {
              return <Testimonials reviews={e} key={i} />
            })
          }
        </div>
      </div>
    </section>

    <section className="call-to-action text-white text-center" id="signup">
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <h2 className="mb-4">Ready to get started? Sign up now!</h2>
              <FormTail />
          </div>
        </div>
      </div>
    </section>
    
    <Footer />
  </>
}

export default App


