import React, { useState, useRef, useEffect, forwardRef } from 'react';
import style from './Type_latte.module.css'
import latte_gate from '../../source/image/latte_gate.jpg';

const Type_latte = React.forwardRef((props, ref) => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);

  const handleHover1 = () => {
      setIsHovered1(true);
  };

  const handleLeave1 = () => {
      setIsHovered1(false);
  };

  const handleHover2 = () => {
      setIsHovered2(true);
  };

  const handleLeave2 = () => {
      setIsHovered2(false);
  };

  const handleHover3 = () => {
      setIsHovered3(true);
  };

  const handleLeave3 = () => {
      setIsHovered3(false);
  };

  const handleHover4 = () => {
    setIsHovered4(true);
};

const handleLeave4 = () => {
    setIsHovered4(false);
};

const handleHover5 = () => {
  setIsHovered5(true);
};

const handleLeave5 = () => {
  setIsHovered5(false);
};

    return (
        <div id="latte" ref={ref} className={style.background}>
            <div className={style.imageContainer}>
                <img className={style.img} src={latte_gate} alt={latte_gate} />
                <div className={style.overlayText}>
                    <h1 className={style.h1}>
                        라&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;떼<br />
                    </h1>
                    <div className={style.h1_2}>조금 더 부드럽게</div>
                </div>
            </div>

            <h2 className={style.h2}>
                "에스프레소의 은은한 양은 유지한 채로 더 부드럽게"
            </h2>
            <p className={style.p}>
                커피를 좀 더 부드럽게 즐기고 싶은 사람을 위해<br />
                단순 우유를 타먹는 것이 아닌, 스팀의 정도, 파우더, 시럽 등을 통한<br />
                취향에 따라 여러가지의 라떼를 즐길 수 있는 음료<br />
                '라떼'는 이탈리어로 '우유'라는 의미로 커피가 들어가지 않더라도 라떼로 칭할 수 있다.
            </p>

            <div className={style.container}>
                <div className={style.box}>
                    <div className={style.card1} onMouseEnter={handleHover1} onMouseLeave={handleLeave1}>
                        <div className={style.textWrapper}>'카페 라떼'</div>
                        {isHovered1 &&
                            <div className={style.tooltip}>
                                <div className={style.tooltipContent} >
                                    에스프레소 샷과 스팀한 우유 혹은 얼음과 찬 우유를 섞은 것으로
                                    아메리카노보다 훨씬 부드럽게 즐길 수 있다.
                                    취향에 따라서 바닐라, 헤이즐넛, 모카 등의 파우더 및 시럽을
                                    첨가하여 먹기도 한다.
                                </div>
                            </div>
                        }
                    </div>
                    <div className={style.card1} onMouseEnter={handleHover2} onMouseLeave={handleLeave2}>
                        <div className={style.textWrapper}>'카푸치노'</div>
                        {isHovered2 &&
                            <div className={style.tooltip}>
                                <div className={style.tooltipContent} >
                                    라떼와 비슷하지만, 절대적인 우유 양보단 밀크폼의 비율이 더 높아서
                                    라떼보다 더 부드럽게 즐길 수 있는 음료.
                                </div>
                            </div>
                        }
                    </div>
                    <div className={style.card1} onMouseEnter={handleHover3} onMouseLeave={handleLeave3}>
                        <div className={style.textWrapper}>'플랫화이트'</div>
                        {isHovered3 &&
                            <div className={style.tooltip}>
                                <div className={style.tooltipContent} >
                                    카페라떼와 비슷하지만, 우유 밀크폼과 샷이 함께 섞인 형태로 
                                    라떼보다 에스프레소의 깊은 맛을 더 즐길 수 있다.
                                </div>
                            </div>
                        }
                    </div>
                    <div className={style.card1} onMouseEnter={handleHover4} onMouseLeave={handleLeave4}>
                        <div className={style.textWrapper}>'마끼아토'</div>
                        {isHovered4 &&
                            <div className={style.tooltip}>
                                <div className={style.tooltipContent} >
                                    기존의 쓴 에스프레소를 더 부드럽게 즐길 수 있도록 라떼형식으로 만든
                                    에스프레소 음료로 라떼와 마찬가지로 파우더나 시럽으로 취향에 맞게
                                    먹을 수 있다.
                                </div>
                            </div>
                        }
                    </div>
                    <div className={style.card1} onMouseEnter={handleHover5} onMouseLeave={handleLeave5}>
                        <div className={style.textWrapper}>'논 커피(Non-coffee)라떼'</div>
                        {isHovered5 &&
                            <div className={style.tooltip}>
                                <div className={style.tooltipContent} >
                                    커피가 안 들어간 것으로
                                    우유와 초콜릿, 바닐라, 고구마, 티 등을 이용하여
                                    취향에 맞는 음료를 즐길 수 있다.
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
});

export default Type_latte