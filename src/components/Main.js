import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import tmsuite from '../images/tmsuite.jpg'
import rr from '../images/rr.jpg'
import doctracks from '../images/doctracks.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Again, I am Ian Jasper Manapul. I am a graduate of Bachelor of Science in Information Technology that specializes in Web and Mobile applications.
            <br/>
            <br/>
            I am a JavaScript enthusiast, experienced with advanced JavaScript libraries namely React JS, React Native and Node JS.
            <br/>
            <br></br>
            You can download my CV <a href="https://drive.google.com/file/d/1KVbpoW6VoYs9G936_5TUuZaO72oevII_/view?usp=sharing"><b>here</b></a>
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
            <h2 className="major">Work / Portfolio</h2>
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
              <h2><a href="https://tmsuite.trackme.com.ph/">trackMe Suite</a></h2>
            </div>
            <img style={{ width: "100%"}} src={tmsuite} alt="" />
          </div>
          <p>
            This project is a logistics application that is used to monitor the current and logged locations of different trucks
            under different trips.
            It is also used to handle the resources (ex. Users, Geofences) of our clients.
            <br/><br />
            My duties :
            <br/>
            <ul>
              <li>Recreate the UI/UX prototype into a pixel-perfect, fully-functioning web application developed in React JS</li>
              <li>Develop the API used by clients to schedule trips that is monitored with the application</li>
            </ul>
          </p>
          <p>
            Tech stack used: <b>React JS</b>, <b>Node JS</b> and <b>Apollo GraphQL</b>
          </p>
          <hr/>
          <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
              <h2><a href="https://play.google.com/store/apps/details?id=com.ride.rideradar">RideRadar</a></h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
              <img style={{ width: "300px", height: "600px", marginBottom: "32px"}} src={rr} alt="" />
            </div>
          </div>
          <p>
            RideRadar is basically the "All the ride-hailing apps in one". 
            It aggregates the prices from different ride-hailing apps that would
            give ease to users to determine which app has the best price
            <br/><br />
            My duties :
            <br/>
            <ul>
              <li>Recreate the UI/UX prototype into a fully-functioning mobile application developed in React Native</li>
              <li>Develop the backend system using Node JS with Apollo GraphQL</li>
              <li>Integrate Service Provider's API into the system</li>
            </ul>
          </p>
          <p>
            Tech stack used: <b>React Native</b>, <b>Node JS </b>  and <b>Apollo GraphQL</b>
          </p>

          <hr/>

          <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
              <h2><a href="https://doctracks.dict.gov.ph/Records/Index">Doctracks</a></h2>
            </div>
              <img style={{ width: "100%"}} src={doctracks} alt="" />
          </div>
          <p>
            DocTracks is used internally by Department of Information and Communications Technology (DICT) to track the progress of 
            documents that revolves from beureau to beureau
            <br/><br />
            My duties :
            <br/>
            <ul>
              <li>Develop the web application using C# (MVC) and JavaScript</li>
            </ul>
          </p>
          <p>
            Tech stack used: <b>C# (MVC)</b> and <b>JavaScript</b>
          </p>

          <hr/>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="https://www.linkedin.com/in/manapuljasper/" className="icon fa-linkedin">
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/manapuljasper"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
