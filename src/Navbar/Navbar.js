import React from 'react'

const Navbar = () => {
  return (
    <>
        <div>
        <div className="navbar">
          <ul>
            <li>
              <a href="#">home</a>
            </li>
            <li>
            <a href="#">Company Historical Data & analysis</a>
            <ul className="dropdown">
              <li>
                <a href="#">Sales Items</a>
              </li>
              <li>
                <a href="#">Users Details</a>
              </li>
              <li>
                <a href="#">List of Loyal Customers</a>
              </li>
              <li>
                <a href="#">Data Description Graphs/Monthly</a>
              </li>
              <li>
                <a href="#">Data Description Graphs/yearly</a>
              </li>
            </ul>
            </li>
            <li>
              <a href="#">Discount Distribution</a>
              <ul className="dropdown">
                <li><a>Derived Algorithum</a></li>
                <li><a>Applied Derived Algo Results</a></li>
              </ul>
            </li>
            <li>
              <a href="#">Sales Production</a>
              <ul className="dropdown">
                <li><a>XG Boost Algorithum</a></li>
                <li><a>XG Boost Algo Generated Results</a></li>
                <li><a>Random Forest Algo Generated Results</a></li>
                <li><a>Show Avg of Predicted Results</a></li>
              </ul>
            </li>
            <li>
              <a href="#">Discount Distribution Toolset</a>
              <ul className="dropdown">
                <li><a>Wish List</a></li>
                <li><a>Wish List/Add to Wishlist</a></li>
                <li><a>Wish List/Show Wishlist</a></li>
                <li><a>Categorical Discount Clculation</a></li>
                <li><a>Discount Divison by 3</a></li>
                <li><a>Return Gift</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar