import *  as React from 'react';
import Link from 'next/link'

function NavLayout(){
  return (
    <div className="nav_container">
      <Link href="/"><a>Home</a></Link>
      <style jsx>{`
        .nav_container {
          display: flex;
          flex-direction: row;
          align-self: center;
          justify-content: flex-start; 
          margin: 0px 0px;
          background: #34495e;
          padding: 10px 30px;
          position: fixed;
          width: 100%;
          z-index: 100;
          top: 0;
          left: 0;
        }

        a {
          font-size: 16px;
          font-weight: 600;
          margin: 10px;
          text-decoration: none;
          color: #fff;
        }
      `}</style>
    </div>
    
  )
}

export default NavLayout;