import React from 'react';
import PageHeader from '../components/PageHeader';
import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <PageHeader title="About ICABTEMD 2025" />

      <div id="institute" className="about-section" data-aos="fade-up">
        <h2>About The Institute</h2>
        <p>
          The National Institute of Technology Rourkela (NIT Rourkela), formerly known as the Regional Engineering College until its renaming on 26th June 2002, is a premier publicly funded institution dedicated to excellence in Engineering, Science, and Technology. Located in the steel city of Rourkela, Odisha, India, it is one of the 31 National Institutes of Technology in the country and has been recognized as an Institute of National Importance under the National Institutes of Technology Act, 2007. NIT Rourkela holds prestigious rankings, including 19th in the NIRF Rankings 2024 for Indian Engineering Universities, 317th in the QS Asia University Rankings 2025, 167th in the QS World University Sustainable Rankings 2025, and within the 601–800 band in the Times Higher Education World University Rankings (Engineering) for 2024–25. The institute's mission is to become an internationally acclaimed center of learning, serving as a beacon of knowledge and expertise for society while establishing itself as a preferred destination for undergraduate and postgraduate studies.
        </p>
      </div>

      <div id="center" className="about-section" data-aos="fade-up">
        <h2>About The Center</h2>
        <p>
          The Center of Excellence in Tissue Engineering (CoE) was established in 2013 under the Ministry of Human Resource Development, now known as the Ministry of Education, Government of India. Located within the Department of Biotechnology and Medical Engineering at NIT Rourkela, the center addresses the multidisciplinary challenges of tissue engineering, including biomaterials, scaffold fabrication, biomechanics, stem cell technology, and cryopreservation. The center focuses on developing and fabricating scaffolds for bone, cartilage, skin, and corneal tissue engineering, alongside creating engineered constructs and tissue grafts. Additional research areas include utilizing biomaterials from biowaste and surface modification for implant enhancements, fostering innovation in this complex and evolving field.
        </p>
      </div>

      <div id="department" className="about-section" data-aos="fade-up">
        <h2>About The Department</h2>
        <p>
          The Department of Biotechnology and Medical Engineering, established in 2007, offers a multidisciplinary platform for research and education in Biotechnology and Medical Engineering. It aims to advance the fundamental understanding of biological systems and develop innovative, biology-based technologies to address a wide range of societal needs. These include advancements in diagnosing and treating human diseases, designing novel biomaterials and biomedical devices, and addressing environmental challenges. The department's faculty members engage in both fundamental and applied research across diverse fields such as Cell and Molecular Engineering, Tissue Engineering and Biomaterials, Bioprocess Engineering, Environmental and Plant Biotechnology, Biomechanics and Bio-transport Engineering, and Medical Electronics and Instrumentation.
        </p>
      </div>

      <div id="conference" className="about-section" data-aos="fade-up">
        <h2>About The Conference</h2>
        <p> Tissue and organ failure due to injury or other type of damage, are the most critical health issues,therefore the loss or malfunction of these
 tissues has profound impacts on health and quality of life. Tissue engineering is considered as a promising future technique that can offer
 integrated solutions for tissue and organ failure and hence there is substantial interest in tissue engineering and regenerative medicine from
 both academic and corporate sectors due to their potential to revolutionize healthcare by providing more effective treatments for tissue and
 organ damage. Biomaterials play an essential role in tissue repair by providing structural support and promoting tissue regeneration.
 Advanced biomaterials can facilitate the regeneration of complex tissues by mimicking the natural extracellular matrix, thereby supporting
 cell adhesion and proliferation upon which the sucess of the tissue regeneration depends. Advanced biomaterials impart essential qualities
 to medical devices, allowing them to effectively treat diseased or injured tissue. For example, in load-bearing applications like artificial hip
 joints, metal alloys and ceramics are typically used due to their strength in supporting surrounding tissue and their durability in resisting
 wear from repetitive motion. By addressing various facets of tissue repair, biomaterials are paving the way for more effective and
 personalized therapeutic approaches in regenerative medicine. After the success of International and National conferences under the
 Center of Excellence in Tissue Engineering (CoE), NIT Rourkela has planned to organize International Conference on Advanced Biomaterials
 for Tissueengineering and Medical device. The conference will provide an excellent platform for the delegates, students, faculties, engineers,
 doctors, entrepreneurs, industry  with multidisciplinary backgrounds to come together and share latest advancements in this field. It is hoped
 that the International conference on advanced biomaterials for tissue engineering and Medical Device (ICABTEMD 2025) will make a
 meaningful contribution towards the existing knowledge domain and motivate new generation of bioengineers to pave an extra mileage
 and come up with novel, translatable ideas to meet the needs of the national and international community in the field of Biomaterial for
 tissue engineering and manufacturing medical device.</p>
      </div>
    </div>
  );
};

export default AboutPage;
