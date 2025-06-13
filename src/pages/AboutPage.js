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
        <p>
          The International Conference on Advanced Biomaterials for Tissue Engineering and Medical Devices (ICABTEMD 2025) aims to address critical health issues arising from tissue and organ failure due to injury or damage. These challenges significantly impact health and quality of life, making tissue engineering a promising technique for providing integrated solutions. This field, along with regenerative medicine, has garnered substantial interest from both academic and corporate sectors due to its potential to revolutionize healthcare by enabling effective treatments for tissue and organ damage.
        </p>
        <p>
          Biomaterials play a pivotal role in tissue repair by offering structural support and promoting regeneration. Advanced biomaterials mimic the natural extracellular matrix, supporting cell adhesion and proliferation, which are vital for successful tissue regeneration. These materials also enhance the functionality of medical devices by imparting essential qualities such as durability and strength, as seen in applications like artificial hip joints, where metal alloys and ceramics are used. Biomaterials thus contribute significantly to personalized therapeutic approaches in regenerative medicine. Building on the success of previous conferences under the Center of Excellence in Tissue Engineering (CoE), NIT Rourkela will host ICABTEMD 2025. This conference will serve as a platform for delegates, students, faculty, engineers, doctors, entrepreneurs, and industry professionals from multidisciplinary backgrounds to share the latest advancements in the field. ICABTEMD 2025 aims to contribute meaningfully to the existing knowledge domain and inspire the next generation of bioengineers to develop innovative and translatable ideas that meet national and international needs in biomaterials for tissue engineering and medical device manufacturing.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
