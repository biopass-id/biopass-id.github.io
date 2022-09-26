<template>
    <CaptureTemplate @onCapture="onCapture"/>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import CaptureTemplate from '../../../components/pages/CaptureTemplate.vue';
import useVerifyStore from '../store';

const CapturePage = defineComponent({
    components: { CaptureTemplate },
    setup() {
        const { replace } = useRouter();
        const { name } = useRoute();
        const { setEnrollBase64Image, setVerifyBase64Image } = useVerifyStore();

        function onCapture(base64: string) {
            if(name == "enrollCapture") {
                setEnrollBase64Image(base64);
                replace({ name: 'enroll' });
            }
            else if(name == 'verifyCapture') {
                setVerifyBase64Image(base64);
                replace({ name: 'verify' });
            }
        }

        return { onCapture };
    }
});

export default CapturePage;
</script>

<style>

</style>