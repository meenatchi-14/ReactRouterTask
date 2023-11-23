/* eslint-disable no-undef */
import { useNavigate } from "react-router-dom";
export default function TopBar() {
 const navigate=useNavigate();
  return (
    <div className="navbar bg-base-100">
    <div className="flex-1 navbar-start">
      <div role="tablist" className="tabs tabs-bordered">
  <a  role="tab" className="tab tab-bordered hover tab-active"  >
  <span className="text-red-400 tab-content"onClick={()=>navigate("/")}>ALL</span>
    </a> 
  <a role="tab"className="tab tab-bordered  hover">
  <span className="text-red-400"
      onClick={()=>navigate("/doc/FullStack")}>FULL STACK DEVELOPMENT</span>
    </a> 
  <a role="tab" className="tab tab-bordered  hover">
  <span className="text-red-400"
      onClick={()=>navigate("/doc/Science")}>DATA SCIENCE</span>
  </a>
  <a role="tab"className="tab tab-bordered  hover">
  <span className="text-red-400"
      onClick={()=>navigate("/doc/Security")}>CYBER SECURITY</span>
  </a>
  <a role="tab" className="tab tab-bordered hover ">
  <span className="text-red-400"
      onClick={()=>navigate("/doc/Career")}>CAREER</span>
  </a>
  </div>
   </div>
   </div>
  
 

    
  );
}




