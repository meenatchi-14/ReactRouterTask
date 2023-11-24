/* eslint-disable react/prop-types */
import MainBar from "../component/MainBar";

const SecurityPage= ()=>{

    const data = [{
        name: "8 Different Types of Cybersecurity and Threats Involved",
        img: "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
        
      },
      {
        name: "What Is Hacking? Types of Hacking & More",
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
       
      },
      {
        name: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
        img: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png",
       
      },
    ]
      
      return (
        <div className="app">
          {
          data.map((card,idx)=>(
            <MainBar key={idx}
            img={card.img} 
            name={card.name}
            />
          ))
        }
        </div>
      )
    }
    
    export default SecurityPage;
    

