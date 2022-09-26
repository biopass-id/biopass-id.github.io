<template>
    <p :class="type">
        <slot/>
    </p>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue';

type TextTypes = "bodyMedium" | "titleLarge" | "titleMedium";

const Text = defineComponent({
    props: {
        type: {
            type: String as PropType<TextTypes>,
            default: 'bodyMedium',
        }
    }
});

export default Text;
</script>

<style>

</style>