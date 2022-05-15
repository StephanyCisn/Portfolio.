import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_ke1e0gi', 'template_7svs1jh',   
    e.target, 'jZ8a9b1bTqX1s99aw')
        .then((result) => {
            alert('email sent successfully');
        }, (error) => {
            alert('error sending email');
        });
        //clears the form after sending the email
        e.target.reset();
    }


  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in entry level opportunities, I am a quick learner and enjoy collaborative environments. If you have any other requests or questions,
            don't hesitate to contact me using the form below.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Stephany Cisneros
          <br />
          <br />
         Westborough, Massachusetts <br />
         <span> Cell: 754-265-6891</span>
         <br />
          <span> cisneros.stephany91@gmail.com</span>
          
          </div>
        <div className="map-wrap">
          <MapContainer center={[42.28387, -71.64666]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[42.28387, -71.64666]}>
              <Popup>Stephany lives here, open to relocating for roles :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
