import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './contact.css'

const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
    Have a question for us? Contact us using the details below and our team will be happy to help.
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:qahighereducation@ac.co.uk" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
          <a href="http:facebook.com/qahighereducation" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
          <a href="https://wa.me/+44020 7656 8460" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact