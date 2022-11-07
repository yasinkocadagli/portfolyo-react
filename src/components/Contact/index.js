import { useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useState(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

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
              Benimle dilediğiniz yerden iletişime geçebilirsiniz.
              Sorularınızı mail yoluyla sormanız öncelikli tercihimdir.
          </p>
          <div className='contact-form'>
          <form>
              <ul>
                  <li className='half'>
                      <input type="text" 
                      name="name"
                      placeholder='Name' 
                      required
                      />
                  </li>
                  <li className='half'>
                      <input type="email" 
                      name="email"
                      placeholder='Email' 
                      required
                      />
                  </li>
                  <li>
                      <input placeholder='Subject' type="text" name="subject" required/>
                  </li>
                  <li>
                      <textarea placeholder='Message'
                      name='message'
                      required
                      ></textarea>
                  </li>
                  <li>
                      <input type="submit" className="flat-button" value="Send"/>
                  </li>
              </ul>
          </form>

          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
