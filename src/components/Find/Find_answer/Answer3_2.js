import React, { useState } from 'react'
import { Stack } from '@mui/material';
import Navibar from '../../Navibar/Navibar';
import style from '../Find_answer/Answer3_2.module.css';
import costarica from '../../../source/image/costarica.png';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Answer3_2 = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleLeave = () => {
        setIsHovered(false);
    };


    return (
        <div>
            <Stack direction="column" spacing={2} style={{ marginTop: '50px' }}>
                <div className={style.container}>
                    <h1 className={style.h1}>당신과 잘 어울리는 원두 및 생산지입니다!</h1>
                    <h3 className={style.h3}>한 번 즐겨먹어보는건 어떨까요?</h3>
                </div>

                <div className={style.container2}>
                    <img src={costarica} alt="costarica"></img>

                    <div className={style.container3}>
                        <h2 className={style.h2}>
                            코스타리카
                            <hr style={{ marginTop: '5px' }} />
                        </h2>
                        <p className={style.p}>
                            코스타리카의 진한 맛은 풍부한 향과 깊은 맛을 지니고 있습니다.<br />
                            주로 고품질의 아라비카 원두로 만들어진 커피로 부드럽고 균형 있는 맛과 잔 향이 오래 남습니다.<br />
                            매우 깔끔한 뒷맛을 가지고 있는 것이 특징입니다.
                        </p>

                        <div className={style.point}>
                            <div className={`${style.card} ${style.tooltip_body}`} >
                                바디감<HelpOutlineIcon sx={{ fontSize: 20 }} onMouseEnter={handleHover} onMouseLeave={handleLeave} />&nbsp;&nbsp;★★★★★
                                {isHovered &&
                                    <div className={style.tooltip}>
                                        <div className={style.tooltipContent} >
                                            커피를 입에 머금었을 때 느껴지는 밀도와 무게감을 뜻합니다.
                                        </div>
                                    </div>
                                }
                            </div>

                            <div className={style.card} >
                                산도<HelpOutlineIcon sx={{ fontSize: 20 }} onMouseEnter={handleHover} onMouseLeave={handleLeave} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★★★★★
                                {isHovered &&
                                    <div className={style.tooltip}>
                                        <div className={style.tooltipContent} >
                                            커피의 산뜻함과 풍미를 결정지으며 신맛의 정도. 과일맛이라고도 불립니다.
                                        </div>
                                    </div>
                                }
                            </div>

                            <div className={style.card} >
                                균형<HelpOutlineIcon sx={{ fontSize: 20 }} onMouseEnter={handleHover} onMouseLeave={handleLeave} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★★★★☆
                                {isHovered &&
                                    <div className={style.tooltip}>
                                        <div className={style.tooltipContent} >
                                            산미, 쓴맛, 바디감, 향 등의 다양한 맛과 향이 조화롭게 어우러져 전반적인 균형 있는 맛을 의미합니다.
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </Stack>
        </div>
    );
};

export default Answer3_2