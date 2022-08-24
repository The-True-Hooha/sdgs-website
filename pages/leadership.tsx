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
    name: 'Akinyemi O. Ogunkeyede',

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
    name: 'Doris F. Ogeleka',
    image: '/assets/images/leadership/prof-dori.jpg',
    title: 'Pioneer chair, Sustainable Development Solutions Network (SDSN)',
    modalContent: '',
  },
  {
    id: 3,
    name: 'Omosede E. Osafile',
    image: '/assets/images/leadership/prof-osafile.jpg',
    title: 'Ag. Director Sub-Degree Program FUPRE',
    modalContent: '',
  },
  {
    id: 4,
    name: 'Laurelta Esivweneta T.',
    image: '/assets/images/leadership/laurelta.jpg',
    title:
      'Acting Director of the Integrated Institute of Environment and Development (IIED), FUPRE.',
    modalContent: '',
  },
  {
    id: 5,
    name: 'Ogwuche C. Ene',
    image: '/assets/images/leadership/ogwuche.jpg',
    title: 'Coordinator of the Entrepreneurship Group of FUPRE-SDSN',
    modalContent: '',
  },
  {
    id: 6,
    name: 'Adedoyin A. Adebayo',
    image: '/assets/images/leadership/adedoyin.jpg',
    title:
      'Advocate of the 17 SDG goals especially climate matters, gender equality and partnerships for goals',
    modalContent: '',
  },
  {
    id: 7,
    name: 'Suraju O. Ogundele',
    image: '/assets/images/leadership/suraju.jpg',
    title:
      'Coordinator of Youth Development and Skills Thematic Group and Quiz Master of the SDSN',
    modalContent: '',
  },
  {
    id: 8,
    name: 'Adekunle S. Raji',
    image: '/assets/images/leadership/adekunle.jpg',
    title: 'He is a member of the SDSN since 2016.',
    modalContent: '',
  },
  {
    id: 9,
    name: 'Geraldine O. Okojie',
    image: '/assets/images/leadership/geraldine.jpg',
    title: 'Administrative officer of FUPRE SDSN',
    modalContent: '',
  },
  {
    id: 10,
    name: 'Akpobassaha O. Peace',
    image: '/assets/images/leadership/peace.jpg',
    title: 'Physical planner and Developer, a Civil and Structural Engineer',
    modalContent: '',
  },
  {
    id: 11,
    name: 'Nwachukwu B. Endurance',
    image: '/assets/images/leadership/bekenawei.jpg',
    title: 'Keen in educational development of youths',
    modalContent: '',
  },
  {
    id: 12,
    name: 'Esther Ibezim',
    image: '/assets/images/leadership/ibezim.jpg',
    title:
      'Senior Technologist in the Department of Enviromental Management and Toxicology, FUPRE',
    modalContent: '',
  },
  {
    id: 13,
    name: 'Makun O. Jayeola',
    image: '/assets/images/leadership/makun.jpg',
    title:
      'Senior Technologist in the Department of Environmental Management and Toxicology, FUPRE',
    modalContent: '',
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
      cssClasses=""
      heroDetails={{
        label: 'Leadership',
        cssClasses: 'break-all',
      }}
    >
      <div className="w-full">
        <div className="w-full">
          <h2 className="font-bold font-tertiary lg:text-[25px]">
            Dr Elias Emeka Elemike
          </h2>
          <p className="font-bold">Chairman</p>
          <div className="lg:flex md:flex sm:flex">
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
                {' '}
                Contact:+2348035642445 <br />
                elemike.elias@fupre.edu.ng
                <br />
                chemphilips@yahoo.com
              </span>
            </p>
            <div className="mt-4 lg:ml-[40px] md:ml-[50px] md:w-[260px] md:h-[260px] sm:w-[290px] sm:ml-[50px]">
              <Image
                alt={'dr elemike'}
                src={Elemike}
                width={350}
                height={380}
              />
            </div>
          </div>
        </div>

        <div className="lg:mt-[40px] grid justify-center xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-[7px] mt-[20px] sm:grid-cols-2">
          {leadershipCardData.map((v: LeadershipDataT, idx: number) => (
            <div
              key={idx}
              onClick={() => openModal(idx)}
              className="lg:w-[330px] w-[350px] md:w-[350px] xl:w-[350px] md:h-[600px] h-[600px] cursor-pointer lg:h-[570px] bg-[#f7f7f7] mt-[30px] lg:mt-6"
            >
              <Image
                src={v.image}
                alt={v.name}
                width={350}
                height={380}
                className="mt-[50px] rounded"
              />
              <div className="mt-4 font-secondary text-[15px] flex justify-center">
                {v.name}
              </div>
              <div className="mt-4 font-primary text-[15px] w-80 ml-6">
                {v.title}
              </div>
              <div className="flex w-full ml-6 mt-4">
                <p>READ MORE</p>
                <ChevronRight className="h-[24px] w-[24px] text-red-500" />
              </div>
            </div>
          ))}
        </div>
        <div></div>
      </div>
      {dataIndex > -1 && (
        <Modal
          imageUrl={leadershipCardData[dataIndex].image}
          text={leadershipCardData[dataIndex].title}
          label={leadershipCardData[dataIndex].name}
          closeBtnEventHandler={closeLeadershipModal}
        />
      )}
    </Layout>
  );
};

export default Leadership;
