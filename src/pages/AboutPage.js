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
         The National Institute of Technology Rourkela (NIT Rourkela), formerly known as the Regional Engineering College until its renaming on 26th
June 2002, is a premier government funded institution dedicated to excellence in Engineering, Science, and Technology. Located in the steel
city of Rourkela, Odisha, India, it is one of the 31 National Institutes of Technology in the country and has been recognized as an Institute of
National Importance under the National Institutes of Technology Act, 2007. NIT Rourkela holds prestigious rankings, including 19th in the NIRF
Rankings 2024 for Indian Engineering Universities, 317th in the QS Asia University Rankings 2025, 167th in the QS World University Sustainable
Rankings 2025 (Asia region), and within the 601–800 band in the Times Higher Education World University Rankings (Engineering) for 2024–25.
The institute's mission is to become an internationally acclaimed center of learning, serving as a beacon of knowledge and expertise for
society while establishing itself as a preferred destination for udergraduate and postgraduate studies.
        </p>
      </div>

      <div id="center" className="about-section" data-aos="fade-up">
        <h2>About The Center</h2>
        <p>
          The Center of Excellence in Tissue Engineering (CoE) was established in 2013 under the Ministry of Human Resource Development, now known
as the Ministry of Education, Government of India. Located within the Department of Biotechnology and Medical Engineering at NIT Rourkela,
the center addresses the multidisciplinary challenges of Tissue Engineering, including Biomaterials, Scaffold Fabrication, Biomechanics, Stem
Cell Technology, and Cryopreservation. The center focuses on developing biomaterials, fabricating scaffolds, engineered constructs and
tissue grafts for bone, cartilage, skin, and corneal tissue regeneration. Other areas of research of the Center include developing biomaterials
from biowaste, surface modification for implant improvement, and development of medical devices. The Center has well equipped
laboratories having major facilities like Electrospinning Machine, ESEM, Flow Cytometer, Fluoroscence Microscope, Confocal Microscope and
3D printer.
        </p>
      </div>

      <div id="department" className="about-section" data-aos="fade-up">
        <h2>About The Department</h2>
        <p>
          The Department of Biotechnology and Medical Engineering, established in 2007 at NIT Rourkela, serves as a multidisciplinary hub for cutting-
edge research and education at the interface of biological systems, engineering, and healthcare innovation. Over the years, the department
has built a thriving ecosystem of translational research and technology development, committed to transforming scientific insights into
real-world healthcare and environmental solutions. With over 1,600 peer-reviewed publications, more than 100 sponsored projects funded by
leading agencies such as DBT, DST, SERB, and ICMR, and five patents filed or granted, the department exemplifies excellence in high-impact
research. The department is home to a highly qualified faculty, active research groups, and modern laboratories that support cutting-edge
work in both fundamental and translational science. The faculty members have diverse research interests and they conduct both basic and
applied research in diverse areas such as Cell & Molecular Engineering, Biomaterials & Tissue Engineering, Bioprocess Engineering,
Environmental & Plant Biotechnology, Biomechanics & Biotransport Engineering, and Medical Electronics & Instrumentation.
        </p>
      </div>

      <div id="conference" className="about-section" data-aos="fade-up">
        <h2>About The Conference</h2>
        <p> Tissue and organ failure due to injury or other type of damage, are the most critical health issues. The loss or malfunction of these tissues has
profound impacts on health and quality of life. Tissue Engineering is considered as a promising future technique that can offer integrated
solutions for tissue and organ failure. There is substantial interest in Tissue Engineering and Regenerative Medicine from both academic and
corporate sectors due to their potential to revolutionize healthcare by providing effective treatments for tissue and organ damage.
Biomaterials play an essential role in tissue repair by providing structural support and promoting tissue regeneration. Advanced biomaterials
can facilitate the regeneration of complex tissues by mimicking the natural extracellular matrix, thereby supporting cell adhesion and
proliferation upon which the success of the tissue regeneration depends. Advanced biomaterials impart essential qualities to medical
devices, allowing them to effectively treat diseased or injured tissue. In load-bearing applications like artificial hip joints, metal alloys and
ceramics are typically used due to their strength in supporting surrounding tissue and their durability in resisting wear from repetitive motion.
By addressing various facets of tissue repair, biomaterials are paving the way for more effective and personalized therapeutic approaches in
regenerative medicine. After the success of International and National conferences under the Center of Excellence in Tissue Engineering (CoE),
NIT Rourkela has planned to organize International Conference on Advanced Biomaterials for Tissue Engineering and Medical device. The
conference will provide an excellent platform for students, faculties, engineers, doctors, entrepreneurs, and industry persons with
multidisciplinary backgrounds to come together and share their latest advancements in this field. It is hoped that the International
Conference on Advanced Biomaterials for Tissue Engineering and Medical Device (ICABTEMD 2025) will make a meaningful contribution
towards the existing knowledge domain and motivate new generation of bioengineers to pave an extra mileage and come up with novel,
translatable ideas to meet the needs of the national and international community.
</p>
      </div>
    </div>
  );
};

export default AboutPage;
