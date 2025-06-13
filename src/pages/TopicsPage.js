import React from 'react';
import PageHeader from '../components/PageHeader';
import '../styles/TopicsPage.css';

const topicsList = [
  "Advanced Biomaterial and Nanomaterials",
  "Dental Application",
  "Orthopaedic application",
  "Wound healing and skin tissue repair",
  "Cardiovascular applications",
  "Ophthalmic application",
  "Neural applications",
  "Cancer treatment",
  "Medical Device",
  "Diagnostic and Imaging Technologies",
  "Cosmetics and Personal skin Care",
  "Advanced techniques for manufacturing tissue Scaffold",
  "Electrospinning",
  "3D printing",
  "Bioprinting",
  "Combined methods",
  "Antimicrobial/antioxidant/anti-inflammatory strategy for developing",
  "Biomaterials and engineered tissue Products",
  "Surface Engineering and Coatings",
  "Advanced Coatings and Surface Treatments for Biomaterial",
  "Computational approach for biomaterial design",
  "AI / ML Application",
  "Translational Strategy for innovative R & D and application of",
  "Biomaterials/engineered tissue Products/Medical Device",
  "Safety, Ethics, and Regulation",
  "IPR and start-up",
  "Drug Delivery Systems"
];

const TopicsPage = () => {
  return (
    <div className="topics-page">
      <PageHeader title="Conference Topics" />
      <div className="topics-list-container flat-topics">
        <ul className="topics-flat-list">
          {topicsList.map((topic, idx) => (
            <li key={idx} className="topic-flat-item" data-aos="fade-up" data-aos-delay={idx * 50}>
              {topic}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopicsPage;
