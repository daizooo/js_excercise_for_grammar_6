const kadai_3 = (age, callback) => {
  if (typeof age !== `number`) {
    message = "数値が入力されていません";
  } else if (age >= 20) {
    message = "値は20以上です";
  } else if (age >= 10) {
    message = "値は20以上10未満です";
  } else {
    message = "値は10未満です";
  }
  callback(message);
};

kadai_3("もじ", (message) => {
  alert(message);
});
kadai_3(26, (message) => {
  alert(message);
});
kadai_3(15, (message) => {
  alert(message);
});
kadai_3(5, (message) => {
  alert(message);
});
