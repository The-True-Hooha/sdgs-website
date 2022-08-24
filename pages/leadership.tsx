import { useState } from 'react';
import Layout from '@components/common/layout';
import { ChevronRight } from '@components/icons';
import Image from 'next/image';
import Link from 'next/link';
import Elemike from '../public/assets/images/leadership/dr-elemike.jpg';
import Modal from '@components/ui/Modal';

export type LeadershipDataT = {
  id: number;
  name: string;
  image: string;
  title: string;
  modalContent: string;
};

export const leadershipCardData: LeadershipDataT[] = [
  {
    id: 1,
    name: 'Dr. Akinyemi O. Ogunkeyede',

    image: '/assets/images/leadership/dr-akinyemi.jpg',

    title: 'Director FUPRE-SDSN',

    modalContent: `Industrial Chemistry, University of Ibadan (B.Sc. 2004) \n
    Analytical Chemistry, University of Ibadan (M.Sc. 2006) \n
    Activities \n
    Regular discussant on television and radio on environmental matters \n
    He was the keynote speaker at a biodiversity conservation workshop
    organised by the ACCARD initiative and National Oil Spill Detection
    and Response Agency (NOSDRA) at the Ministry of Environment, Yenagoa, Bayelsa \n
    Member FUPRE linkage committee \n
    Established the Postgraduate SDSN group \n
    FUPRE innovation and research development committee member (2019 -2020) \n
    FUPRE local organising chairperson of the 7th Nigerian Young Academy (NYA) conference and general assembly (2017) \n
    Consultant for the Coastal and Marine Areas Development Initiative (CMADI on mangrove projects and activities \n
    Partnership with the PIND foundation to successfully trained 200 unemployable youth in Edo state on Solar PV \n
    Team Head for the report on the oil-producing companies' contribution in the Niger Delta region to greenhouse gas emissions for PACJA-CSDevNet \n
    Head of the multidisciplinary consultant team for an NGO called Initiative for Community Development (ICD) in Delta State on the restoration project of agricultural soil polluted with the crude oil spill \n
    Filed a patent for plastic composite brick to reduce GHG from the solid waste stream in Nigeria \n
    Developed processes to purify wastewater with the use of agricultural waste products
    `,
  },

  {
    id: 2,
    name: 'Prof (Mrs.) Doris F. Ogeleka',
    image: '/assets/images/leadership/prof-dori.jpg',
    title: 'Pioneer chair, Sustainable Development Solutions Network (SDSN)',
    modalContent: `Prof (Mrs.) Doris Fovwe Ogeleka is an Associate Professor of Analytical
    (Ecotoxicology) Chemistry. She is currently the Director,
    Centre for Safety Education and the immediate past head of Department of
    Chemistry, Federal University of Petroleum Resources Effurun (FUPRE), Delta State, Nigeria. She is the pioneer Chair,
    Sustainable Development Solutions Network (SDSN) that is the Nigeria Mode of the United Nation SDG ‘‘AGENDA 2030’’
    having 17 Sustainable development goals (SDGs) with the zeal and passion to effectively drive SDGs in her region and community.
    Similarly, she is a member of the Sustainable Development Thematic Group (SDTG) in FUPRE and the Youth Alliance for Leadership and
    Development in Africa (YALDA). She is the immediate past Chair, Women in Chemistry (WIC) of the Chemical Society of Nigeria (CSN),
    Delta Chapter. She is a member of the following learned society / professional associations: Chemical Society of Nigeria (CSN),
    Institute of Chartered Chemist of Nigeria (ICCON), Nigeria Environmental Society (NES), West Africa Society of Toxicology (WASOT),
    Waste Management Society of Nigeria (WAMASON), Chartered Institute of Waste Management (CIWM), United Kingdom. She has diverse research
    interests in Environmental Studies, Chemistry of Renewable Materials, Biomass and Bioenergy to name a few. Some environmental studies
    she had embarked upon include: Environmental Impact Assessment (EIA), Environmental, Social, Health Management Plan (ESHMP),
    Preliminary Environmental Impact Assessment Report (PIAR), Environmental Monitoring Plan (EMP), Environmental Evaluation Report 99(EER),
    Studies on waste management and recycling procedures, Ecological Studies (ES), Toxicological testing of hazardous chemicals,
    Impact analysis of produced water discharge, Aqueous effluent monitoring. Sewage monitoring/Jar test analysis, Sea bed survey,
    Post clean-up analysis of spilled/contaminated sites, amongst others. She has lots of experience in various waste management techniques
    including Engineered Landfill, hazard and operability study (HAZOP) on Engineered Landfill projects. Her technical capability
    in secondary waste management and Toxicity Characteristics Leaching Procedure (TCLP) include: the use of binders in solidifying
    and stabilizing secondary waste materials [sludge and thermal desorption unit (TDU) residues. With over 50 academic
      publications, her area of specialization and research interest and responsibilities include: Ecotoxicology, Ecological Risk Assessment (ERA),
      instrumentation and analysis on water, soil and air chemistry, Industrial safety, Laboratory Quality Assurance and Quality Control (QA/QC)
      management, Bioremediation/biodegradation testing, Phytoremediation, waste management procedures & techniques and training
      in laboratory quality analysis amongst others. Similarly, she coordinates multi-disciplinary training and research
      programs of environmental & climate change issues, solutions, and literacy. She has served in various University committees / administrative
      duties and community services. She has received various awards including best Female Chemist of the year 2016 and Best HOD in FUPRE, 2017, award of service and
      recognition for SCSN 2016 & 2018 to mention but a few.
      <br>
      Contact:<b>+234 8023243514<b>,
      <b>dorysafam@yahoo.com</b>
`,
  },
  {
    id: 3,
    name: 'Prof (Mrs.) Omosede E. Osafile',
    image: '/assets/images/leadership/prof-osafile.jpg',
    title: 'Ag. Director Sub-Degree Program FUPRE',
    modalContent: `
    Omosede Eromwon Osafile is an Professor of Theoretical Condensed Matter Physics of the Department of Physics
    at the Federal University of Petroleum Resources, Effurun. She completed all her degrees from the University of Benin.
    She has served in several committees and as Ag. HOD, Physics. She is currently the Ag. Director of the sub-Degree program in FUPRE.
Omosede Eromwon Osafile has received local and international research travel grants, governing Council Chairman’s commendations, letters
of appreciation from the University management for outstanding achievements. She is a member of relevant professional bodies including
the Solar Energy Society of Nigeria (SESN) and the organisation of Women in Science in the Developing World (OWSD). She was a recipient
of the institutional based research grant as a principal investigator and a team member in other local and international grants awards.
Dr Osafile’s  research interests includes renewable energies and energy storage materials. She has post-graduate students under her supervision.
In FUPRE SDSN, she is so much involved in youth development and gender issues.
Contact: <b>+2347033249124, osafile.omosede@fupre.edu.ng, erompower@yahoo.com</b>

    `,
  },
  {
    id: 4,
    name: 'Dr. (Mrs.) Laurelta Esivweneta T.',
    image: '/assets/images/leadership/laurelta.jpg',
    title:
      'Acting Director of the Integrated Institute of Environment and Development (IIED), FUPRE.',
    modalContent: `
    Dr. (Mrs) Laurelta Esivweneta Tudararo-Aherobo (MNES, MASM, MOWSD)
 B.Sc. (Microbiology); M.Sc., Ph.D. (Environmental & Public Health Microbiology)
Telephone: +2348023113379
Email: tudararo.aherobo@fupre.edu.ng
Designation: Ag. Director, Integrated Institute for Environment & Development

Dr.(Mrs) Laurelta Tudararo-Aherobo is currently the Acting Director of the Integrated Institute of Environment and Development (IIED),
FUPRE. She is a Senior lecturer in the Department of Environmental Management and Toxicology, Federal University of Petroleum Resources,
Effurun. She obtained her B.Sc. degree in Microbiology (2nd Class Honours, Upper Division) in 1990, M.Sc. and Ph.D. degrees in Environmental &
Public Health Microbiology in 2000 and 2014 respectively. All three degrees were obtained from the University of Benin, Benin City. Part of her Ph.D. research was conducted at the Faculty of Biological Sciences, Flinders University, Adelaide, South Australia.
Before joining the employ of Federal University of Petroleum Resources (FUPRE) in April 2008 as one of the pioneer staff, she had worked with Delta State Post Primary Education Board for three (3) years, Thermosteel Nig. Ltd. (Environmental Consulting Company) for ten (10) years and Novena University, Ogume, Delta State from 2007 – 2008 in the Department of Biological Sciences, where she was the Acting Head of Department.
Her research interests’ covers; water & wastewater quality assessment and treatment, bioremediation of impacted sites, toxicological & biodegradation studies, green energy innovations, corrosion control and application of molecular biology techniques in microbial corrosion control, bioremediation of impacted sites and wastes management among others.
She is a Member of the Nigeria Environmental Society (NES), Waste Management Association of Nigeria, American Society for Microbiology and Organization of Women in Science in Developing World (OWSD).

    `,
  },
  {
    id: 5,
    name: 'Dr (Mrs.) Ogwuche C. Ene',
    image: '/assets/images/leadership/ogwuche.jpg',
    title: 'Coordinator of the Entrepreneurship Group of FUPRE-SDSN',
    modalContent: `
    Dr. (Mrs). Ogwuche Christiana Ene is a lecturer in the department of Chemistry, Federal University of Petroleum Resources Effurun. She obtained BSc in Chemistry from Benue State University Makurdi in 2007. She obtained her MSc and Ph.D in Organic Chemistry (Natural products) from Ahmadu Bello  University, Zaria in  2011 and 2015 respectively. Her research interests are on Isolation and purification of organic compounds and the application of natural products in nanotechnology research. She is a coordinator of the entrepreneurship group of FUPRE-SDSN.
Contact: +2347037166612, christogwu@gmail.com

    `,
  },
  {
    id: 6,
    name: 'Dr (Mrs.) Adedoyin A. Adebayo',
    image: '/assets/images/leadership/adedoyin.jpg',
    title:
      'Advocate of the 17 SDG goals especially climate matters, gender equality and partnerships for goals',
    modalContent: `
      Dr Adedoyin A.Adebayo is a Lecturer in the Department of environmental management and Toxicology,Federal University of Petroleum resources Effurun. She is a trained Analytical/Environmental chemist. In SDSN, she is a strong advocate of the 17 SDG goals especially climate matters, gender equality and partnerships for goals.
•	Contact: +2347084690288

    `,
  },
  {
    id: 7,
    name: 'Dr. Suraju O. Ogundele',
    image: '/assets/images/leadership/suraju.jpg',
    title:
      'Coordinator of Youth Development and Skills Thematic Group and Quiz Master of the SDSN',
    modalContent: `
      Dr Suraju O. Ogundele is a lecturer in the Department of Statistics Federal University of Petroleum Resources Effurun. He is a trained statistician, data analyst and a machine learning applications developer and trainer. He is the coordinator of youth development and skills thematic group and quiz master of the SDSN.
Contact: +2347038651987
    `,
  },
  {
    id: 8,
    name: 'Adekunle S. Raji',
    image: '/assets/images/leadership/adekunle.jpg',
    title: 'He is a member of the SDSN since 2016.',
    modalContent: `
    Adekunle S. Raji is a computational geographer (Remote Sensing, GIS and Spatial Statistics) and lecturer at the Department of Environmental Management and Toxicology at the Federal University of Petroleum Resources, Effurun Nigeria. His research focuses on the spatiotemporal footprints of land change science and biogeosciences such as dynamics of ecosystem services, modeling water-land-climate nexus, geo-hazard and land change and management. In a nutshell, he is a strong advocate of life below water and life on land (Goals #14 and 15).  He holds a BSc degree in Geography (First Class) and a MSc (Remote Sensing) degree from the University of Lagos. Currently, he is at the viva voce stage of his Ph.D. degree in Remote Sensing and GIS with the topic “Modeling the Impact of Climate Change on selected Ecosystem Services in the Sokoto-Rima basin”. Adekunle Raji is a Research Fellow of the Earth System Governance Project – a global land management think-thank network, an early career member of the Global Land Programme. He is also a key member of the Inter-University Study Group on Environmental Management, Modeling and Tropical Geomorphometry between the Federal University of Petroleum Resources, Effurun and the University of Lagos. He has participated in a number of global conferences and key climate change and earth system modelling workshops such as the Aspen Global Climate Institute workshop on Linking Human and Earth System Models for Global Change Analysis. He is a member of several local and international research organisations including the American Geophysical Union (AGU), African Association of the Remote Sensing of the Environment (AARSE), Association of Nigerian Geographers (ANG), Nigerian Environment Society (NES) among others. His research is widely published in local and international highly-ranked journals with associated journal reviewer duties. He is a member of the SDSN since 2016.
    `,
  },
  {
    id: 9,
    name: 'Mrs. Geraldine O. Okojie',
    image: '/assets/images/leadership/geraldine.jpg',
    title: 'Administrative officer of FUPRE SDSN',
    modalContent: `
    Mrs Geraldine Omonzusi Okojie is the administrative officer of FUPRE SDSN. She is a public administrator by profession and a member of the chattered institute of Administration (ACIA). The 17 SDG goals are very dear to her heart and she believes that with partnerships and collaborations that all the other goals would be achieved.
    `,
  },
  {
    id: 10,
    name: 'Mrs. Akpobassaha O. Peace',
    image: '/assets/images/leadership/peace.jpg',
    title: 'Physical planner and Developer, a Civil and Structural Engineer',
    modalContent: `
    Mrs Akpobassaha O. Peace is a physical planner and developer, a civil and structural engineer who is interested in good working environment and gender issues
    `,
  },
  {
    id: 11,
    name: 'Mrs. Nwachukwu B. Endurance',
    image: '/assets/images/leadership/bekenawei.jpg',
    title: 'Keen in educational development of youths',
    modalContent: `
    MRS Nwachukwu Bekenawei Endurance is keen in educational development of youths especially in the riverine areas
    `,
  },
  {
    id: 12,
    name: 'Esther Ibezim',
    image: '/assets/images/leadership/ibezim.jpg',
    title:
      'Senior Technologist in the Department of Enviromental Management and Toxicology, FUPRE',
    modalContent: `
    Esther Ibezim is a Senior Technologist in the Department of Enviromental Management and Toxicology. She is very much interested in gender issues and mitigation of climate change.
    `,
  },
  {
    id: 13,
    name: 'Mrs. Makun O. Jayeola',
    image: '/assets/images/leadership/makun.jpg',
    title:
      'Senior Technologist in the Department of Environmental Management and Toxicology, FUPRE',
    modalContent: `
    Mrs Makun Omowumi Jayeola is a senior technologist in the Department of Environmental Management and Toxicology. She has a degree in Environmental Science and Resource Management. The environment is so dear to her heart and she does everything within her powers to sustain it.
    `,
  },
];

