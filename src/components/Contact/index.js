import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('gmail', 'contact_form', form.current, '9MgC1BlEaD-y01uuu')
      .then(
        () => {
            alert('Message successfully sent!')
            window.location.reload(false)
        },
        () => {
            alert('Failed to send the message, please try again')
        }
      )
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
            I am intrested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                    <textarea name="message" placeholder='Message' required ></textarea>
                </li>
                <li>
                    <input type="submit" className='flat-button' value='SEND' />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Raj Dhaman 
          <br />
          Kota, Rajasthan, India,
          <br />
          Station Road, Dadwara <br />
          Kota, Rajasthan <br />
          <span>rajdhaman0112@gmail.com</span>

        </div>
        <div className="map-wrap" id="map">
          <MapContainer center={[25.2278010, 75.8761566]} zoom={15} >
            <TileLayer url='https://www.google.com/maps/search/?api=1&query=25.2278010%2C75.8761566' />
            
            <Marker position={[25.2278010, 75.8761566]}>
              <Popup>
                Raj Dhaman lives here, come over for a cup of coffee :)
              </Popup>
            </Marker>

          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
