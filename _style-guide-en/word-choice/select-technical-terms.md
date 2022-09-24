---
title: 选用专业术语
---

除了 [ASD-STE100][] 词汇表中的许可词汇，你还可以使用特定领域里的专业术语 —— 名词术语和动词术语。

名词术语的选用原则：

1. [不要将名词术语用作动词](#不要将名词术语用作动词)
2. [使用内部通用的名词术语](#使用内部通用的名词术语)
3. [选用简单易懂的名词术语](#选用简单易懂的名词术语)
4. [不要使用俚语或行话作为名词术语](#不要使用俚语或行话作为名词术语)
5. [不要使用多个名词术语表示同一事物](#不要使用多个名词术语表示同一事物)

动词术语的选用原则：

1. [尽可能避免使用动词术语](#尽可能避免使用动词术语)
2. [使用含义明确的动词术语](#使用含义明确的动词术语)
3. [不要将动词术语用作名词](#不要将动词术语用作名词)


# 不要将名词术语用作动词

名词术语只能作为名词或名词术语中的修饰语使用，不能用作动词。不过，有些词汇可以有两种词性，即是名词术语，也是动词术语。

> "Oil" 是一个名词术语，不能将其用作动词。使用不同的句型结构，使 "oil" 在句子中成为名词。

{% capture case-id -%}{% increment counter %}{%- endcapture %}

{%- capture original-{{ case-id }} -%}
**Oil** the steel surfaces.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
Apply **oil** to the steel surfaces.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

> "Rivet" 既是名词术语，也是动词术语。

{%- capture example-{{ case-id }} -%}
Remove the **rivets** from the flange.

**Rivet** the panel in its position.
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

# 使用内部通用的名词术语

每个专业领域里、每个组织内部都有自己的专业术语。你可以使用这些内部通用的术语们。

如果产品、零件或加工过程有指定名称，将该名称作为名词术语使用。通常，你可以从产品文档、图纸或零备件数据表中找到这些名词术语。

有些名词术语很长，你可以尽可能地将它们简化一下。

> "Touchscreen" 和 "home button" 是在产品文档中使用过的名词术语。

{%- capture example-{{ case-id }} -%}
The front panel of the phone has a **touchscreen** and a **home button**.
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

# 选用简单易懂的名词术语

如果没有内部通用的名词术语，你就选择一个简短易懂的用。当然，你选择的名词术语，必须是大家熟知的。

> 本例中，零部件都是有编号的。通过这些编号，可以很容易地在插图中识别它们。所以，使用 "screws"、"flange"、"cover" 这些最简单的名称即可。

{%- capture original-{{ case-id }} -%}
Remove the four **stainless steel pan head machine screws** (10) that attach the **metallic machined flange** (15) to the **front housing cover** (20).
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
Remove the four **screws** (10) that attach the **flange** (15) to the **cover** (20).
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

# 不要使用俚语或行话作为名词术语

俚语只在特定的地区使用，其他地方的人很难看懂或听懂。行话只在特定的人群（比如某个行业内的人）使用，其余的人很难看懂或听懂。所以，俚语和行业很容易引起误解。

选择名词术语时，一定要选择那些绝大多数人都知道的词汇。

{%- capture original-{{ case-id }} -%}
**Make a sandwich** with two washers and the spacer.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
**Install** the spacer **between** the two washers.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

# 不要使用多个名词术语表示同一事物

在编写技术文档时，术语的使用要始终保持统一。如果表示同一个事物时使用了多个名称，容易产生混淆和误解。

> 在原文中，三个名词术语（"servo control unit"、"actuator" 和 "control unit"）表示的是相同的事物。如果遇到这种情况，查看你所在组织的标准术语库或相关文档里使用的是哪个术语，然后在你的文档中始终使用这个术语。本例中，将这三个名词术语统一修改成了 "actuator"。

{%- capture original-{{ case-id }} -%}
1. Make sure that the **servo control unit** is in the open position.
2. Do the operational test of the **actuator**.
3. Disconnect the **control unit** from the test rig.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
1. Make sure that the **actuator** is in the open position.
2. Do the operational test of the **actuator**.
3. Disconnect the **actuator** from the test rig.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

# 尽可能避免使用动词术语

如果能在 [ASD-STE100][] 词汇表中找到合适的许可动词，优先使用许可动词。如果 ASD-STE100 词汇表中没有合适的许可动词，尽可能使用许可动词与名词术语的组合。

> "Find" 是 STE 词汇表中的许可动词，所以没必要使用动词术语 "detect"。

{%- capture original-{{ case-id }} -%}
If you **detect** broken wires, repair them.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
If you **find** broken wires, repair them.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

> 如果可以使用名词术语 "clamp"，就不要使用动词术语 "clamp"。换句话说，如果 "clamp" 能用作名词术语，将不要将它用作动词术语。

{%- capture original-{{ case-id }} -%}
**Clamp** the cable in position.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
Put **clamps** on the cable to hold it in position.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

# 使用含义明确的动词术语

如果必须使用动词术语，选择含义明确的词汇。

> "Ream" 比 "machine" 的含义更明确。

{%- capture original-{{ case-id }} -%}
**Machine** the hole until it has a diametr of 8.00 ± 0.003 mm.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
**Ream** the hole until it has a diametr of 8.00 ± 0.003 mm.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

# 不要将动词术语用作名词

动词术语只能作为动词使用，不能用作名词。不过，有些词汇可以有两种词性，即是名词术语，也是动词术语。

另外，动词术语的过去分词可以用作形容词，就像 ASD-STE100 词汇表中的许可动词一样。

> "Ream" 是一个动词术语，不能将其用作名词。使用不同的句型结构，使 "ream" 在句子中成为动词。

{%- capture original-{{ case-id }} -%}
Give the hole 0.20-inch **over-ream**.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
**Ream** the hole 0.20 inch **larger** than the standard.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

> "Reamed" 是动词术语 "ream" 的过去分词，可以用作形容词。

{%- capture example-{{ case-id }} -%}
Lubricate the **reamed** hole.
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

> "Plate" 既是名词术语，也是动词术语。

{%- capture example-{{ case-id }} -%}
Make sure that the **plate** is not damaged.

There are two methods to **plate** the ring nut (2).
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}



<!-- link definition -->
[ASD-STE100]: http://www.asd-ste100.org/request.html