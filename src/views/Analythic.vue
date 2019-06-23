<template lang="pug">
    .analythic-page
        .files-wrap.v-page
            .title
                h3.view-title Файлы
            .content
                .files-diagram
                    .files.main-block
                        FilesChart(:filesData="filesData" :filesOptions="filesOptions" :height="300" :width="500")
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
    };
    filesOptions = {
        cutoutPercentage: 93,
        legend: {
            position: 'bottom',
            labels: {
                padding: 30,
                boxWidth: 15,
                fontSize: 14,
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
    };
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
}
</script>

<style lang="scss" scoped>
.analythic-page{
    .files-wrap{
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

