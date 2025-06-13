import React from 'react';
import PageHeader from '../components/PageHeader';
import '../styles/CommitteesPage.css';

const internationalCommittee = [
  { name: 'Prof. Hassane Oudadesse', university: 'Rennes Institute of Chemical Sciences', country: 'France' },
  { name: 'Prof. Siva Subramanium', university: 'Nottingham Trent University', country: 'UK' },
  { name: 'Kamal Jonnalagadda', university: 'Saint Joseph\'s University', country: 'Philadelphia, United States' },
  { name: 'Prof. Luminita Simion', university: 'St. Spiridon University Hospital', country: 'Romania' },
  { name: 'Prof. Esmaiel Jabbari', university: 'University of South Carolina', country: 'Columbia, United States' },
  { name: 'Prof. Bo su', university: 'University of Bristol', country: 'Bristol' },
  { name: 'Prof. Seeram Ramakrishna', university: 'National University of Singapore', country: 'Singapore' },
  { name: 'Dr. Chaozong Liu', university: 'University College London', country: 'London' },
  { name: 'Prof. Masamichi Kamihira', university: 'Kyushu University', country: 'Japan' },
  { name: 'Prof. Ketul Popat', university: 'George Mason University', country: 'Fairfax, Virginia, United States' },
];

const nationalCommittee = [
  { name: 'Prof. S Kanagaraj', university: 'Indian Institute of Technology, Guwahati', country: 'India' },
  { name: 'Prof. Utpal Bora', university: 'Indian Institute of Technology, Guwahati', country: 'India' },
  { name: 'Prof. Sourabh Ghosh', university: 'Indian Institute of Technology, Delhi', country: 'India' },
  { name: 'Prof. Partha Roy', university: 'Indian Institute of Technology, Roorkee', country: 'India' },
  { name: 'Dr. TS Sampath Kumar', university: 'Indian Institute of Technology Madras', country: 'India' },
  { name: 'Dr. Baiju G Nair', university: 'National Institute of Technology Calicut', country: 'India' },
  { name: 'Prof. Rama Raju Baadhe', university: 'National Institute of Technology, Warangal', country: 'India' },
];

const organizingCommittee = [
  { name: 'Prof. K. Umamaheshwar Rao', role: 'Patron, Director, NIT, Rourkela' },
  { name: 'Prof. Krishna Pramanik', role: 'NIT Rourkela (Conference Chair)' },
  { name: 'Prof. Sujit Kumar Bhutia', role: 'NIT Rourkela' },
  { name: 'Prof. Amit Biswas', role: 'NIT Rourkela' },
  { name: 'Prof. A Thirugnanam', role: 'NIT Rourkela' },
  { name: 'Prof. Subrata Kumar Panda', role: 'NIT Rourkela' },
  { name: 'Prof. Sudip Dasgupta', role: 'NIT Rourkela' },
  { name: 'Prof. Devendra Verma', role: 'NIT Rourkela' },
  { name: 'Prof. Nandini Sarkar', role: 'NIT Rourkela' },
  { name: 'Prof. Nivedita Patra', role: 'NIT Rourkela' },
  { name: 'Prof. Sivaraman J', role: 'NIT Rourkela' },
  { name: 'Prof. Subhankar Paul', role: 'NIT Rourkela' },
  { name: 'Prof. B. P. Nayak', role: 'NIT Rourkela' },
  { name: 'Prof. Anju R. Babu', role: 'NIT Rourkela' },
  { name: 'Prof. Earu Banoth', role: 'NIT Rourkela' },
  { name: 'Prof. Bala Chakravarthy Neelapu', role: 'NIT Rourkela' },
  { name: 'Prof. Mirza Khalid Baig', role: 'NIT Rourkela' },
  { name: 'Prof. Prasoon Kumar', role: 'NIT Rourkela' },
  { name: 'Prof. Ravi Kant Avvari', role: 'NIT Rourkela' },
  { name: 'Prof. Gaurav Kumar', role: 'NIT Rourkela' },
  { name: 'Prof. Ashirbad Jana', role: 'NIT Rourkela' },
  { name: 'Prof. Srinivas Behera', role: 'NIT Rourkela' },
  { name: 'Prof. Anupam Mishra', role: 'NIT Rourkela' },
  { name: 'Prof. Preekshya Nath', role: 'NIT Rourkela' },
  { name: 'Prof. Nataraj Yedla', role: 'NIT Rourkela' },
  { name: 'Prof. Santosh Kumar Sahoo', role: 'NIT Rourkela' },
  { name: 'Prof. Anup Nandy', role: 'NIT Rourkela' },
];

const CommitteesPage = () => {
  return (
    <div className="committees-page">
      <PageHeader title="Committees" />
      <div className="committee-container">
        <section id="international-committee" className="committee-section" data-aos="fade-up">
          <h2>International Advisory Committee</h2>
          <table className="committee-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Affiliation</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {internationalCommittee.map((member, index) => (
                <tr key={index}>
                  <td>{member.name}</td>
                  <td>{member.university}</td>
                  <td>{member.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section id="national-committee" className="committee-section" data-aos="fade-up">
          <h2>National Advisory Committee</h2>
          <table className="committee-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Affiliation</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {nationalCommittee.map((member, index) => (
                <tr key={index}>
                  <td>{member.name}</td>
                  <td>{member.university}</td>
                  <td>{member.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section id="organizing-committee" className="committee-section" data-aos="fade-up">
          <h2>Local Organizing Committee</h2>
          <table className="committee-table local-organizing">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role/Affiliation</th>
              </tr>
            </thead>
            <tbody>
              {organizingCommittee.map((member, index) => (
                <tr key={index}>
                  <td>{member.name}</td>
                  <td>{member.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default CommitteesPage;
