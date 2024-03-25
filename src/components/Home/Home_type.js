import React, { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom';
import coffee from '../../source/image/coffee-cup2.png';
import espresso from '../../source/image/espresso.png';
import latte2 from '../../source/image/latte2.png';
import style from './Home_type.module.css';

const Home_type = () => {
  const images = useMemo(() => [coffee, latte2, espresso], []);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  //isVisible의 상태는 초기값 false

  const handleImageLoad = () => {
    setIsVisible(true);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsVisible(true);
      }, 2000); //이미지 표시 후 3초뒤 다음 인덱스 이미지 표시. 까지가 1번 실행
    }, 4000); //위 내용의 기능을 5초마다 루프 실행

    return () => clearInterval(interval);
  }, [currentImageIndex, images]);


  const scrollToTop = (path) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  };


  return (
    <div className={style.container}>
      <Link to='/type' className={style.link} onClick={scrollToTop}>
        <h1 className={style.h1}>어떤 음료를 보고 계세요?</h1>
        <h2 className={style.h2}>알아보기&gt;</h2>
        <div className={`${style.imagecontainer} ${isVisible ? style.visible : ''}`}>
          {/* isVisible이 true 면 클래스에 visible 붙임. 아니면 빈칸 */}
          <img src={images[currentImageIndex]} alt="Coffee" onLoad={handleImageLoad}
            style={{
              width: '22%',
              height: 'auto',
              position: 'absolute',
            }} />
        </div>
      </Link>
    </div>
  );
};

export default Home_type