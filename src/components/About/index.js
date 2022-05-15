import { useEffect, useState } from 'react'
import {
  faTrello,
  faCss3,
  faNode,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
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
          <p>
            I'm a very ambitious full-stack developer looking for an entry level role with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm naturally curious, and perpetually working on
            improving my skills one problem at a time since completing a coding bootcamp. 
          </p>
          <p>
            I studied the PERN stack with Thinkful. The bootcamp provided a 9 Month mentorship from a senior software engineer, meeting twice weekly to learn industry standards in both front and back-end technologies.
          </p>

          <ul>
        <li>
          <a 
          href="https://finalcap-client.herokuapp.com/dashboard"
          >
         Restaurant Reservation Application
          </a>
           </li>
           <li>
          <a 
          href="https://pomodoro-ochre.vercel.app"
          >
         Pomodoro Timer
          </a>
          </li>
       </ul>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faTrello} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faNode} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
