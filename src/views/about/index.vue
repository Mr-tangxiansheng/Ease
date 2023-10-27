<template>
    <el-card>
        <h1>关于</h1>
        <p>{{ store.count }}</p>
        <el-button @click="add">+1</el-button>
    </el-card>
</template>

<script setup lang="ts">
import { useCount } from '@/store'
const store = useCount()

const add = () => {
    store.increment()
}
</script>

<style scoped></style>