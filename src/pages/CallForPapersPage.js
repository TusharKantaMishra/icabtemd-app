import React from 'react';
import PageHeader from '../components/PageHeader';
import '../styles/CallForPapersPage.css';

const CallForPapersPage = () => {
  return (
    <div className="call-for-papers-page">
      <PageHeader title="Call for Papers" />
      <section id="call-for-abstracts" className="papers-section" data-aos="fade-up">
        <h2>Call for Abstracts/Full Papers</h2>
        <p>Abstract of research/technical papers followed by the full paper are invited based on the themes of the conference. After scrutiny by the reviewers, the selected papers will be published in the conference proceeding. Selected papers will be arranged for oral or poster presentation. Abstracts and Full papers must be submitted in soft copies. The acceptance of the paper will be communicated to the participants by email. Selected papers will be published in Scopus indexed journal.</p>
      </section>

      <section id="guidelines" className="papers-section" data-aos="fade-up">
        <h2>Guidelines for Submission</h2>
        <p>The abstract of the paper must be about 250 words in MS WORD format. The title should be in Capital and Bold followed by the names of the author(s), their address(es) and Corresponding Author email id. Name of the presenting author must be underlined. Different affiliation of authors are indicated by numbered superscripts. The content of the abstract shall include background, objectives, methods, results & conclusion. When using word processing facilities, use only Times New Roman 12 font in ENGLISH. The spacing should be maintained at 1.5 points. The guidelines for full paper will be available on the website. The abstract & full paper should be submitted by e-mail.</p>
      </section>

      <section id="important-dates" className="papers-section" data-aos="fade-up">
        <h2>Important Dates</h2>
        <ul className="dates-list">
          <li>
            <strong>Abstract Submission Deadline:</strong> August 22, 2025
          </li>
          <li>
            <strong>Acceptance of Abstract:</strong> September 8, 2025
          </li>
          <li>
            <strong>Full Paper Submission Deadline:</strong> November 3, 2025
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CallForPapersPage;
