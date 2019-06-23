<template lang="pug">
    .main-wrap
        Header(:links="links")
        main 
            .container
                router-view
        footer footer
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';

@Component({
    components: {
        Header: Header
    }
})
export default class App extends Vue {
    links = [
        {
            title: 'Аналитика',
            url: '/'
        },
        {
            title: 'Текст',
            url: '/text'
        },
        {
            title: 'Изображения',
            url: '/imgs'
        },
        {
            title: 'HTML',
            url: '/edit-html'
        },
        {
            title: 'CSS',
            url: '/edit-css'
        },
        {
            title: 'JS',
            url: '/edit-js'
        },
        {
            title: 'Настройки',
            url: '/settings'
        },
        {
            title: 'Выход',
            url: '/logout'
        },
    ]
}
</script>


<style lang="scss">
@import '@/assets/color.scss';
*, *::before, *::after{
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
}
html{
    height: 100%;
}
body{
    height: 100%;
    color: $main;
    background-color: $bg;
    .main-wrap{
        height: 100%;
        display: flex;
        flex-direction: column;
    }
}
button, input[type=submit]{
    cursor: pointer;
}
button, input{
    outline: none;
}
.container{
    width: 1140px;
    margin: 0 auto;
}
.v-page{
    margin-bottom: 40px;
}
.view-title{
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 20px;
}
.main-block{
    padding: 20px;
    background-color: $white;
    box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
}
a{
    text-decoration: none;
    color: $main;
}
li{
    list-style-type: none;
    font-size: 14px;
}
p{
    font-size: 14px;
}
main{
    flex: 1 0 auto;
}
footer{
    flex: 0 0 auto;
}
</style>
