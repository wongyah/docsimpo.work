---
title: 撇号
---

撇号（'）只能用在所有格或字母的复数形式中：

1. toc
{: toc}

# 所有格中的撇号

通常，'s 只能用于表示人物的所有格。

不要使用 's 表示非生命体的所有格。如果要表示非生命体的所属关系，将名词所有格用作形容词，或使用名词所有格组成介词短语。

不要使用 's 表示简称、商标或产品名称的所有格。

> 本例中，所有格的物主的人，可以使用 's。

{% capture case-id -%}{% increment counter %}{%- endcapture %}

{%- capture example-{{ case-id }} -%}
**The editor's** desk is at the end of the hall.
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

> 本例中，所有格的物主是物体（object），不能使用 's 表示。在这种情况下，可以将 "object" 用作形容词，或者使用它组成介词短语。

{%- capture original-{{ case-id }} -%}
Edit **the object's** properties.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
Edit the **object** properties.  
Edit the properties **of the object**.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

> 本例中，所有格的物主是简称（TCB），不能使用 's 表示。在这种情况下，可以使用 "TCB" 组成介词短语。

{%- capture original-{{ case-id }} -%}
**The TCB's** first eight words are used to save floating-point register 1.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
The first eight words **of the TCB** are used to save floating-point register 1.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

# 字母复数形式中的撇号

一个字母的复数形式，是在该字母的后面添加 's （撇号和小写字母 s）。

> 本例中，字母 P 和 Z 的复数形式分别是 P's 和 Z's，而不是 Ps 和 Zs。

{%- capture original-{{ case-id }} -%}
Beginner typists often mistype 9s, **Ps**, and **Zs**.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
Beginner typists often mistype 9s, **P's**, and **Z's**.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

> 本例中，字符串 "ABC" 的复数形式应该是 ABCs，而不是 ABC's。

{%- capture original-{{ case-id }} -%}
The basic learning requirements for any industry are often known as the **ABC's**.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
The basic learning requirements for any industry are often known as the **ABCs**.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

> 本例中，数字字符串 "1980" 和 "1990" 的复数形式应该是 1980s 和 1990s，而不是 1980's 和 1990's。

{%- capture original-{{ case-id }} -%}
Several financial analysts classify the **1980's** and **1990's** as a bull market.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
Several financial analysts classify the **1980s** and **1990s** as a bull market.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

