import React from "react";

const Portfolio = () => {
  return (
    <section id="main">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <section>
              <header className="major">
                <h2>My Portfolio</h2>
              </header>
              <div className="row">
                <div className="col-4 col-6-medium col-12-small">
                  <section className="box">
                    <a href="#" className="image featured">
                      <img src="images/pic02.jpg" alt="" />
                    </a>
                    <header>
                      <h3>Ipsum feugiat et dolor</h3>
                    </header>
                    <p>
                      Lorem ipsum dolor sit amet sit veroeros sed amet blandit
                      consequat veroeros lorem blandit adipiscing et feugiat
                      phasellus tempus dolore ipsum lorem dolore.
                    </p>
                    <footer>
                      <ul className="actions">
                        <li>
                          <a href="#" className="button alt">
                            Find out more
                          </a>
                        </li>
                      </ul>
                    </footer>
                  </section>
                </div>
                <div className="col-4 col-6-medium col-12-small">
                  <section className="box">
                    <a href="#" className="image featured">
                      <img src="images/pic03.jpg" alt="" />
                    </a>
                    <header>
                      <h3>Sed etiam lorem nulla</h3>
                    </header>
                    <p>
                      Lorem ipsum dolor sit amet sit veroeros sed amet blandit
                      consequat veroeros lorem blandit adipiscing et feugiat
                      phasellus tempus dolore ipsum lorem dolore.
                    </p>
                    <footer>
                      <ul className="actions">
                        <li>
                          <a href="#" className="button alt">
                            Find out more
                          </a>
                        </li>
                      </ul>
                    </footer>
                  </section>
                </div>
                <div className="col-4 col-6-medium col-12-small">
                  <section className="box">
                    <a href="#" className="image featured">
                      <img src="images/pic04.jpg" alt="" />
                    </a>
                    <header>
                      <h3>Consequat et tempus</h3>
                    </header>
                    <p>
                      Lorem ipsum dolor sit amet sit veroeros sed amet blandit
                      consequat veroeros lorem blandit adipiscing et feugiat
                      phasellus tempus dolore ipsum lorem dolore.
                    </p>
                    <footer>
                      <ul className="actions">
                        <li>
                          <a href="#" className="button alt">
                            Find out more
                          </a>
                        </li>
                      </ul>
                    </footer>
                  </section>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
