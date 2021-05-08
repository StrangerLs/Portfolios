import "./App.css";
import emailjs from "emailjs-com";

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "gmail",
      "template_o7i9qhe",
      e.target,
      "user_FYiazU25nWSZbRBQxa8hz"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
}
function App() {
  return (
    <div className="App">
      <div className="nav">
        <a href="#projects" id="projs">
          Projects
        </a>
        <a href="#about" id="abouts">
          About Me
        </a>
        <a href="#contact" id="contacts">
          Contact Me
        </a>
      </div>

      <div id="greeting">
        <h1>Paul Moschetti</h1>
        <h2 id="softEng">Software Engineer</h2>
      </div>

      <h2 id="pHead">Projects</h2>

      <div id="projects">
        <div id="fullStack">
          <a
            href="https://fullstackcoffee.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className='titles'>Full Stack Coffee Co.</h3>
            <img
              id="fscc"
              src="https://i.imgur.com/PkJGO3m.png"
              alt="fullstack web app"
            />
            <p className='projDesc'>
              'Full Stack Coffee Co' is a MERN stack e-commerce app that sells
              specialty coffee products. This project was a collaberation
              between me and 3 others.
            </p>
          </a>
          <a
            href="https://github.com/JustinKnuth/fscc"
            target="_blank"
            rel="noreferrer"
            className='siog'
          >
            See it on GitHub
          </a>
        </div>
        <div id="RandR">
          <a
            href="https://epic-joliot-cbf23d.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className='titles'>Roots & Rosemary</h3>
            <img
              id="rr"
              src="https://i.imgur.com/a3L7YvM.png"
              alt="roots web app"
            />
            <p className='projDesc'>
              Roots & Rosemary is a react based recipe app that utilizes
              airtable as an API.{" "}
            </p>
          </a>
          <a
            href="https://github.com/StrangerLs/Roots-and-Rosemary"
            target="_blank"
            rel="noreferrer"
            className='siog'
          >
            See it on GitHub
          </a>
        </div>

        <div id="birds">
          <a
            href="https://flutterbird.surge.sh"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className='titles'>Flutter</h3>
            <img
              id="flutter"
              src="https://i.imgur.com/aOolbiS.png"
              alt="flutter web app"
            />
            <p className='projDesc'>
              Flutter is a bird lovers social media app. This app uses React in
              the front end with a Ruby-on-Rails backend
            </p>
          </a>
          <a
            href="https://github.com/StrangerLs/Flutter"
            target="_blank"
            rel="noreferrer"
            className='siog'
          >
            See it on GitHub
          </a>
        </div>
      </div>

      <div id="about">
        <h1>About Me</h1>
        <img
          id="chopstick"
          src="https://i.imgur.com/s5L8XgD.png"
          alt="paul moschetti"
        />
        <p id="post">
          Hello! My name is Paul Moschetti, I am a creative, driven, and people
          minded individual! I am transitioning from coffee professional, and
          competitor, to software engineer. Whether it’s milk texture or
          debugging, I bring the same dedication to better myself and hone my
          craft, in order to provide a refined and transformative product.
        </p>
      </div>
      <h1>Contact Me!</h1>
      <div id="contact">
        <div id="form">
          <form onSubmit={sendEmail}>
            <input type="text" name="subject" placeholder="Subject" required />
            <input type="text" name="name" placeholder="Name" required />
            <input type="text" name="email" placeholder="Email" required />
            <textarea
              rows={8}
              type="text"
              name="message"
              placeholder="Message"
              required
            />
            <button>Send</button>
          </form>
        </div>
          <div className='ilabel'>
            
            <p id='resL'>Resume </p>
            <p id='linL'>LinkedIn</p>
            <p id='gitL'>GitHub</p>
          </div>
          
        <div id="icon">
          <a
            href="https://drive.google.com/file/d/1j5ecac0ONhnuMwm2NH39FIGpRXvL7Cy2/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <img
              id="paper"
              src="https://i.imgur.com/4ao1kEv.png"
              alt="paper icon"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/paul-william-moschetti/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              id="linked"
              src="https://i.imgur.com/Nbest9W.png"
              alt="linked in icon"
            />
          </a>

          <a
            href="https://github.com/StrangerLs"
            target="_blank"
            rel="noreferrer"
          >
            <img
              id="git"
              src="https://i.imgur.com/rsYQk0h.png"
              alt="github icon"
            />
          </a>
          <div id="iconsrc">
            <div>
              Icons made by{" "}
              <a href="https://www.freepik.com" title="Freepik">
                Freepik
              </a>{" "}
              from{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </div>
            <div>
              Icons made by{" "}
              <a href="https://www.flaticon.com/authors/google" title="Google">
                Google
              </a>{" "}
              from{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </div>
            <div>
              Icons made by{" "}
              <a
                href="https://www.flaticon.com/authors/pixel-perfect"
                title="Pixel perfect"
              >
                Pixel perfect
              </a>{" "}
              from{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
