import './App.css'
import Card from "./product/card"
import Section from "../src/product/section"
import Region from "../src/product/region"
import React from 'react'
import data from "./assets/data.json"

function App() {
         
  return (
         <>
           <div className='container'>
               <div>
                  <div className="head">
                     <Section />
                     <Region />
                  </div>
                  <div className='card_cont'>
                    {
                       data.map((el, index) => {
                        return <Card key = {index} data = {el}></Card>
                       })
                    }
                  </div>
               </div>
           </div>
         </>
  )
}

export default App;
