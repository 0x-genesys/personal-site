import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import certificates from '../data/resume/certificates';
import degrees from '../data/resume/degrees';

const BASE_PATH = process.env.PUBLIC_URL || '';

const Education = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalImage(null);
    document.body.style.overflow = '';
  };

  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    if (modalImage) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [modalImage]);

  return (
    <Main>
      <Helmet title="Education" />
      <article className="post" id="education">
        <header>
          <div className="title">
            <h1 className="page-headline"><Link to="/education">Education</Link></h1>
          </div>
        </header>

        <section className="education-section">
          <h2 className="section-heading">Degrees</h2>
          <div className="education-container">
            {degrees.map((degree) => (
              <article className="degree-card" key={degree.school}>
                <header>
                  <h3 className="degree-title">{degree.degree}</h3>
                  <p className="school-name"><a href={degree.link} target="_blank" rel="noopener noreferrer">{degree.school}</a></p>
                  <p className="year">{degree.year}</p>
                  {degree.activities && <p className="activities">{degree.activities}</p>}
                </header>
              </article>
            ))}
          </div>
        </section>

        <section className="certificates-section">
          <h2 className="section-heading">Certificates</h2>
          <div className="certificates-container">
            {certificates.map((cert) => (
              <article className="certificate-card" key={cert.credentialId || cert.title}>
                <header>
                  <h3 className="certificate-title">{cert.title}</h3>
                  <p className="issuer">{cert.issuer}</p>
                  <p className="date">Issued {cert.issued}</p>
                  {cert.credentialId && <p className="credential-id">Credential ID: {cert.credentialId}</p>}
                  {cert.skills && cert.skills.length > 0 && (
                    <div className="skills-container">
                      {cert.skills.join(', ')}
                    </div>
                  )}
                </header>
                {cert.description && <p className="description">{cert.description}</p>}
                <div className="thumbnail-wrapper">
                  <img
                    className="certificate-thumbnail"
                    src={`${BASE_PATH}/images/${cert.thumbnail}`}
                    alt={cert.title}
                    onClick={() => openModal(`${BASE_PATH}/images/${cert.thumbnail}`)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openModal(`${BASE_PATH}/images/${cert.thumbnail}`);
                      }
                    }}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        {modalImage && (
          <div className="image-modal-overlay" onClick={closeModal}>
            <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal} aria-label="Close image">
                &times;
              </button>
              <img className="modal-image" src={modalImage} alt="Certificate Full Size" />
            </div>
          </div>
        )}
      </article>
    </Main>
  );
};

export default Education;
