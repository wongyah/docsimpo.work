---
title: 复合名词
---

复合名词是指两个或两个以上的单词组成的名词，比如 "railway station"。

在技术写作中，经常会出现非常长的复合名词。比如：

- Horizontal cylinder pivot bearing
- Stainless steel corrosion protection strips
- Runway light connection resistance calibration

要理解这些超长的复合名词，就必须先搞清楚其中各个单词之间的逻辑关系。因为这些逻辑关系往往复杂多样，甚至有多种理解方法（歧义），所以复合名词越长就越难理解、越让人头疼。

如果遇到超长的复合名词，你可以使用以下方法进行处理：

1. [分解成短小的复合名词](#分解成短小的复合名词)
2. [保留超长的复合名词](#保留超长的复合名词)

# 分解成短小的复合名词

要想让复合名词容易理解、不产生歧义，复合名词的长度不应超过 3 个单词。

对于超长的复合名词，可以使用介词（"of"、"on"、"in" 或 "for" 等）将其分解为长度在 3 个单词以内的复合名词。这些介词还能说明分解后的复合单词们之间的逻辑关系。

在 STE 中，冠词和介词不属于复合单词的组成部分（不计入复合单词的单词数）。

{% capture case-id -%}{% increment counter %}{%- endcapture %}

{%- capture original-{{ case-id }} -%}
**Runway light connection resistance calibration**.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
**Calibration** of the **resistance** of the **runway light connection**.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

{%- capture original-{{ case-id }} -%}
Install the **forward turbine overheat thermocouple terminal tags**.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
Install the **terminal tags** on the **forward overheat thermocouple** of the **turbine**.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

# 保留超长的复合名词

在很多情况下，我们不得不使用长度在 3 个单词以上的复合名词，不能将它们分解成短小的复合名词。比如，一个复合名词虽然长度在 3 个单词以上，但它在组织内部是通用的或大家所熟知的。

这时，有两种处理方法：

- 组合使用全称和简称
- 使用连字符对复合名词中的单词进行组合

## 组合使用全称和简称

在技术图纸、零备件手册等产品文档中，经常出现超长的复合名词。使用这些复合名词时，首先在它第一次出现的位置写出全称，然后在下文中使用这个复合名词的简称。

> 本例中，"ramp service door safety connector pin" 是复合名词的全称。然后，在圆括号中对复合名词进行了解释，并为复合名词提供了一个简称（"safety connector pin"）。这个简称也是复合名词，包含 3 个单词，属于短小的复合名词。

{%- capture example-{{ case-id }} -%}
Before you do this procedure, engage the **ramp service door safety connector pin** (the pin that holds the ramp service door, referred to in this procedure as the "**safety connector pin**").
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

> 本例中，"Main Fuel Metering Unit" 是复合名词的全称，后面的圆括号中提供了复合名词的简称（首字母缩写 "MFMU"）。然后，在下文中一直使用该复合名词简称。

{%- capture example-{{ case-id }} -%}
The **Main Fuel Metering Unit (MFMU)** is an aluminum alloy unit that includes a Main Engine Control Unit (MECU) and a Distribution Block. The **MFMU** is installed in the engine bypass duct and operates in the engine fuel system. The function of the **MFMU** is to meter and distribute the fuel from the Main Engine Fuel Pump (MEFP) to the fuel manifolds and the starter jets. the Digital Engine Control Unit (DECU) sends electrical  signals to operate the **MFMU**.
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

## 使用连字符对单词进行组合

连字符可以用来将有联系的或有逻辑关系的单词连接在一起，使它们形成一个整体。在超长的复合名词中，使用连字符对其中的单词进行组合之后，复合名词会变得更易于理解。

使用连字符时，应注意以下几点：

- 不要使用连字符将不相关的单词连接在一起。将不相关的单词连接在一起，会改变复合名词的含义。如果不能够确定单词之间相关与否，组合使用全称和简称来处理复合名词，不要使用连字符。
- 如果标准术语库中的术语中含有连字符，不要对它做任何更改。如果术语中包含 3 个以上的单词，组合使用全称和简称来处理术语（复合名词）。
- 不要使用连字符将 3 个以上的单词连接在一起。

{%- capture example-{{ case-id }} -%}
Make sure that the **cutoff-switch power connection** is safe.
{%- endcapture %}

{% include templateComponents/manualCase-single.html %}

{%- capture original-{{ case-id }} -%}
**Main-gear-door-retraction-winch** handle.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
**Main-gear-door** **retraction-winch** handle.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

