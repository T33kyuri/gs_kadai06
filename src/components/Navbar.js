import React from 'react'
import { Link } from "react-router-dom";


const Navbar = ({ isAuth }) => {
  return (
    <div className='bg-blue-500 text-white'>
      <div className='flex justify-end '>
          <Link to="/">
            <div className="w-40 p-4 text-center hover:bg-yellow-500">
              HOME 
          </div></Link>
          <Link to="/about">
            <div className="w-40 p-4 text-center hover:bg-yellow-500">
              About 
          </div></Link>
          <Link to="/contact">
            <div className="w-40 p-4 text-center hover:bg-yellow-500">
              Contact 
          </div></Link>
          <Link to="/kadai">
            <div className="w-40 p-4 text-center hover:bg-yellow-500">
              kadai06 
          </div></Link>
          <Link to="/poke">
            <div className="w-40 p-4 text-center hover:bg-yellow-500">
              pokemon
          </div></Link>
      </div>
      <nav>
        {/* ログイン・ログアウト機能の検討 */}
        {/* {!isAuth ? (
            <Link to="/login"> LOGIN </Link>
          ) : (
          <>
            <Link to="/createpost"> POST </Link>
            <Link to="/logout"> LOGOUT </Link>
          </>
          )} */}
      </nav>
    </div>


  )
}

export default Navbar