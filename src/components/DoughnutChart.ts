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
          data: [37.5, 12.5, 12.5, 37.5],
          backgroundColor: ['#FEBD03','#1B79D3', '#F88767', '#00D374'],
          hoverBackgroundColor: ['#FEBD03','#1B79D3', '#F88767', '#00D374'],
          hoverBorderWidth: 0,
          borderWidth: 0,
          weight: 300
        }
      ],
    },
    {
      cutoutPercentage: 95,
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 15,
          padding:40,
          fontSize: 14,
          fontColor: '#353E5A',
          fontFamily: 'Montserrat'
        }
      },
      tooltips: {
        bodyFontFamily: 'Montserrat',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        bodyFontSize: 14,
        xPadding: 10,
        yPadding: 10,
        caretPadding: 8,
        cornerRadius: 3
      }
    })
  }
}
