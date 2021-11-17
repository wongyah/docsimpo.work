---
title: 控制系统
---

本页中的实例原文摘选自：  
[A1X_系列运动控制系统（A11、A12、A15、A18 通用）--中文使用手册](http://www.richnc.com.cn/?products/)

# 统一术语

{% capture case-id -%}{% increment counter %}{%- endcapture %}

{%- capture original-{{ case-id }} -%}
<h6>第 9 页:</h6>
<figure>
  <img src="/assets/images/manual-cases/01-term-display-a.jpg" />
</figure>
<h6>第 7 页:</h6>
<p>12. 独特的手持式外形结构单手可握。自带<strong class="term">液晶显示</strong>和16键操作键盘，操作直观灵活，不再依赖于计算机，完全实现全脱机操作。</p>
<h6>第 67 页:</h6>
<p>PS6.1 <strong class="term">手柄屏幕</strong>提示故障信息解决办法</p>
<h6>第 71 页:</h6>
<p>10. <strong class="term">手柄液晶</strong>上数字有变化，机器不动。</p>
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
<h6>第 9 页:</h6>
<figure>
  <img src="/assets/images/manual-cases/01-term-display-b.png" style="border: 1pt solid #454545; padding: 1em;" />
  <dl class="callout">
    <dt>A</dt>
    <dd>Logo</dd>
    <dt>B</dt>
    <dd><strong class="term">显示屏</strong></dd>
    <dt>C</dt>
    <dd>键盘</dd>
  </dl>
</figure>
<h6>第 7 页:</h6>
<p>12. 拥有独特的手持式外形结构，单手可握。自带<strong class="term">显示屏</strong>和键盘，使操作更灵活。支持脱机操作。</p>
<h6>第 67 页:</h6>
<p>PS6.1 故障排查（<strong class="term">显示屏</strong>上出现故障提示信息时）</p>
<h6>第 71 页:</h6>
<p>10. <strong class="term">显示屏</strong>上的数字发生变化时，机床的运动轴却处于静止状态。</p>
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

# 使用短句

{%- capture original-{{ case-id }} -%}
<p>RichAuto 控制系统手持运动控制器，根据系统功能需求定义了 16 个操作按键，每个按键在不同的工作状态下各提供了一项或多项功能。（56 个字）</p>
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
<p>手操盒的键盘上共有 16 个按键。（14 个字）</p>
<p>在不同的工作状态下，每个按键可提供一项或多项功能。（25 个字）</p>
{%- endcapture -%}

{% include templateComponents/manualCase.html %}


# 操作说明

{%- capture original-{{ case-id }} -%}
<p>设置方式：进入“脉冲当量”菜单，光标处于X轴脉冲当量选项，按下“X+”、“X-”键移动光标到待修改选项，按下“运行/暂停/删除”键，数值处于可修改状态，按数字键输入数值，按“归零/确定”键保存更改，然后移动光标至下一行，依次修改X、Y、Z三轴脉冲当量数值后，按下“归零/确定”键，保存所有修改，返回上层“脉冲当量”菜单。</p>
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
<h5>设置脉冲当量</h5>
<ol class="task">
  <li>
    <p>进入『脉冲当量』菜单。</p>
    <p>『X 轴脉冲当量』默认处于选中状态。</p>
  </li>
  <li>使用方向键将光标移动至需要修改的参数上，然后按【运行/暂停/删除】键使该参数进入编辑状态。</li>
  <li>使用数字键为需要修改的参数设置新值，然后按【归零/确定】键保存设置。</li>
  <li>如果还需要修改其他轴的脉冲当量，重复步骤 2-3。</li>
  <li>修改完成后，退出『脉冲当量』菜单。</li>
</ol>
{%- endcapture -%}

{% include templateComponents/manualCase.html %}



