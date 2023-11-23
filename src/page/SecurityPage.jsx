/* eslint-disable react/prop-types */


const SecurityPage= ()=>{

    const data = [{
        name: "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
        img: "https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
        
      },
      {
        name: "What Is Hacking? Types of Hacking & More",
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
       
      },
       {
        name: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
        img: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png",
        
      }]
      
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
    
    export default SecurityPage;
    function Image({ img, name}) {

        return (
          <div className='card'>
            <div className="img">
              <img src={img} />
            </div>
            <div className='name'>
              <h3>{name}</h3>
            </div>
          </div>
        )
      }


