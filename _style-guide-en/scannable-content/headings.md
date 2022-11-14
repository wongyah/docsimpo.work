---
title: 标题
---

使用标题将内容按照一定的逻辑顺序组织在一起，方便读者快速浏览和查找所需内容。

写标题时，应注意以下几个方面：

1. toc
{: toc}

# 标题的写法

标题一定要简短有力。标题就像大纲一样，统领全篇。如果读者对标题不感兴趣，也不大可能会去阅读正文。

同类型章节的标题使用统一的句式。通常，描述概念、功能或参考信息的章节使用名词或名词短语作为标题，描述操作步骤的章节使用动词短语作为标题。

同级标题尽可能使用统一的句式。比如一级标题均使用名词或名词短语，二级标题均使用动词短语，三级标题均使用动词不定式短语等。

正确使用标题的单复数形式。如果一个标题在语法上使用单数形式和复数形式均可，就使用复数形式。

两个标题之间要有正文部分。如果一个标题后面紧跟着另一个标题，或者两个标题之间的正文里没有实质性内容，其中一个标题可能是多余的。在这种情况下，应将内容重新组织一下。

> 本例中，一个是描述概念的章节标题，一个是参考信息的章节标题，均使用的是名词短语。

{% capture case-id -%}{% increment counter %}{%- endcapture %}

{%- capture example-{{ case-id }} -%}
Introduction to client/server communications  
Keyboard shortcuts for transformation
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

> 本例中是描述操作步骤的章节标题，使用的是动词短语。

{%- capture example-{{ case-id }} -%}
Install the client program
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

> 本例中，第一个标题在语法上适合使用单数形式；第二个标题在语法上使用单复数形式均可，所以使用了复数形式。

{%- capture example-{{ case-id }} -%}
Unpack the system  
Change payment instructions
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

# 标题中的标点符号

不要在标题的末尾使用句点或冒号。

正标题和副标题之间使用冒号分隔（详情请参见[冒号]({% link _style-guide-en/punctuation/colons.md %})）。不要将副标题放在圆括号里，也不要使用长破折号（`—`）、短破折号（`–`）或连字符（`-`）作为分隔符。

在书籍的章标题和附录标题中，使用句点分隔标题编号和标题文本。

> 本例中，一个是章标题，一个是附录标题，需要使用句点分隔标题编号和标题文本。

{%- capture example-{{ case-id }} -%}
Chapter 1. Introduction to InfoBase  
Appendix A. Conversion tables
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

# 标题中的简称

详情请参见[简称]({% link _style-guide-en/language-and-grammer/abbreviations.md %})。

# 标题中的特殊字符

不要在标题中使用与字符（`&`）或加号（`+`），除非它们是专业术语的组成部分。

尽量不要在标题中使用连字符。在较小的浏览器窗口或移动设备端，连字符容易引起不正常的断行。

# 标题的格式

同级别的标题使用统一的格式。通常，标题的段前间距大于段后间距。标题与正文之间的距离可以反应它们之间的联系。

使用文本编辑器的样式表（或其他格式设置功能）来设置统一的标题样式。不要使用回车来增加标题与上下文之间的间距。