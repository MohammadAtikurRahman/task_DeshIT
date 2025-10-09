import "../css/Hero.css";
// import profile from "../assets/profile.png"; // 🧠 replace with your image path

export default function Hero() {
  return (
    <section className="hero-section text-light d-flex align-items-center">
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left Side Text */}
          <div className="col-lg-7">
            <p className="intro-text mb-1">I AM <span className="text-danger">ARAFAT</span> HOSSAIN SOBUJ</p>

            <div className="info-box mb-4">
              <p className="mb-0">
                Full-Stack Mobile App Developer | 9+ Years Experience <br />
                Expert in Flutter & Node.js | 40+ Successful Projects Delivered
              </p>
            </div>

            <h1 className="fw-bold mb-3">
              Maximize Your Business <span className="highlight">Potential</span> with <br />
              Custom Web Development <span className="highlight">Solutions!</span>
            </h1>

            <p className="text-muted mb-4">
              Take your business to the next level with custom web development solutions.
            </p>

            <div className="d-flex gap-3">
              <a href="#contact" className="btn btn-primary custom-btn">Get In Touch</a>
              <a href="#cv" className="btn btn-outline-light custom-btn">Download CV</a>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="col-lg-5 text-center mt-5 mt-lg-0 position-relative">
            <div className="profile-circle mx-auto">
              {/* <img src={profile} alt="Profile" className="img-fluid rounded-circle" /> */}
              <div className="badge badge-left">30+ Clients</div>
              <div className="badge badge-right">40+ Projects</div>
            </div>

            {/* Social icons */}
            <div className="social-icons mt-4">
              <a href="#" className="icon"><i className="bi bi-whatsapp"></i></a>
              <a href="#" className="icon"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="icon"><i className="bi bi-facebook"></i></a>
              <a href="#" className="icon"><i className="bi bi-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
