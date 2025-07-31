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
        <h2>GUIDELINES FOR SUBMISSION</h2>
        <p>
          The abstract of the paper must be within 250 words in MS WORD format (
          <a href="https://docs.google.com/document/d/1oVhyfxahE4tSUdLDiojS7iXfCyd-i-Dd/edit?usp=drive_link&ouid=112521745994103703006&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="highlight-link">Download Word Template</a>
          ). The guidelines for full paper will be available on the website. The abstract &amp; full paper should be submitted by e-mail to <span className="highlight-mail">icabtemd2025@gmail.com</span>.
        </p>
      </section>

      <section id="important-dates" className="papers-section" data-aos="fade-up">
        <h2>Important Dates</h2>
        <div className="dates-table-container">
          <table className="dates-table">
            <tbody>
              <tr className="dates-highlight-row">
                <td><strong>Abstract Submission Deadline</strong></td>
                <td><strong>September 15, 2025</strong></td>
              </tr>
              <tr>
                <td>Acceptance of Abstract</td>
                <td>September 22, 2025</td>
              </tr>
              <tr>
                <td>Payment of registration fee</td>
                <td>November 10, 2025</td>
              </tr>
              <tr>
                <td>Full Paper Submission Deadline</td>
                <td>November 3, 2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default CallForPapersPage;
