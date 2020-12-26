<template>
    <div></div>
</template>

<script>
    export default {
        name: "refresh",
        beforeRouteEnter (to, from, next) {
            next(vm => {
                //刷新当前页面中转
                vm.$router.replace(from.path)
            })
        }

    }
</script>

<style scoped>

</style>