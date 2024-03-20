import React from 'react'
import Welcome from './welcome'

const Greetings = () => {
  return (
    <div>
        <h1>Props</h1>

        <Welcome firstName="John" lastName="Doe"/>
        <Welcome firstName="Kevin" lastName="Black" color="red"/>

    </div>
  )
}

export default Greetings