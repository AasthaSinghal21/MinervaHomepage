import React from 'react'
import './Community.css';

const arrow = <svg xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 -960 960 960" width="17"><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/></svg>
const Community = () => {
  return (
    <div className='community'>
      <div className='left-comm'>
        <h1> Join our Community</h1>
        <button className="custom-btn btn-16">{arrow}</button>
      </div>

      <div className='right-comm'>
        <div className="slide slide-1">
          <img src="https://images.unsplash.com/photo-1521931961826-fe48677230a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
        </div>
        <div className="slide slide-2">
          <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
        </div>
        <div className="slide slide-3">
          <img src="https://images.unsplash.com/photo-1620915283474-18ef99f53a5f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Community
