## ⚙️ ver. 1.1 업데이트<br>
-메뉴의 '종류?'의 드롭박스 항목 링크 이동을 해당 페이지가 종류?에 위치하지 않더라도 다른 페이지 위치에서도 스크롤 이동이 가능하게 구현.<br>
-빌드 최적화.<br>
-폰트 수정.<br>
-하단 footer에서 링크 클릭 시. scrollToTop 기능 추가.<br>
-'종류?' 영역의 음료 콘텐츠 설명 텍스트의 가시성 확보.<br>
-'종류?' 영역의 아메리카노 tooltip이 안 뜨는 오류 해결.<br>

---
# Just a cup of Coffee

## < 프로젝트 소개 >

![607cc1d6-1bfa-455e-89c7-a80e94ed866c-ezgif com-optimize](https://github.com/ppassong/robofriends/assets/132435219/cee12da5-2468-4dd4-82d5-80da20a8e9b9)
<br>
'커피'에 대해서 좀 더 간략하게 훑어보고 알아볼 수 있는 프로젝트

### * 사용 기술 스택
#### Front-End
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<br>
<br>
### * 기획 의도
카페에서 일할 때마다 가끔씩 드는 생각으로 '사람들은 커피를 습관적으로 그냥 마시는 게 아닐까?' 하는 생각이 있다.<br>
가령 그냥 아무 의미없이 '커피를 마셔서 잠을 깬다'라는 목적으로 커피를 마신다던가 하는 경우들 말이다.<br>
그래서 단순 그냥 음료를 마시는 행위가 아닌, '커피'에 대해서 좀 더 문화로써. 취미로써. 알아보고 즐길 수 있게 되면 좋지 않을까? 하는 제작 의도를 품게 되었다.<br>
잠시 지나가면서 어떤 매체의 카피나 이미지를 보고 다시금 뒤돌아보게 만드는 그런 가볍게 흥미를 자극하는 용도의 사이트가 되었으면 좋겠다는 생각.<br>
말 그대로 'just a cup of coffee'<br>
'그냥 커피 한 잔'하는 느낌으로.
<br>
<br>
### * 제작 기간
개발 기간 : '한 달'

기능 구현 및 디버깅까지 포함하여 약 한 달의 기간이 소요되었다.<br>
처음에 시작할 당시부터 한 달은 넘기지 않아야지 했는데 정말 딱 한 달이 걸렸다.<br>
아직 개발이 능숙하지 않은데 욕심이 너무 앞서면 제작 기간이 오래 걸릴 것 같다는 점과 더불어<br>
'커피'에 본격 입문하기 전에 방대한 정보의 양을 보면 거부감을 느낄 것 같아서 좀 가벼우면서도 핵심적인 정보가 담겨져 있으면 좋겠다 라는 생각을 했다.
<br>
<br>
### * 자료 참고
'애플', '스타벅스', '저작권 무료 소스 사이트'

전체적인 레이아웃은 애플사의 Apple 홈페이지를 많이 참고하였다.<br>
개인적으로 애플 제품을 좋아하기도 하고 애플 유저로서 가끔씩 신제품을 구입하거나 제품의 정보를 보기 위해 애플 홈페이지에 들어갈 때마다 느낀 것인데<br>
애플사의 스크롤 기능에 따라 상품의 정보가 자연스레 애니메이션으로 들어오는 인터랙티브 디자인의 경험은 인상이 매우 깊었다.<br>
그래서 현재의 프론트엔드 개발자를 목표로 하기로 시작하였을 때.<br>
애플 홈페이지와 같은 사용자 중심의 인터랙티브한 디자인이 담긴 프론트엔드 개발자가 되어야지 라는 생각을 하기도 했다.<br>
아직은 애플의 그런 정교하고 디테일한 인터랙티브 개발 디자인은 물론하지도 못하지만,<br>
그래도 흉내나 느낌이라도 참고해 보자 하여 전체적인 레이아웃 분석에 나섰고, "react-scroll-motion" 라이브러리를 활용하여 얼추 흉내 내보았다.<br>
<br>
또한 '커피'하면 떠오르는 스타벅스의 자사 홈페이지도 참고하였다.<br>
커피의 원재료인 원두의 맛이 재배 국가나 로스팅 방식에 따라 맛이 천차만별인데, 요즘 유행하는 mbti를 확인하는 선택지처럼<br>
나에게 맞는 원두를 골라가는 선택지 기능이 있으면 좋겠다는 생각이 들었고. 마침 그 기능은 스타벅스 자사 홈페이지에 구현이 되어있었다.<br>
그래서 스타벅스의 개인 맞춤형 원두를 고르는 레이아웃을 참고 많이 하였으며 원두에 대한 정보는 제작하는 페이지가 스타벅스 자사 홈페이지는 아니기에.<br>
스타벅스 사의 원두는 쓸 수가 없다는 판단으로 대중적으로 널리 알려진 누구나 접할 수 있는 원두에 대한 객관적 정보를 여러 방면으로 자료 조사하였고 기입하였다.<br>
<br>
이미지나 영상의 소스들의 경우.<br>
개인적으로 디자인과 일러스트를 전공하고 공부해왔고 나름대로 작업까지 했던 입장으로서 이미지는 양질의 좋은 자료가 중요하다고 생각하는 편인데.<br>
디자이너로서 자료를 자체 제작하고자 하니 시간이 꽤나 걸릴 것 같았고,<br>
현재는 디자이너로서의 역할보다는 개발자로서의 역량을 보여주고 공부하는 취지의 프로젝트이니 저작권 무료의 사이트를 이용하여 내가 원하는 자료를 취하였다.<br>
'커피?'를 누르면 나오는 동영상의 경우.<br>
3 개의 저작권 무료 영상을 프리미어 프로로 직접 이어붙인 것 빼고는 모두 저작권 무료 CC0로 다운로드 받은 오리지널 자료의 형태이다.<br>
<br>
<br>
<br>
## < 사용법 >
### 1. 커피?
![c754850a-8ed7-472c-85da-3e6347a3a2f9-ezgif com-optimize](https://github.com/ppassong/robofriends/assets/132435219/b11bce40-3de7-4e50-b39e-31c5717ac891)

-메인 페이지에서 '커피에 대해 아시나요?' 영역을 클릭하거나, 상단 메뉴바에 '커피?'를 누르거나, 하단 배너의 '커피?'를 누르면 '커피?'영역으로 이동합니다.
<br>
-단순 잠을 쫓기 위해서 마시는 게 아닌 문화의 의미로서의 '커피'의 의미를 환기시켜줍니다.


### 2. 종류?
![603a149e-7d10-4573-8a05-2dbd087d5eda-ezgif com-optimize](https://github.com/ppassong/robofriends/assets/132435219/031a9202-e1b7-4c44-b44d-26e7c61bafaa)

-메인 페이지에서 '어떤 음료를 보고 계세요?' 영역을 클릭하거나, 커피? 페이지에서 '커피의 종류 알아보기'를 누르거나, 상단 메뉴바에 '종류?'를 누르거나, 하단 배너의 '종류?'를 누르면 '종류?'영역으로 이동합니다.
<br>
-'종류?'의 마우스 hover 시 나타나는 드롭박스의 메뉴 항목으로 해당 항목을 클릭 시 항목의 위치로 스크롤 이동이 됩니다.
<br>
-커피의 종류에 대해서 간략한 분류와 카테고리에 맞는 음료의 간단한 설명을 볼 수 있습니다.

### 3. 원두?
![f3e21253-f229-4a72-bd64-871321e2a3bd-ezgif com-optimize](https://github.com/ppassong/robofriends/assets/132435219/9284543d-75fc-48a3-923a-4f75b1a4be55)

-메인 페이지에서 '내 취향 저격 원두' 영역을 클릭하거나, 커피? 페이지에서 '좋아하는 원두 찾아보기'를 누르거나, 상단 메뉴바에 '원두?'를 누르거나, 하단 배너의 '원두?'를 누르면 '원두?'영역으로 이동합니다.
<br>
-사용자가 어떤 선호하는 맛과 느낌에 따라서 개인 맞춤형 원두의 정보를 제공해줍니다.
<br>
-원두의 바디감, 산도, 균형에 대한 의미가 궁금하다면, ?마크에 마우스를 hover 하면 해당 단어의 의미가 나타납니다.
<br>
<br>
<br>
## < 개발 애로사항 >
단순 클론 코딩이 아닌, 첫 시작부터 끝까지 자체 제작 프로젝트로<br>
그동안 공부해왔던 udemy 인강 + 생활코딩 인강의 지식들을 개인적으로 공부정리한 문서들과 구글링, ChatGpt 3.5의 활용을 전반적으로 적극적으로 하였다.<br>
생각보다 아주 기본적인 기능들도 구현이 꽤나 걸렸으며, 구현이 되고 이해가 되었을 때는 이제서야 이게 이런 의미였구나. 하고 깨달음을 얻기도 하고<br>
react의 개발도 단순 클론 코딩을 할 때는 react의 사용법과 구조 자체가 이해가 가지 않았는데. 제작하고 공부하다 보니 점차 이해가 갔다.<br>
<br>
가장 기능 구현에 막혔던 것은 2 가지가 있는 데.<br>
### 1. selectedFlavor, setSelectedFeeling is not defind or is not a function' 오류.<br>
개인의 맞춤형 원두를 찾는 Find.js에서 첫 번째 맛을 선택하고 넘어가고, 두 번째 느낌을 선택하고 넘어가는,<br>
페이지 사이사이의 상태에서 0.1초만에 에러가 떴다가 사라지는 오류였는데<br> 
이 오류에 대한 3주 정도 계속되는 디버깅으로 에러문을 한참 동안 분석하다가 알아내었는데,<br>
app.js에서도 Navibar의 구성요소로 전달하고 Find1.js와 Find2.js 상호 간에도 구성요소로 전달받고, 다 전달하였는데.<br>
대체 왜 오류가 계속해서 해결이 안 되는 걸까 하고 곰곰이 살펴보며 생각을 해보았는데.<br>
<br>
에러의 근본적인 위치는 어디인가? 라는 물음이 떠올랐고.<br>
컴포넌트의 관계성을 보다 보니 Find.js가 총체적 부모 컴포넌트였고 Find1.js, Find2.js와 Answer 시리즈의 컴포넌트들이 자식 컴포넌트들인 것을 확인했다.<br>
그래서 찬찬히 보다 보니 부모 컴포넌트인 Find.js는 Find1.js, Find2.js와는 다르게 해당 props 전달이 없어서 다시 자식 컴포넌트로 구성요소를 전달하니<br>
```javascript
 <Find1 setSelectedFlavor={setSelectedFlavor} />
 <Find2 setSelectedFlavor={setSelectedFlavor} setSelectedFeeling={setSelectedFeeling} />
 <Answer1_1 setSelectedFlavor={setSelectedFlavor} setSelectedFeeling={setSelectedFeeling}/>
```
해당 오류가 해결이 되었다.<br>
이로써 기본적인 사항이겠지만, (전체를 관장하는 부모 컴포넌트에서 확실하게 자식 컴포넌트로 props 선언을 올바르게 해주어야 한다.)를 다시 한번 알게 되었고.<br>
또한 챗 지피티가 자꾸 뺑뺑 돌면서 이상한 해결 답안을 줘서 해당 오류 디버깅에 생각보다 많은 시간을 소요하게 되었는데<br>
너무 챗 지피티에만 의존을 하면 안 되고 에러문을 정확히 인지하고 분석하고 추론하는 것이<br>
생각보다 더 빠른 답을 가져와준다는 것과 더 개발자적인 해결 방법인 것을 새삼 깨닫게 되었다.<br>
<br>
### 2. '종류?' 메뉴의 드롭박스의 항목을 클릭하면 가능한 스크롤 이동 기능이 페이지가 /Type 상태가 아닌 경우에서는 기능이 작동하지 않는 오류.<br>
이 오류 해결도 거진 10일 이상이 소요된 것 같은데 역시 챗 지피티의 답안은 효과가 없었고 해결이 안되고 되게 답답했었다.<br>
<Navibar>의 해당 드롭박스 <Link>의 경로가 해당 링크항목만 기입되면 해결이 되지만, 이 경우 말 그대로 클릭한 해당 항목의 js컴포넌트만 출력해서 보여준다.<br>
나는 Type.js를 전체를 보여주면서 에스프레소, 라떼, 브루드 커피를 클릭하면, 해당 위치로 스크롤이 되는 기능을 원했다.<br>
<br>
답은 지피티에 질문을 계속하다가 얻어 걸린 것 같은데<br>
```javascript
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);
 ``` 
로 useLocation을 써서 url의 해시 부분의 값. 즉 locatuon 객체가 변경될 때마다 useEffect를 실행하여서 <br>
substring(1)의 값. 즉 요소의 id. #을 제외한 나머지 문자열을 가져오는 메소드로 <br>
```javascript
   <Link to="/Type#espresso" onClick={closeDropdown}  style={{ textDecoration: 'none', color: 'white' }}>
                에스프레소
   </Link>
    <Link to="/Type#latte" onClick={closeDropdown}  style={{ textDecoration: 'none', color: 'white' }}>
                라떼
   </Link>
   <Link to="/Type#brewed" onClick={closeDropdown} style={{ textDecoration: 'none', color: 'white' }}>
                브루드 커피
   </Link>
```
링크의 to형식을 이런식으로 취해서 scrollIntoView하는 형식이었다.<br>
<br>
그전까지는 <Link to ="/Type" 의 형식으로<br>
```javascript
  const scrollToType = (id) => {
    closeDropdown();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
 ``` 
각 Type_espressso, Type_latte, Type_brewed 컴포넌트들의 return id 값을 매겨서 불러오는 형식이었다.<br>
즉 정리하자면.<br>
scrollToType 함수는 말 그대로 클릭할 때만 호출이 되고, url 변경에 대한 기능이 없어서 /Type 상태가 아닌 페이지에서 구현이 안 되었던 것 같고.<br>
useEffect의 훅 기능은 컴포넌트가 렌더링 될 때마다 실행되는 것의 차이로<br>
페이지의 상태 및 위치가 바뀔 때마다 useLocaton으로 URL 해시를 상시 체크하고 변경될 때마다 해당 useEffect를 실행시켜서<br>
url이 변경될 때마다 해당 항목의 위치로 스크롤 이동을 구현할 수 있었던 것이다.<br>
<br>
<br>
<br>
## < 개발 후기 >
제일 답답하다고 느낀 것은.<br>
누구 하나 명백하게 물어볼 지식인의 사람이 없다는 것이었다.<br>
특히나 오류가 발생했을 때. 구글링으로도 명쾌한 해답을 찾아내지 못할 때 많이 답답하다.<br>
그래서 일종의 선생님 역할이라 생각하고 ChatGpt3.5에게 아주 굉장히 많이 물어보았다.<br>
구글과 유튜브는 나의 스승이오, AI는 나의 동료이니라.<br>
다른 사람들은 어떻게 개발 공부를 하고 하는지는 잘 모르겠지만, 아마 이런 일련의 과정들이 개발 공부의 과정이 아닐까 하는 생각이 든다.<br>
작동 함수의 로직을 스스로 짜는 부분에 대해서는 아직 많이 부족한 것을 체감 느꼈고,<br>
모든 코드를 전부 이해를 하려고 최대한 노력했지만, 미숙하게나마 이해가 된 부분들도 있는 것 같다.<br>
아마 경험이 적어서 일 것이라 생각이 들고.<br>
점차 하다보면 돌이켜보았을 때. 충분히 지금보다 이해할 것이라고 믿는다.<br>
<br>
새삼 무심코 이용하는 웹 사이트들이 별거 아닌 것 같지만, 이런 과정들이 모두 있었을 것이라는 생각에 경이롭고.<br>
개인적으로 이 사이트의 '종류?' 부분. 즉 Type.js의 디자인 부분이 조금 아쉽다는 생각이 들었다.<br>
내가 원하는 디자인의 소스는 저작권 무료 소스 사이트에서는 마음에 드는 시각적 자료가 없어서 소스의 자체 제작이 많이 필요한 케이스였다.<br>
이래서 분명 웹 디자이너와 개발자 영역이 세분화되어 있을 것이라는 것을 아직 회사에서 실무를 해본 적은 없지만 새삼 많이 체감하게 되었다.<br>
<br>
끝내 제작을 마치고 돌이켜보니 전반적으로 많이 배운 것 같고,<br>
뿌듯하고 성취감이 있었다.<br>
특히나 전에는 인강을 들으면서.<br>
인강의 강사님이 그냥 일단 먼저 따라치라는 클론코딩이 도저히 잘 이해도 안되고 왜 저렇게 코딩을 하는지도 모르겠으며,<br>
오류가 발생하면 그건 그거대로 답답함과 스트레스를 받았었는데.<br>
그러한 일련의 과정들이 지금에서야 돌이켜보니 100%는 아니지만, 이제서야 어느정도 이해가 되는 것 같다.<br>
확실한 건 처음 개발을 공부할 때 보다 여러모로 한 걸음 더 성장한 것 같다.<br>
<br>
분명하게.
