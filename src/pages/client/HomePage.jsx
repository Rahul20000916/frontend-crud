import React from 'react'
import SubscribeForm from '../../components/client/SubscribeForm'
import ContactForm from '../../components/client/ContactForm'
import Header from '../../components/client/Header'
const HomePage = () => {
  return (
    <div>
      <Header />
      <ContactForm />
      <SubscribeForm /> 
    </div>
  )
}

export default HomePage
