import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <h2>
          Got A Project ?<span style={{ display: "block" }}>Lets Talk</span>
        </h2>
        <a className="linkBtn" href="#">
          Tell Us Everything
        </a>
      </div>
      <div>
        <ul>
          <li>
            <a className="linkBtn">Client</a>
          </li>
          <li>
            <a className="linkBtn"> About</a>
          </li>
          <li>
            <a className="linkBtn"> News</a>
          </li>
          <li>
            <a className="linkBtn">Contact</a>
          </li>
          <li>
            <a className="linkBtn">Career</a>
          </li>
          <li>
            <a className="linkBtn"> Press</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a href="#" className="linkBtn">
              San Francisco
            </a>
          </li>
          <li>
            <a href="#" className="linkBtn">
              New York
            </a>
          </li>
          <li>
            <a href="#" className="linkBtn">
              Los Angeles
            </a>
          </li>
          <li>
            <a href="#" className="linkBtn">
              India
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a href="#" className="linkBtn">
              Newsletter
            </a>
          </li>
          <li>
            <a href="#" className="linkBtn">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="linkBtn">
              Bueno.co
            </a>
          </li>
          <li>
            <a href="#" className="linkBtn">
              Ueno.design
            </a>
          </li>
          <li>
            <a href="#" className="linkBtn">
              Ueno.store
            </a>
          </li>
          <li>
            <a href="#" className="linkBtn">
              Ueno.events
            </a>
          </li>
          <li>
            <a href="#" className="linkBtn">
              Ueno.land
            </a>
          </li>
          <li>
            <a href="#" className="linkBtn">
              Playground
            </a>
          </li>
          <li>
            <a href="#" className="linkBtn">
              The Interview
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
