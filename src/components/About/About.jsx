import './About.css'
import author from '../../images/author-photo.jpg'

export default function About() {
  return (
  <section className='about'>
    <img src={author} alt="foto del autor" className="about__image" />
    <div className="about__brief">
      <h2 className="about__title">Acerca del autor</h2>
      <p className="about__text">¡Muy buenas! Mi nombre es Fernando y soy de México.</p>
      <p className="about__text">Me forme en Tripleten como fullStack MERN, ahí conocí a muy buenos integrantes del equipo y algunos grandes compañeros.
      Fue muy interesante asumir el reto de principio a fin al desarrollar sólo las paginas web para el aprendizaje.
      </p>
      <p className="about__text">Encontre muy entretenido resolver ejercicios de codewars para familiarizarme con el lenguaje de javascript.</p>
      <p className="about__text">Además como prácticas, desarrollo en No Country en un equipo para adquirir habilidades blandas y poder sacar en un sprint un MVP.</p>
    </div>
  </section>
  )
}