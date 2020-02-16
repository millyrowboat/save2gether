import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #232323;
    font-family: "Helvetica Neue";
    margin: 0
    font-size: 16px;
    color: white;
  }
`
const Layout = styled.div`
  height: 100%;
  padding: 2em;
  max-width: 460px;
  margin: 0 auto;
`
const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: palevioletred;
`
const Subtitle = styled.p`
  font-size: 1.5rem;
  text-align: center;
  color: #ffc25f;
`
const Bigtext = styled.p`
  font-size: 3rem;
  text-align: center;
  color: white;
`
const Form = styled.div`
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
`
const Button = styled.button`
  background-color: whitesmoke;
  font-size: 1.5rem;
`

const App = () => {
  const [amount, setAmount] = useState(0)
  const [valueToAdd, setValue] = useState(0)
  console.log('VALUE', valueToAdd)
  console.log('AMOUNT', amount)
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Title> Save2Gether!</Title>
        <Subtitle>
          Track how much you and your partner save by not spending!
        </Subtitle>
        <Bigtext>
          <span>Total saved: </span>
          <span>$</span>
          <span>{amount}</span>
        </Bigtext>

        <Form>
          <label>How much did you not spend today?: </label>
          <input
            type="text"
            id={valueToAdd}
            onChange={event => setValue(event.target.value)}
          />
          <Button onClick={() => setAmount(valueToAdd)}>Submit</Button>
        </Form>
      </Layout>
    </>
  )
}

var root = document.getElementById('root')
ReactDOM.render(<App />, root)
