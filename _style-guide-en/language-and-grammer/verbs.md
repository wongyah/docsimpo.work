---
title: 动词
---

动词的选用原则，请参见 [使用 STE 许可词汇]({% link _style-guide-en/word-choice/use-ste-words.md %}) 和 [选用专业术语](../word-choice/select-technical-terms.md)。

使用动词时，应注意以下几点：

1. toc
{: toc}

# 优先使用一般现在时

通常，一般现在时是最简单、最易于理解的时态。在技术写作中，要优先使用一般现在时。不能使用一般现在时的情况下，可以使用一般过去时和未来时。

|  允许使用  |  禁止使用  |
|:---:|:---:|
|  一般现在时<br />一般过去时<br />未来时  |  现在完成时<br />过去完成时<br />现在进行时<br />过去进行时<br />其他复杂的时态  |

{% capture case-id -%}{% increment counter %}{%- endcapture %}

> 本例中，可以使用一般现在时，不需要使用未来时。

{%- capture original-{{ case-id }} -%}
When you open the latch, the panel **will slide** forward.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
When you open the latch, the panel **slides** forward.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

> 本例中，使用一般现在时会改变句子的含义。所以，必须使用未来时。

{%- capture original-{{ case-id }} -%}
Cancel a broker deployment only if you are sure that the broker **never responds to** the deployment request.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
Cancel a broker deployment only if you are sure that the broker **will never respond to** the deployment request.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

# 优先使用主动语态

语态分为两种：主动语态和被动语态。在主动语态中，句子的主语是动作的实施者。在被动语态中，句子的主语是动作的承受者。通常，主动语态比被动语态能够表达得更清晰、更简洁。

{%- capture example-{{ case-id }} -%}
**主动语态：**  
the manufacturer **supplies** the safety procedures.

**被动语态：**  
the safety procedures **are supplied** by the manufacturer.
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

**在操作步骤中，必须使用主动语态。在描述性内容中，尽可能使用主动语态。**

通常，大部分描述性内容都可以使用主动语态。但在有些情况下，必须使用被动语态才能表达得更好、更正确地。

可以使用被动语态的情况如下：

- 动作的实施者是系统。
- 你需要强调动作的承受者。
- 不想让用户感觉或错以为你在责备他，比如错误提示信息。
- 使用被动语态能让内容更清晰。
- 某些特定的信息类型，比如术语定义。

> 本例中是一个操作步骤，必须使用主动语态。

{%- capture original-{{ case-id }} -%}
The test can **be continued** by the operator.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
**Continue** the test.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

> 本例中的描述性句子，是可以用主动语态表达的，所以不能使用被动语态。

{%- capture original-{{ case-id }} -%}
These values **are used** by the computer **to calculate** the energy consumption.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
The computer **calculate** the energy consumption from these values.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

> 本例中，动作的实施者是系统，使用被动语态更合适。

{%- capture example-{{ case-id }} -%}
The file is saved when you press Enter.
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

> 本例中是一条错误提示信息，使用被动语态才不会让用户感觉你在责备他。

{%- capture example-{{ case-id }} -%}
`Error: An incorrect value was entered.`{: style="background: transparent;"}
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}
