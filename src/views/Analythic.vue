<template lang="pug">
    .analythic
        .title
            h3.view-title Файлы
        .content
            .files-diagram
                .files.main-block
                    FilesChart(:filesData="filesData" :filesOptions="filesOptions" :height="300" :width="500", :legendDOMId="chartjsLegend")
                    div#chartjsLegend.chartjsLegend
            .files-counts
                .count.count.main-block
                    .count-image
                        img
                    .count-title
                        h3.file-name 
                        span.file-value 
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FilesChart from '../components/FilesChart';

@Component({
    components: {
        FilesChart
    }
})
export default class Home extends Vue {
    filesData = {
        labels: ['HTML', 'CSS', 'JS', 'IMG'],
        datasets: [
            {
                label: 'GitHub Commits',
                backgroundColor: ['#FEBD03', '#1B79D3', '#F88767', '#00D374'],
                hoverBackgroundColor: ['#FEBD03', '#1B79D3', '#F88767', '#00D374'],
                hoverBorderWidth: 0,
                data: [3,1,1,3],
                borderWidth: 0,
            }
        ]
    }
    filesOptions = {
        cutoutPercentage: 93,
        legend: {
            position: 'bottom',
            display: false,
            labels: {
                padding: 20,
                boxWidth: 8,
                fontSize: 14,
                fontFamily: 'Montserrat',
                //usePointStyle: true,
                generateLabels: function(chart) {
                    var data = chart.data;
                    if (data.labels.length && data.datasets.length) {
                        return data.labels.map(function(label, i) {
                            var meta = chart.getDatasetMeta(0);
                            var ds = data.datasets[0];
                            var arc = meta.data[i];
                            var custom = arc && arc.custom || {};
                            var getValueAtIndexOrDefault = Chart.helpers.getValueAtIndexOrDefault;
                            var arcOpts = chart.options.elements.arc;
                            var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
                            var stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
                            var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);
                            var dataLength = 0;
                            for(var val of chart.config.data.datasets[arc._datasetIndex].data){
                                dataLength += val;
                            }
                            var value = chart.config.data.datasets[arc._datasetIndex].data[arc._index];
                            var percents = (value/dataLength*100).toFixed(1);

                            return {
                                text: label + " - " + percents + "%",
                                fillStyle: fill,
                                strokeStyle: stroke,
                                lineWidth: bw,
                                hidden: isNaN(ds.data[i]) || meta.data[i].hidden,
                                index: i
                            };
                        });
                    } else {
                        return [];
                    }
                }
            },
        },
        elements: {
            center: {
                text: 'Файлы',
                fontStyle: 'Montserrat', 
                fontSize: '25',
                sidePadding: 20
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
    }
    mounted(){
        
    }
}
</script>

<style lang="scss" scoped>
.chartjsLegend li span {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 5px;
    border-radius: 25px;
}
.analythic{
    .content{
        display: flex;
        .files-diagram{
            margin-right: 20px;
            min-width: 50%;
            .files{
                display: flex;
                justify-content: center;
            }
        }
        .files-counts{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px;
            width: 100%;
        }
    }
}
</style>

