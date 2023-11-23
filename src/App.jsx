//eslint-disable-next-line react/prop-types

import './App.css'
import { Route, Routes } from 'react-router-dom'
import All from './router/All'
import Career from './router/Career'
import CyberSecurity from './router/CyberSecurity'
import DataScience from './router/DataScience'
import FullStack from './router/FullStack'
import WorkSpace from './component/workspace'


function App() 
{
  return (
    <div className="app">
    
    <Routes> 
      <Route exact path="/"element={<WorkSpace/>}/>
      <Route path="/doc"element={<All/>}/>
      <Route path="/doc/FullStack"element={<FullStack/>}/>
      <Route path="/doc/Science"element={<DataScience/>}/>
      <Route path="/doc/Security"element={<CyberSecurity/>}/>
      <Route path="/doc/Career"element={<Career/>}/>
    
    </Routes>

    </div>
  )
}

export default App;
