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
  <div class="row justify-content-center mt-3">
    <div class="col-auto">
      <span class="callout">A.</span>
      <span class="def">Logo</span>
    </div>
    <div class="col-auto">
      <span class="callout">B.</span>
      <span class="def"><strong class="term">显示屏</strong></span>
    </div>
    <div class="col-auto">
      <span class="callout">C.</span>
      <span class="def">键盘</span>
    </div>
  </div>
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
RichAuto 控制系统手持运动控制器，根据系统功能需求定义了 16 个操作按键，每个按键在不同的工作状态下各提供了一项或多项功能。（56 个字）
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
手操盒的键盘上共有 16 个按键。（14 个字）  
在不同的工作状态下，每个按键可提供一项或多项功能。（25 个字）
{%- endcapture -%}

{% include templateComponents/manualCase.html %}


# 操作说明

{%- capture original-{{ case-id }} -%}
设置方式：进入“脉冲当量”菜单，光标处于X轴脉冲当量选项，按下“X+”、“X-”键移动光标到待修改选项，按下“运行/暂停/删除”键，数值处于可修改状态，按数字键输入数值，按“归零/确定”键保存更改，然后移动光标至下一行，依次修改X、Y、Z三轴脉冲当量数值后，按下“归零/确定”键，保存所有修改，返回上层“脉冲当量”菜单。
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
##### 设置脉冲当量

1. 进入『脉冲当量』菜单。
   
    『X 轴脉冲当量』默认处于选中状态。

2. 使用方向键将光标移动至需要修改的参数上，然后按【运行/暂停/删除】键使该参数进入编辑状态。
3. 使用数字键为需要修改的参数设置新值，然后按【归零/确定】键保存设置。
4. 如果还需要修改其他轴的脉冲当量，重复步骤 2-3。
5. 修改完成后，退出『脉冲当量』菜单。
{: .task}
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

# 安全说明

{%- capture original-{{ case-id }} -%}
机床参数配置菜单用来设置机床硬件相关参数。由机床设备制造商根据设备型号来设置，设置完成后如机床硬件、电器参数无变化不需修改；机床使用用户如需修改该参数，请咨询设备制造商，在厂商技术工程师的指导下进行修改。
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
机床参数配置菜单里包含与机床硬件相关的参数。

机床参数配置菜单里的参数由机床设备制造商在出厂前完成预设，不需要频繁修改。只有机床硬件或电气参数发生变化时，才有可能需要重新设置这些参数。

> 如果您是机床设备的用户，切勿擅自修改机床参数配置菜单里的参数。参数配置错误可能导致机床不能正常工作！
> 
> 如果确需修改，请联系您的机床设备制造商。机床参数配置菜单里的参数只能在机床设备制造商指定的专业技术人员的指导下进行修改。
{: .safety-notice}
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

# 使用表格

{%- capture original-{{ case-id }} -%}
RichAuto 控制系统包含以下配件：手持运动控制器一个、线路转接板一个、两头榫式 50 针数据传输电缆一根、USB 通讯电缆一根。
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
收到产品后，请按照装箱单检查包装内的物品是否齐全、完好。如果发现遗失或破损，请马上联系我们。

###### 表 1：装箱单
{: .table-caption}

|  名称  |  数量  |  备注  |
|:---|:--:|:---|
|  手操盒  |  1  |  —  |
|  线路转接板  |  1  |  —  |
|  数据传输电缆  |  1  |  50 针，两头榫式电缆  |
|  通讯电缆  |  1  |  USB 接口  |
{: #packing-list}
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

# 使用列表

{%- capture original-{{ case-id }} -%}
系统提供了三种手动运动模式：连续、步进和距离。
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
在手动模式下，机床的运动轴有三种运动模式：

1. 连续运动模式
2. 步进运动模式
3. 距离运动模式
{%- endcapture -%}

{% include templateComponents/manualCase.html %}



