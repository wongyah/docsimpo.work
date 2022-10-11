---
title: 介词
---

合理地使用介词表达句子中各部分之间的关系。

省略多余的介词。比如，如果一个动词和一个动词短语表达的意思相同，使用动词即可。

不要在一个句子中使用过多的介词。介词过多，会让句子看上去很杂乱。

> 本例中，添加介词 "by" 可以使句子结构更清晰。

{%- capture original-{{ case-id }} -%}
Unload the file using the ULOAD utility.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
Unload the file **by** using the ULOAD utility.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

> 本例中，动词和动词短语表达的意思相同，使用动词即可。

{%- capture original-{{ case-id }} -%}
click on  
print out  
start up
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
click  
print  
start
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

> 本例中的句子使用了太多介词。重新组织句子，减少介词的使用，可以让句子更清晰、简洁。

{%- capture original-{{ case-id }} -%}
The report is **a list of** the status of **all of the event monitors** for this process.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
The report **lists** the status of **all event monitors** for this process.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

> 有时候，将介词放在句尾可以让句子更通顺。

{%- capture original-{{ case-id }} -%}
Click the item **for** which you want to search.
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
Click the item that you want to search **for**.
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

