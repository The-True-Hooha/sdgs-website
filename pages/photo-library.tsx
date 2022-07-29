/* eslint-disable @next/next/no-img-element */
import Layout from '@components/common/layout';
import { NextPage } from 'next';
import styles from '../styles/PhotoGallery.module.css';
import Image from 'next/image';

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
];
const PhotoGallery: NextPage = () => {
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
              className="w-[236px] mb-[10px] overflow-hidden rounded-lg"
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
    </Layout>
  );
};

export default PhotoGallery;
