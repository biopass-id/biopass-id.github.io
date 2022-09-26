<template>
    <button :class="type">
        <slot/>
    </button>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue';

type ButtonTypes = "btnPrimary" | "btnOutline";

const Button = defineComponent({
    props: {
        type: {
            type: String as PropType<ButtonTypes>,
            default: 'btnPrimary',
        }
    }
});

export default Button;
</script>

<style>

</style>