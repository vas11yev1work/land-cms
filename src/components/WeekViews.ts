import { Line } from 'vue-chartjs';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
    extends: Line,
})
export default class FilesChart extends Vue<Line> {
    @Prop() readonly filesData!: object;
    @Prop() readonly filesOptions!: object;
    mounted () {
        this.renderChart(this.filesData, this.filesOptions)
    }
}