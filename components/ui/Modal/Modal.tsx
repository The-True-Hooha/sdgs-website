import { Close } from '@components/icons';
import Image from 'next/image';
import cx from 'clsx';

type ModalT = {
  imageUrl: string;
  label?: string;
  text?: string;
  closeBtnEventHandler: (ev: any) => void;
};

const Modal: React.FunctionComponent<ModalT> = ({
  imageUrl,
  label = '',
  text = '',
  closeBtnEventHandler,
}): JSX.Element => {
  return (
    <div
      className="fixed inset-0 bg-gray-200/40 backdrop-blur z-[3] grid place-items-center"
      onClick={(e: any) => closeBtnEventHandler(e)}
    >
      <div
        className={cx(
          'w-11/12 md:w-8/12 bg-white max-h-[500px] rounded-[8px] relative overflow-hidden',
          {
            'px-5 py-11': label && text,
          }
        )}
        onClick={(e: any) => e.stopPropagation()}
      >
        <div
          onClick={(e: any) => closeBtnEventHandler(e)}
          className="absolute right-2 top-2 p-1 md:p-3 bg-white rounded-full z-10 cursor-pointer text-gray-500 hover:text-gray-400"
        >
          <Close className="w-[32px] h-[32px]" />
        </div>

        <div
          className={cx(
            'w-full h-full flex flex-col md:flex-row gap-[15px] justify-center items-center',
            {
              '!overflow-y-scroll': label && text,
            }
          )}
        >
          <div className="w-full h-full md:w-6/12">
            <Image
              src={imageUrl}
              alt="alt"
              width={150}
              height={150}
              layout="responsive"
              priority={true}
              className="w-full object-cover object-center"
            />
          </div>
          {label && text && (
            <div className="w-full md:w-6/12">
              {label && (
                <h2 className="font-secondary font-bold text-base mb-6">
                  {label}
                </h2>
              )}
              {text && <p>{text}</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
