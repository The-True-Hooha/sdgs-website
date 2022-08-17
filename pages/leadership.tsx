import Layout from '@components/common/layout';
import Image from 'next/image';
import Link from 'next/link';
import Elemike from '../public/assets/images/leadership/dr-elemike.jpg'

export type LeadershipDataT = {
  id: number
  name: string
  image: string
  title: string
}

export const leadershipCards: LeadershipDataT[] = [
  {
    id: 1,
    name: "Dr Akinyemi Olufemi Ogunkeyede",
    image: '/assets/images/leadership/dr-akinyemi.jpg',
    title: "Director FUPRE-SDSN",

  },
  {
    id: 2,
    name: 'Dr (Mrs.) Doris Fovwe Ogeleka',
    image: '/assets/images/leadership/prof-dori.jpg',
    title: "Pioneer chair, Sustainable Development Solutions Network (SDSN)"
  },
  {
    id: 3,
    name: 'Dr Mrs. Omosede E. Osafile',
    image: '/assets/images/leadership/prof-osafile.jpg',
    title: "Ag. Director Sub-Degree Program FUPRE"
  },
  {
    id: 4,
    name: 'Dr. (Mrs) Laurelta Esivweneta Tudararo-Aherobo (MNES, MASM, MOWSD)',
    image: '/assets/images/leadership/laurelta.jpg',
    title: "Acting Director of the Integrated Institute of Environment and Development (IIED), FUPRE."
  },
  {
    id: 5,
    name: 'Dr. (Mrs). Ogwuche Christiana Ene',
    image: '/assets/images/leadership/ogwuche.jpg',
    title: "Coordinator of the Entrepreneurship Group of FUPRE-SDSN"
  },
  {
    id: 6,
    name: 'Dr Adedoyin A.Adebayo',
    image: '/assets/images/leadership/adedoyin.jpg',
    title: "Advocate of the 17 SDG goals especially climate matters, gender equality and partnerships for goals"
  },
  {
    id: 7,
    name: 'Dr Suraju O. Ogundele',
    image: '/assets/images/leadership/suraju.jpg',
    title: "Coordinator of Youth Development and Skills Thematic Group and Quiz Master of the SDSN"
  },
  {
    id: 8,
    name: 'Adekunle S. Raji',
    image: '/assets/images/leadership/adekunle.jpg',
    title: "He is a member of the SDSN since 2016."
  },
  {
    id: 9,
    name: 'Mrs Geraldine Omonzusi Okojie',
    image: '/assets/images/leadership/geraldine.jpg',
    title: "Administrative officer of FUPRE SDSN"
  },
  {
    id: 10,
    name: 'Mrs. Akpobassaha O. Peace',
    image: '/assets/images/leadership/peace.jpg',
    title: "Physical planner and Developer, a Civil and Structural Engineer"
  },
  {
    id: 11,
    name: 'Mrs. Nwachukwu Bekenawei Endurance',
    image: '/assets/images/leadership/bekenawei.jpg',
    title: "Keen in educational development of youths"
  },
  {
    id: 12,
    name: 'Esther Ibezim',
    image: '/assets/images/leadership/ibezim.jpg',
    title: "Senior Technologist in the Department of Enviromental Management and Toxicology, FUPRE"
  },
  {
    id: 13,
    name: 'Mrs Makun Omowumi Jayeola',
    image: '/assets/images/leadership/makun.jpg',
    title: "Senior Technologist in the Department of Environmental Management and Toxicology, FUPRE"
  }
];


const leadership = (): JSX.Element => {
  return (
    <Layout
      cssClasses="min-h-[3000px] h-[80vh]"
      useHero={false}
    >
      <div className="">
        {/* div should contain the image header for the leadership page */}
        <div className='font-secondary px-[100px] py-[100px] text-[12px] font-bold'>
        <Link href="/">
          <a>HOME / OUR LEADERSHIP</a>
        </Link>
        <div className='pt-[60px] text-[20px]'>
        <h2>SDGS</h2>
        <h2 className='pt-[30px] text-[27px]'>leadership</h2>
        </div>
      </div>

      <div className='pl-[250px] w-full'>
        <div className=''>
        <h2 className='font-bold font-tertiary text-[25px]'>Dr Elias Emeka Elemike</h2>
        <p className='font-bold '>Chairman</p>
        <div className='flex'>
        <p className='font-primary w-[550px]'>Elias Emeka Elemike is the current Chairman
          of Sustainable Development Solution Network (SDSN) Federal University of Petroleum Resources Effurun (FUPRE).
          A Senior Lecturer in the Department of Chemistry, with cognate experience in the academia and process industries.
          He has first and second degrees in Pure and Industrial chemistry from Nnamdi Azikiwe University Awka and PhD in
          Inorganic Chemistry from the University of Benin. <br/>
          He has received several international research award, travel grants and have collaborations with some laboratories around the world. Elias is a facilitator and has
          served as a resource person in different workshop, symposia and conferences.
          His current research interest is in Green Nanotechnology for applications in environmental remediation,
          photocatalysis, energy, optoelectronics, corrosion inhibition, and biomedicine.<br/>
          He is also keen in the development of green and renewable raw materials from our local environment
          for the chemical industries in order to reduce waste, pollution and minimize cost of the finished chemical products.
          Elias cherishes good working and learning environment and believes it goes a long way in positively boosting one’s performance.<br/>
          Having a good environment can guarantee good health, quality education and give room for innovation.<br/>
          Elias Emeka Elemike is a member of the Chemical Society of Nigeria (CSN),
          Institute of Chattered Chemists of Nigeria (ICCON), South African Chemical Institute (SACI) and Royal Society of Chemistry (RSC).
          <span>Contact:+2348035642445,elemike.elias@fupre.edu.ng,chemphilips@yahoo.com</span>
          </p>
          <Image className='' alt={"dr elemike"} src={Elemike} width={""} height={""}/>
          </div>
        </div>

        <div className='mt-[20px] flex flex-wrap justify-start gap-[10px]'>
          {leadershipCards.map((v: LeadershipDataT) => (
            <div key={v.id}>{v.name}{v.image}</div>
          ))}
        </div>
      </div>
      </div>
    </Layout>
  );
}

export default leadership

{/* <div className="flex flex-col items-center justify-center">
        <h1 className="font-secondary text-2xl text-center">
         Leader ship
        </h1>
      </div> */}
