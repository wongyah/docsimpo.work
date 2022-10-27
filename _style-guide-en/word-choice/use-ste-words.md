---
title: 使用 STE 许可词汇
---

STE 是指欧洲航空航天和国防工业协会（ASD）编写的 [ASD-STE100][]。使用 STE 编写的技术文档简洁易懂、条理清晰、表意准确。更多详情，请参阅：[什么是 STE?]({% link blog/_posts/2022-10-14-what-is-ste.md %})

[ASD-STE100][] 中有一个受控词汇表（以下称词汇表）。根据“一词一义”的原则，词汇表收录了约 900 个在技术写作中最常用的词汇。在技术写作中，要优先使用这些词汇：

1. toc
{: toc}

# 优生使用许可词汇

词汇表中的词汇分为两类：许可词汇和非许可词汇。

**许可词汇**是指词汇闭中收录的约 900 个在技术写作中最常用的词汇。**非许可词汇**是指词汇表中收录的约 1400 个虽然常见但却不推荐使用的词汇。

在技术写作中，优先使用词汇表中的许可词汇。如果句子中使用了非许可词汇，但又找不到合适的许可词汇来替代，就重新组织句子以避免使用非许可词汇。

> 在词汇表中，"absence" 属于非许可词汇（不推荐使用），而 "not" 属于许可词汇。

{% capture case-id -%}{% increment counter %}{%- endcapture %}

{%- capture original-{{ case-id }} -%}
In the **absence** of damage to the brackets, continue the procedure.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
If the brackets are **not** damaged, continue the procedure.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

# 许可词汇的词性

在词汇表中，每个许可词汇都有一个词性。使用许可词汇时，词汇的词性必须与词汇表一致。

> 名词 "test" 是许可词汇，但动词 "test" 不是许可词汇。

{%- capture original-{{ case-id }} -%}
**Test** the systems for leaks.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
Do the leak **test** of the system.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

# 许可词汇的含义

在词汇表中，每个许可词汇都有特定的含义。与普通英语相比，许可词汇在词汇表中的含义更狭义。使用许可词汇时，词汇的含义必须与词汇表一致。

> 在词汇表中，"follow" 含义是 "come after, go after"，而不是 "obey"。

{%- capture original-{{ case-id }} -%}
**Follow** the safety instructions.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
**Obey** the safety instructions.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

# 动词和形容词的许可词形

在词汇表中，每个动词许可词汇都有四种词形：基本词形、一般现在时、一般过去时和过去分词（用作形容词）。

在词汇表中，每个形容词许可词汇都有三种词形：基本词形、比较级和最高级。如果形容词的比较级和最高级形式分别是 "more" 和 "most" 形式，词汇表会将其省略。

使用动词和形容词许可词汇时，词汇的词形必须与词汇表一致。



<!-- abbreviation definition -->
*[STE]: Simplified Technical English
*[ASD]: AeroSpace and Defence Industries Association of Europe

<!-- link definition -->
[ASD-STE100]: http://www.asd-ste100.org/request.html