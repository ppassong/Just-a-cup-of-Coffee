import React, { useState, useRef, useEffect, forwardRef } from 'react';
import style from '../Type/Type_brewed.module.css';
import drip_coffee from '../../source/image/drip_coffee.png';

const Type_brewed = React.forwardRef((props, ref) => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

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
    return (
        <div id="brewed" ref={ref}>
        <div id="brewed-scroll-target" style={{ height: '1px' }}></div>
            <h1 className={style.h1}>
                브루드 커피<br />
                <span className={style.h1_2}>보다 더 깔끔하게</span>
            </h1>
            <img className={style.img} src={drip_coffee} alt={drip_coffee} />
            <h2 className={style.h2}>
                "더 깊은 원두의 풍부한 맛과 향을 깔끔하게"
            </h2>
            <p className={style.p}>
                드립머신 혹은 핸드드립 형식으로 분쇄된 원두에 물을 내려서 만든 커피로<br />
                각 분쇄된 원두의 풍부한 향과 맛을 더 깔끔하고 부드럽게 즐길 수 있다.<br />
                키페에서 '오늘의 커피'로도 불리기도 한다.
            </p>

            <div className={style.container}>
                <div className={style.box}>
                    <div className={style.card1} onMouseEnter={handleHover1} onMouseLeave={handleLeave1}>
                        <div className={style.textWrapper}>'드립커피'</div>
                        {isHovered1 &&
                            <div className={style.tooltip}>
                                <div className={style.tooltipContent} >
                                    먹고싶은 원두나 해당 시즌에 정해진 원두를 뜨거운 물로 내린 음료로
                                    원두의 풍미와 맛을 더 신선하게 즐길 수 있으나,
                                    물로 내리는 거라 에스프레소 머신보다 시간이 좀 더 걸리는 단점이 있다.
                                </div>
                            </div>
                        }
                    </div>
                    <div className={style.card1} onMouseEnter={handleHover2} onMouseLeave={handleLeave2}>
                        <div className={style.textWrapper}>'아이스 드립커피'</div>
                        {isHovered2 &&
                            <div className={style.tooltip}>
                                <div className={style.tooltipContent} >
                                    드립커피의 아이스버전으로 아이스 아메리카노와 마찬가지로
                                    드립커피에 차가운 얼음을 넣어 시원하게 즐길 수 있다.
                                </div>
                            </div>
                        }
                    </div>
                    <div className={style.card1} onMouseEnter={handleHover3} onMouseLeave={handleLeave3}>
                        <div className={style.textWrapper}>'콜드브루'</div>
                        {isHovered3 &&
                            <div className={style.tooltip}>
                                <div className={style.tooltipContent} >
                                    드립의 형식이지만 뜨거운 물이 아닌 차가운 물로 오랜시간
                                    천천히 내린 음료로 일반 에스프레소 음료보다 부드럽고 신맛과 쓴맛이 덜하다.
                                    '더치커피'라고도 불리기도 한다.
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            </div>
            )
});

export default Type_brewed;