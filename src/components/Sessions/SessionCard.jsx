import React from 'react'
import './Session.css';


const SessionCard = () => {
  return (
    <div>
       <link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet" />
       <div className="projects__container container grid">
    <article className="projects__card">
      <div className="projects__image">
        <img src="https://plus.unsplash.com/premium_photo-1661382011487-cd3d6b1d9dff?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" className="projects__img"/>

        <a href="#" className="projects__button button">
          <i className="ri-arrow-right-up-line"></i>
        </a>
      </div>

      <div className="projects__content">
        <h3 className="projects__subtitle"></h3>
        <h2 className="projects__title">Transitioning Into Design</h2>

        <p className="projects__description">
        Get ready for a design journey like never before! Minerva, the Tech Forum of IGDTUW, in collaboration with MySeed IGDTUW proudly presents ”Transitioning into Design”, a two-day session on UI and UX, featuring the talented Ms. Simran Pandit. 
        </p>
      </div>

      <div className="projects__buttons">
        <a href="https://github.com/" target="_blank" className="projects__link">
          <i className="ri-computer-fill"></i> Register
        </a>

        {/* <a href="https://dribbble.com/" target="_blank" className="projects__link">
          <i className="ri-dribbble-line"></i> View
        </a> */}
      </div>
    </article>

    <article className="projects__card">
      <div className="projects__image">
        <img src="https://plus.unsplash.com/premium_photo-1682284353470-53c3a913bded?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" className="projects__img"/>

        <a href="#" className="projects__button button">
          <i className="ri-arrow-right-up-line"></i>
        </a>
      </div>

      <div className="projects__content">
        <h3 className="projects__subtitle"></h3>
        <h2 className="projects__title">Elevate Your Game</h2>

        <p className="projects__description">
        Ready to level up your academic game and explore the exciting world of MBA? 🎓💼

Join us for an awesome session, Elevate your Game: The MBA Odyssey in FMS , where Ms Shagun Khathuria will spill all the MBA beans! 🧐📚

        </p>
      </div>

      <div className="projects__buttons">
      <a href="https://github.com/" target="_blank" className="projects__link">
          <i className="ri-computer-fill"></i> Register
        </a>

        {/* <a href="https://dribbble.com/" target="_blank" className="projects__link">
          <i className="ri-dribbble-line"></i> View
        </a> */}
      </div>
    </article>

    <article className="projects__card">
      <div className="projects__image">
        <img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" className="projects__img"/>

        <a href="#" className="projects__button button">
          <i className="ri-arrow-right-up-line"></i>
        </a>
      </div>

      <div className="projects__content">
        <h3 className="projects__subtitle"></h3>
        <h2 className="projects__title">Research Alchemy</h2>

        <p className="projects__description">
        Minerva, the Tech - Forum of IGDTUW, is delighted to present -
Research Alchemy: CMU Intern Shares Secrets with our guest speaker Girisha Sahdev, a dedicated 3rd-year B.Tech student at IGDTUW. She stands out as a GHC scholar and a Mitacs Global Link Research Scholar 2024.
        </p>
      </div>

      <div className="projects__buttons">
      <a href="https://github.com/" target="_blank" className="projects__link">
          <i className="ri-computer-fill"></i> Register
        </a>

        {/* <a href="https://dribbble.com/" target="_blank" className="projects__link">
          <i className="ri-dribbble-line"></i> View
        </a> */}
      </div>
    </article>
  </div>
    </div>
  )
}

export default SessionCard
