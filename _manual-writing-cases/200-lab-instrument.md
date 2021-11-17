---
title: 分析仪
math: true
---

本页中的实例原文摘选自：  
[HK-228 联氨分析仪使用说明书（V3.0）](https://www.huakeyi.com/cn/product/show.aspx?id=318)  

# 使用短句

{% capture case-id -%}{% increment counter %}{%- endcapture %}

{%- capture original-{{ case-id }} -%}
<p>仪表根据“曲线校准”时所测量的除盐水的吸光度与本次基线校准测量的除盐水的吸光度的差值来平移坐标系。（49 个字）</p>
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
<p>曲线校准时，分析仪会测量除盐水的吸光度（$A_1$）。（23 个字）</p>
<p>基线校准时，分析仪会再次测量除盐水的吸光度（$A_2$）。（25 个字）</p>
<p>最后，分析仪根据两次测得的吸光度的差值（$A_1-A_2$）对坐标系进行平移。（31 个字）</p>
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

# 操作说明

{%- capture original-{{ case-id }} -%}
<p>称取 0.410g 硫酸联氨（$N_2H_4·H_2SO_4$），<strong class="ambiguity">溶于已加有 74mL 浓盐酸的 500mL 试剂水中</strong>，转入 1L 容量瓶中，用高纯水稀释到刻度。</p>
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
<ol>
  <li>量取 500 毫升试剂水。</li>
  <li>向试剂水中加入 74 毫升浓盐酸，制成盐酸溶液。</li>
  <li>称取 0.410 克硫酸联氨（$N_2H_4·H_2SO_4$）。</li>
  <li>将硫酸联氨加入盐酸溶液中，并使其充分溶解。</li>
  <li>
    <p>使用高纯水将溶液稀释至 1 升。</p>
    <ol>
      <li>将溶液倒入容量为 1 升的容量瓶中。</li>
      <li>向溶液中加入高纯水，直至液面与容量瓶的刻度齐平。</li>
    </ol>
  </li>
</ol>
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

# 段落描述

{%- capture original-{{ case-id }} -%}
<p>基线校准的主要作用是校正仪器的电气漂移、光学漂移和温度漂移，以保证测量数据的准确性。仪表根据‘曲线校准’时所测量的除盐水的吸光度与本次基线校准测量的除盐水的吸光度的差值来平移坐标系，保证测量的有效性和准确度。</p>
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
<p>基线校准是指校正分析仪的电气漂移、光学漂移和温度漂移。</p>
<p>分析仪在日常使用过程中，有可能会产生电气漂移、光学漂移或温度漂移。这些漂移会对测量结果的准确性产生微小的影响。基线校准通过校正这些漂移来提高测量结果的精度。</p>
<p>曲线校准时，分析仪会测量除盐水的吸光度（$A_1$）。基线校准时，分析仪会再次测量除盐水的吸光度（$A_2$）。最后，分析仪根据两次测得的吸光度的差值（$A_1-A_2$）对坐标系进行平移。</p>
{%- endcapture -%}

{% include templateComponents/manualCase.html %}





