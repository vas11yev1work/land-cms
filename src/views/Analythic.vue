<template lang="pug">
    .analythic
        .title
            h3.view-title Файлы
        .content
            .files-diagram
                .files.main-block
                    DoughnutChart
            .files-counts
                .count.count-html.main-block
                .count.count-css.main-block
                .count.count-js.main-block
                .count.count-img.main-block

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DoughnutChart from '../components/DoughnutChart';

@Component({
    components: {
        DoughnutChart: DoughnutChart
    }
})
export default class Home extends Vue {
    chartData = {}
}
</script>

<style lang="scss" scoped>
.analythic{
    .content{
        display: flex;
        .files-diagram{
            margin-right: 20px;
            width: 50%;
        }
    }
}
</style>

