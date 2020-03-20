// Package imports
import React from 'react'
import { render, fireEvent, getByTestId } from '@testing-library/react'

// File imports
import ContactForm from './ContactForm'


test(" form rendered.", () => {
    const {queryByTestId} = render(<ContactForm />)
    queryByTestId("firstName")
    queryByTestId("lastName")
    queryByTestId("email")
    queryByTestId("message")
})
  
test("form added a new user", () => {
    const { getByTestId} = render(<ContactForm />)
    const inputFirstName = getByTestId("firstName")
    const inputLastName = getByTestId("lastName")
    const inputEmail = getByTestId("email")
    const inputMessage = getByTestId("message")
  
    fireEvent.change(inputFirstName, {target:{value:'test: first name'}})
    fireEvent.change(inputLastName, {target:{value:'test: last name'}})
    fireEvent.change(inputEmail, {target:{value:'test: email'}})
    fireEvent.change(inputMessage, {target:{value:'test: message'}})
  
    expect(inputFirstName.value).toBe('test: first name')
    expect(inputLastName.value).toBe('test: last name')
    expect(inputEmail.value).toBe('test: email')
    expect(inputMessage.value).toBe('test: message')

    const leftClick = { button: 1 }
    fireEvent.click(getByTestId("submit"), leftClick)
})