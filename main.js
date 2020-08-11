"use strict";
{
  const question = document.getElementById("question");
  const choices = document.getElementById("choices");
  const btn = document.getElementById("btn");
  const img = document.getElementById("img");
  const score = document.querySelector("#result > p")
  console.log(score)

  const quizSet = [
    { q: "2002年、木村拓哉と明石家さんま共演作は？", c: ["空から降る一億の星", "GOOD　LUCK！", "HERO"] },
    { q: "豊川悦司が小説家を演じた作品は?", c: ["Love Story", "愛していると言ってくれ", "青い鳥"] },
    { q: "大河ドラマ『新選組！』の脚本家は?", c: ["三谷幸喜", "宮藤官九郎", "野島伸司"] },
  ];

  //現在何問目か
  let currentNum = 0;
  //正答数
  let correct = 0;
  //誤答数
  let wrong = 0;
  //回答したかどうか
  let answered = false;

  //回答をシャッフルする関数()　フィッシャー・イェーツ
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  }

  function checkAnswer(li) {
    if (li.textContent === quizSet[currentNum].c[0]) {
      li.textContent = "正解！";
      li.classList.add("correct");
      img.src = "img/correct.jpg";
      correct++;
      // console.log(`正答率${correct}　/ ${quizSet.length} 　誤答数${wrong}`);
    } else {
      li.textContent = "残念...";
      li.classList.add("wrong");
      wrong++;
      console.log(wrong);
    }
  }

  //質問と回答　セット関数
  function setQuiz() {
    answered = false;

    question.textContent = quizSet[currentNum].q;

    while (choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }
    img.src = "";

    //選択肢の表示
    const shuffleChoices = shuffle([...quizSet[currentNum].c]);
    shuffleChoices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => {
        if (answered === true) {
          return;
        }
        answered = true;
        if (currentNum === quizSet.length - 1){
          btn.textContent = '結果！'
        }
        checkAnswer(li);
      });
      choices.appendChild(li);
    });
  }

  setQuiz();

//Nextボタンを押したときの処理
  btn.addEventListener("click", () => {
    if (answered === false){
      alert('回答を選んでね！')
      return;
    }
    answered = false;
    if (currentNum === quizSet.length - 1) {
      score.textContent = `正答率${correct}/${quizSet.length} 　誤答数${wrong}`;
      result.classList.remove('hidden');
    } else {
      currentNum++;
      setQuiz();
    }
  });
}
