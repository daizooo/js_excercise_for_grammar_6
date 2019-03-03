let input;

function kadai_3(input) {
  if (input) {
    if (input === "良い") {
      alert("その調子で頑張って！");
      return;
    } else if (input === "普通") {
      alert("普通が一番よ");
      return;
    } else if (input === "悪い") {
      alert("そういう日もあるって！");
      return;
    } else {
      alert("良い、普通、悪い以外の入力には対応しておりません");
    }
  }
  input = prompt("今日の気分は？（良い、普通、悪いのいづれかを入力してください）");
  kadai_3(input);
}

kadai_3();
