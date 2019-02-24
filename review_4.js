const array = ["金", "銀", "白", "黒"];
let color;

function kadai_3(color) {
  if (color) {
    if (color === array[0]) {
      alert("派手やね~");
      return;
    } else if (color === array[1]) {
      alert("シルバー俺も好きよ");
      return;
    } else if (color === array[2]) {
      alert("白Tはマストね");
      return;
    } else if (color === array[3]) {
      alert("毎日全身黒でいいぐらい好き");
      return;
    } else {
      alert(`「${array}」以外の入力には対応しておりません`);
    }
  }
  const input = prompt(`「${array}」の中で好きな色は何？`);
  kadai_3(input);
}

kadai_3();
