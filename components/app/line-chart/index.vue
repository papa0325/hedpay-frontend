<script>
import { Line } from 'vue-chartjs';

export default {
  extends: Line,
  name: 'line-chart',
  data() {
    return {
      chartData: {
        labels: ['May 2020',	'Jun 2020',	'Jul 2020',	'Aug 2020',	'Sep 2020',	'Oct 2020',	'Set 2020', 'Nov 2020', 'Dec 2020', 'Jan 2021', 'Feb 2021', 'Mar 2021', 'Apr 2021', 'May 2021'],
        datasets: [
          {
            label: 'Line Chart',
            data: [4800, 5100, 6000, 6050, 7000, 7200, 6050, 7000,	 8500,	8000, 6050, 7200, 8000, 10000],
            fill: false,
            borderColor: '#2DCCD3',
            backgroundColor: '#000',
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
            gridLines: {
              display: true,
            },
          }],
          xAxes: [{
            gridLines: {
              display: false,
            },
          }],
        },
        legend: {
          display: true,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>
