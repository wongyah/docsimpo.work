---
title: 都说 Markdown 很香，为什么我用它导出的 PDF 却是“鬼见愁”?
description: 总结 Markdown 转换为 PDF 时自定义输出样式的三种方法、学习资源、实现路径以及相关的插件或软件。
tags: Markdown
mermaid: true
---

自从习惯了 Markdown 的便利，我便很少打开 Word 了。

但 Markdown 的群众基础毕竟有限，很多时候必须提供 PDF 文件才行。比如，当文件需要发送或分享给其他人时，当用 Markdown 编写的产品文档（尤其是工业领域的产品手册）要发布时 ……

刚接触 Markdown 时，很多文章安利从 Markdown 输出 PDF 文件有多方便。但现实往往很很很骨感，提供这项功能的网站要么收费，要么输出的 PDF 难看到“鬼见愁”。

![升级会员才能使用的功能](/assets/images/post/markdown/youdao-buying-VIP-to-export-PDF-from-md.jpg "升级会员才能使用Markdown转换PDF功能"){: standalone}

泡在 Markdown 里的时间久了之后，我才发现借助一些开源的插件或软件，不仅能实现 Markdown 到 PDF 的 DIY，而且还能根据自己的喜好自由设置 PDF 的输出样式。不过，要完成这些成就感满满的任务需要掌握一些额外的技能……

本文将总结 Markdown 转换为 PDF 时设置输出样式的三种方法（技能）、相关的学习资源、每种方法的实现路径以及应用最广泛或当下最流行的插件或软件：

# CSS

CSS 是专门为 HTML 文件（网页）设置样式的语言。你平时浏览的网页，无论是在电脑端还是手机端上，都是依靠 CSS 来控制页面上的标题、段落、表格、图片等元素以什么样的格式显示在屏幕上。

除了用于屏幕显示的样式表，CSS 还可以使用分页媒体属性（paged media）设置专门用来打印或生成 PDF 文件的样式表。在 CSS3（CSS 的最新版本）中，不仅可以设置页面大小、页边距、纸张方向、页眉页脚等，还可以为首页和奇偶页分别设置不同的样式。

在[本文的姊妹篇][]里提到过，Markdown 的核心优势之一是“将它转换成 HTML 文件实在太方便了”。有了 HTML，再搭配 CSS 来设置样式，从 Markdown 生成漂亮的 PDF 文件便有了理论基础。

<pre class="mermaid">
flowchart TD
  subgraph id1[中间格式]
    direction TB
    C(HTML)
  end
  A(Markdown) & B(CSS) --> C
  C --> D(PDF)
</pre>
 
使用 CSS 设置 PDF 样式有很多好处：CSS 的使用人群广泛，学习资源很多；CSS 可以为多种格式设置样式，不需要单独为打印版文件设置发布流程……

但目前的浏览器并不支持 CSS 的分页媒体属性，相关的开源软件也不太成熟。有些商用软件虽然在 CSS 分页媒体属性的基础上开发了很多高级功能，但价格不菲。即便如此，CSS 仍被公认为是可打印文档格式样式语言的未来。

###### 使用 CSS 设置 PDF 样式的插件或软件
{: .table-caption}

|  名称  |  类型  |
|:---|:---|
|  [Markdown PDF][]  |  VS Code 扩展（插件）  |
|  [xhtml2pdf][]  |  开源软件  |
|  [Pandoc][]  |  开源软件  |

