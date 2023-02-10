---
title: 什么是结构化文档?
description: (宝马旗下) Mini 汽车的古董级车主手册全真诠释：这就是结构化文档！
tags: 文档技术
downloadkey: PDF指南
excerpt_separator: <!--more-->
---


技术写作，听起来似乎并不是一项高深的技能。

工作闲瑕时，我曾经和其他部门的同事聊起过技术写作。有的同事以为技术写作就是翻译，有的同事以为技术写作就是排排版、画画图，有的同事以为技术写作就像写专业作文一样……

<!--more-->

这些说法都没错，技术写作人员的确需要具备这些路人技能。但孰不知，以 DITA 为主的结构化文档已经在国内悄然兴起，将技术写作的领地从 MS Word 乔迁到了 XML（Web 开发中常用的标记语言之一）。**技术写作，也因此变得更加专业化、流程化和品质化。**

早在二十世纪六七十年代，Robert Horn 就已经提出了结构化文档的概念雏形。但由于当时的技术条件有限，真正实施结构化文档的难度非常大。所以，结构化文档也就只停留在了理论研究阶段，并未获得广泛应用。

直到二三十年后，随着 SGML (1986 年) 和 XML (1998 年) 的相继问世，结构化文档才能借助 Web 开发技术的迅猛发展而降本增效，驶入推广普及的快车道。

如今，DITA、S1000D、DocBook 等流行的文档架构标准早已在IT、航空航天、工业制造等多个领域里广泛应用，甚至成为了某些行业必须遵循的规范。

然而时至今日，结构化文档还没有获得一个被广泛认可的标准定义。这就意味着，尽管结构化文档千好万好，但想向别人安利它却常常让人“爱在心头口难开”。

本文以(现宝马旗下品牌) Mini 的古董级车主手册为例，全真诠释结构化文档的四大特征：

1. 信息类型标签化
2. 文档架构模块化
3. 内容写作结构化
4. 文档管理代码化

> Mini 汽车的车主手册来源于 Github 上的开源项目：[DITA-Mini-Manual]

# 信息类型标签化

你平常用 Word 软件写东西时，是不是一边输入内容，一边为内容设置格式?

其实不只是你，大家都这样。Word 软件的特点是所见即所得：我们在编辑文件的时候就能看到格式设置的效果。实际上，我们**设置格式的目的是**标识信息类型，表达各部分内容之间的逻辑关系。

从下面的 Word 文件里，你是不是一眼就能出哪里是标题，哪里是正文，以及文件的章节结构?

![Word文件截图][word-file]{: standalone style="max-width: 100%;"}

根据视知觉心理学的研究，我们的大脑不仅能通过感知器官采集外界事物的信息，还能在瞬间完成对信息的加工。所以，我们本能地从“格式”识别出“内容类型”，还进一步推断出了它们之间的逻辑关系（章节结构）。

尺有所短，寸有所长。虽然阿尔法围棋（AlphaGo）能完胜人类顶尖棋手，但对于人类来说再简单不过的事情，对于电脑而言却异常复杂。

电脑最不擅长处理非结构化数据，比如音视频、图像、 Word 文件。“看脸识人”、“听音识字”是我们每天的日常，但交给电脑处理就变成了高科技——人工智能技术。Word 文件至今仍然在批量处理、格式转换、内容利用率等方面存在很多局限性。

电脑最擅长处理的是结构化数据，比如数据库。文档内容复杂多样，虽不能像像数据库一样实现完全的结构化，但可以在保持内容灵活性的基础上实现部分结构化（半结构化数据），比如 XML 文件。

![XML文件截图][xml-file]{: standalone style="max-width: 100%;"}

XML 使用语义明确的标签定义信息类型，利用标签间的嵌套关系定义内容的层级结构。通过这种方法，XML 实现了对文档内容（信息）的结构化处理。

XML 文件是纯文本文件，既可以使用结构化文档软件编辑，也可以使用纯文本编辑器编辑（如 VS Code、记事本）。

目前，DITA、S1000D 和 DocBook 全部采用基于 XML 的文档架构。

> SGML 是 XML 的先驱。早期的 DocBook 和 S1000D 都支持 SGML。  
> S1000D Issue 4.0 及后续版本不再支持 SGML。  
> DocBook 5.0 及后续版本不再支持 SGML。

# 文档架构模块化

