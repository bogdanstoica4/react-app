import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'



const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
    We are QA Higher Education. Leaders in teaching and creating the most successfull students in UK !
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Story Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
          QA has been working in learning and development for over 30 years, with people who are shaping futures. We work with students, learners, customers and partners, across industries, and countries – providing learning solutions and the right skills for tomorrow’s challenges
          </p>
          <p>
          Whether you’re going through digital transformation, becoming agile or growing more expert technologists in your organisation – our courses, apprenticeships and digital consultants will get you ready for your future.
          </p>
          <p>
          Learn in the classroom, or choose online delivery. Become an apprentice, or join our QA graduate academy as a consultant. Advance specialist knowledge, or upskill your team to propel your business growth in the digital age. We’re here – by your side – every step of the way, ready to help you achieve more
          </p>
        </div>
      </div>
    </section>

    <section className="about__Vision">
      <div className="container about__Vision-container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
          We stay connected to the sector and hold memberships with industry bodies to ensure we’re following best practice, are up-to-date with the latest policy developments and build relationships across higher education and beyond. 
          </p>
          <p>
          Our partnerships and provisions are reviewed by QAA, the Quality Assurance Agency for Higher Education.
          </p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Our Vision Image" />
        </div>
      </div>
    </section>


    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our Mission Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
          QA Higher Education is a private UK higher education provider working in partnership with universities, colleges and education specialists to offer international students a range of programmes from foundation level, to undergraduate and postgraduate degrees.
          </p>
          <p>
          We’re passionate about supporting our students to fulfill their potential. Arming them with the skills to achieve their career aspirations is what motivates and inspires us
          </p>
          <p>
          To do this, we work with our partner universities, delivering industry-focused, full and part-time programmes – from International Foundation Programmes right the way through to postgraduate degrees.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About