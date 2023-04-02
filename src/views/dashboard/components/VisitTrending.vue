<!--  线 + 柱混合图 -->
<template>
  <el-card>
    <template #header>日访问量趋势</template>
    <div ref="chartElRef" :class="className" class="h-60" />
  </el-card>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import api from '@/api';

defineProps({
  className: {
    type: String,
    default: ''
  }
});

const chartElRef = ref<HTMLDivElement>();
const chartRef = ref<echarts.ECharts>();

onMounted(async () => {
  // 图表初始化
  chartRef.value = echarts.init(chartElRef.value!);

  // 大小自适应
  window.addEventListener('resize', () => {
    chartRef.value?.resize();
  });

  const { data, error } = await api.query({
    operationName: 'Statistics/VisitTrending'
  });
  if (!error) {
    chartRef.value.setOption({
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: data!.data!.map(item => item.count) ?? []
        }
      ],
      xAxis: {
        data: data!.data!.map(item => item.days) ?? []
      },
      yAxis: {
        type: 'value'
      }
    });
  }
});
</script>
