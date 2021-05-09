import "./Header.css";

const Header = () => {
  return (
    <header>
      <div data-aos="fade-right" className="heading">
        <h5>Featured Project</h5>
        <a className="projectLink" href="/uber">
          <span>Uber Design</span>
          Looking under the hood
        </a>

        <a className="linkBtn" href="#projects">
          More Projects
        </a>
      </div>
      <div data-aos="zoom-in-up" className="video">
        <video src="/assets/videos/header.mp4" width="110%"></video>
      </div>
    </header>
  );
};

export default Header;
