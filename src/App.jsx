import { useState } from "react";
import "./App.css";

const classStyles = [
  {
    title: "Punjabi",
    tag: "Bhangra & Giddha",
    image: "/punjabi.webp",
    text: "High-energy footwork, powerful expressions and dhol beats that bring everyone together."
  },
  {
    title: "Pahadi",
    tag: "Himalayan Folk",
    image: "/pahadi.webp",
    text: "Beautiful circular movements inspired by the folk traditions and celebrations of the hills."
  },
  {
    title: "Hip-Hop",
    tag: "Street & Freestyle",
    image: "/hiphop.webp",
    text: "Groove, isolations and freestyle fundamentals designed to build confidence and individuality."
  },
  {
    title: "Bollywood",
    tag: "Cinematic Fusion",
    image: "/bollywood.webp",
    text: "Expressive choreography mixing Indian movement with contemporary film and stage styles."
  }
];

const schedule = [
  ["Mon", "12:00 – 13:00", "Kathak / Fusion", "Beginner"],
  ["Tue", "12:30 – 13:30", "Bharatanatyam", "Beginner"],
  ["Wed", "12:00 – 13:00", "Semi-Classical", "Intermediate"],
  ["Thu", "12:00 – 13:30", "Bollywood Fusion", "Advanced"],
  ["Fri", "18:30 – 19:30", "Kathak / Fusion", "Advanced"],
  ["Sat", "10:00 – 11:00", "Semi-Classical", "Beginner"]
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [trialOpen, setTrialOpen] = useState(false);

  const [trialForm, setTrialForm] = useState({
    name: "",
    contact: "",
    email: "",
    message: "",
    date: "",
    time: ""
  });

  const closeMenu = () => setMenuOpen(false);

  const updateTrialField = (field) => (e) =>
    setTrialForm((prev) => ({
      ...prev,
      [field]: e.target.value
    }));

  const sendToWhatsApp = (e) => {
    e.preventDefault();

    const {
      name,
      contact,
      email,
      message,
      date,
      time
    } = trialForm;

    const text = `New Trial Class Request
Name: ${name}
Contact: ${contact}
Email: ${email || "-"}
Preferred Date: ${date || "-"}
Preferred Time: ${time || "-"}
Message: ${message || "-"}`;

    window.open(
      `https://wa.me/?text=${encodeURIComponent(text)}`,
      "_blank"
    );

    setTrialOpen(false);
  };

  return (
    <div className="page">
      <div className="site-container">

        <header className="navbar">
          <a href="#home" className="logo" onClick={closeMenu}>
            <img
              src="/logo.webp"
              alt="Sunny Studios logo"
              className="logo-img"
            />

            <div className="logo-text">
              <strong>SUNNY</strong>
              <span>STUDIOS</span>
            </div>
          </a>

          <nav className="desktop-nav">
            <a className="active" href="#home">Home</a>
            <a href="#classes">Classes</a>
            <a href="#about">About</a>
            <a href="#faculty">Faculty</a>
            <a href="#contact">Contact</a>
            <a href="#enroll" className="enroll-btn">
              Enroll Now <span>↗</span>
            </a>
          </nav>

          <button
            className={`menu-button ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`mobile-nav ${menuOpen ? "show" : ""}`}>
            {["Home", "Classes", "About", "Faculty", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                >
                  {item}
                </a>
              )
            )}

            <a
              href="#enroll"
              className="mobile-enroll"
              onClick={closeMenu}
            >
              Enroll Now ↗
            </a>
          </nav>
        </header>

        <main>

          <section className="hero" id="home">
            <div className="hero-orb orb-one" />
            <div className="hero-orb orb-two" />
            <div className="hero-grid" />

            <div className="hero-content">
              <div className="eyebrow">
                <span /> Move. Express. Belong.
              </div>

              <h1>
                Dance with
                <br />
                <em>your own rhythm.</em>
              </h1>

              <p className="hero-copy">
                A vibrant space to learn, create and fall in love with
                movement — from Indian folk traditions to today's urban styles.
              </p>

              <div className="hero-actions">
                <a href="#classes" className="primary-btn">
                  Explore Classes <span>→</span>
                </a>

                <a href="#about" className="text-btn">
                  Our story <span>↗</span>
                </a>
              </div>
            </div>

            <div className="hero-image">
              <div className="image-ring" />

              <img
                src="/landing.webp"
                alt="Dancers at Sunny Studios"
              />

              <div className="floating-note note-top">
                <b>01</b>
                <span>
                  Find your
                  <br />
                  flow
                </span>
              </div>

              <div className="floating-note note-bottom">
                <span className="play">▶</span>
                <span>
                  Feel the
                  <br />
                  music
                </span>
              </div>
            </div>

            <div className="scroll-cue">
              SCROLL TO EXPLORE <span>↓</span>
            </div>
          </section>

          <section className="intro-strip">
            <div className="marquee">
              <span>MOVE WITH PURPOSE</span>
              <b>✦</b>
              <span>LEARN WITH JOY</span>
              <b>✦</b>
              <span>EXPRESS YOURSELF</span>
              <b>✦</b>
              <span>MOVE WITH PURPOSE</span>
            </div>
          </section>

          <section className="welcome-section" id="about">
            <div className="section-label">
              <span>01</span> About the studio
            </div>

            <div className="welcome-inner">
              <div className="welcome-content">
                <p className="kicker">
                  More than a dance class
                </p>

                <h2>
                  A place to find <em>your beat.</em>
                </h2>

                <p>
                  Welcome to Sunny Studios — a warm, creative and inspiring
                  space where dance becomes a way to express, connect and grow.
                </p>

                <p>
                  Whether you're taking your first steps or sharpening your
                  skills, every class is designed to make you feel confident,
                  curious and alive.
                </p>

                <a href="#contact" className="outline-btn">
                  Meet the studio <span>↗</span>
                </a>
              </div>

              <div className="welcome-image">
                <div className="image-caption">
                  <strong>01</strong>
                  <span>
                    Movement
                    <br />
                    with meaning
                  </span>
                </div>

                <img
                  src="/2ndlanding.webp"
                  alt="Dancers performing together"
                />
              </div>
            </div>
          </section>

          <section className="styles-section" id="classes">
            <div className="section-label light">
              <span>02</span> Explore classes
            </div>

            <div className="section-head">
              <p className="kicker">
                Choose your energy
              </p>

              <h2>
                Find a style
                <br />
                <em>that feels like you.</em>
              </h2>

              <p className="sub">
                From powerful Punjabi beats to smooth Bollywood fusion,
                there is a rhythm waiting for you.
              </p>
            </div>

            <div className="cards-grid">
              {classStyles.map((style, index) => (
                <article className="style-card" key={style.title}>
                  <div
                    className={`card-media ${
                      style.title === "Punjabi" ? "media-white" : ""
                    }`}
                  >
                    <img
                      src={style.image}
                      alt={`${style.title} dance style`}
                      loading="lazy"
                    />

                    <span className="card-number">
                      0{index + 1}
                    </span>

                    <span className="badge">
                      {style.tag}
                    </span>
                  </div>

                  <div className="card-body">
                    <h3>{style.title}</h3>

                    <p>{style.text}</p>

                    <a href="#enroll">
                      Join this class <span>↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="schedule-section">
            <div className="schedule-copy">
              <p className="kicker">
                Plan your week
              </p>

              <h2>
                There is always
                <br />
                <em>time to dance.</em>
              </h2>

              <p>
                Pick a class, show up with an open mind and let the music
                do the rest.
              </p>

              <div className="schedule-pill">
                <span /> New students welcome
              </div>
            </div>

            <div className="schedule-table-wrap">
              <div className="table-heading">
                <span>Weekly schedule</span>
                <span>2026</span>
              </div>

              <div className="schedule-table">
                {schedule.map((row) => (
                  <div
                    className="schedule-row"
                    key={`${row[0]}-${row[2]}`}
                  >
                    <strong>{row[0]}</strong>
                    <span>{row[1]}</span>
                    <b>{row[2]}</b>
                    <small>{row[3]}</small>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="faculty-section" id="faculty">
            <div className="section-label">
              <span>03</span> Your teachers
            </div>

            <div className="faculty-grid">
              <div className="faculty-image">
                <div className="faculty-accent">
                  TEACH
                  <br />
                  WITH
                  <br />
                  HEART.
                </div>

                <img
                  src="/teacher.webp"
                  alt="Sunny Studios instructor and dancers"
                />
              </div>

              <div className="faculty-content">
                <p className="kicker">
                  Guidance that moves you
                </p>

                <h2>
                  Learn from people
                  <br />
                  who <em>live the art.</em>
                </h2>

                <p>
                  Our teaching approach keeps technique, expression and
                  enjoyment in the same room. Every dancer gets room to
                  learn at their own pace.
                </p>

                <div className="faculty-points">
                  <div>
                    <span>01</span>
                    <b>Technique first</b>
                    <p>Build strong foundations that last.</p>
                  </div>

                  <div>
                    <span>02</span>
                    <b>Expression always</b>
                    <p>
                      Find confidence in your own movement.
                    </p>
                  </div>
                </div>

                <a href="#contact" className="primary-btn dark">
                  Talk to us <span>→</span>
                </a>
              </div>
            </div>
          </section>

          <section className="cta-section" id="enroll">
            <div className="cta-orb" />

            <div className="cta-inner">
              <p className="kicker">
                Ready when you are
              </p>

              <h2>
                Your next move
                <br />
                <em>starts here.</em>
              </h2>

              <p>
                Come try a class. No perfect steps required — just bring
                your energy.
              </p>

              <button
                type="button"
                className="primary-btn"
                onClick={() => setTrialOpen(true)}
              >
                Book a trial class <span>→</span>
              </button>
            </div>
          </section>

          <section className="contact-section" id="contact">
            <div className="contact-copy">
              <p className="kicker">
                Let's connect
              </p>

              <h2>
                Have a question?
                <br />
                <em>Let's talk.</em>
              </h2>

              <p>
                For custom dance classes, special requests or training
                sessions, reach out to us on any of these.
              </p>
            </div>

            <div className="contact-tiles">
              <a className="contact-tile" href="#">
                <span className="tile-icon tile-whatsapp">
                  ◈
                </span>

                <span className="tile-text">
                  <strong>WhatsApp</strong>
                  <span>-</span>
                </span>
              </a>

              <a className="contact-tile" href="#">
                <span className="tile-icon tile-email">
                  ✉
                </span>

                <span className="tile-text">
                  <strong>Email</strong>
                  <span>-</span>
                </span>
              </a>

              <a
                className="contact-tile"
                href="https://www.instagram.com/iamsunnyvasudev?stkn=MWF1aW85bG83eHJyMg=="
                target="_blank"
                rel="noreferrer"
              >
                <span className="tile-icon tile-instagram">
                  ◎
                </span>

                <span className="tile-text">
                  <strong>Instagram</strong>
                  <span>@iamsunnyvasudev</span>
                </span>
              </a>

              <a
                className="contact-tile"
                href="https://youtu.be/bb12aoi6N1M"
                target="_blank"
                rel="noreferrer"
              >
                <span className="tile-icon tile-youtube">
                  ▶
                </span>

                <span className="tile-text">
                  <strong>YouTube</strong>
                  <span>Sunny Vasudev</span>
                </span>
              </a>
            </div>
          </section>

        </main>

        <footer className="footer">
          <div className="footer-top">
            <a href="#home" className="logo">
              <img
                src="/logo.webp"
                alt="Sunny Studios logo"
                className="logo-img"
              />

              <div className="logo-text">
                <strong>SUNNY</strong>
                <span>STUDIOS</span>
              </div>
            </a>

            <p>
              Move freely. Learn deeply.
              <br />
              Live vibrantly.
            </p>

            <div className="footer-links">
              <a href="#classes">Classes</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Sunny Studios</span>
            <span>Made for people who love to move.</span>
            <a href="#home">Back to top ↑</a>
          </div>
        </footer>

      </div>

      <div
        className={`trial-overlay ${trialOpen ? "show" : ""}`}
        onClick={() => setTrialOpen(false)}
      />

      <aside
        className={`trial-drawer ${trialOpen ? "open" : ""}`}
      >
        <div className="trial-drawer-head">
          <h3>Book a trial class</h3>

          <button
            className="trial-close"
            onClick={() => setTrialOpen(false)}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <form
          className="trial-form"
          onSubmit={sendToWhatsApp}
        >
          <label>
            Name
            <input
              type="text"
              required
              value={trialForm.name}
              onChange={updateTrialField("name")}
            />
          </label>

          <label>
            Contact number
            <input
              type="tel"
              required
              value={trialForm.contact}
              onChange={updateTrialField("contact")}
            />
          </label>

          <label>
            Email (optional)
            <input
              type="email"
              value={trialForm.email}
              onChange={updateTrialField("email")}
            />
          </label>

          <label>
            Preferred date
            <input
              type="date"
              value={trialForm.date}
              onChange={updateTrialField("date")}
            />
          </label>

          <label>
            Preferred time
            <input
              type="time"
              value={trialForm.time}
              onChange={updateTrialField("time")}
            />
          </label>

          <label>
            Message
            <textarea
              rows="3"
              value={trialForm.message}
              onChange={updateTrialField("message")}
            />
          </label>

          <button
            type="submit"
            className="primary-btn"
          >
            Send request <span>→</span>
          </button>
        </form>
      </aside>
    </div>
  );
}

export default App;