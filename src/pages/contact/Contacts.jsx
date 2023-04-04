import './contact.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'


const Contacts = () => {
  return (
    <>
      <Header title="Hello" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sapiente iure enim nihil illo quia.
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:samratdps@gmail.com" target='_blank' rel="noreferrer noopener"><MdEmail/></a>
            <a href="http://m.me/bojanala.samrat" target='_blank' rel="noreferrer noopener"><BsMessenger/></a>
            <a href="https://wa.me/+14435297987" target='_blank' rel="noreferrer noopener"><IoLogoWhatsapp/></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contacts