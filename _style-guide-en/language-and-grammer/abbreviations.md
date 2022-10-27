---
title: 简称
---

简称有两种形式：首字母缩写和短名称。如果首字母缩写可以读作一个单词（比如 "LAN"），这种简称叫做首字母拼音词。如果首字母缩写的读音是各个字母的连读（比如 "PDF"），这种简称叫做首字母连写词。

1. toc
{: toc}

# 简称的语法规范

## 简称的冠词

简称的前面需要添加不定冠词时，根据简称的读音确定使用哪个不定冠词（"a" 或 "an"）。更多详情，请参见[正确地使用不定冠词]({% link _style-guide-en/language-and-grammer/articles.md %}#正确地使用不定冠词)。

## 简称的复数形式

通常，简称的复数形式是在简称的末尾加上小写字母 "s"。对于度量单位的简称，复数形式和单数形式相同。

> 本例中的简称属于一般情况，在其末尾加上小写字母 "s" 即可变成复数形式。

{%- capture example-{{ case-id }} -%}
user IDs  
RFPs
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

> 本例中的简称属于度量单位，复数形式和单数形式相同。

{%- capture example-{{ case-id }} -%}
1 mm  
10 mm
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

## 简称的词性

简称的词性取决于它的全称。不要将简称直接用作名词或动词，除非将其替换为全称时，句子仍然是正确的。

> "PDF" 的全称是 "portable document formats"。

{%- capture original-{{ case-id }} -%}
The tutorials are available as **PDFs**.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
The tutorials are available as **PDF files**.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

> "GUI" 的全称是 "graphical user interface"。

{%- capture example-{{ case-id }} -%}
Enhancements in this release include a redesigned **GUI**.
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

> "FTP" 的全称是 "file transfer protocol"。

{%- capture original-{{ case-id }} -%}
You can **FTP** the files to the server.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
You can use **the FTP command** to send the files to the server.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

## 简称的所有格

不要在简称的末尾加上撇号和小写字母 "s" （"'s"）来表示简称的所有格。要表示简称的所属关系，将简称用作形容词，或者使用简称组成介词短语。

{%- capture original-{{ case-id }} -%}
**HTML's** properties are editable.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
**HTML** properties are editable.

The properties **of HTML** are editable.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

## 简称中的句点

|  保留句点  |  省略句点  |
|:---|:---|
|  由小写字母组成的、与时间有关的简称  |  由大写字母组成的简称  |
|  社交头衔的简称  |  学位的简称  |
|  由小写字母组成的、容易与其他单词混淆的简称<br />容易与其他单词混淆的、度量单位的简称  |  度量单位的简称  |

如果句子的末尾是一个简称，且该简称的末尾是句点，就不要在该句点的后面再添加句点了（句子的末尾保留一个句点即可）。

> 本例中的简称全部由大写字母组成，不应该包含句点。

{%- capture example-{{ case-id }} -%}
ID  
US
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

> 本例中的简称全部由小写字母组成，且与时间相关，应该保留句点。

{%- capture example-{{ case-id }} -%}
a.m.  
p.m.
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

> 本例中是度量单位的简称，不应该包含句点。

{%- capture example-{{ case-id }} -%}
bps  
rpm  
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

> 本例中是学位的简称，不应该包含句点。

{%- capture example-{{ case-id }} -%}
PhD  
MA  
BA
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

> 本例中是社交头衔的简称，应该保留句点。

{%- capture example-{{ case-id }} -%}
Dr.  
Ms.  
Jr.
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

> 虽然本例中的简称，或由小写字母组成，或是度量单位，但它们容易与其他单词混淆。所以，应该保留句点。

{%- capture example-{{ case-id }} -%}
no.  
in.
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

> 本例中的简称位于句子的末尾，且该简称的末尾是句点，只要在句子的末尾保留一个句点即可。

{%- capture original-{{ case-id }} -%}
The meeting starts at 9:00 **a.m..**
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
The meeting starts at 9:00 **a.m.**
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

# 特定信息类型中的简称

## 标题中的简称

不要在标题中使用简称，除非是众所周知的简称或者全称实在太长的简称。

如果在标题中使用了简称，且该简称是在文中首次出现，一定要在以下位置之一给出全称：

- 标题中
- 紧随标题之后的正文中

> 本例中，在标题里使用全称，在紧随其后的正文里写出全称和简称。

{%- capture example-{{ case-id }} -%}
##### Creating **Unified Modeling Language** diagrams

You can use **Unified Modeling Language (UML)** diagrams to model complex systems.
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

> 本例中，标题里使用简称，紧随其后的正文里写出全称和简称。

{%- capture example-{{ case-id }} -%}
##### Creating **UML** diagrams

You can use **Unified Modeling Language (UML)** diagrams to model complex systems.
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

> 本例中，标题里写出全称和简称，紧随标题之后的正文里只使用简称即可。

{%- capture example-{{ case-id }} -%}
##### Creating **Unified Modeling Language (UML)** diagrams

You can use **UML** diagrams to model complex systems.
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

## 术语表中的简称

在术语表中，不要为术语的简称提供定义，只要提供一个指向术语全称的链接即可。

术语表中的术语全称需要提供定义，但不要添加指向简称的链接，将术语的简称放在全称后面的圆括号里即可。

> 本例中是术语表中的一个术语简称。

{%- capture example-{{ case-id }} -%}
DBCS
: See *double-byte character set*{: style="text-decoration-line: underline;"}.
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

> 本例中是术语表中的一个术语全称。

{%- capture example-{{ case-id }} -%}
double-byte character set (DBCS)
: A set of characters in which each character is represented by 2 bytes. These character sets are commonly used by national languages such as Japanese and Chinese that have more symbols than can be represented by a single byte.
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

# 其他简称规范

## 时间单位的简称

常用的时间单位包括年（year）、月（month）、日（day）、小时（hour）、分钟（minute）、秒（second）等。

在正文中，不要使用时间单位的简称。只在表格、图表等空间有限的地方使用时间单位的简称。

对于时间单位的简称，复数形式和单数形式相同。使用时间单位的简称时，在简称的末尾输入一个句点。

> 本例中是几个时间单位的简称。

{%- capture example-{{ case-id }} -%}
yr.  
mon.  
d.  
hr.  
min.  
sec.
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

## 不要使用拉丁语缩写

拉丁语缩写有时会引起误解。所以，使用相应的单词或短语替代拉丁语缩写。

{%- capture original-{{ case-id }} -%}
Discard the standard parts (**e.g.** washers, screws, bolts, and nuts) each time you remove them.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
Discard the standard parts (**for example**, washers, bolts, and nuts) each time you remove them.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

# 全称的使用规范

有些简称广为人知，但它们的全称却鲜为人知，比如 HTML、PDF。在这种情况下，直接使用简称即可，不要写出全称。

对于那些鲜为人知的简称（或者你不知道某个简称是鲜为人知还是广为人知），在它们首次出现的地方写出全称，并在全称后面的圆括号中写上简称。更多详情，请参见[组合使用全称和简称]({% link _style-guide-en/language-and-grammer/noun-clusters.md %}#组合使用全称和简称)。

使用全称时，必须确认是否需要对全称中每个单词使用首字母大写。大多数语言和协议的名称需要使用首字母大写，而有些名称则不需要使用首字母大写。

使用全称时，不要为了体现简称中字母的来源而将单词中间的字母大写，比如 XML 的全称。

> 本例中的全称需要使用首字母大写。

{%- capture example-{{ case-id }} -%}
Hypertext Transfer Protocol (HTTP)  
Unified Modeling Language (UML)  
Web Services Description Language (WSDL)  
Wireless Application Protocol (WAP)
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

> 本例中的全称不需要使用首字母大写。

{%- capture example-{{ case-id }} -%}
graphical user interface (GUI)  
local area network (LAN)  
service-oriented architecture (SOA)
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

> 本例中，XML 中的 "X" 来源于 "extensible" 中的第二个字母。但在使用 XML 的全称时，不能为了体现 "X" 的来源而将其写成 "eXtensible"。

{%- capture original-{{ case-id }} -%}
**eXtensible** Markup Language (XML)
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
**Extensible** Markup Language (XML)
{%- endcapture -%}

{% include templateComponents/manualCase.html %}
