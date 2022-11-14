---
title: 冒号
---

冒号用来引出与前面的引导句紧密相关的信息。

通常，不要在冒号的前面输入空格，但冒号的后面必须输入一个空格。如果冒号位于句尾，冒号的后面不要输入空格。

冒号常用于以下信息类型中：

1. toc
{: toc}

与冒号有关的大小写规则，请参见[大小写规则][]。

# 正文

在正文中，冒号可以用来引导行内列表、安全信息或注意事项、以及对概括句进行的详细说明等。

使用冒号引导行内列表时，冒号前的引导句必须是结构完整的句子。

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

# 名称和标题

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

# 引导句

通常，列表引导句的末尾使用冒号。如果引导句和列表之间有其他句子，引导句以及引导句和列表之间的句子都以句点结尾。

图片引导句和表格引导句的末尾使用冒号或句点（详情请参见[图片][]和[表格][]）。

> 本例中，引导句的后面是列表，所以引导句的末尾使用冒号。

{%- capture example-{{ case-id }} -%}
When you configure the computer, set the following items:

- Date and time
- Drive startup sequence
- Passwords
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

> 本例中，引导句和列表之间有其他句子。所以引导句以及引导句和列表之间的句子全部使用句点结尾，而不是冒号。

{%- capture example-{{ case-id }} -%}
The following types of interruptions are possible. The initial processing for each type is per-formed by a different interruption-handling component in the supervisor.

- Supervisor call (SVC) interruptions are requests for supervisor services.
- Timer and external interruptions are ...
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

# 时间和比率

用数字表示时间和比率时，使用冒号。冒号的前面和后面都不要输入空格。

> 本例中，使用数字表示一个具体的时间。冒号用来分隔表示小时、分钟和秒的数字。

{%- capture example-{{ case-id }} -%}
The last build finished running at **18:54:30**.
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

> 本例中，使用数字表示比率。

{%- capture example-{{ case-id }} -%}
Consumer sales increased **5:1** last quarter.
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}




<!-- link definitions -->
[图片]: {% link _style-guide-en/scannable-content/figures.md %} "速览式内容：图片"
[表格]: {% link _style-guide-en/scannable-content/figures.md %} "速览式内容：表格"
[大小写规则]: {% link _style-guide-en/language-and-grammer/capitalization.md %}#冒号 "语法：大小写规则"