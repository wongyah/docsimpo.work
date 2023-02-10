---
title: "一个 DITA 主题，到底该写多长?"
description: 归纳总结技术写作经典文献和专业博客中有关 DITA 主题长度的理论、论述和观点。
tags: DITA
---

一说到 DITA 主题，几乎每个 DITA 用户的脑海里都会闪现出这样一段定义：

> *... be short enough to address a single subject or answer a single question, but long enough to make sense on its own and be authored as a self-contained unit.*
>
> *… 要不长不短刚刚好：不能太长，只容纳一个中心思想或回答一个问题就够了；不能太短，至少得自成一体、独立成篇。*

如果有人追问：“不长不短”到底是多长，1 页、5 页、还是 10 页，100 字、200字、还是 1000 字? 他多半会收到一个标准答案：看情况。

对于 DITA 资深用户而言，这无疑是再正确不过的答案了。但对于 DITA 萌新们来说，这个回答实在太不好操作了。因此，在各种各样的 DITA 研讨会或直播分享中，“DITA 主题该写多长” 几乎是问答环节的必答题。

每个 DITA 主题在长度上确实存在很大的差异，但也并非完全无章可循。本文将归纳总结那些经典文献和专业博客中有关 DITA 主题长度的理论、论述和观点，希望下次再划分主题时能让你心明眼亮、困惑全消。

# 理论基础

DITA 与技术写作领域中的两大经典理论有很深的渊源：结构化写作（structured writing）和精益写作（minimalism）。

**结构化写作**是 Robert Horn 于 1960 年代提出的概念，后来发展为信息图谱理论（information mapping）。该理论基于认知心理学的研究成果，将信息块和信息图谱作为组织信息的基本单位。其中，信息块的作用与段落相似，信息图谱相当于主题。信息图谱由若干个信息块组成。

根据认知心理学的研究，人的短时记忆（15秒以下）最多只能容纳 7±2 组信息。因此在结构化写作中，每个信息图谱的长度不应超过 7±2 个信息块（约 1~2 页），每个信息块的长度不应超过 7±2 个句子。说得通俗一点就是，每个主题最多可包含 7±2 个段落（或块元素），每个段落最多可包含 7±2 个句子。

**精益写作**是 John Carroll 于 1990 年代提出的技术写作理论，主张在手册设计过程中要坚持以用户为中心、以任务为导向，让用户可以花最少的时间（阅读手册中的内容）办最多的事情（完成学习目标）。

John Carroll 及其团队通过长期观察用户在使用手册过程中的各种行为，定期询问他们的想法及其行为背后的原因，总结出了很多极具启发意义的结论。其中一条结论是，没有用户想在手册中阅读过多的说明性内容，他们希望能尽快动手开始做事。

如果确实有必要为用户提供说明性内容，这些章节的长度最好在 2~4 页之间。他们还发现，章节的平均阅读用时为 20 分钟左右时效果最好。因为这样的话，95% 的用户可以在 30 分钟内完成阅读，这正好是大部分人能够保持专注力的时长。

# 最佳实践

作为 DITA 的开创者，IBM 在应用 DITA 的过程中积累了丰富的实践经验。这些宝贵的实践经验被 IBM 的专家们编写成册、出版成书，多年来一直被众多技术写作从业者奉为业内经典。

其中，有两本经典专著流传甚广：DITA Best Practices 和 The IBM Style Guide。众所周知，DITA 主题有三大类型：任务型（task）、概念型（concept）和参考型（reference）。这两本专著为每一种主题类型的长度都提供了具体的指导性建议，如下表所示。

###### 关于主题长度的指导性建议
{: .table-caption}

|  主题类型  |  最佳实践  |  写作指南  |
|:--:|:--:|:--:|
|  任务型  |  ≤10 步  |  ≤9 步  |
|  概念型  |  ≤5 页  |  ≤7 页  |
|  参考型  |  1~2 页  |  —  |

**任务型主题不宜过长**。如果实在没办法精减操作步骤，可以尝试使用子步骤对一些紧密相关的操作步骤进行整合。

**不要轻易创建概念型主题**。尽可能将说明性内容放在任务型主题的合适位置，或者使用术语表（glossary）对术语进行说明。只有在需要说明的内容太多、不适合放在其他主题中时，才创建概念型主题。

**参考型主题通常被用户用来快速查阅所需内容**。参考型主题的目标用户已经掌握了相关的基础知识和基本技能。因此，不要在参考型主题中进行冗长的说明，只为用户提供必要的信息。

# 统计数据

由于经常被问到关于 DITA 主题长度的问题，DITAWriter 的博主 Keith Schengili-Roberts 对公司内容管理系统（CMS）中的 5816 个主题进行了统计。其中，任务型主题有 1462 个，概念型主题有 444 个，参考型主题有 3910 个。

![DITA 主题的平均文件大小](/assets/images/post/dita/dita-topic-sizes.jpg "DITA 主题的平均文件大小")

图表中文件大小的单位是 KB（千字节），不能直观地反应主题的长度。因此，博主也粗略地估计了一下 KB 与 页数之间的换算关系，并按主题类型分别计算了平均长度，如下表所示。

###### 关于主题长度的统计数据
{: .table-caption}

|  主题类型  |  平均长度  |
|:--:|:--:|
|  任务型  |  1 页  |
|  概念型  |  3/4 页  |
|  参考型  |  2 页  |

**最后需要注意的是**，主题文件的大小存在很大的个体差异，即使相同类型的主题也是如此。比如，最小的任务型主题文件只有 0.59 KB（约 1/5 页），而最大的任务型主题文件却达到 41.89 KB（约 14 页）。

因此，每个主题到底该写多长最终还要取决于具体内容、复用性以及目标用户的阅读习惯等多种因素的综合考量。


###### 参考资料
{: .ref-caption}

1. [The DITA style guide: best practices for authors](https://www.oxygenxml.com/dita/styleguide/Authoring_Concepts/c_Introduction_to_DITA.html)
2. Robert E. Horn. Structured Writing as a Paradigm. Educational Technology Publication, 1998.
3. John M. Carroll. Minimalism Beyond the Nurnberg Funnel. 1998: 51-52.
4. Laura Bellamy, Michelle Carey, etc. DITA Best Practices. IBM Press, 2012: 15-44.
5. Francis DeRespinls, Peter Hayward, etc. The IBM Style Guide. IBM Press, 2012: 119, 122, 126.
6. Keith Schengili-Roberts. [What size should a DITA tipic be?](https://www.ditawriter.com/what-size-should-a-dita-topic-be/)

