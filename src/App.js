import React, { useState, useEffect } from 'react'
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
  margin-bottom: 1.5rem;
`
const SubmitButton = styled.button`
  background-color: whitesmoke;
  font-size: 1.5rem;
`
const SaveButton = styled.button`
  background-color: whitesmoke;
  font-size: 1.5rem;
  width: 100%;
`

const App = props => {
  const [amount, setAmount] = useState()
  const getValue = () => {
    props
      .database()
      .ref('/people/bec-and-milly/amount')
      .on('value', snapshot => {
        setAmount(snapshot.val())
      })
  }

  useEffect(() => {
    setAmount(getValue)
  }, [])

  const [valueToAdd, setValue] = useState(0)

  const addAmount = value => {
    const newValue = parseInt(amount) + parseInt(value)
    setAmount(newValue)
  }

  const saveAmount = () => {
    props
      .database()
      .ref('/people/bec-and-milly/amount')
      .set(parseInt(amount))
  }

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
          <SubmitButton onClick={() => addAmount(valueToAdd)}>
            Submit
          </SubmitButton>
        </Form>
        <SaveButton onClick={() => saveAmount(amount)}>Save!</SaveButton>
      </Layout>
    </>
  )
}

export default App
