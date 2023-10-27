import { defineStore } from "pinia";

export const useCount = defineStore('useCount',{
    state: () => ({
        count: 0,
    }),
    getters: {
        doubleCount(state) {
            return  state.count;
        },
    },
    actions: {
        increment() {
            this.count++;
        },
    },
});