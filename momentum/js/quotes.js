const quotes = [
  {
    quote: "행동 없는 말은 이상주의를 훼손한다.",
    author: "허버트 후버",
  },
  {
    quote:
      "바쁜 자는 단지 마귀 하나로부터 유혹받지만, 한가로운 자는 수많은 마귀들로부터 유혹당한다.",
    author: "토마스 풀러",
  },
  {
    quote: "침묵은 그 어떤 노래보다 더 음악적이다.",
    author: "펄 벅",
  },
  {
    quote: "시간은 너무 없고 할 일도 너무 없다.",
    author: "오스카 레반트",
  },
  {
    quote: "때 늦은 정의는 실현되지 못한 정의이다.",
    author: "윌리엄 글래드스톤",
  },
  {
    quote:
      "행복한 삶의 비밀은 올바른 관계를 형성하고 그것에 올바른 가치를 매기는 것이다.",
    author: "노먼 토머스",
  },
  {
    quote:
      "전문가란 매우 협소한 분야에서 저지를 수 있는 모든 실수를 저질러본 사람이다.",
    author: "닐스 보어",
  },
  {
    quote:
      "최고가 되고자 하지만 최고가 아닌, 자만한 사람만큼 아첨에 잘 넘어가는 사람이 없다.",
    author: "바뤼흐 스피노자",
  },
  {
    quote: "내가 이해하는 모든 것은 내가 사랑하기 때문에 이해한다.",
    author: "레프 톨스토이",
  },
  {
    quote: "바쁜 벌은 슬퍼할 시간이 없다.",
    author: "윌리엄 블레이크",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
