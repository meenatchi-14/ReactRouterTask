import MainBar from "../component/MainBar";

/* eslint-disable react/prop-types */
const AllPage = ()=>
{

  const data = [{
      name: "Best 19 Product-Based Companies for Civil Engineers in India",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Product-Based-Companies-for-Civil-Engineers-in-India.webp",
      
    },
    {
      name: "7 Best High-Paying IT Jobs For Arts Students",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Best-High-Paying-IT-Jobs-For-Arts-Students.webp",
     
    },
     {
      name: "Top Ways to Assess Soft Skills in Full Stack Developers in 2023",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
      
    }];
    
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
  export default AllPage;
  
    
 
  



  
    
    // const data = [{
    //     name: "Coding Canvas: A Structured & Powerful Approach to Learn Programming",
    //     img: "https://www.codingdojo.com/blog/wp-content/uploads/learncodefaster-1280x720.jpg",
        
    //   },
    //   {
    //     name: "8 Best Books to Learn Motion Graphics Design [Must-Reads]",
    //     img: "https://static1.smartbear.co/smartbearbrand/media/images/blog/what%E2%80%99s-the-best-programming-language-to-learn-first.png?ext=.png",
       
    //   },
    //    {
    //     name: "Best Books to Learn Full-Stack Development",
    //     img: "https://www.shutterstock.com/image-vector/online-education-concept-screen-teacher-260nw-1690892077.jpg",
        
    //   }];
    // const[myData,setMyData]=useState(data);
    //   console.log(myData)
    //   return (
    //     <div className="all">
    //       <Main myData={myData} setMyData={setMyData}/>
    //     </div>
    //   )
    // }    