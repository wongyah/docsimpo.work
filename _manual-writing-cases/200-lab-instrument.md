---
title: 分析仪
math: true
---

本页中的实例原文摘选自：  
[HK-228 联氨分析仪使用说明书（V3.0）](https://www.huakeyi.com/cn/product/show.aspx?id=318)  

# 使用短句

{% capture case-id -%}{% increment counter %}{%- endcapture %}

{%- capture original-{{ case-id }} -%}
仪表根据“曲线校准”时所测量的除盐水的吸光度与本次基线校准测量的除盐水的吸光度的差值来平移坐标系。（49 个字）
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
曲线校准时，分析仪会测量除盐水的吸光度（\\(A_1\\)）。（23 个字）  
基线校准时，分析仪会再次测量除盐水的吸光度（\\(A_2\\)）。（25 个字）  
最后，分析仪根据两次测得的吸光度的差值（\\(A_1-A_2\\)）对坐标系进行平移。（31 个字）
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

# 操作说明

{%- capture original-{{ case-id }} -%}
称取 0.410g 硫酸联氨（\\(N_2H_4·H_2SO_4\\)），**溶于已加有 74mL 浓盐酸的 500mL 试剂水中**，转入 1L 容量瓶中，用高纯水稀释到刻度。
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
##### 制备联氨储备溶液

1. 量取 500 毫升试剂水。
2. 向试剂水中加入 74 毫升浓盐酸，制成盐酸溶液。
3. 称取 0.410 克硫酸联氨（\\(N_2H_4·H_2SO_4\\)）。
4. 将硫酸联氨加入盐酸溶液中，并使其充分溶解。
5. 使用高纯水将溶液稀释至 1 升。
    1. 将溶液倒入容量为 1 升的容量瓶中。
    2. 向溶液中加入高纯水，直至液面与容量瓶的刻度齐平。
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

# 安全说明

{%- capture original-{{ case-id }} -%}
> 警告！
>
> 使用浓硫酸时必须小心，特别是在稀释浓硫酸时，应将浓硫酸往水中倒!
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
> 浓硫酸具有很强的腐蚀性，溅到人的皮肤上会引起严重灼伤，有可能危及生命！
>
> 使用浓硫酸时，必须时刻小心！
>
> 稀释浓硫酸时，一定要将浓硫酸倒往水中。切勿将水倒往浓硫酸中！
{: .safety-warning}
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

# 段落描述

{%- capture original-{{ case-id }} -%}
基线校准的主要作用是校正仪器的电气漂移、光学漂移和温度漂移，以保证测量数据的准确性。仪表根据‘曲线校准’时所测量的除盐水的吸光度与本次基线校准测量的除盐水的吸光度的差值来平移坐标系，保证测量的有效性和准确度。
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
基线校准是指校正分析仪的电气漂移、光学漂移和温度漂移。

分析仪在日常使用过程中，有可能会产生电气漂移、光学漂移或温度漂移。这些漂移会对测量结果的准确性产生微小的影响。基线校准通过校正这些漂移来提高测量结果的精度。

曲线校准时，分析仪会测量除盐水的吸光度（\\(A_1\\)）。基线校准时，分析仪会再次测量除盐水的吸光度（\\(A_2\\)）。最后，分析仪根据两次测得的吸光度的差值（\\(A_1-A_2\\)）对坐标系进行平移。
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

# 使用表格

{%- capture original-{{ case-id }} -%}
##### 仪表的成套性

1、HK-228 联氨分析仪 1台  
2、HK-228 联氨分析仪使用说明书 1本  
3、出厂合格证书 1份  
4、装箱单 1份  
5、备件和附件 1套  
6、热敏打印机（选配） 1 台
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
##### 装箱单

收到产品后，请按照装箱单检查包装内的物品是否齐全、完好。如果发现遗失或破损，请马上联系我们。

###### 表 1：装箱单
{: .table-caption}

|  编号  |  名称  |  数量  |
|:---:|:--|:---:|
|  1  |  HK-228 联氨分析仪  |  1 台  |
|  2  |  HK-228 联氨分析仪使用说明书  |  1 册  |
|  3  |  出厂合格证  |  1 份  |
|  4  |  装箱单  |  1 份  |
|  5  |  备件和附件  |  1 套  |
|  6  |  热敏打印机（选配）  |  1 台  |
{: #packing-list}
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

# 使用列表

{%- capture original-{{ case-id }} -%}
各子菜单的简单说明对照如下：

基线校准—用除盐水校准仪表基线  
曲线校准—用标准显色液校准测量曲线  
仪表设置—设置仪表参数  
历史数据—查询历史数据  
历史事件—查询运行记录  
校准记录—查询校准记录
{%- endcapture -%}

{%- capture rewrited-{{ case-id }} -%}
你可以使用分析仪的菜单进行以下操作：
- 进行基线校准
- 进行曲线校准
- 设置仪表参数
- 查看历史数据
- 查看运行记录
- 查看校准记录
{%- endcapture -%}

{% include templateComponents/manualCase.html %}

