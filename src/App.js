import Content from "./Content";
import Reducerss from "./Reducerss";
import Home from "./Home";
import Users from "./Users";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import Oldbooks from "./Oldbooks";
import Newbooks from "./Newbooks";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Usememo from "./Usememo";
import Create from "./Create";
import Read from "./Read";
import Update from "./Update";
import Contents from "./Context2";
import Newreducer from "./Newreducer";
import Context from "./Context";
import"./App.css"



function App() {
 


  return (
    <>
    
  <BrowserRouter>
  <ul>
    <li> <Link to='/'>Home</Link></li>
    <li><Link to='/Content'>Content</Link></li>
    <li><Link to='/Reducerss'>Reducerss</Link></li>
    <li><Link to='/Users/1'>Users-1</Link></li>
    <li><Link to='/Users/2'>Users-2</Link></li>
    <li><Link to='/bookstyle/o'>Old books</Link></li>
    <li><Link to='/bookstyle/n'>New books</Link></li>
    <li><Link to='/login'>login</Link></li>
    <li><Link to='/usememo'>Usememo</Link></li>
  
 
    <li><Link to='/create'>Create</Link></li>
    <li><Link to='/read'>Read</Link></li>
    <li><Link to ='/update'>Update</Link></li> 
    <li><Link to ='/contents'>Content2</Link></li> 
    <li><Link to ='/newreducer'>Newreducer</Link></li> 
    <li><Link to ='/usecontext'>usecontext</Link></li> 
    <li><Link to ='/Context'>CContexts</Link></li> 










  </ul>
  <div className="main">
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Content" element={<Content/>}/>
    <Route path="/Reducerss" element={<Reducerss/>} />
    <Route path="/Users/:id" element={<Users/>}/>
    <Route path='/bookstyle'>
    <Route path='o' element={<Oldbooks/>}/>
    <Route path='n' element={<Newbooks/>}/>
    </Route>
    <Route path="/login" element={<Login/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="/usememo" element={<Usememo/>} />
  

    <Route path="/create" element={<Create/>} />
    <Route path="/read" element={<Read/>} />
    <Route path="/update" element={<Update/>} />
    <Route path="/contents" element={<Contents/>} />
    <Route path="/newreducer" element={<Newreducer/>} />
    {/* <Route path="/usecontext" element={<Usecontext/>} /> */}
    <Route path="/Context" element={<Context/>} />



  

  
  </Routes>
  </div>
  </BrowserRouter>
  
    </>
    
    
  );
}

export default App;
