"use strict";
{
  const question = document.getElementById("question");
  const choices = document.getElementById("choices");
  const btn = document.getElementById("btn");

  const quizSet = [
    { q: "Aはなにか?", c: ["A0", "A1", "A2"] },
    { q: "Bはなにか?", c: ["B0", "B1", "B2"] },
    { q: "Cはなにか?", c: ["C0", "C1", "C2"] },
  ];

  let currentNum = 0;

  //回答をシャッフルする関数()　フィッシャー・イェーツ
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
        [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  }

  function checkAnswer(li) {
    if (li.textContent === quizSet[currentNum].c[0]){
        console.log('correct')
    } else {
        console.log('wrong')
    }
  }


  function setQuiz() {
    question.textContent = quizSet[currentNum].q;

    //選択肢の表示
    const shuffleChoices = shuffle([...quizSet[currentNum].c]);
    shuffleChoices.forEach(choice => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener('click',() => {
        checkAnswer(li)
      })
      choices.appendChild(li);
    });
  }

  setQuiz()
}
