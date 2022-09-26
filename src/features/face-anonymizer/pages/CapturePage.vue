<template>
    <div class="flex-1 flex flex-col items-center justify-center">
        <Text class="mb-8">Now capture a picture of your face using our Face SDK</Text>
        <FaceCapture class="w-full max-w-4xl" @onCapture="onCapture"/>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { Text, FaceCapture } from '../../../components';
import useAnonymizerStore from '../store';

const CapturePage = defineComponent({
    components: { Text, FaceCapture },
    setup() {
        const { replace } = useRouter();
        const { setBase64Image } = useAnonymizerStore();

        function onCapture(base64: string) {
            setBase64Image(base64);
            replace({ name: 'anonymizerLoading' });
        }

        return { onCapture };
    }
});

export default CapturePage;
</script>

<style>

</style>