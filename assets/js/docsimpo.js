
//! 使用<span lang='en'>包围<body>内的所有非中文字符和标点。

$(document).ready(function(){

  $('body').find("*").not("script, .mermaid, .mermaid *").contents().each(function() {
    if(this.nodeType == 3 && this.nodeValue.search(/\S/) != -1) {
        var text = this.textContent;
        var nonChinese = /(\b[\x00-\xff\n]{2,})\b/g;
        $(this).replaceWith(text.replace(nonChinese,'<span lang="en">$1</span>'));
    }
  });

});

