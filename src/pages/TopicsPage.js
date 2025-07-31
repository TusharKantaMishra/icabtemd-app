import React from 'react';
import PageHeader from '../components/PageHeader';
import '../styles/TopicsPage.css';

const topicsData = [
  {
    title: 'Advanced Biomaterials and Nanomaterials',
    subtopics: [
      'Dental Application',
      'Orthopaedic application',
      'Wound healing and skin tissue repair',
      'Cardiovascular applications',
      'Ophthalmic application',
      'Neural applications',
      'Cancer treatment',
    ],
  },
  {
    title: 'Advanced techniques for manufacturing Tissue Scaffold',
    subtopics: [
      'Electrospinning',
      '3D printing',
      'Bioprinting',
    ],
  },
  {
    title: 'Medical Devices',
    subtopics: [
      'Diagnostic and Imaging Technologies',
      'Health monitoring Devices',
    ],
  },
  {
    title: 'Antimicrobial/Antioxidant/Aanti-inflammatory strategy for developing Biomaterials and Engineered Tissue Products',
    subtopics: [],
  },
  {
    title: 'Advanced Coatings and Surface Treatments for Biomaterial',
    subtopics: [],
  },
  {
    title: 'Computational approach for Biomaterial Design',
    subtopics: ['AI / ML Application'],
  },
  {
    title: 'Translational Strategy for innovative R & D and application of Biomaterials/Engineered Tissue Products/Medical Device',
    subtopics: [],
  },
  {
    title: 'Safety, Ethics, and Regulation',
    subtopics: [],
  },
  {
    title: 'IPR and Start-up',
    subtopics: [],
  },
  {
    title: 'Drug Delivery Systems',
    subtopics: [],
  },
];

const TopicsPage = () => {
  return (
    <div className="topics-page">
      <PageHeader title="Conference Topics" />
      <div className="topics-list-container">
        <ul className="topics-section-list">
          {topicsData.map((section, idx) => (
            <li key={idx} className="topic-section-item" data-aos="fade-up" data-aos-delay={idx * 80}>
              <strong>{section.title}</strong>
              {section.subtopics.length > 0 && (
                <ul className="topics-sub-list">
                  {section.subtopics.map((sub, subIdx) => (
                    <li key={subIdx} className="topic-sub-item">{sub}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopicsPage;
