import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';
import cx from 'clsx';
import ChevronRight from '../../icons/ChevronRight';
import s from './Accordion.module.css';

const Accordion: FC<{
  buttonText?: string;
  buttonClasses?: string;
  iconClasses?: string;
  children: ReactNode;
  childernDivRefClasses?: string;
}> = ({
  buttonText = 'btn',
  children,
  buttonClasses = '',
  iconClasses = '',
  childernDivRefClasses = '',
}) => {
  const accordRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [isActive, setActive] = useState<boolean>(false);
  useEffect(() => {
    if (accordRef.current !== null) {
      accordRef.current.style.height = '0px';
    }
  }, [accordRef]);
  const onButtonClick = () => {
    if (!isActive && accordRef.current) {
      accordRef.current.style.height = `${accordRef?.current.scrollHeight}px`;
      setActive(true);
    } else {
      setActive(false);
      accordRef.current.style.height = '0px';
    }
  };
  return (
    <div className="w-full">
      <div
        className={cx(
          childernDivRefClasses,
          'w-full flex flex-row items-center justify-between border-b border-solid border-gray-300'
        )}
        onClick={onButtonClick}
      >
        <button
          className={cx('flex py-2 px-3 border-0 rounded-none', buttonClasses)}
          type="button"
        >
          {buttonText ? buttonText : ' Button text'}
        </button>
        <ChevronRight
          className={cx(
            s.icon,
            'h-[24px] w-[24px] cursor-pointer',
            {
              [s.open]: isActive,
            },
            iconClasses
          )}
        />
      </div>
      <div
        ref={accordRef}
        className={cx(
          childernDivRefClasses,
          'overflow-hidden transition-all duration-300 ease-in-out ',
          {
            ' border-b border-solid border-gray-300 ': isActive,
          }
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
