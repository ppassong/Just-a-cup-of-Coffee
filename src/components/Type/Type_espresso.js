import React, { useState, useRef, useEffect, forwardRef } from 'react';
import style from '../Type/Type_espresso.module.css';
import type_espresso from '../../source/image/type_espresso.png';

const Type_espresso = React.forwardRef((props, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    
    const handleHover = () => {
        setIsHovered(true);
    };

    const handleLeave = () => {
        setIsHovered(false);
    };

    return (
        <div id="espresso" ref={ref}>
            <div id="espresso-scroll-target" style={{ height: '1px' }}></div>
            <h1 className={style.h1}>
                에스프레소<br />
                <span className={style.h1_2}>Classic. 난 Basic한게 좋아.</span>
            </h1>
            <img className={style.img} src={type_espresso} alt={type_espresso} />
            <h2 className={style.h2}>
                "오리지널 원두 본연의 진한 풍미와 맛"
            </h2>
            <p className={style.p}>
                에스프레소는 갓 추출한 따끈한 샷을 먹는 것으로 깊은 풍미와 맛을 자랑하지만<br />
                쓴 맛도 있어 보통 황설탕을 타먹는 것이 대체적이다<br />
                쓴 맛을 중화시키기 위해서 물을 탄 것이 대표적으로 먹는 '아메리카노'
            </p>

            <div className={style.container}>
                <div className={style.box}>
                    <div className={style.card1} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                        <div className={style.textWrapper}>에스프레소</div>
                        {isHovered &&
                            <div className={style.tooltip}>
                                <div className={style.tooltipContent} >
                                    오리지널 원두 본연의 샷을 추출한 것을 담은 것으로
                                    깊은 맛을 즐길 수 있으나, 양이 적고 쓴맛이 강함.
                                </div>
                            </div>
                        }
                    </div>
                    <div className={style.card1} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                        <div className={style.textWrapper}>아메리카노</div>
                        {isHovered &&
                            <div className={style.tooltip}>
                                <div className={style.tooltipContent} >
                                    뜨거운 물에 에스프레소 샷을 부어 에스프레소의 쓴맛을 좀 덜한 채
                                    즐길 수 있는 대중적인 따뜻한 음료.
                                </div>
                            </div>
                        }
                    </div>
                    <div className={style.card1} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                        <div className={style.textWrapper}>아이스 아메리카노</div>
                        {isHovered &&
                            <div className={style.tooltip}>
                                <div className={style.tooltipContent} >
                                    정수물에 에스프레소 샷을 붓고 차가운 얼음을 넣어
                                    에스프레소를 좀 더 시원하게 즐길 수 있는 대중적인 음료
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            </div>
            )
});

export default Type_espresso;