---
title: 冒号
---

冒号用来引出与前面的引导句紧密相关的信息。使用冒号时，不要在冒号的前面插入空格，但冒号的后面必须输入一个空格。

1. toc
{: toc}

# 特定信息类型中的冒号

## 正文

在正文中，冒号可以用来引导行内列表、安全信息或注意事项、以及对概括句进行的详细说明等。

使用冒号引导行内列表时，冒号前的引导句必须结构完整。



> 本例中，冒号用来引导行内列表，但冒号前的引导句结构不完整。所以，必须改用结构完整的句子作引导句。

{% capture case-id -%}{% increment counter %}{%- endcapture %}

{%- capture original-{{ case-id }} -%}
**The product improved in**: accessibility, ease of use, and functionality.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
**The product improved in three categories**: accessibility, ease of use, and functionality.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

> 本例中，冒号用来引导安全信息。

{%- capture example-{{ case-id }} -%}
CAUTION: Before you operate the ground test unit, make sure that the pressure regulator is set to zero. This will prevent damage to the unit.
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

> 本例中，冒号前面的句子是概括句，冒号用来引导对概括句的详细说明。

{%- capture example-{{ case-id }} -%}
Plan the configuration carefully: the initial settings are difficult to change after you add user accounts.
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

## 名称和标题

书籍或文件的名称以及其中的各级标题都不要在末尾使用冒号。

如果书名、文件名或各级标题有副标题，在副标题的前面使用冒号，且冒号和副标题之间必须输入一个空格。

> 本例中是一个标题，标题的末尾不能使用冒号。

{%- capture original-{{ case-id }} -%}
Creating test cases:
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
Creating test caes
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

> 本例中的标题带有副标题，使用冒号和空格分隔正副标题。

{%- capture example-{{ case-id }} -%}
Getting started: Model-driven development in the Java domain
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