如果你需要为 Mini 汽车编写车主手册，你是不是会这样安排写作计划：首先草拟一个写作大纲（架构设计），然后按照大纲里的章节顺序依次编写序言、第一章、第二章……

其实不只是你，大家以往几乎都是这样写书、写文章、写手册的。借用软件开发流程中的概念，我们姑且将这种按照写作大纲从头至尾依次完成写作的方式叫做**瀑布式写作**。

![瀑布式写作流程图][waterfall-authoring]{: standalone style="max-width: 100%;"}

如此以来，你可能得 996 甚至 007 了。因为你只能等到 Mini 汽车的样车生产出来之后，才能开始编写手册。而且，瀑布式写作的完成周期也是出了名的长。新车还等着上市呢！

试想一下，如果你能在新车的研发阶段就可以开始同步编写车主手册，或者能多找两个同事和你一起完成这项工作，你（们）是不是就可以告别加班、朝九晚五了?

为了将愿望照进现实，我们不妨使用结构化文档试一试 ↓↓↓

1. 首先将车主手册化整为零 —— 将其分解为 N 个独立的内容模块。

    每个内容模块都是一个独立的 XML 文件，能且只能容纳一个中心思想。因为它小而独，你可以随着研发进度同步编写手册，而不必等到整个汽车（产品）全部完成才开工。因为它小而独，你还可以和同事分工合作，每个人负责一定数量的内容模块。

    ![创建内容模块][create-topics]{: standalone style="max-width: 100%;"}

2. 然后将这些内容模块按照一定的逻辑顺序组织起来（就像搭积木一样），形成完整的车主手册。

    积木可以拆掉重搭，内容模块也一样。因为重组的经济便利，你可以在项目的任何阶段进行车主手册的架构设计。
    
    ![组织内容模块][organize-topics]{: standalone}

60 多年前 Mini 汽车面市时推出了 Morris Mini 和 Austin Mini 两种车型，之后不断升级改版终为一代经典。

兄弟车型之间“大同小异”，新款和老款车型之间“一脉相承”。这就注定了，他们的车主手册也会“大同小异”、“一脉相承”。

因此，很多 Morris Mini 的内容模块可以无缝组装到 Austin Mini 的车主手册里，一些老款车型的内容模块可以直接平移到新款车型的车主手册里，省去了创建文档时到处复制-粘贴、后续更新时到处修改的大麻烦。

这就是内容模块的另一大特点 —— 可（重）复（使）用，也叫做**内容复用**。

小而独、易重组、可复用的内容模块有一个术语名称，叫做**主题**（Topic）。基于主题的写作方式，通常被称为**主题化写作**（Topic-based Authoring）。

![主题化写作流程图][topic-based-authoring]{: standalone style="max-width: 100%;"}

> S1000D 中的内容模块叫做数据模块（data module）。  
> 自 DocBook 5.1 起，DocBook 开始支持主题化写作。

# 内容写作结构化

万语千言在心头，怎奈下笔难成文! 每次动笔写作时，你是不是也会这样犯难：写什么，怎么写? 然后，马上去百度一下“##模板”，然后按照挑选好的模板做填空，就像填写考勤表一样?

![Word 模板][word-template]{: standalone style="max-width: 100%;"}

现在，Mini 汽车的车主手册得动笔写起来了。还记得吗? 我们使用的是主题化写作。每个主题的篇幅不大，貌似不难写。但我们有 70 多个主题呢！

假如你真找来了两个同事一起写，每个人负责 20 多个主题。如果车主一翻手册就说，这段是你写的，那段是 Ta 写的，岂不是糗大了！

我们为什么不给主题们也挑选几个模板呢? 有了模板，每次开始编写新主题时就不需要为起承转合而冥思苦想了，岂不是下笔如有神?

只是与 Word 模板不同，结构化文档的模板不是预设格式和说明文字，而是使用编程语言（DTD 或 Schema）来精确地定义文档结构。

这种精确定义的文档结构，还可以被用来与你编写的主题进行实时比对，并及时反馈比对结果。这个过程，叫做**自动校验**。

为了将愿望照进现实，我们不妨选出一个主题试一试 ↓↓↓

![这里，写错了！][dita-structure-invalid]{: standalone}

![解决了，耶！][dita-structure-valid]{: standalone}

