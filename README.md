# WebAudioAPI
오디오API 갖고 놀기 (2021.01.29~31)

## <a href="https://esctabcapslock.github.io/WebAudioAPI/%EB%A9%9C%EB%A1%9C%EB%94%94.html">멜로디.html</a>
- WebAudioAPI의 오실레이터를 이용해 주파수를 발생시킨다
- 키보드 자판을 누르면 해당되는 소리가 난다
- 숫자키를 누르면 옥타브를 바꿀 수 있다
- 내가 누른 것은 작은 글상자에 기록되며, 백스페이스 키를 누르면 지우는 것이 가능

### 연주 기능 사용법
#### 문법
- 공백이나 줄바꿈을 통해 각 음을 구분하며, 공백과 줄바꿈의 수는 중요하지 않다.
- '-': 연음, '_': 공백 \[옥타브\]\[음이름\]\[올림표\] 올림표의 경우 샵:s, 플렛:p이다. (ex. 3옥타브 도샵: 3ds)
#### 사용법
- 큰 글창에 문법에 맞춰 입력
- 재생 버튼 클릭
- <a href="https://github.com/esctabcapslock/WebAudioAPI/blob/main/%EC%96%BC%EC%94%A8%EA%B5%AC%EC%95%BC%20%EC%95%85%EB%B3%B4.txt">얼씨구야.txt</a>를 참고해보시라

### 기타사항
- 데스크랍 파이어폭스 / 크롬에서만 정상 동작함

## <a href="https://esctabcapslock.github.io/WebAudioAPI/%ED%91%B8%EB%A6%AC%EC%97%90.html">푸리에.html</a>
- 고속 푸리에 변환(FFT)를 사용해봤다. <a href="https://evan-moon.github.io/2019/07/10/javascript-audio-waveform/">여기</a>를 사용함
- FFT를 바탕으로, 데이터 시각화 기능 + 음성 변조 기능 + 이퀄라이저 기능을 만들었으나.
- 완성하고 보니 사실  이것들이 웹오디오API에서 기본적으로 제공하는 기능이었다는 것. 

  
  ### 사용법
  - 원하는 파일을 추가한다
  - 재생시작 버튼을 누른다
  - 그래프 부분을 클릭하면 원이 생기고, 위아래로 드래그가 가능하다. 이퀄라이저다. 바뀐 파형이 투명한 회색으로 표시된다.
  - 슬라이드 바를 움직이면 키를 올리거나 낮출 수 있다.
  
 
