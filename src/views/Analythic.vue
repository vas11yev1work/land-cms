<template lang="pug">
    .analythic
        .title
            h3.view-title Файлы
        .content
            .files-diagram
                .files.main-block
                    DoughnutChart(style="display: block; width: 500px; height: 300px;" height="245")
            .files-counts
                .count.count.main-block(v-for="file in files")
                    .count-image
                        //- img
                    .count-title
                        h3.file-name {{ file.title }}:
                        span.file-value {{ file.value }} файла
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DoughnutChart from '../components/DoughnutChart';
import files from '../files';

@Component({
    components: {
        DoughnutChart: DoughnutChart
    }
})
export default class Home extends Vue {
    files = files
}
</script>

<style lang="scss" scoped>
.analythic{
    .content{
        display: flex;
        .files-diagram{
            margin-right: 20px;
            width: 50%;
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

