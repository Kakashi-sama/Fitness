import './about.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
const About = () => {
  return (
    <> 
      <Header title={`About Me`} image={HeaderImage}>
        Consistency is the key
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Story" />
          </div>
          <div className="about__section-content">
            <h1>My Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ipsum illo officia delectus ratione ducimus ipsa deserunt enim, in totam consequatur voluptate nobis saepe maxime, aut modi tenetur numquam cupiditate?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel aut accusamus illum vero veritatis laborum rem dolorem inventore ad, cumque corrupti enim! Perspiciatis quidem ea ipsa reprehenderit optio recusandae omnis.

            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsa amet ut a dolor eveniet iusto quo enim laboriosam eligendi eum, dignissimos exercitationem ea accusamus commodi consequatur illo. Et, officia.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About