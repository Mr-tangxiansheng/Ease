<template>
    <div>
        <h1>首页</h1>
    </div>
</template>

<script setup lang="ts">
import { getCaseList } from '@/server/api/case'
const fetch = async () => {
    let res = await getCaseList({})
}
fetch()
</script>

<style scoped>

</style>