这是 DITA 中的任务型主题（task）。任务型主题（的模板）定义了很多严格的规则，比如每个操作步骤（`<step>`）中有且只能有一条操作指令（`<cmd>`）。编写任务型主题时，你必须严格遵守这些规则。否则，你的主题就不能通过校验（Validation），从而被判定为不合格。

支持文档结构定义并提供相应编辑环境的软件，叫做结构化文档软件。使用结构化文档软件创建、编辑文档的方式，叫做**结构化写作**。

当然，要做到“千人一面”、“异口同声”，单靠结构化写作是不行的，你还要结合[技术写作指南]一起使用。

# 文档管理代码化

如上文所述，所有的结构化文档都是 XML 文件 —— 一种纯文本文件。想象一下，如果你是 Mini 汽车的车主，收到的车主手册是一堆文本文件，你的心里该有多么崩溃?！

其实，XML 文件就像软件的源代码一样，需要经过“编译”之后才能变成适合我们人类阅读的形式（比如 PDF、网页或电子书）。在“编译”过程中，只要应用不同的程序（样式表），就可以从同一份 XML 文件同时生成多种不同格式的文件。

这就意味着，XML 文件里只存储着车主手册的内容，而车主手册的格式只有在“编译” XML 文件时才会被加载。这叫做**内容和格式分离**。

![同源发布：内容和格式分离][seperation-of-content-and-form]{: standalone style="max-width: 100%;"}

如同软件源代码一样，你可以将结构化文档项目分享到代码托管平台（如 Github）上，与他人自由协作。你还可以使用 Git 对结构化文档进行版本管理，就像管理软件版本一样。

![Github 项目：Mini 汽车车主手册][github-project-manual]{: standalone style="max-width: 100%;"}

> Github 是全球最大的代码托管平台。  
> Git 是目前最流行的版本管理工具。几乎所有的代码托管平台都支持它，包括 Github。

XML 文件将信息（内容）存储为半结构化数据，而处理（半）结构化数据是电脑程序的看家本领。当遇到写作规则变更、升级文档架构标准（比如从 DITA 1.2 升级 到 DITA 1.3）等情况时，你可以使用XSLT、BAT、PowerShell 以及 Python 等编程语言对结构化文档进行批量处理。



###### 参考资料
{: .ref-caption}

1. [Structured authoring](https://www.oxygenxml.com/dita/styleguide/webhelp-feedback/Artefact/Authoring_Concepts/c_What_is_Structured_Authoring.html)
2. Robert E. Horn. Mapping Hypertext: Analysis, Linkage, and Display of Knowledge for the next Generation of On-Line Text and Graphics. 1989.
3. [Getting Started with DocBook](https://tdg.docbook.org/tdg/5.0/ch01.html#introduction-whats-new)
4. [S1000D SGML Authoring](https://www.docuneering.com/s1000d/authoring/sgml-author/)
5. [The Differences in the Morris & Austin Mini Coopers](https://itstillruns.com/differences-morris-austin-mini-coopers-7441817.html)
{: .ref-text}






<!-- 文内链接 -->
[DITA-Mini-Manual]: https://github.com/flicstar/DITA-Mini-Manual
[技术写作指南]: https://mp.weixin.qq.com/s/lgO19KgH0bu54DqvZbwzew

<!-- 文内插图 -->
[word-file]: /assets/images/post/thisIsStructuredAuthoring/word-file.jpg
[xml-file]: /assets/images/post/thisIsStructuredAuthoring/xml-file.png
[waterfall-authoring]: /assets/images/post/thisIsStructuredAuthoring/waterfall-authoring.png
[topic-based-authoring]: /assets/images/post/thisIsStructuredAuthoring/topic-based-authoring.png
[create-topics]: /assets/images/post/thisIsStructuredAuthoring/create-topics.png
[organize-topics]: /assets/images/post/thisIsStructuredAuthoring/organize-topics.gif
[word-template]: /assets/images/post/thisIsStructuredAuthoring/word-template.jpg
[dita-structure-invalid]: /assets/images/post/thisIsStructuredAuthoring/dita-structure-invalid.gif
[dita-structure-valid]: /assets/images/post/thisIsStructuredAuthoring/dita-structure-valid.gif
[seperation-of-content-and-form]: /assets/images/post/thisIsStructuredAuthoring/seperation-of-content-and-form.png
[github-project-manual]: /assets/images/post/thisIsStructuredAuthoring/github-project-manual.jpg


