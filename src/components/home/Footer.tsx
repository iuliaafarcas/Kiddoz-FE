import React from "react";

function Footer() {
  return (
    <section id="footer">
      <div className="container">
        <div className="row">
          <div className="col-8 col-12-medium">
            <section>
              <header>
                <h2>Blandit nisl adipiscing</h2>
              </header>
              <ul className="dates">
                <li>
                  <span className="date">
                    Jan <strong>27</strong>
                  </span>
                  <h3>
                    <a href="#">Lorem dolor sit amet veroeros</a>
                  </h3>
                  <p>
                    Ipsum dolor sit amet veroeros consequat blandit ipsum
                    phasellus lorem consequat etiam.
                  </p>
                </li>
                <li>
                  <span className="date">
                    Jan <strong>23</strong>
                  </span>
                  <h3>
                    <a href="#">Ipsum sed blandit nisl consequat</a>
                  </h3>
                  <p>
                    Blandit phasellus lorem ipsum dolor tempor sapien tortor
                    hendrerit adipiscing feugiat lorem.
                  </p>
                </li>
                <li>
                  <span className="date">
                    Jan <strong>15</strong>
                  </span>
                  <h3>
                    <a href="#">Magna tempus lorem feugiat</a>
                  </h3>
                  <p>
                    Dolore consequat sed phasellus lorem sed etiam nullam dolor
                    etiam sed amet sit consequat.
                  </p>
                </li>
                <li>
                  <span className="date">
                    Jan <strong>12</strong>
                  </span>
                  <h3>
                    <a href="#">Dolore tempus ipsum feugiat nulla</a>
                  </h3>
                  <p>
                    Feugiat lorem dolor sed nullam tempus lorem ipsum dolor sit
                    amet nullam consequat.
                  </p>
                </li>
                <li>
                  <span className="date">
                    Jan <strong>10</strong>
                  </span>
                  <h3>
                    <a href="#">Blandit tempus aliquam?</a>
                  </h3>
                  <p>
                    Feugiat sed tempus blandit tempus adipiscing nisl lorem
                    ipsum dolor sit amet dolore.
                  </p>
                </li>
              </ul>
            </section>
          </div>
          <div className="col-4 col-12-medium">
            <section>
              <header>
                <h2>What's this all about?</h2>
              </header>
              <a href="#" className="image featured">
                <img src="images/pic10.jpg" alt="" />
              </a>
              <p>
                This is <strong>Dopetrope</strong> a free, fully responsive
                HTML5 site template by <a href="http://twitter.com/ajlkn">AJ</a>{" "}
                for <a href="http://html5up.net/">HTML5 UP</a> It's released for
                free under the{" "}
                <a href="http://html5up.net/license/">
                  Creative Commons Attribution
                </a>{" "}
                license so feel free to use it for any personal or commercial
                project &ndash; just don't forget to credit us!
              </p>
              <footer>
                <ul className="actions">
                  <li>
                    <a href="#" className="button">
                      Find out more
                    </a>
                  </li>
                </ul>
              </footer>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
