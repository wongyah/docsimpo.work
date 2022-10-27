---
title: 大小写规则
---

英语中有两种常用的大小写规则：句子式大小写和标题式大小写。

**句子式大小写**是指只将第一个单词的首字母大写，其余的单词都使用小写，除非另有说明。比如，"Business models"。

**标题式大小写**是指将所有重要单词的首字母大写。比如，"Business Models"。

在标题式大小写中，需要进行首字母大写的单词如下：

- 第一个单词和最后一个单词
- 所有的名词、专业术语、形容词、动词、副词和从属连词（比如 "after"、"because" 或 "how" 等）
- 使用连字符连接而成的复合名词中的所有单词，但冠词、介词和从属连词除外
- 使用连字符连接而成的复合名词中的最后一个单词（无论该单词的词性是什么）

在标题式大小写中，不进行首字母大写的单词如下：

- 冠词，除非它是第一个单词
- 并列连词（比如 "and"、"or"、"neither" 或 "nor" 等）
- 介词，除非它是第一个单词或最后一个单词
- 不定式中的 "to"

一般情况下，**无论是正文还是标题，都使用句子式大小写**。但一些特殊符号和特定的信息类型有各自的大小写规则：

1. toc
{: toc}

> 无论任何位置，专业术语都保留自身的大小写。


# 与特殊符号有关的大小写规则

## 冒号

一般情况下，冒号（`:`）后面的第一个字母使用小写即可。但如果冒号的后面是以下类型的文本，第一个字母使用大写：

- 列表项，请参见[列表中的大小写规则](#列表)
- 安全信息或注意事项
- 引用文本
- 和标题在同一行的副标题

> 本例中，冒号后面的第一个字母是不定冠词 "a"，使用小写即可。

{% capture case-id -%}{% increment counter %}{%- endcapture %}

{%- capture example-{{ case-id }} -%}
Three security measures are evaluated: **a** firewall, an encryption key, and a password.
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

> 本例中，冒号的后面是安全信息，第一个字母应该使用大写。

{%- capture example-{{ case-id }} -%}
CAUTION: **Before** you operate the ground test unit, make sure that the pressure regulator is set to zero. This will prevent damage to the unit.
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

> 本例中，冒号的后面是引用文本，第一个字母应该使用大写。

{%- capture example-{{ case-id }} -%}
The manager's instructions were clear: "**Submit** the report by Monday."
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

> 本例中，冒号的后面是副标题，且该副标题和标题在同一行，第一个字母使用大写。

{%- capture example-{{ case-id }} -%}
Input/Output operations: **Move** mode and locate mode
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

## 连字符

由连字符连接而成的复合名词出现在句子或者标题的开头时，只将复合名词中第一个单词的首字母大写。

如果书名或文件名中包含由连字符连接而成的复合名词，且书名或文件名使用了标题式大小写，复合名词中的单词也使用标题式大小写。

> 本例中，句子的开头是由连字符连接而成的复合名词 "power-saving technicals"，只将复合名称中第一个单词 "power" 的首字母大写即可。

{%- capture original-{{ case-id }} -%}
**Power-Saving** technicals are important for notebook users.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
**Power-saving** technicals are important for notebook users.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

> 本例中，文件名中包含由连字符连接而成的复合名词 "non-English-speaking users"，且文件名使用了标题式大小写，该复合名称也应该使用标题式大小写。

{%- capture original-{{ case-id }} -%}
Designing Interfaces for **Non-English-speaking** Users
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
Designing Interfaces for **Non-English-Speaking** Users
{%- endcapture -%}

{% include templateComponents/manualCase.html %}


## 斜杠

有些专业术语中含有斜杠（`/`）。由斜杠连接而成的专业术语中，斜杠前后的单词采用一致的大小写规则。也就是说，如果将斜杠前面的单词进行了首字母大写，斜杠后面的单词也要进行首字母大写；如果斜杠前面的单词没有进行首字母大写，斜杠后面的单词也不要进行首字母大写。

{%- capture example-{{ case-id }} -%}
Turn on the **On/Off** toggle.
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

# 特定信息类型中的大小写规则

## 书名和文件名

书籍或文件的名称使用标题式大小写，比如书籍名称、手册名称或 CD 名称。

如果书名或文件名有副标题，且书名或文件名使用了标题式大小写，副标题的写法如下：

- 在以下情况下，副标题使用标题式大小写：

  - 副标题与正标题在同一行。
  - 副标题很短。
  - 副标题为正标题提供关键信息。
  
- 在以下情况下，副标题使用句子式大小写：
  
  - 副标题与正标题不在同一行。
  - 副标题比较长。
  - 副标题只为正标题提供补充信息。

## 标题

标题使用句子式大小写，比如书籍中的标题、（结构化文档中）主题的标题、图片标题以及表格标题等。

在线内容中的文档名称和标题都使用句子式大小写，比如网络教程的名称、博客文章的名称以及其中的标题等。

在正文中引用标题时，保留原文中标题的大小写。如果原文中的标题全部使用大写字母，引用该标题时使用标题式大小写。

## 正文

在正文中，使用句子式大小写。另外，还应注意以下几点：

- 不要使用大写字母来强调内容。如果要强调某些内容，可以使用语义化的标签。
- 不要使用全部是小写字母的专业术语作为句子的开头。如果出现这样的句子，使用其他结构重新组织句子。
- 不要将单词中间的字母大写，除非它是商标的名称。

> 本例中，不应该使用大写字母来强调单词 "very"。

{%- capture original-{{ case-id }} -%}
The option that you select is **VERY** important.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
The option that you select is **very** important.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

> 本例中，句子的开头使用了全部是小写字母的专业术语 "if"（编程语言中的关键字）。为了让句子开头的单词可以首字母大写，需要重新组织句子。

{%- capture original-{{ case-id }} -%}
**if** expressions, unlike if statements, return a value.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
**Unlike** if statements, if expressions return a value.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

> 本例中，单词中间的字母使用了大写。即使是专业术语，也应该避免这样使用。

{%- capture original-{{ case-id }} -%}
CopyPool
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
copy pool
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

## 术语表

术语表（Glossaries）中的术语使用小写，术语定义使用句子式大小写。

## 索引

索引（Indexes）中的术语使用小写，除非另有说明。

## 列表

在项目符号列表和数字列表中，使用句子式大小写，即将第一个单词的首字母大写。

在定义列表（definition lists）中，术语和定义均使用句子式大小写，除非术语必须全部使用小写。

## 表格

表格中的内容使用句子式大小写，比如表格标题、列标题、行标签以及单元格中的内容。

## 字母

使用或引用单个字母时，根据上下文选择合适的大小写。比如，如果一个字母在单词中使用的是大写，引用该字母时就使用大写；如果一个字母在单词中使用的是小写，引用该字母时就使用小写。

如果一个字母使用大小写均可，就使用大写。

> 一个字母的复数形式，是在字母后面添加撇（`'`）和字母 s。比如，字母 "A" 的复数形式是 "A's"。

> 本例中，"HTML" 中的 "H" 使用的是大写，所以引用 "H" 时也使用大写。

{%- capture example-{{ case-id }} -%}
The ***H*** in *HTML* stands for *Hypertext*.
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

> 本例中，字母 "N" 和 "M" 使用大小写均可，所以使用了大写。

{%- capture example-{{ case-id }} -%}
With some fonts, readers can mistake **N's** for **M's**.
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}