const Leadership = () => {
  const [dataIndex, setDataIndex] = useState<number>(-1);

  const openModal = (dataIdx: number) => {
    setDataIndex(dataIdx);
    // console.log(leadershipCardData[dataIndex])
  };

  const closeLeadershipModal = (ev: any) => {
    setDataIndex(-1);
  };

  return (
    <Layout
      cssClasses="lg:px-[150px]"
      heroDetails={{
        label: 'Leadership',
        cssClasses: 'break-all',
      }}
    >
      <div className="w-full">
        <div className="w-full flex flex-col md:flex-row-reverse gap-6">
          <div className="w-full md:w-4/12">
            <div className="w-full">
              <Image
                alt={'dr elemike'}
                src={Elemike}
                width={350}
                height={380}
                className=" rounded-lg"
              />
            </div>
            <h2 className="font-bold font-secondary text-lg">
              Dr Elias Emeka Elemike
            </h2>
            <p className="font-secondary">Chairman</p>
          </div>
          <div className="w-full md:w-8/12">
            <p className="font-primary text-[14px] lg:text-[15px] w-[350px] lg:w-[550px]">
              Elias Emeka Elemike is the current Chairman of Sustainable
              Development Solution Network (SDSN) Federal University of
              Petroleum Resources Effurun (FUPRE). A Senior Lecturer in the
              Department of Chemistry, with cognate experience in the academia
              and process industries. He has first and second degrees in Pure
              and Industrial chemistry from Nnamdi Azikiwe University Awka and
              PhD in Inorganic Chemistry from the University of Benin. <br />
              He has received several international research award, travel
              grants and have collaborations with some laboratories around the
              world. Elias is a facilitator and has served as a resource person
              in different workshop, symposia and conferences. His current
              research interest is in Green Nanotechnology for applications in
              environmental remediation, photocatalysis, energy,
              optoelectronics, corrosion inhibition, and biomedicine.
              <br />
              He is also keen in the development of green and renewable raw
              materials from our local environment for the chemical industries
              in order to reduce waste, pollution and minimize cost of the
              finished chemical products. Elias cherishes good working and
              learning environment and believes it goes a long way in positively
              boosting one’s performance.
              <br />
              Having a good environment can guarantee good health, quality
              education and give room for innovation.
              <br />
              Elias Emeka Elemike is a member of the Chemical Society of Nigeria
              (CSN), Institute of Chattered Chemists of Nigeria (ICCON), South
              African Chemical Institute (SACI) and Royal Society of Chemistry
              (RSC). <br />
              <span className="w-[350px] text-[15px]">
                Contact:+2348035642445 <br />
                elemike.elias@fupre.edu.ng
                <br />
                chemphilips@yahoo.com
              </span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-[20px] mt-[20px] lg:mt-[40px]">
          {leadershipCardData.map((v: LeadershipDataT, idx: number) => (
            <div
              key={idx}
              onClick={() => openModal(idx)}
              className="cursor-pointer bg-[#f7f7f7] overflow-hidden rounded-lg"
            >
              <Image
                src={v.image}
                alt={v.name}
                width={350}
                height={380}
                layout="responsive"
                className="p-0 m-0"
              />
              <div className="w-full p-5 flex flex-col gap-5">
                <p className="font-secondary text-[15px]">{v.name}</p>
                <p className="font-primary text-[15px]">{v.title}</p>
                <button className="flex w-full">
                  <span>READ MORE</span>
                  <ChevronRight className="h-[24px] w-[24px] text-red-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div></div>
      </div>
      {dataIndex > -1 && (
        <Modal
          imageUrl={leadershipCardData[dataIndex].image}
          innerHtmlText={leadershipCardData[dataIndex].modalContent}
          label={leadershipCardData[dataIndex].name}
          closeBtnEventHandler={closeLeadershipModal}
          smLabel={leadershipCardData[dataIndex].title}
        />
      )}
    </Layout>
  );
};

export default Leadership;
