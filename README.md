## ver.1.1 업데이트<br>
-메뉴의 '종류?'의 드롭박스 항목 링크 이동을 해당 페이지가 종류?에 위치하지 않더라도 다른 페이지 위치에서도 스크롤 이동이 가능하게 구현.<br>
-빌드 최적화.<br>
-폰트 수정.<br>
-하단 footer에서 링크 클릭 시. scrollToTop 기능 추가.<br>
-종류? 영역의 음료 콘텐츠 설명 텍스트의 가시성 확보.<br>
-종류? 영역의 아메리카노 tooltip이 안뜨는 오류 해결.<br>

---
# Just a cup of Coffee
## 해당 프로젝트를 기획하게 된 경위: '커피에 대해 좀 더 훑어보기'<br>
포트폴리오로 제작할 프로젝트를 제작하기에 앞서 어떤 주제를? 어떤 기능의 웹을? 제작할지 고민을 하던 중.<br>
'커피 한 잔' 이라는 프로젝트의 타이틀에 걸맞게 '커피'라는 것에 대해서 간략하게 알 수 있을만한 사이트를 고안했다.<br>
본인은 평소에 커피를 좋아하며, 카페에서 꽤나 일을 해보기도 하고, 즐겨마시기도 하는 편인데<br>
가끔씩 드는 생각으로 '사람들은 커피를 습관적으로 그냥 마시는 게 아닐까?' 하는 생각이 있다.<br>
<br>
현대사회에서 잠을 깨기 위해, 혹은 밥 먹고 커피 마시는게 일종의 루틴 화가 되어있는 사람들이 생각보다 꽤 있을 것 같고<br>
카페에서 일했던 경험 상. 모두가 그런 것은 아니지만, '커피 하면 그냥 커피지' 하는 부분이 없잖아 있을 것 같다는 생각이 들었다.<br>
가령 그냥 아무 의미없이 그냥 '커피를 마셔서 잠을 깬다'라는 목적에 의하여 커피를 마신다던가 하는 경우들 말이다.<br>
단순 그냥 음료를 마시는 행위가 아닌, '커피'에 대해서 좀 더 문화로써. 취미로써. 즐기면 더 좋지 않을까 하는 제작 의도를 품게 되었다.<br>
그래서 너무 전문적이면 관심이 있는 사람들은 깊게 정독하겠지만, 방대한 정보의 양을 가지게 될 경우. <br>
첫 자체 제작 포트폴리오인데 개발이 능숙하지 않은데 제작 기간이 오래 걸릴 것 같다는 점.<br>
접근하는 사람들은 시작도 전에 방대한 정보의 양을 보면 거부감을 느낄 것이라는 판단이 섰으며.<br>
<br>
말 그대로 'just a cup of coffee' 아주 간략하게 '그냥 커피 한 잔'하는 느낌으로 훑어보는 느낌으로 <br>
좀 더 알아가게 만드는. 잠시 지나가면서 어떤 매체의 카피나 이미지를 보고 다시금 뒤돌아보게 만드는 그런 용도의 사이트가 되었으면 좋겠다 라는 생각.<br>
이로 인해 커피에 더 관심이 있는 사람들은 더 알아보고 싶게 하거나, 탐구의 욕망이 생기게끔 말이다.<br>
이후 더 흥미가 생긴 사람들은 보다 더 전문적인 서적을 읽거나, 자료 조사를 더 할 것이다.<br>
그때는 내가 제작한 사이트의 더한 양보다 질을 원하게 될 것이고<br>
그것들은 이미 수많은 사람들이 역사적으로 과거에서부터 지금까지 그리고 앞으로도 양질의 콘텐츠가 넘쳐나는 세상이니<br>
커피에 대해 보다 전문적 지식을 위한 경로는 문제없을 것이다.<br>
<br>
<br>
## 홈페이지 디자인. 자료와 참고사이트: '애플', '스타벅스', '저작권 무료 소스 사이트'<br>
전체적인 레이아웃은 애플사의 Apple 홈페이지를 많이 참고하였다.<br>
개인적으로 개발에 관심이 있기 전부터 애플 제품을 좋아하기도 하고 애플 유저로서 가끔씩 신제품을 구입하거나 제품의 정보를 보기 위해 애플 홈페이지에 들어갈 때마다 느낀 것인데<br>
처음 애플 홈페이지에서 스크롤을 하면서 정보를 받아들였을 때의 충격은 정말 신선하였다.<br>
국내 홈페이지 디자인 중에서는 그 정도로 스크롤 기능에 따라 상품의 정보가 자연스레 들어오는 훅훅 인터랙티브 디자인의 경험은 본 적이 없어서 인상이 깊었다.<br>
그래서 현재의 프론트엔드 개발자를 목표로 하기로 시작하였을 때.<br>
애플 홈페이지와 같은 사용자 중심의 인터랙티브한 디자인이 담긴 프론트엔드 개발자가 되리라 다짐했다.<br>
아직은 애플의 그런 정교하고 디테일한 인터랙티브 개발 디자인은 물론하지도 못하지만,<br>
그래도 흉내나 느낌이라도 참고해 보자 하여 전체적인 레이아웃 분석에 나섰고 <br>
"react-scroll-motion" 라이브러리를 활용하여 얼추 흉내 내보았다.<br>
<br>
또한 '커피'하면 떠오르는 스타벅스의 자사 홈페이지도 참고하였다.<br>
커피의 원재료인 원두의 맛이 재배 국가나 로스팅 방식에 따라 맛이 천차 찬별인데, 요즘 유행하는 mbti를 확인하는 선택지처럼<br>
나에게 맞는 원두를 골라가는 선택지 기능이 있으면 좋겠다는 생각이 들었고. 마침 그 기능은 스타벅스 자사 홈페이지에 마련이 되어있었다.<br>
그래서 스타벅스의 개인 맞춤형 원두를 고르는 레이아웃을 참고 많이 하였으며 원두에 대한 정보는 제작하는 페이지가 스타벅스 홈페이지는 아니기에.<br>
스타벅스 사의 원두는 쓸 수가 없다는 판단에 대중적으로 널리 알려진 누구나 접할 수 있는 원두에 대한 정보를 여러 방면으로 자료 조사하였고 기입하였다.<br>
<br>
<br>
이미지나 영상의 소스들의 경우.<br>
개인적으로 디자인을 전공하고 공부해왔고 나름대로 작업까지 했던 입장으로서 이미지는 양질의 좋은 자료가 중요하다고 생각하는 편인데.<br>
디자이너로서 자료를 자체 제작하고자 하니 시간이 꽤나 걸릴 것 같았고, 현재는 디자이너로서의 역할보다는 개발자로서의 역량을 보여주고 공부하는 취지의 프로젝트이니<br>
저작권 무료의 사이트를 이용하여 내가 원하는 자료를 취하였다.<br>
커피?를 누르면 나오는 동영상의 경우. 3 개의 영상을 프리미어 프로로 직접 이어붙인 것 빼고는 모두 저작권 무료 CC0로 다운로드 받은 오리지널 자료의 형태이다.<br>
<br>
<br>
## 개발 기간과 개발 애로사항: '약 한 달', '기능 구현의 애로사항'<br>
제작 기간의 경우.<br>
최소한 한 달 안으로 완성하자 했지만. 어쩌다보니 정말 약 한 달의 개발 및 제작 기간이 소요가 되었다.<br>
자료 조사도 객관적으로 보았을 때. 누구나 납득이 가능할 만한 정보여야겠다는 생각에 내가 그동안 매장에서 일한 경험과 커피에 대해 알고 있는 지식에 플러스로<br>
이미 알고 있는 정보들도 다시 자료 조사를 하여 습득 및 보충하였고 너무나 긴 텍스트나 정보는 읽기 싫게 만들어지는 느낌이 들 것 같아서 <br>
최대한 간략하면서 핵심의 정보를 담을 수 있는 정보의 텍스트를 취하였다.<br>
<br>
<br>
개발과정에 있어서는.<br>
단순 클론 코딩이 아닌, 첫 시작부터 끝까지 자체 제작 포트폴리오이긴 하나 아직은 부족한 개발의 지식으로 인해서 <br>
그동안 공부해왔던 udemy 인강의 지식들을 개인적으로 정리한 문서들과 구글링 그리고 ChatGpt 3.5의 활용을 전반적으로 적극적으로 하였다.<br>
생각보다 아주 기본적인 기능들도 생각보다 구현이 꽤나 걸렸으며, 구현이 되고 이해가 되었을 때는 이제서야 이게 이런 의미였구나. 하고 깨달음을 얻기도 하고<br>
react의 개발도 단순 클론 코딩을 할 때는 react의 사용법과 구조 자체가 이해가 가지 않았는데. 제작하고 공부하다 보니 점차 이해가 갔다.<br>
<br>
<br>
개발을 하면서 체감하고 느낀 것은.<br>
특히 useState나 useEffect의 기능들은 참고를 많이 하였는데, 작동 함수의 알고리즘을 스스로 짜는 부분에 대해서는 아직 많이 부족한 것을 체감 느꼈고,<br>
모든 코드를 전부 이해를 하려고 최대한 노력했지만, 미숙하게나마 이해가 된 부분들도 있다.<br>
아마 경험이 적어서 일 것이라 생각이 들고.<br>
점차 하다보면 돌이켜보았을 때. 충분히 지금보다 이해할 것이라고 믿는다.<br>
<br>
<br>
제일 답답하다고 느낀 것은.<br>
누구 하나 명백하게 물어볼 지식인의 사람이 없다는 것이었다.<br>
특히나 오류가 발생했을 때. 구글링으로도 명쾌한 해답을 찾아내지 못할 때 많이 답답하다.<br>
그래서 일종의 선생님 역할이라 생각하고 ChatGpt3.5에게 아주 굉장히 많이 물어보았다.<br>
다른 사람들은 어떻게 개발 공부를 하고 하는지는 잘 모르겠지만, 아마 이런 일련의 과정들이 개발 공부의 과정이 아닐까 하는 생각이 든다.<br>
<br>
<br>
가장 기능 구현에 막혔던 것은.<br>
2 가지가 있는 데<br>
첫째로.<br>
개인의 원두를 찾는 Find.js에서 첫 번째 맛을 선택하고 넘어가고, 두 번째 느낌을 선택하고 넘어가는, 페이지 사이사이의 상태에서 0.1초만에 에러가 떴다가 사라지는 오류였는데<br> 
오류 항목을 보기위해서 0.1초만에 에러가 뜨는 찰나의 스크린샷을 수십 번을 찍었으며(콘솔 로그에도 0.1초 만에 사라져서 볼 수가 없어 상당히 짜증났으며 아주 불편했다)<br>
chatGpt에 수십 번의 질문을 하고 받은 안내의 코드를 수차례 기입하였으나, 오류는 전혀 해결되지 않았었다.<br>
구글링으로도 알아낼 수가 없었다.<br>
<br>
이 오류에 대한 3주 정도 계속되는 디버깅으로<br>
이후 스크린샷의 에러문을 한참 동안 분석하다가 알아내었는데,<br>
오류는 원두 찾는 선택지의 Find1.js의 원두의 맛을 고르는 선택지의 경로와 Find2.js의 원두의 느낌을 고르는 선택지의 경로에 있어서 발생하는<br>
'selectedFlavor, setSelectedFeeling is not defind 내지는 is not a function'의 오류였는데<br>
app.js에서도 Navibar의 구성요소로 전달하고 Find1.js와 Find2.js에서도 구성요소로 전달받고 다 전달하였는데 대체 왜 오류가 계속해서 해결이 안 되는 걸까 하고<br>
곰곰이 살펴보며 생각을 해보았는데.(그 전까지는 그냥 에러문을 chatGpt에 갖다 박았었다.)<br>
<br>
에러의 근본적인 위치는 어디인가? 라는 물음이 떠올랐고<br>
컴포넌트의 관계성을 보다보니 Find.js가 부모 컴포넌트였고 Find1.js, Find2.js와 Answer시리즈의 js들이 자식 컴포넌트들이었다.<br>
그래서 찬찬히 보다 보니 부모 컴포넌트인 Find.js는 Find1.js와 Find2.js와 다르게 해당 props 전달이 없어서 자식 컴포넌트로 구성요소를 전달하니<br>
```javascript
 <Find1 setSelectedFlavor={setSelectedFlavor} />
 <Find2 setSelectedFlavor={setSelectedFlavor} setSelectedFeeling={setSelectedFeeling} />
 <Answer1_1 setSelectedFlavor={setSelectedFlavor} setSelectedFeeling={setSelectedFeeling}/>
이렇게 하니 Answer 시리즈 모두 동일하게 해결이 되었다.
```
이로써 (전체를 관장하는 부모 컴포넌트에서 확실하게 자식 컴포넌트로 props 선언을 올바르게 해주어야 한다.)를 알게 되었다.<br>
또한 챗 지피티가 자꾸 뺑뺑 돌면서 이상한 해결 답안을 줘서 해당 오류 디버깅에 많은 시간을 소요하게 되었는데<br>
너무 챗 지피티에만 의존을 하면 안 되고 에러문을 정확히 인지하고 분석하고 추론하는 것이 생각보다 빠른 답을 가져와준다는 것을 새삼 깨닫게 되었다.<br>
<br>
<br>
<br>
두 번쨰로는.<br>
<Navibar>의 종류? 항목의 드롭박스의 항목을 클릭하면 Type.js에서 해당 항목이 있는 위치로 스크롤 되는 기능이었는데<br>
페이지가 /Type 상태에서는 잘 작동하지만, 페이지가 /Type 상태가 아닌 경우에서는 기능이 작동하지 않는 오류였다.<br>
이 오류 해결도 거진 10일 이상이 소요된 것 같은데 역시 챗 지피티의 답안은 효과가 없었고 해결이 안되고 되게 답답했었다.<br>
<Navibar>의 해당 드롭박스 <Link>의 경로가 해당 링크항목만 기입되면 해결이 되지만, 이 경우 말 그대로 클릭한 해당 항목의 js컴포넌트만 출력해서 보여준다.<br>
나는 Type.js를 전체를 보여주면서 에스프레소, 라떼, 브루드 커피를 클릭하면<br>
해당 위치로 스크롤이 되는 기능을 원했다.<br>
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
즉 scrollToType 함수는 말 그대로 클릭할 때만 호출이 되고, url 변경에 대한 기능이 없어서 /Type 상태가 아닌 페이지에서 구현이 안 되었던 것 같고<br>
useEffect의 훅 기능은 컴포넌트가 렌더링 될 때마다 실행되는 것의 차이로<br>
페이지의 상태 및 위치가 바뀔 때마다 useLocaton으로 URL 해시를 상시 체크하고 변경될 때마다 해당 useEffect를 실행시켜서<br>
url이 변경될 때마다 해당 항목의 위치로 스크롤 이동을 구현할 수 있었 던 것이다.<br>
<br>
<br>
## 개발을 마치며: '미약하게나마 성장'<br>
새삼 다른 페이지들이 별거 아닌 것 같지만, 이런 과정들이 모두 있었을 것이라는 생각에 경이롭고.<br>
개인적으로 이 사이트의 종류? 부분. 즉 Type.js의 디자인 부분이 조금 아쉽다는 생각이 들었다.<br>
더 좋게 꾸미고자 한다면, 내가 원하는 디자인의 소스는 저작권 무료 소스 사이트에서는 마음에 드는 시각적 자료가 없어서 소스의 자체 제작이 많이 필요한 케이스였다.<br>
이래서 분명 웹 디자이너와 개발자 영역이 세분화되어 있을 것이라는 것을 아직 회사에서 실무를 해본 적은 없지만 새삼 많이 체감하게 되었다.<br>
<br>
무언가 기능을 알아갈 때는 흥미도 생기고 재밌었으나,<br>
오류를 만나서 일주일. 10일. 많게는 그 이상을 붙잡고 있을 때는 스트레스가 매우 심했으며, 우울하기도 하고 절망스러웠지만,<br>
끝내 제작을 마치고 돌이켜보니 전반적으로 많이 배운 것 같고,<br>
뿌듯하고 성취감이 있었다.<br>
특히나 전에 인강을 들으면서, <br>
일단 인강의 강사님이 그냥 일단 먼저 따라치라는 클론코딩이 도저히 잘 이해도 안되고 왜 저렇게 코딩을 하는지도 모르겠으며<br>
오류가 발생하면 그건 그거대로 답답함과 스트레스를 받았었는데<br>
그러한 일련의 과정들이 지금에서야 돌이켜보니 100%는 아니지만, 과정이나 진행에 있어서 이제서야 어느정도 이해가 되는 것 같다.<br>
확실한 건 처음 개발을 공부할 때 보다 여러모로 한 걸음 더 성장한 것 같다.<br>
<br>
분명하게.<br>
<br>
<br>


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
