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
          background: #c7ecee;
          padding: 10px; 30px;
        }

        a {
          font-size: 16px;
          font-weight: 600;
          margin: 10px;
          text-decoration: none;
          color: #34495e
        }
      `}</style>
    </div>
    
  )
}

export default NavLayout;