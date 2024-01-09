import React from 'react'
import { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa' // Import FaTrashAlt from react-icons/fa module

const Content = ({item,handle,cret,remove}) => {
  
  // const [name,setname]=useState('SSC');
  // const handleclick =()=>{
  //   const names=["kk","mm","nn"];
  //   const int=Math.floor(Math.random()*3);
  //   setname(names[int]);
  // }
  
  return (
    <main className='scrollbb'>
        
        {/* <p>
          {name};
        </p> */}<div>
        <label>Enter Item name to add </label>
        <input type="text" id='nmae'/>
        <button className= "button create" onClick={cret}>create item</button>
        </div>
        <div className='contentl'>
        {/* <button className= "button clickme" onClick={handleclick}>click me</button> */}
        
        
        {item.length ?(
        <ul>
          {
            console.log("printing items", item)}
          {item.map((item)=>(
            <li className="item" key={item.id} style={{display: "flex"}}>
              <input
              type='checkbox'
              onChange={()=>{handle(item.id)}}
              checked={item.checked} 
              />
              <label 
              style={(item.checked)?{textDecoration:'line-through'}:null}
              onClick={()=>{handle(item.id)}}
              > {item.name} </label>
              <FaTrashAlt role="button" tabIndex="0" onClick={()=>{remove(item.id)}}/>
            </li>
          ))}
        </ul>):(<p>List Empty</p>)}
        
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
  </div>
    </main>
  )
}

export default Content