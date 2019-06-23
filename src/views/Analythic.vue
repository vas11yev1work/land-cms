<template lang="pug">
    .analythic-page
        .files-wrap.v-page
            .title
                h3.view-title Файлы
            .content
                .files-diagram
                    .files.main-block
                        FilesChart(:filesData="filesData" :filesOptions="filesOptions" :height="300" :width="500", :legendDOMId="chartjsLegend")
                        div#chartjsLegend.chartjsLegend
                .files-counts
                    .count.count.main-block(v-for="file in files")
                        .count-image
                            img(:src="file.image" :alt="file.title")
                        .count-title
                            h3.file-name {{ file.title }}:
                            span.file-value {{ file.value }}
        .analythic.ya-metrika.v-page
            .title
                h3.view-title Яндекс.Метрика
            .content
                .chart.week-views-chart.main-block
                    .chart-header
                        h4.chart-title Посетители
                        h4.chart-title 16 мая - 22 мая 2019
                    .chart-content
                        WeekViews(:filesData="weekViewsDataYa" :filesOptions="legendFalse" :width="200" :height="130")
                .chart.mounth-views-chart.main-block
                    .chart-header
                        h4.chart-title Посетители
                        h4.chart-title 23 апр - 22 мая 2019
                    .chart-content
                        WeekViews(:filesData="weekViewsDataYa" :filesOptions="legendFalse" :width="200" :height="130")
                .chart.devices.main-block
                    .chart-header
                        h4.chart-title Устройства
                        h4.chart-title 16 мая - 22 мая 2019
                    .chart-content
                        WeekViews(:filesData="weekViewsDataYa" :filesOptions="legendFalse" :width="200" :height="130")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FilesChart from '../components/FilesChart';
import WeekViews from '../components/WeekViews';
import files from '../files';

@Component({
    // @ts-ignore
    components: {
        FilesChart,
        WeekViews
    }
})
export default class Home extends Vue {
    files = files;
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
                /*generateLabels: function(chart) {
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
                }*/
            }
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
        },
        legendCallback: function(chart: any) {
            let text = [];
            text.push(`<ul class="${chart.id}-legend inlineUl">`);
            for (let i = 0; i < chart.data.datasets[0].data.length; i++) {
                text.push(`<li><span class="point" style="background-color: ${chart.data.datasets[0].backgroundColor[i]}"></span><span>`);
                if (chart.data.labels[i]) {
                    text.push(chart.data.labels[i]);
                }
                text.push('</span></li>');
            }
            text.push('</ul>');
            return text.join("");
        }
    }
    weekViewsDataYa = {
        labels: [16, 17, 18, 19, 20, 21, 22],
        datasets: [
            {
                label: 'Посетители',
                hoverBorderWidth: 0,
                backgroundColor: 'transparent',
                borderColor: '#F88767',
                borderWidth: 2,
                data: [390, 452, 482, 438, 510, 511, 590],
                pointBackgroundColor: '#F88767',
            }
        ]
    };
    legendFalse = {
        legend: {
            display: false
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
.inlineUl ul li{
    display: inline;
}
.analythic-page{
    .files-wrap{
        .content{
            display: flex;
            .files-diagram{
                margin-right: 20px;
                min-width: 50%;
                .files{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                }
            }
            .files-counts{
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 20px;
                width: 100%;
                .count{
                    display: flex;
                    align-items: center;
                    .count-image{
                        margin-right: 25px;
                        img{
                            height: 90px;
                            width: auto;
                        }
                    }
                    .count-title{
                        font-size: 14px;
                        display: flex;
                        .file-name{
                            margin-right: 5px;
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }
    .analythic{
        .content{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-column-gap: 20px;
            .chart{
                .chart-header{
                    display: flex;
                    margin-bottom: 20px;
                    justify-content: space-between;
                    .chart-title{
                        font-size: 14px;
                        font-weight: 400;
                    }
                }
            }
        }
    }
}
</style>

