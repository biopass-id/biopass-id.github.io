<template>
    <div class="flex-1 flex flex-col items-center justify-center">
        <Text class="mb-8">Now capture a picture of your face using our Face SDK</Text>
        <FaceCapture class="w-full max-w-4xl" @onCapture="$emit('onCapture', $event)"/>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Text from '../Text.vue';
import FaceCapture from '../FaceCapture.vue';

const Capture = defineComponent({
    components: { Text, FaceCapture },

});

export default Capture;
</script>

<style>

</style>