/* eslint-disable no-unused-vars */
//import { useState } from "react";
// import MainBar from "../component/MainBar";

/* eslint-disable react/prop-types */
const FullStackPage= ()=>{

    const data = [{
        name: "Top Ways to Assess Soft Skills in Full Stack Developers in 2023",
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
        
      },
      {
        name: "Top Differences: Full Stack Developer vs Software Engineer 2023",       
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
       
      },
       {
        name: "Horizontal vs Vertical Scaling for Efficient System Design",
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp",
        
      }];
      
      return (
        <div className="app">
          {
          data.map((card,idx)=>(
            <Image key={idx}
            img={card.img} 
            name={card.name}
            />
          ))
        }
        </div>
      )
    }
    export default FullStackPage;
    function Image({ img, name}) {

      return (
        <div className="card">
          <div className="img">
            <img src={img} />
          </div>
          <div className='name'>
            <h3>{name}</h3>
          </div>
        </div>
      )
    }