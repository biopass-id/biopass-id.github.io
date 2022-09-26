<template>
    <div class="h-8 rounded-full px-6 flex items-center justify-center transition-colors duration-150 mx-6" :class="selected ? 'bg-primary' : 'bg-transparent'">
        <p class="font-semibold" :class="selected ? 'text-white' : 'text-primary'">{{ text }}</p>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const Chip = defineComponent({
    props: {
        text: {
            type: String,
            required: true
        },
        selected: {
            type: Boolean,
            required: true,
        }
    }
});

export default Chip;
</script>

<style>

</style>