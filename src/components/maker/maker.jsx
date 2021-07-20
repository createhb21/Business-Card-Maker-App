import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Hyobum',
      company: 'KAKAO',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'alsghk9701@gmail.com',
      message: 'fo for it',
      fileName: 'bum',
      fileURL: null,
    },
    {
      id: '2',
      name: 'Soyeop',
      company: 'KAKAO',
      theme: 'light',
      title: 'Software Engineer',
      email: 'asas22s@gmail.com',
      message: 'fo for it',
      fileName: 'yeop',
      fileURL: 'soyeop.png',
    },
    {
      id: '3',
      name: 'Taekeon',
      company: 'KAKAO',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'teagkow21@gmail.com',
      message: 'fo for it',
      fileName: 'keon',
      fileURL: null,
    },
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
