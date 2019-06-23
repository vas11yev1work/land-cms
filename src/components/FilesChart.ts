import { Doughnut } from 'vue-chartjs';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
    extends: Doughnut,
})
export default class FilesChart extends Vue<Doughnut> {
    @Prop() readonly filesData!: object;
    @Prop() readonly filesOptions!: object;
    mounted () {
        this.renderChart(this.filesData, this.filesOptions)
    }
}