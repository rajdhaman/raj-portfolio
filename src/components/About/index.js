import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import {
  faBootstrap,
  faGitAlt,
  faJs,
  faNodeJs,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <div className="scrollable-paragraphs">
            
          <p>
            I’m a passionate full-stack developer with hands-on experience
            building scalable web applications and backend systems. My strengths
            include Node.js, Express.js, NestJS, React, TypeScript, and Vue.js.
            I’ve improved backend performance by 20%, integrated secure
            authentication (JWT/OAuth), and streamlined workflows using Zoho
            Creator. I’m adept with AWS, CI/CD, Git, and database optimization
            (MongoDB, PostgreSQL, MySQL).
          </p>
          <p>
            I With a Master’s in Computer Science & Technology, I excel at
            creating secure, responsive user experiences and integrating
            third-party solutions. I write clean, testable code and thrive in
            collaborative environments, always eager to deliver technology that
            makes an impact.
          </p>
          <p>
            If I need define myself in one sentence that would be a family
            person, a sports fanatic, gym enthusiast, and tech-obsessed!!!
          </p>
           </div>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#F06529" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faNodeJs} color="#28A4D9" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJs} color="#EFD81D" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faBootstrap} color="#ea80fc" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
