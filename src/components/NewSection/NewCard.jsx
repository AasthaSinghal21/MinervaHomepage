import React from 'react'
import './NewCard.css';

const NewCard = () => {
  return (
    <div>
      <div>
       <link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet" />
       <div className="projects__container container grid">
    <article className="projects__card">
      <div className="projects__image">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" className="projects__img"/>

        <a href="#" className="projects__button button">
          <i className="ri-arrow-right-up-line"></i>
        </a>
      </div>

      <div className="projects__content">
        <h3 className="projects__subtitle"></h3>
        <h2 className="projects__title">Internship Series</h2>

        <p className="projects__description">
          Get Insights of Recruitment procedures of various companies.
        </p>
      </div>

      {/* <div className="projects__buttons">
        <a href="https://github.com/" target="_blank" className="projects__link">
          <i className="ri-computer-fill"></i> Register
        </a>

        {/* <a href="https://dribbble.com/" target="_blank" className="projects__link">
          <i className="ri-dribbble-line"></i> View
        </a> }
      </div> */}
    </article>

    <article className="projects__card">
      <div className="projects__image">
        <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" className="projects__img"/>

        <a href="#" className="projects__button button">
          <i className="ri-arrow-right-up-line"></i>
        </a>
      </div>

      <div className="projects__content">
        <h3 className="projects__subtitle"></h3>
        <h2 className="projects__title">Hackathon Alert</h2>

        <p className="projects__description">
          Get updated about upcoming hackathons!

        </p>
      </div>

      {/* <div className="projects__buttons">
      <a href="https://github.com/" target="_blank" className="projects__link">
          <i className="ri-computer-fill"></i> Register
        </a>

        {/* <a href="https://dribbble.com/" target="_blank" className="projects__link">
          <i className="ri-dribbble-line"></i> View
        </a>}
      </div> */}
    </article>

    <article className="projects__card">
      <div className="projects__image">
        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" className="projects__img"/>

        <a href="#" className="projects__button button">
          <i className="ri-arrow-right-up-line"></i>
        </a>
      </div>

      <div className="projects__content">
        <h3 className="projects__subtitle"></h3>
        <h2 className="projects__title">Tech-Tuesdays</h2>

        <p className="projects__description">
          Learn something New Every Tuesday.
        </p>
      </div>

      {/* <div className="projects__buttons">
      <a href="https://github.com/" target="_blank" className="projects__link">
          <i className="ri-computer-fill"></i> Register
        </a>

        {/* <a href="https://dribbble.com/" target="_blank" className="projects__link">
          <i className="ri-dribbble-line"></i> View
        </a> }
      </div> */}
    </article>
  </div>
    </div>
    </div>
  )
}

export default NewCard
