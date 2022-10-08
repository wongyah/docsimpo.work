---
title: 缩略语
---

缩略语是指通过省略短语中的某些音素而形成的单词，比如 "don't"、"can't"。

在技术写作中，不要使用缩略语。缩略语容易产生歧义，翻译起来也很困难。对于英语不是母语的用户来说，缩略语会增加他们的阅读难度。比如，"it's" 即可以理解为 "it is"，也可以理解为 "it has"。

{%- capture original-{{ case-id }} -%}
If your hands are wet, **don't** touch the USB power adapter.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
If your hands are wet, **do not** touch the USB power adapter.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}
