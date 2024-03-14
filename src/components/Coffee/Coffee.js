import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import style from '../Coffee/Coffee.module.css'
import coffee_up from '../../source/image/coffee_up.gif';
import meeting from '../../source/image/meeting_cafe.jpg';
import alone from '../../source/image/alone_cafe.jpg';
import daily from '../../source/image/daily_cafe.jpg';
import coffee_illust from '../../source/image/coffee_illust.png';
import bean_illust from '../../source/image/bean_illust.png';

import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, FadeUp, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";


const Coffee = () => {
  const videoRef = useRef();
  const h2Ref = useRef();
  const [videoStarted, setVideoStarted] = useState(false);

  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  const scrollToTop = (path) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  };


  useEffect(() => {
    const handleVideoStart = () => {
      const videoDuration = videoRef.current.duration;
      const delay = videoDuration / 3 * 1000;
      //current.duration은 현재 동영상의 총 재생시간을 의미

      setTimeout(() => {
        setVideoStarted(true);
      }, delay);
    };

    const currentVideoRef = videoRef.current;

    if (currentVideoRef) {
      currentVideoRef.addEventListener('playing', handleVideoStart);
      //영상이 재생이 끝나면 ended에 대한 이벤트 감지 handle함수 사용

      return () => {
        currentVideoRef.removeEventListener('playing', handleVideoStart);
        //메모리 누수 방지를 위해 이벤트리스너를 제거함 정리기능
      };
    }

    return () => { };
  }, []);
  //빈 값으로 다시 확실히 정리하는 리턴


  return (
    <div className={style.body}>
      <div className={style.container}>
        <h1 className={style.h1}>
          Coffee 에 대해서.
        </h1>
        <h1 className={style.h1_2}>
          커피 에 대해서.
        </h1>
      </div>

      <div className={style.video}>
        <video ref={videoRef} autoPlay muted width="60%">
          <source src={'videos/coffee_mix.mp4'} type='video/mp4' />
        </video>
        {videoStarted && (
          <h2 ref={h2Ref} className={style.h2}>
            커피는 이제 문화입니다
          </h2>
        )}
      </div>

      <ScrollContainer>
        <ScrollPage>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={FadeUp}>
            <div className={style.coffee_up}>
              <img src={coffee_up} alt={coffee_up} />
            </div>
            <h1 className={style.h3}>
              이제는 단숨 잠을 쫓아내는게 아닌
            </h1>
          </Animator>
        </ScrollPage>

        <ScrollPage>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky())}>
            <h1 className={style.h4}>
              누군가에게는
              <span className={style.h4_color} ><br />설레임의 장소.</span>
            </h1>
            <img src={meeting} alt={meeting} className={style.image1} />
          </Animator>
        </ScrollPage>

        <ScrollPage>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky())}>
            <h1 className={style.h4_2}>
              누군가에게는
              <span className={style.h4_color2} ><br />자신만의 분위기를<br /> 가두는 곳으로.</span>
            </h1>
            <img src={alone} alt={alone} className={style.image2} />
          </Animator>
        </ScrollPage>

        <ScrollPage>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky())}>
            <h1 className={style.h4_3}>
              누군가에게는
              <span className={style.h4_color3} ><br />일상 속에 거쳐가는 장소로.</span>
            </h1>
            <img src={daily} alt={daily} className={style.image3} />
          </Animator>
        </ScrollPage>

        <ScrollPage>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky())}>
            <h2 className={style.h4_4}>
              각자 다른 의미를 가지고 <br />
              살아가는 현대인에게<br />
              그에 맞는 매개체로 변화하였습니다.<br />
            </h2>
          </Animator>
        </ScrollPage>

        <ScrollPage>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky())}>
            <h2 className={style.h4_4}>
              이제까지 단순히
              <span style={{ color: "black " }}>&nbsp;'카페인'&nbsp;</span>
              섭취를 위해서 먹었다면.
            </h2>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <div>
            <h1 className={style.h5}>
              조금 더 커피를 알아보고 즐겨볼까요?
            </h1>
          </div>

          <div className={style.container2}>
            <div className={style.card1}>
              <h3 className={style.card1_word}>어떤 커피를 좋아할까<br /> 나는?</h3>
              <Link to="/Type" className={style.link1} onClick={scrollToTop}>
                커피의 종류 알아보기&gt;
              </Link>
              <img src={coffee_illust} alt={coffee_illust} className={style.card1_image} />
            </div>

            <div className={style.card2}>
              <h3 className={style.card2_word}>어떤 원두가 나에게 <br />잘 어울릴까?</h3>
              <Link to="/Find" className={style.link2} onClick={scrollToTop}>
                좋아하는 원두 찾아보기&gt;
              </Link>
              <img src={bean_illust} alt={bean_illust} className={style.card2_image} />
            </div>
          </div>
        </ScrollPage>
        
      </ScrollContainer>


    </div>
  )
}

export default Coffee