**相关教程：** [CSS 教程](https://www.w3school.com.cn/css/index.asp)

# LaTeX

LaTeX 是一种在科技领域广泛应用的专业排版系统，可以直接生成 PDF 文件。很多数学类、物理类或计算机科学类的期刊只接收 LaTex 排版的论文。

使用 LaTex，可以非常高效地输入复杂的公式、表格或图表，深受科技论文写作者的喜爱。在 Markdown 中输入公式时，使用的就是 LaTeX 语法。

一些 Markdown 编译器可以将 Markdown 文件转换为 LaTeX 文件，比如 Pandoc 和 kramdown。然后，再使用 LaTeX 编辑管理软件（如 MiKTeX）生成 PDF 文件。

<pre class="mermaid">
flowchart TD
  A(Markdown) --> M{Markdown<br>编译器} --> B(LaTeX) --> L{LaTeX<br>编辑器} --> C(PDF)
</pre>

> Pandoc 可以将 Markdown 文件直接转换为 PDF 文件。但转换过程中仍然会使用中间格式。中间格式可以是 LaTeX（默认）、ConTeXt、roff ms 或 HTML，使用选项 `--pdf-engine` 进行设置。

使用 LaTeX 生成 PDF 文件的技术虽然很成熟，但 Markdown 转换为 LaTeX 时需要调用转换模板（templates）。转换模板是使用模板语言编写的文件。比如，kramdown 使用 [Embedded Ruby (ERB)][ERB] ，Pandoc 使用[自定义的语法][Pandoc模板语法]编写模板。

相比于 CSS，LaTeX 的学习难度较大。编写转换模板，无疑又进一步提高了初学者的入门门槛。

###### 使用 LaTeX 生成 PDF 的相关软件
{: .table-caption}

|  名称  |  类型  |
|:---|:---|
|  [Pandoc][]  |  Markdown 编译器  |
|  [kramdown][]  |  Markdown 编译器  |
|  [MiKTeX][]  |  LaTeX 编辑管理软件  |
|  [TeX Live][]  |  LaTeX 编辑管理软件  |

> 上表中的软件均为开源软件。

**相关教程：**[Learn LaTeX](https://www.learnlatex.org/en/)

# XSL-FO

XSL-FO 是专门为 XML 文件设置样式的语言，主要用于输出可打印的文档格式（如 PDF）。

绝大多数 Markdown 编译器都可以将 Markdown 文件转换为 XHTML 文件。XHTML 是符合 XML 语法规范的 HTML 文件。任何可以处理 XML 的软件或工具都可以处理 XHTML 文件。也就是说，XSL-FO 完全可以为 XHTML 文件设置样式。

<pre class="mermaid">
flowchart TD
  A(Markdown) --> M{Markdown<br>编译器} --> B(XHTML) --> XSLT{XSLT变换} --> C(XSL-FO) --> FO{XSL-FO<br>处理器} --> D(PDF)
</pre>

与 CSS 相比，XSL-FO 在输出 PDF 文件上的功能更强大、技术更成熟。这也意味着，支持 XSL-FO 的软件或工具比较多，价格也更实惠。

与 LaTeX 相比， XSL-FO 的语法要简单得多，入门门槛比较低。如果有 CSS 基础，则更容易上手。

但 XSL-FO 是包含内容和样式的完成文件，不能像 CSS 一样作为外部样式表链接到 XHTML 中。通常，将 XHTML 转换为带样式的 XSL-FO 文件需要使用 XSLT 变换。否则，手动编写 XSL-FO 将是一项耗时耗力的艰巨任务。

此外，XSL-FO 比较小众（应用领域窄），熟练使用的人并不多，不容易找到合适的学习资源。

###### 使用 XSL-FO 生成 PDF 的相关软件
{: .table-caption}

|  名称  |  类型  |
|:---|:---|
|  [Pandoc][]  |  Markdown 编译器  |
|  [kramdown][]  |  Markdown 编译器  |
|  [Apache Xalan][Xalan]  |  XSLT 处理器   |
|  [Saxon][]  |  XSLT 处理器  |
|  [Apache FOP][FOP]  |  XSL-FO 处理器  |

> 上表中的软件均为开源软件。

**相关教程：**[XSLT 教程][XSLT]、[XSL-FO 教程][XSL-FO] 和 [XPath 教程][XPath]

###### 参考资料
{: .ref-caption}

1. [Paged Media Properties for CSS3 - W3](https://www.w3.org/1999/06/WD-css3-page-19990623#:~:text=Paged%20Media%20Properties%20for%20CSS3%201%201.%20Requirements,only%20to%20the%20%27before%3A%27%20and%20%27after%3A%27%20pseudo-elements.%20)
2. [XSL-FO Is Dead, CSS Paged Media Is Prime Suspect](https://readwritecode.net/ebooks/2019/04/27/xsl-fo-is-dead-css-paged-media-is-prime-suspect.html)
3. [XSL-FO is alive and kicking](https://readwritecode.net/ebooks/2019/04/28/xsl-fo-is-alive-and-kicking.html)
{: .small}

<!-- link definition -->
[本文的姊妹篇]: {% link blog/_posts/2022-08-29-how-I-become-a-markdown-super-user.md %} "不知不觉，我竟炼成了一枚 Markdown 深度用户"

[Markdown PDF]: https://marketplace.visualstudio.com/items?itemName=yzane.markdown-pdf "Markdown PDF 扩展"
[xhtml2pdf]: https://xhtml2pdf.readthedocs.io/en/stable/# "xhtml2pdf 官方文档"
[Pandoc]: https://pandoc.org/MANUAL.html "Pandoc 官方文档"
[kramdown]: https://kramdown.gettalong.org/index.html "kramdown 官网"
[MiKTeX]: https://miktex.org/ "MikTex 官网"
[TeX Live]: https://tug.org/texlive/ "Tex Live 官网"
[Xalan]: https://xalan.apache.org/ "Apache Xalan 官网"
[Saxon]: https://www.saxonica.com/welcome/welcome.xml "Saxon 官网"
[FOP]: https://xmlgraphics.apache.org/fop/ "Apache FOP 官网"

[ERB]: https://github.com/ruby/erb "ERB 的 Github 存储库"
[Pandoc模板语法]: https://pandoc.org/MANUAL.html#templates

[XSLT]: https://www.w3school.com.cn/xsl/index.asp
[XSL-FO]: https://www.w3school.com.cn/xslfo/index.asp
[XPath]: https://www.w3school.com.cn/xpath/index.asp