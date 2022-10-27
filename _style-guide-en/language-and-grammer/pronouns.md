---
title: 代词
---

使用代词时，代词的指代对象一定要清晰。如果一个代词没有指代对象，或者有多个可能的指代对象，句子就会产生歧义。

正确地使用关系代词。关系代词是指 "that"、"which"、"who" 和 "whose"。

- 使用 "that" 引导限制性关系从句。不要使用逗号将限制性关系从句与主句分隔开。也就是说，不要在 "that" 从句的前后输入逗号。
- 使用 "which" 引导非限制性关系从句。使用逗号将非限制性关系从句与主句分隔开。也就是说，"which" 从句的前后需要各输入一个逗号。
- 如果关系从句修饰的中心词是人，使用 "who" 来引导。
- 如果关系从句修饰的中心词是所有格形式，不论所有格中的物主是生命体（人或动物等）还是非生命体（物体或位置等），都使用 "whose" 来引导，

人称代词的使用方法，请参见[人称]({% link _style-guide-en/language-and-grammer/person.md %})。

> 本例中，代词 "they" 的指代对象可能是 "pins"，也可能是 "seats"。代词的指代对象不清晰使句子产生了歧义。

{% capture case-id -%}{% increment counter %}{%- endcapture %}

{%- capture original-{{ case-id }} -%}
If you engage the pins incorrectly with the seats, **they** can become damaged.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
If you engage the pins incorrectly with the seats, **the pins** can become damaged.

If you engage the pins incorrectly with the seats, **the seats** can become damaged.

If you engage the pins incorrectly with the seats, **the pins and seats** can become damaged.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

> 本例中，第一个句子是限制性关系从句，第二个句子是非限制性关系从句。
> 
> 第一个句子中的系统部件（system unit）可以安装不同数量的驱动（drives），但只有安装两个驱动的系统部件属于落地式的。由此可见，使用 "that" 引导的限制性关系从句对于保持句义的完整性至关重要，删除限制性关系从句会改变整个句子的含义。
> 
> 第二个句子中的系统部件（system unit）都安装了两个驱动（drives），都属于落地式的。由此可见，使用 "which" 引导的非限制性关系从句只是主句的附加信息，即使将其删除，也不会改变主句的含义。

{%- capture example-{{ case-id }} -%}
1. The system units **that** have two drives installed are floor-standing models.
2. The system units, **which** have two drives installed, are floor-standing models.
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

> 本例中，关系从句修饰的中心词是数据库管理员（database asministrators），应该使用关系代词 "who" 来引导。

{%- capture original-{{ case-id }} -%}
Database administrators **that** require additional informaion ...
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
Database administrators **who** require additional informaion ...
{%- endcapture -%}

{% include templateComponents/manualCase.html %}
