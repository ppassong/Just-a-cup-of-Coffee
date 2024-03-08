import React, { useState, useEffect } from 'react'
import style from './Title.module.css';

const Title = () => {
  const fulltext = ["그냥 커피 한 잔 어때요?", "커피 좋아하세요?", "오늘은 뭐 마실래요?", "무슨 원두가 취향이에요?"]
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let isMounted = true;
    
    const Typinginterval = setInterval(() => {
      let currentText = fulltext[count];
    
      setText((prevText) => {
        if(prevText === currentText) { 
          setTimeout(() => {
            if(isMounted) {
              setText('');
              setCount((prevCount) => (prevCount + 1) % fulltext.length);
            }
          }, 800);
          return currentText;
        } else {
          return currentText.slice(0, prevText.length + 1);
        }
      });
    }, 200);

    return () => {
      isMounted = false;
      clearInterval(Typinginterval);
    };
  }, [count, fulltext]);



  return (
<div className={style.bean}>
  <div className={style.TitleContainer}>
    <div className={style.Title} >
      {text}
      <span className={style.blink}> &nbsp; </span>
    </div>
  </div>
</div>
  )
}

export default Title;