<template>
    <div class="celebration-overlay">
        <div>{{ name }}</div>
        <div>
            <button
            type="button"
            class="
                inline-flex
                justify-center
                rounded-md
                px-4
                py-2
                text-sm
                p-8
                font-medium
                text-white-700
                bg-gray-400
                hover:bg-gray-300
                bg-opacity-25
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                font-bold
            "
            @click="$emit('dismissed')"
            >Close</button>
        </div>
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