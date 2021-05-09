import AOS from "aos";
import { useEffect } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Project from "./components/project/Project";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 150,
    });
    const cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", (ev) => {
      cursor.style.left = ev.clientX + "px";
      cursor.style.top = ev.clientY + "px";
    });
  });

  return (
    <>
      <div className="App">
        <nav>
          <div data-aos="fade-up" className="logo">
            ueno.
          </div>
          <ul data-aos="fade-left">
            <li>
              <a href="#"> services </a>
            </li>
            <li>
              <a href="#"> clients </a>
            </li>
            <li>
              <a href="#"> careers </a>
            </li>
            <li>
              <a href="#"> about </a>
            </li>
            <li>
              <a href="#"> contact </a>
            </li>
          </ul>
        </nav>
        <div className="container">
          <Header />
          <div className="info">
            <p>
              Ueno is a full-service agency, busy designing and building
              beautiful digital products, brands, and experiences.
            </p>
            <section className="fazool">
              <div id="line"></div>
              <div>
                <a
                  href="#"
                  className="linkBtn"
                  style={{ width: "fit-content" }}
                >
                  Contact Us
                </a>
                <h3
                  style={{
                    fontWeight: "300",
                    fontSize: "2rem",
                    color: "black",
                    lineHeight: "35px",
                    textAlign: "start",
                  }}
                >
                  All work, all play
                  <span
                    style={{
                      fontWeight: "100",
                      display: "block",
                      fontSize: "2rem",
                      color: "gray",
                    }}
                  >
                    Selected projects
                  </span>
                </h3>
              </div>
            </section>
          </div>
          <div id="projects">
            <Project
              title="Dorsia"
              img="dorsia"
              desc="Branding, Product, Marketing"
            />
            <Project
              title="Reuters News App"
              img="Reuters"
              desc="Design, Product"
            />
            <Project
              title="Google Santa Tracker"
              img="google"
              desc="Development, Branding, Product, Marketing"
            />
            <Project
              title="ClearMotion"
              img="clear"
              desc="Development, Branding, Product"
            />
            <Project
              title="lonely planet"
              img="lonely"
              desc="Development,  Product"
            />
            <Project
              title="Redbull TV"
              img="redbull"
              desc="Development, Product"
            />
            <Project
              title="copper"
              img="copper"
              desc="Design, Branding, Marketing"
            />
            <Project
              title="Dropbox Guide"
              img="drop"
              desc="Development, Marketing"
            />
            <Project title="Cowboy" img="cowboy" desc="Design, Branding" />
            <Project
              title="Uber Design"
              img="uber"
              desc="Development, Marketing"
            />
          </div>
        </div>
        <Footer />
      </div>
      <div className="cursor"></div>
    </>
  );
}

export default App;
