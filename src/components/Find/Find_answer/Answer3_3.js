import React, { useState } from 'react'
import { Stack } from '@mui/material';
import Navibar from '../../Navibar/Navibar';
import style from '../Find_answer/Answer3_3.module.css';
import vietnam from '../../../source/image/vietnam.png';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Answer3_3 = () => {
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
                    <img src={vietnam} alt="vietnam"></img>

                    <div className={style.container3}>
                        <h2 className={style.h2}>
                            베트남 로부스타 원두 블루드래곤 g1
                            <hr style={{ marginTop: '5px' }} />
                        </h2>
                        <p className={style.p}>
                            은은한 단맛과 산미가 없는 원두이며 특유의 폴리싱 가공방식을 사용하여<br />
                            사탕수수의 달콤함과 아몬드와 곡물과 같은 구수함이 가득한 묵직한 바디감으로 적절히 이루어져 있습니다.<br />
                            주로 커피 블렌딩이나 인스턴트 커피의 주원료로 사용합니다.<br />
                            아라비카보다 향미가 약하고 쓴 맛이 있지만 재배가 쉬워 경제적으로 이점이 있습니다.
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
                                산도<HelpOutlineIcon sx={{ fontSize: 20 }} onMouseEnter={handleHover} onMouseLeave={handleLeave} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★★★☆☆
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

export default Answer3_3