import Layout from '@components/common/layout';
import Image from 'next/image';
import Link from 'next/link';
import Elemike from '../public/assets/images/leadership/dr-elemike.jpg'
import Adedoyin from '../public/assets/images/leadership/adedoyin.jpg'
import Adekunle from '../public/assets/images/leadership/adekunle.jpg'
import Bekenawei from '../public/assets/images/leadership/bekenawei.jpg'
import Adeyemi from '../public/assets/images/leadership/dr-adeyemi.jpg'
import Geraldine from '../public/assets/images/leadership/geraldine.jpg'
import Ibezim from '../public/assets/images/leadership/ibezim.jpg'
import Laurelta from '../public/assets/images/leadership/laurelta.jpg'
import Makun from '../public/assets/images/leadership/makun.jpg'
import Ogwuche from '../public/assets/images/leadership/ogwuche.jpg'
import Peace from '../public/assets/images/leadership/peace.jpg'
import Dori from '../public/assets/images/leadership/prof-dori.jpg'
import Osafile from '../public/assets/images/leadership/prof-osafile.jpg'
import Suraju from '../public/assets/images/leadership/suraju.jpg'

const leadershipData = [
  {
    name: '',
    image: '',
    title: ""
  },
  {
    name: '',
    image: '/images/leadership/dr-elemike.jpg',
    title: ""
  },
  {
    name: '',
    image: '/images/leadership/dr-elemike.jpg',
    title: ""
  },
  {
    name: '',
    image: '/images/leadership/dr-elemike.jpg',
    title: ""
  },
  {
    name: '',
    image: '/images/leadership/dr-elemike.jpg',
    title: ""
  },
  {
    name: '',
    image: '/images/leadership/dr-elemike.jpg',
    title: ""
  },
  {
    name: '',
    image: '/images/leadership/dr-elemike.jpg',
    title: ""
  },
  {
    name: '',
    image: '/images/leadership/dr-elemike.jpg',
    title: ""
  },
  {
    name: '',
    image: '/images/leadership/dr-elemike.jpg',
    title: ""
  },
  {
    name: '',
    image: '/images/leadership/dr-elemike.jpg',
    title: ""
  },
  {
    name: '',
    image: '/images/leadership/dr-elemike.jpg',
    title: ""
  },
  {
    name: '',
    image: '/images/leadership/dr-elemike.jpg',
    title: ""
  },
  {
    name: '',
    image: '/images/leadership/dr-elemike.jpg',
    title: ""
  },
  {
    name: '',
    image: '/images/leadership/dr-elemike.jpg',
    title: ""
  },
  {
    name: '',
    image: '/images/leadership/dr-elemike.jpg',
    title: ""
  }
];
export default function Leadership() {
  return (
    <Layout
      cssClasses="grid min-h-[2000px] h-[80vh]"
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
