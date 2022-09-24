---
title: 使用美式拼写
---

如果一个单词有多种拼写方式，使用美式英语的拼写，除非另有说明。

对于 ASD-STE100 词汇表和专业术语以外的单词拼写，请查阅 [Merriam-Webster 词典][]。

> 在英语中，“颜色”有两种拼写方法："colour"（英式英语）和 "color"（美式英语）。除非另有说明，否则一律使用美式英语的拼写方法。

{% capture case-id -%}{% increment counter %}{%- endcapture %}

{%- capture original-{{ case-id }} -%}
Change the **colour** of the display.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
Change the **color** of the display.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}



[Merriam-Webster 词典]: https://www.merriam-webster.com/