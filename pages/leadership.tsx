import Layout from '@components/common/layout';
import Image from 'next/image';
import Link from 'next/link';
import Elemike from '../public/assets/images/leadership/dr-elemike.jpg'
import Adedoyin from '../public/assets/images/leadership/adedoyin.jpg'
import Adekunle from '../public/assets/images/leadership/adekunle.jpg'
import Bekenawei from '../public/assets/images/leadership/bekenawei.jpg'
import Akinyemi from "../public/assets/images/leadership/dr-akinyemi.jpg"
import Geraldine from '../public/assets/images/leadership/geraldine.jpg'
import Ibezim from '../public/assets/images/leadership/ibezim.jpg'
import Laurelta from '../public/assets/images/leadership/laurelta.jpg'
import Makun from '../public/assets/images/leadership/makun.jpg'
import Ogwuche from '../public/assets/images/leadership/ogwuche.jpg'
import Peace from '../public/assets/images/leadership/peace.jpg'
import Doris from '../public/assets/images/leadership/prof-dori.jpg'
import Osafile from '../public/assets/images/leadership/prof-osafile.jpg'
import Suraju from '../public/assets/images/leadership/suraju.jpg'

const leadershipData = [
  {
    name: "Dr Akinyemi Olufemi Ogunkeyede",
    image: <Image src={Akinyemi} width={100} alt="dr-akinyemi"/>,
    position: "Director FUPRE-SDSN"
  },
  {
    name: 'Dr (Mrs.) Doris Fovwe Ogeleka',
    image: <Image src={Doris} width={100} alt="dr mrs doris fovwe"/>,
    title: "Pioneer chair, Sustainable Development Solutions Network (SDSN)"
  },
  {
    name: 'Dr Mrs. Omosede E. Osafile',
    image: <Image src={Osafile} width={100} alt="dr mrs osafile"/>,
    title: "Ag. Director Sub-Degree Program FUPRE"
  },
  {
    name: 'Dr. (Mrs) Laurelta Esivweneta Tudararo-Aherobo (MNES, MASM, MOWSD)',
    image: <Image src={Laurelta} width={100} alt="dr mrs laurelta Esivweneta"/>,
    title: "Acting Director of the Integrated Institute of Environment and Development (IIED), FUPRE."
  },
  {
    name: 'Dr. (Mrs). Ogwuche Christiana Ene',
    image: <Image src={Ogwuche} width={100} alt="Dr. (Mrs). Ogwuche Christiana Ene"/>,
    title: "Coordinator of the Entrepreneurship Group of FUPRE-SDSN"
  },
  {
    name: 'Dr Adedoyin A.Adebayo',
    image: <Image src={Adedoyin} width={100} alt="Dr Adedoyin A.Adebayo"/>,
    title: "Advocate of the 17 SDG goals especially climate matters, gender equality and partnerships for goals"
  },
  {
    name: 'Dr Suraju O. Ogundele',
    image: <Image src={Suraju} width={100} alt="Dr Suraju O. Ogundele"/>,
    title: "Coordinator of Youth Development and Skills Thematic Group and Quiz Master of the SDSN"
  },
  {
    name: 'Adekunle S. Raji',
    image: <Image src={Adekunle} width={100} alt="Adekunle S. Raji"/>,
    title: "He is a member of the SDSN since 2016."
  },
  {
    name: 'Mrs Geraldine Omonzusi Okojie',
    image: <Image src={Geraldine} width={100} alt="Mrs Geraldine Omonzusi Okojie"/>,
    title: "Administrative officer of FUPRE SDSN"
  },
  {
    name: 'Mrs. Akpobassaha O. Peace',
    image: <Image src={Peace} width={100} alt="Mrs Akpobassaha O. Peace" />,
    title: "Physical planner and Developer, a Civil and Structural Engineer"
  },
  {
    name: 'Mrs. Nwachukwu Bekenawei Endurance',
    image: <Image src={Bekenawei} width={100} alt="Mrs Nwachukwu Bekenawei Endurance"/>,
    title: "Keen in educational development of youths"
  },
  {
    name: 'Esther Ibezim',
    image: <Image src={Ibezim} width={100} alt="Esther Ibezim"/>,
    title: "Senior Technologist in the Department of Enviromental Management and Toxicology, FUPRE"
  },
  {
    name: 'Mrs Makun Omowumi Jayeola',
    image: <Image src={Makun} width={100} alt="Mrs Makun Omowumi Jayeola"/>,
    title: "Senior Technologist in the Department of Environmental Management and Toxicology, FUPRE"
  }
];
export default function Leadership() {
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
      </div>
      </div>
    </Layout>
  );
}

{/* <div className="flex flex-col items-center justify-center">
        <h1 className="font-secondary text-2xl text-center">
         Leader ship
        </h1>
      </div> */}
