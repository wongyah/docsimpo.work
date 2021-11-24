
//! 使用<span lang='en'>包围<body>内的所有非中文字符和标点。

$(document).ready(function(){

  $('body').find("*").not("pre, pre *, code, code *, script, .mermaid, .mermaid *").contents().each(function() {
    if(this.nodeType == 3 && this.nodeValue.search(/\S/) != -1) {
        var text = this.textContent;
        var nonChinese = /(\b[\x00-\xff\n]{2,})\b/g;
        $(this).replaceWith(text.replace(nonChinese,'<span lang="en">$1</span>'));
    }
  });

  $('code[data-lang]').each(function() {
    var codeLanguage = $(this).attr("data-lang");
    // var txt = $("<p class='code-language'></p>").text(codeLanguage);
    var txt = $("<p></p>");
    $(txt).text(codeLanguage);
    $(txt).addClass("code-language "+codeLanguage);
    $(this).parent().before(txt);
  })

  $('.toast').toast("show");

});

