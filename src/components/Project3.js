import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/cad-case-studies.png';
import img2 from '../images/cad-services.png';
import img3 from '../images/cad-clients.png';

function Project3(props) {
  const [lgShow, setLgShow] = useState(false);
  return (
    <>
      <Modal size='xl' show={lgShow} onHide={() => setLgShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title as='h2'>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='carousel-container'>
            <Carousel
              className='carousel-wrapper'
              interval={5000}
              pause='hover'
            >
              <Carousel.Item>
                <img src={img1} alt={img1} />
              </Carousel.Item>
              <Carousel.Item>
                <img src={img2} alt={img2} />
              </Carousel.Item>
              <Carousel.Item>
                <img src={img3} alt={img3} />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className='modal-body-info'>
            <div className='projects__skills'>
              <Badge className='devicon-nextjs-plain colored' title='Next.js'>
                Next.js
              </Badge>{" "}
              <Badge className='devicon-react-plain colored' title='React'>
                React
              </Badge>{" "}
              <Badge
                className='devicon-tailwindcss-plain colored'
                title='Tailwind'
              >
                Tailwind
              </Badge>{" "}
            </div>
            <h4>Description:</h4>
            <p>
              Cad-dev is a marketing website for the software development
              company i work with and freelance as fullstack developer. clients.
            </p>
            <p>
              Project built to showcase the company's services, case studies and
              clients.
            </p>
            <h4>Other tools and technologies used in the project:</h4>
            <p> netlify </p>
            <p> javascript </p>
            <p> cloudinary </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className='footer-links'>
            <a
              target='blank'
              href='https://cad-dev.com'
              className='btn btn-custom'
            >
              Live
              <i className='fas fa-satellite-dish'></i>
            </a>
          </div>
        </Modal.Footer>
      </Modal>

      <li className='projects__item'>
        <h2>{props.title}</h2>
        <Link
          className='projects__item__link'
          to={props.path}
          onClick={() => setLgShow(true)}
        >
          <figure
            className='projects__item__pic-wrap'
            data-category={props.label}
          >
            <img className='projects__item__img' alt='' src={props.src} />
          </figure>
          <div className='projects__item__info'>
            <div className='projects__skills'>
              <Badge className='devicon-nextjs-plain colored' title='Next.js'>
                Next.js
              </Badge>{" "}
              <Badge className='devicon-react-plain colored' title='React'>
                React
              </Badge>{" "}
              <Badge
                className='devicon-tailwindcss-plain colored'
                title='Tailwind'
              >
                Tailwind
              </Badge>{" "}
            </div>
            <h5 className='projects__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Project3;
