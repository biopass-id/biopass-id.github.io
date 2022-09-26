<template>
    <div class="flex items-center  border-b border-gray-200 py-6">
        <div class="flex-1">
            <Text type="titleLarge">{{ title }}</Text>
            <Text>{{ subtitle }}</Text>
        </div>
        <Text type="titleMedium" class="mr-6" v-if="$slots['default']">Steps</Text>
        <slot/>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Text from './Text.vue';

const FeatureTitle = defineComponent({
    components: { Text },
    props: {
        title: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
            required: true,
        }
    }
});

export default FeatureTitle;
</script>

<style>

</style>