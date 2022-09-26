<template>
    <div class="flex-1 flex flex-col items-center justify-center">
        <Loading class="mb-4"/>
        <Text>Please wait, we are making a request to the BioPass ID Face Compliance API</Text>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Text from '../Text.vue';
import Loading from '../Loading.vue';

const LoadingTemplate = defineComponent({
    components: { Text, Loading },
});

export default LoadingTemplate;
</script>

<style>

</style>