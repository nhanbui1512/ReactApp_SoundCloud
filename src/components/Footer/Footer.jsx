import './Footer.css';
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="column">
          <h3>Column 1</h3>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
          </ul>
        </div>

        <div className="column">
          <h3>Column 2</h3>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
          </ul>
        </div>

        <div className="column">
          <h3>Column 3</h3>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
          </ul>
        </div>
      </footer>

    </>
  )
}
export default Footer;