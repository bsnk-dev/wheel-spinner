<template>
    <div class="celebration-overlay">
        {{ name }}
    </div>
</template>

<script>
export default {
    props: {
        name: String,
    },
    
    setup() {
    },
}
</script>

<style>
    .celebration-overlay {
        background: rgb(0,0,0);
        background: linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 42%);
        position: absolute;
        top: 0px;
        left: 0px;
        width: 99.99vw;
        height: 100vh;
        color: white;
        text-align: left;
        font-size: 2em;
        font-weight: bold;
        padding-left: 60px;
        padding-top: 60px;
    }
</style>