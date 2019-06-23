import { Doughnut } from 'vue-chartjs';
import { Vue, Component, Prop } from 'vue-property-decorator';

Chart.pluginService.register({
	beforeDraw: function (chart) {
		if (chart.config.options.elements.center) {
		    var ctx = chart.chart.ctx;
		    var centerConfig = chart.config.options.elements.center;
		  	var fontStyle = centerConfig.fontStyle || 'Arial';
			var txt = centerConfig.text;
		    var color = centerConfig.color || '#000';
		    var sidePadding = centerConfig.sidePadding || 20;
		    var sidePaddingCalculated = (sidePadding/100) * (chart.innerRadius * 2)
		   // ctx.font = "100px " + fontStyle;
		    var stringWidth = ctx.measureText(txt).width;
		    var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;
		    var widthRatio = elementWidth / stringWidth;
		 //   var newFontSize = Math.floor(30 * widthRatio);
		    var elementHeight = (chart.innerRadius * 2);
		    var fontSizeToUse = centerConfig.fontSize || 20

		    ctx.textAlign = 'center';
		    ctx.textBaseline = 'middle';
		    var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
		    var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
		    ctx.font = fontSizeToUse+"px " + fontStyle;
		    ctx.fillStyle = color;
		    
		    //Draw text in center
		    ctx.fillText(txt, centerX, centerY);
		}
	}
});



// @ts-ignore
@Component({
    extends: Doughnut,
})
export default class FilesChart extends Vue<Doughnut> {
    @Prop() readonly filesData!: object;
    @Prop() readonly filesOptions!: object;
    @Prop() readonly legendDOMId!: string;
    mounted () {
        this.renderChart(this.filesData, this.filesOptions);
		// @ts-ignore
		document.getElementById('chartjsLegend').innerHTML = this.generateLegend();
    }
}

