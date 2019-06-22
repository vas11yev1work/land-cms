<template lang="pug">
    header
        .container
            .header 
                .header-title
                    h3.title
                        router-link(to="/") Land CMS
                .header-content
                    ul.links-list
                        li.link(v-for="link in links")
                            router-link(:to="link.url") {{ link.title }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
    @Prop() readonly links!: undefined;
}
</script>

<style lang="scss" scoped>
@import '../assets/color.scss';
header{
    display: flex;
    align-items: center;
    min-height: 50px;
    box-shadow: 2px 0px 15px rgba(0, 0, 0, 0.15);
    background-color: $white;
    margin-bottom: 40px;
    .header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .header-title{
            .title{
                text-transform: uppercase;
                font-size: 20px;
                font-weight: 500;
            }
        }
        .header-content{
            .links-list{
                display: flex;
                .link{
                    margin-right: 60px;
                    &:last-child{
                        margin-right: 0;
                    }
                    a{
                        position: relative;
                        &.router-link-exact-active{
                            &::after{
                                content: '';
                                position: absolute;
                                bottom: -16px;
                                left: 0;
                                right: 0;
                                width: 100%;
                                height: 2px;
                                background-color: $main;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
