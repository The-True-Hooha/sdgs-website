/* eslint-disable @next/next/no-img-element */
import Layout from '@components/common/layout';
import { NextPage } from 'next';
import styles from '../styles/PhotoGallery.module.css';
import Image from 'next/image';
import Modal from '@components/ui/Modal';
import { useState } from 'react';

const images = [
  'Picture1.png',
  'Picture2.png',
  'Picture3.png',
  'Picture4.png',
  'Picture5.png',
  'Picture6.png',
  'Picture7.png',
  'Picture8.png',
  'Picture9.png',
  'Picture10.png',
  'Picture11.png',
  'Picture12.png',
  'Picture13.png',
  'Picture14.png',
  'Picture15.png',
  'Picture16.png',
  'Picture17.png',
  'Picture18.png',
  'Picture19.png',
  'Picture20.png',
  'Picture21.png',
  'Picture22.png',
  'Picture23.png',
  'Picture24.png',
  'Picture25.png',
  'Picture26.png',
  'Picture27.png',
  'Picture28.png',
  'Picture29.png',
  'Picture30.png',
  'Picture31.png',
  'Picture32.png',
  'Picture33.jpeg',
  'Picture34.jpeg',
  'Picture35.jpeg',
  'Picture36.jpeg',
  'Picture37.jpeg',
  'Picture38.jpeg',
  'Picture39.jpeg',
  'Picture40.jpeg',
  'Picture41.jpeg',
  'Picture42.jpeg',
  'Picture43.jpeg',
  'Picture44.jpeg',
  'Picture45.jpeg',
  'Picture46.jpeg',
  'Picture47.jpeg',
  'Picture48.jpeg',
];
const PhotoGallery: NextPage = () => {
  const [modalImage, setModalImage] = useState<string>('');
  const openModal = (imgIdx: number) => {
    setModalImage(`/assets/photo-gallery/${images[imgIdx]}`);
  };
  const closeModal = (ev: any) => {
    console.log('close');
    setModalImage('');
  };
  return (
    <Layout
      heroDetails={{
        label: 'Photo Gallery',
      }}
    >
      <div className="w-full py-[100px] grid place-items-center">
        <div className={styles.mainboard__container}>
          {images.map((v: string, idx: number) => (
            <div
              key={idx}
              className="w-[180px] md:w-[236px] mb-[10px] overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openModal(idx)}
            >
              <img
                src={`/assets/photo-gallery/${v}`}
                alt={v}
                className="object-cover object-top w-full"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      {modalImage && (
        <Modal closeBtnHandler={closeModal} imageUrl={modalImage} />
      )}
    </Layout>
  );
};

export default PhotoGallery;
