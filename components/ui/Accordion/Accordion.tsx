import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';
import cx from 'clsx';
import ChevronRight from '../../icons/ChevronRight';
import s from './Accordion.module.css';
import { useMediaQuery } from 'usehooks-ts';

const Accordion: FC<{
  buttonText?: string;
  buttonClasses?: string;
  iconClasses?: string;
  children: ReactNode;
  childernDivRefClasses?: string;
  parentDivRefClasses?: string;
  doUseMediaQuery?: boolean;
}> = ({
  buttonText = 'btn',
  children,
  buttonClasses = '',
  iconClasses = '',
  childernDivRefClasses = '',
  parentDivRefClasses = '',
  doUseMediaQuery = false,
}) => {
  const accordRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [isActive, setActive] = useState<boolean>(false);
  const matches = useMediaQuery('(min-width: 768px)');
  useEffect(() => {
    if (accordRef.current !== null) {
      if (doUseMediaQuery && matches) {
        accordRef.current.style.height = `${accordRef?.current.scrollHeight}px`;
        setActive(true);
      } else {
        accordRef.current.style.height = '0px';
      }
    }
  }, [accordRef, doUseMediaQuery, matches]);
  const onButtonClick = () => {
    if (!isActive && accordRef.current) {
      accordRef.current.style.height = `${accordRef?.current.scrollHeight}px`;
      setActive(true);
    } else {
      if (!doUseMediaQuery) {
        setActive(false);
        accordRef.current.style.height = '0px';
      }
    }
  };
  return (
    <div className="w-full">
      <div
        className={cx(
          parentDivRefClasses,
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
