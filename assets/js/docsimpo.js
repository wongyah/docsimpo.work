
//! 使用<span lang='cn'>包围<body>内的所有中文字符和中文标点。

document.body.onload = wrapChineseInBody();
function wrapChineseInBody() {
  var text = document.body.innerHTML;
  var wrapped = text.replace(/([^\x00-\xff]+)/gm, "<span lang='cn'>$1</span>");
  document.body.innerHTML = wrapped;
}

// function wrapChineseByElement(id) {
//   var text = document.getElementById("id").innerHTML;
//   var wrapped = text.replace(/([^\x00-\xff]+)/gm, "<span lang='cn'>$1</span>");
//   document.getElementById("id").innerHTML = wrapped;
// }