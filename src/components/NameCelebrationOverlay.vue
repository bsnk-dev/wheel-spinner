<template>
    <div class="celebration-positioning celebration-overlay">
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
        <canvas
            class="celebration-positioning"
            style="pointer-events: none"
            ref="confetti"
        >
        </canvas>
    </div>
</template>

<script>
import confetti from 'canvas-confetti';

export default {
    props: {
        name: String,
    },
    
    setup() {
    },

    mounted() {
        const canvas = this.$refs.confetti;
        const goConfetti = confetti.create(canvas, { resize: true });

        const duration = 15 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
        }

        var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        goConfetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        goConfetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
    }
}
</script>

<style>
    .celebration-overlay {
        background: rgb(0,0,0);
        background: linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 42%);
        color: white;
        text-align: left;
        font-size: 2em;
        font-weight: bold;
        padding-left: 60px;
        padding-top: 60px;
    }

    .celebration-positioning {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 99.99vw;
        height: 100vh;
    }
</style>