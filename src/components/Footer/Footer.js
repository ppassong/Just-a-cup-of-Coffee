import React from 'react'
import { Link,  useLocation } from 'react-router-dom'
import style from './Footer.module.css'

const Footer = () => {
  return (
    <div className={style.footer}>
    <div className={style.container}>
      <p className={style.content}>
        본 게시물은 pixabay에서 콘텐츠 라이선스 허가에 따른 저작권 무료 이미지를 사용하였으며, 게시글에 대한 정보는
        최대한 객관적으로 정보를 바라보려 노력했으나 콘텐츠 제작자의 주관적인 생각이 의도치 않게 담겨있을 수도 있음을 알려드립니다.<br />
        <br />
        각 원산지 별 정보는 개개인의 입맛과 취향에 따라 주관적으로 전달됨 수 있음을 고지하며, 원산지 생산국의 재배 고도와 위치에 따라서
        생산되는 원두가 또 각각 맛이 다를 수 있음을 알려드립니다. 원두 제목에 원산지 국가명만 기입된 것은 해당하는 원산지 국가에서
        나오는 원두의 전반적인 평가와 맛을 다룬 것이며 원산지명과 해당 재배 원두가 같이 기입되어 있는 것은 해당 원두에 대한 정보에
        대해서 풀이해놓은 것입니다. 모든 원산지와 원두 정보는 사람의 입맛이 각기 다르게 느껴지는 것처럼 받아들이는 정보가 주관적으로 해석될 수 있으며,
        바디감, 산도, 균형 또한 갖가지 정보를 추려 최대한 객관적으로 반영하려 했으나, 개개인의 입맛에 따라서 충분히 다르게 느껴질 수 있음을 고지합니다.
      </p>

      <div className={style.box}>
        <Link to='/coffee' className={style.Link}>
          <h3>커피?</h3>
        </Link>
        <Link to='/type' className={style.Link}>
          <h3>종류?</h3>
        </Link>
        <Link to='/find' className={style.Link}>
          <h3>원두?</h3>
        </Link>
      </div>
      
      <div>
        <p className={style.comment}>
        Copyright © 2024 SSong.
        </p>
      </div>
    </div>
    </div>
  )
}

export default Footer