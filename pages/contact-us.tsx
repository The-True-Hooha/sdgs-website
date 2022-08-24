import Layout from '@components/common/layout';
import { NextPage } from 'next';

const ContactUs: NextPage = () => {
  return (
    <Layout
      heroDetails={{
        label: 'Contact Us',
      }}
    >
      <div className="w-full p-9">
        <div className="w-6/12">
          <p className="font-secondary text-2xl mb-[20px]">
            CENTER FOR SUSTAINABLE DEVELOPMENT FEDERAL UNIVERSITY OF PETROLEUM
            RESOURCES, EFFURUN DELTA STATE, NIGERIA, P.M.B 1221
          </p>
          <div className="flex flex-col gap-[30px]">
            <div>
              <div className=" w-full relative overflow-hidden flex items-center">
                <div className="absolute left-[20px] w-[100px] h-[30px] bg-red-400"></div>
                <h2 className="uppercase font-bold font-secondary relative z-1">
                  EMAIL
                </h2>
              </div>
              <p> fcsd@fupre.edu.ng</p>
            </div>
            <div>
              <div className=" w-full relative overflow-hidden flex items-center">
                <div className="absolute left-[20px] w-[100px] h-[30px] bg-red-400"></div>
                <h2 className="uppercase font-bold font-secondary relative z-1">
                  TELEPHONE
                </h2>
              </div>
              <p>
                {' '}
                +2348073752255, <br></br> +2348035642445, <br></br>08119317782,
                <br></br>
                08030803803
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
