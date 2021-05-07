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
      <div class="nav">
        <a href="#projects">Projects</a>
        <a href="#about">About Me</a>
        <a href="#contact">Contact Me</a>
      </div>

      <div>
        <h1>Paul Moschetti</h1>
        <h2>Software Engineer</h2>
      </div>

      <div id="projects">
        <h2>Projects</h2>
        <a href="https://fullstackcoffee.netlify.app/" target="_blank">
          <h3>Full Stack Coffee Co.</h3>
          <img id="fscc" src="https://i.imgur.com/PkJGO3m.png" />
          <p>
            'Full Stack Coffee Co' is a MERN stack e-commerce app that sells
            specialty coffee products. This project was a collaberation between
            me and 3 others.
          </p>
        </a>
        <a href="https://github.com/JustinKnuth/fscc" target="_blank">
          See it on GitHub
        </a>
        <a href="https://epic-joliot-cbf23d.netlify.app" target="_blank">
          <h3>Roots & Rosemary</h3>
          <img id="rr" src="https://i.imgur.com/a3L7YvM.png" />
          <p>
            Roots & Rosemary is a react based recipe app that utilizes airtable
            as an API.{" "}
          </p>
        </a>
        <a
          href="https://github.com/StrangerLs/Roots-and-Rosemary"
          target="_blank"
        >
          See it on GitHub
        </a>

        <a href="https://flutterbird.surge.sh" target="_blank">
          <h3>Flutter</h3>
          <img id="flutter" src="https://i.imgur.com/aOolbiS.png" />
          <p>
            Flutter is a bird lovers social media app. This app uses React in
            the front end with a Ruby-on-Rails backend
          </p>
        </a>
        <a href="https://github.com/StrangerLs/Flutter" target="_blank">
          See it on GitHub
        </a>
      </div>

      <div id="about">
        <h1>About Me</h1>
        <img id="chopstick" src="https://i.imgur.com/s5L8XgD.png" />
        <p>
          Hello! My name is Paul Moschetti, I am creative, driven, and people
          loving! I am transitioning from coffee professional, and competitor,
          to software engineer. Whether it’s milk texture or debugging, I bring
          the same dedication to better myself and hone my craft, in order to
          provide a refined and transformative product.
        </p>
      </div>

      <div id="contact">
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
        <div id="icon">
          <img id="paper" src="https://i.imgur.com/4ao1kEv.png" />
          <img id="linked" src="https://i.imgur.com/Nbest9W.png" alt="" />
          <img id="git" src="https://i.imgur.com/rsYQk0h.png" alt="" />
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
  );
}

export default App;
