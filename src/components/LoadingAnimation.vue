<template functional>
    <div>
        <span />
        <span />
        <span />
        <span />
    </div>
</template>
<script>
</script>
<style lang="scss" scoped>
div {
    display: flex;
    justify-content: space-between;
    min-width: 50px;
}

span {
    animation: jump 2000ms ease-out 0ms infinite running;
    background: #3d3d3d;
    border-radius: 50%;
    display: block;
    padding: 8%;
    width: 8%;

    &:nth-child(2) {
        animation-delay: 250ms;
    }

    &:nth-child(3) {
        animation-delay: 500ms;
    }

    &:nth-child(4) {
        animation-delay: 750ms;
    }
}

@keyframes jump {
    0% {
        transform: translateY(0);
    }

    25% {
        transform: translateY(-50%);
    }

    75% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(0);
    }
}
</style>
