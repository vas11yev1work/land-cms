<template lang="pug">
    .analythic
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
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FilesChart from '../components/FilesChart';
import files from '../files';

@Component({
    components: {
        FilesChart
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
}
</script>

<style lang="scss" scoped>
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
</style>

