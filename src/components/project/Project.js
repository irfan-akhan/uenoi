import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./Project.css";
const Project = ({ title, desc, img }) => {
  // useEffect(() => {
  //   const cursor = document.querySelector(".cursor");
  //   document.addEventListener("mousemove", (ev) => {
  //     cursor.style.left = ev.pageX + "px";
  //     cursor.style.top = ev.pageY + "px";
  //   });
  // }, []);
  return (
    <>
      <div data-aos="fade-up" className="project">
        <img src={`/assets/images/${img}.jpg`} alt="project icon" />
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </>
  );
};

export default Project;
