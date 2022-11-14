---
title: 列表
---

使用列表将具有并列关系的信息组织在一起，方便读者快速浏览内容。使用列表时，注意以下几个方面的规则：

1. toc
{: toc}

与列表有关的大小写规则，请参见[大小写规则][]。

# 列表的类型

列表分为无序列表、有序列表和定义列表。根据列表的内容，选择合适的列表。

## 无序列表

如果列表中的项目没有先后顺序，使用无序列表。

尽管无序列表中的项目不需要按照特定的顺序排列，但仍尽可能找出它们之间的一些逻辑关系，并按照这种逻辑关系排列。如果你不确定读者是否能领会，就简要说明一下你的排列方式。

如果各项目之间不存在任何逻辑关系，就按照字母顺序排列。

{% capture case-id -%}{% increment counter %}{%- endcapture %}

{%- capture example-{{ case-id }} -%}
When you configure the computer, you can use the program to set the following items:

- Date and time
- Passwords
- Drive startup sequence
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

## 有序列表

如果列表中的项目具有先后顺序（比如操作步骤或排行榜），使用有序列表。

引用有序列表中的某个项目时，使用该项目的编号。

{%- capture example-{{ case-id }} -%}
Write comment statements according to the following rules:

1. Use an asterisk in the first column.
2. Do not exceed 80 charactoers.
3. Do not place a comment statement between an instruction and its continuation line.
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

## 定义列表

使用定义列表来组织术语表中的信息。术语使用粗体，除非另有说明。术语定义的末尾使用句点。

{%- capture example-{{ case-id }} -%}
The following five access levels are associated with resources:

All
: You can delete and perform all operations on resources. All is the highest level of access. 

Create
: You can view, edit, and add resources.

Modify
: You can view and edit resources.

Read-only
: You can only view resources.

None
: You can not view or perform operations on resources.
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

# 列表的写法

列表中的项目要具有统一的结构。比如，所有项目都是名词或名词短语，或者所有项目都是祈使句。

每个列表中至少要有两个项目，但最多不要超过 7 个。如果列表中的项目数量超过 7 个，将其分解为多个列表。如果列表的内容是用来查询或检索的参考信息，列表中的项目数量不受限制。

> 本例中，列表中的第一个项目是名词短语，而其他两个项目都是完整的句子。所以，应将第一个项目也修改成完整的句子。

{%- capture original-{{ case-id }} -%}
XYZ Manager has the following features:

- **A graphical user interface.**
- It is compatible with ABC Manager.
- It can be used on many types of systems.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
XYZ Manager has the following features:

- **It has a graphical user interface.**
- It is compatible with ABC Manager.
- It can be used on many types of systems.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

# 引导句的写法

如果列表中的内容不是操作步骤，使用结构完整的句子作为列表的引导句。操作步骤的引导句写法，请参见[操作步骤]()。

通常，引导句的末尾使用冒号。如果引导句和列表之间有其他句子，引导句以及引导句和列表之间的句子都以句点结尾。详情请参见[冒号][]。

> 本例中的列表引导句不是结构完整的句子，应该修改为结构完整的句子。

{%- capture original-{{ case-id }} -%}
Examples of this type of interaction include:
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
The following statements are examples of this type of interaction:
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

# 嵌套列表

无序列表和有序列表中可以包含子列表，但嵌套层级不能超过两级。否则，重新组织相关内容。

{%- capture example-{{ case-id }} -%}
The following choices are on the menu:

- DPI settings
  + Set Write Access Managers
  + Set Trap Receivers
- Reset configuration
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}


<!-- link definitions -->
[冒号]: {% link _style-guide-en/punctuation/colons.md %} "标点符号：冒号"
[大小写规则]: {% link _style-guide-en/language-and-grammer/capitalization.md %}#列表 "语法：大小写规则"