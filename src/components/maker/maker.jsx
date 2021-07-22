import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
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
    2: {
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
    3: {
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
  });

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

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
