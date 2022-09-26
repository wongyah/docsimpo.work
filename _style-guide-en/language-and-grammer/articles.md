---
title: 冠词和指示形容词
---

正确地使用冠词和指示形容词，不仅可以使内容易于理解，还可以降低翻译难度。

冠词是指 "a"、"an" 和 "the"。其中，"a" 和 "an" 是不定冠词，"the" 是定冠词。

指示形容词是指 "this"、"these"、"that" 和 "those"。

使用冠词和指示形容词时，应注意以下几点：

1. toc
{: toc}

# 不要省略冠词或指示形容词

不要为了缩短句子长度而省略冠词或指示形容词。

{% capture case-id -%}{% increment counter %}{%- endcapture %}

{%- capture original-{{ case-id }} -%}
**Data module** tells you how to operate **unit**.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
**This data module** tells you how to operate **the unit**.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

# 不要在通用描述中使用冠词

有时候，名词前面不能加冠词，否则就会产生错误。比如，在通用描述中就不能使用冠词。

{%- capture example-{{ case-id }} -%}
**Solvents** can cause damage to **paint**.
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

# 不要在带编号的名词前使用定冠词

在工业产品的产品文档中，经常出现带有唯一标识符的名词，比如零备件名称。如果一个名词的后面是它的编号（唯一标识符），就不要使用定冠词了。

{%- capture original-{{ case-id }} -%}
Tag **the circuit breaker 36L7**.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
Tag **circuit breaker 36L7**.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

# 不要过度重复冠词

有些句子中，存在一些并列关系的名词。如果并列关系的名词数量较少，在每个名词前添加冠词。如果并列关系的名词数量较多，只在第一个名词前添加冠词即可，不要在其他的名词前重复输入冠词。

> 本例中，只有 2 个并列关系的名词。所以，在每个名词前添加冠词。

{%- capture example-{{ case-id }} -%}
Install **the** nuts (2) and **the** bolts (3).
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

> 本例中，有 4 个并列关系的名词，数量较多。所以，在第一个名词 "O-rings" 前添加冠词，省略其他名词前的冠词。

{%- capture example-{{ case-id }} -%}
Discard **the** O-rings (3), gaskets (4), seals (7), and washers (9).
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

# 正确地使用不定冠词

以辅音开头的名词，使用不定冠词 "a"。以元音开头的名词，使用不定冠词 "an"。

如果由首字母缩写组成的简称，可以读作一个单词（比如 "LAN"），则根据该单词的发音来确定使用哪个不定冠词。如果由首字母缩写组成的简称，是各个字母的连读（比如 "PDF"），则根据第一个字母的发音来确定使用哪个不定冠词。

以句点开头的文件扩展名（比如 `.exe`），以句点的发音（"dot"） 来确定不定冠词，即 "a"。

{%- capture example-{{ case-id }} -%}
a project  
an object

a LAN  
a PDF document  
an HTTP request

a `.exe`{: style="background: transparent;"} file
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

