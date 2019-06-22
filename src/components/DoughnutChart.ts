import { Doughnut } from 'vue-chartjs';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  extends: Doughnut,
})
export default class DoughnutChart extends Vue<Doughnut>{
  mounted () {
    this.renderChart({
      labels: ['HTML', 'CSS', 'JS', 'IMG'],
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: ['#FEBD03','#1B79D3', '#F88767', '#00D374'],
          data: [3, 1, 1, 3]
        }
      ]
    })
  }
}
