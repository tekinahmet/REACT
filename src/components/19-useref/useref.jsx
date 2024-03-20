import React, { useEffect, useRef } from 'react'
import { Container, Form } from 'react-bootstrap'

const UseRef = () => {
    const inputNameRef = useRef(null);

    useEffect(()=>{
        console.log(inputNameRef )
        inputNameRef.current.focus()
        inputNameRef.current.style.borderColor = "red"
    }, [])
    


  return (
    <Container className="mt-4">
        <Form.Control ref={inputNameRef} placeholder="Type your name"/>
    </Container>
  )
}

export default UseRef