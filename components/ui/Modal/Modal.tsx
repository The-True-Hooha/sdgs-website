import { Close } from '@components/icons';
import Image from 'next/image';
import cx from 'clsx';

type ModalT = {
  imageUrl: string;
  label?: string;
  text?: string;
  closeBtnHandler: (ev: any) => void;
};

const Modal: React.FunctionComponent<ModalT> = ({
  imageUrl,
  label = '',
  text = '',
  closeBtnHandler,
}): JSX.Element => {
  return (
    <div className="fixed inset-0 bg-gray-200/40 backdrop-blur z-[3] grid place-items-center py-[100px]">
      <div className="w-11/12 md:w-8/12 bg-white h-[600px] rounded-[8px] relative px-5 py-11">
        <div
          onClick={(e: any) => closeBtnHandler(e)}
          className="absolute right-2 top-2 cursor-pointer hover:text-gray-400"
        >
          <Close className="w-[32px] h-[32px]" />
        </div>

        <div className="w-full h-full flex flex-col md:flex-row gap-[15px] overflow-y-scroll">
          <div className="w-full md:w-6/12">
            <Image
              src={imageUrl}
              alt="alt"
              width={150}
              height={150}
              layout="responsive"
              className="object-cover object-center"
            />
          </div>
          <div className="w-full md:w-6/12">
            <h2 className="font-secondary font-bold text-base mb-6">Label</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, commodi voluptatibus. Ad in voluptatibus accusamus,
              aut explicabo laborum suscipit illo, inventore voluptatem dolore
              minus ratione blanditiis hic, dolor odit odio. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Consectetur, commodi
              voluptatibus. Ad in voluptatibus accusamus, aut explicabo laborum
              suscipit illo, inventore voluptatem dolore minus ratione
              blanditiis hic, dolor odit odio. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Consectetur, commodi voluptatibus.
              Ad in voluptatibus accusamus, aut explicabo laborum suscipit illo,
              inventore voluptatem dolore minus ratione blanditiis hic, dolor
              odit odio. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Consectetur, commodi voluptatibus. Ad in voluptatibus
              accusamus, aut explicabo laborum suscipit illo, inventore
              voluptatem dolore minus ratione blanditiis hic, dolor odit odio.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, commodi voluptatibus. Ad in voluptatibus accusamus,
              aut explicabo laborum suscipit illo, inventore voluptatem dolore
              minus ratione blanditiis hic, dolor odit odio. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Consectetur, commodi
              voluptatibus. Ad in voluptatibus accusamus, aut explicabo laborum
              suscipit illo, inventore voluptatem dolore minus ratione
              blanditiis hic, dolor odit odio. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Consectetur, commodi voluptatibus.
              Ad in voluptatibus accusamus, aut explicabo laborum suscipit illo,
              inventore voluptatem dolore minus ratione blanditiis hic, dolor
              odit odio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
