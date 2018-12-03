import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
require('typeface-cinzel-decorative')
require('typeface-josefin-sans')

import profilePic from './profile-pic.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
					display: 'flex',
					justifyContent: 'flex-start',
					alignItems: 'center',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Javier Cáceres`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
						height: rhythm(2)
          }}
        />
        <p
					style={{
						margin: 0,
						padding: 0
					}}>
          Escrito por <strong>Javier Cáceres</strong>.{' '}
          <a href="https://twitter.com/underium">
            ¡También tengo Twitter!
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
