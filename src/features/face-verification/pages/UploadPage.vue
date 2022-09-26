<template>
    <UploadTemplate @fileSelected="onSelectFile"/>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import UploadTemplate from '../../../components/pages/UploadTemplate.vue';
import useCropStore from '../store';

const UploadPage = defineComponent({
    components: { UploadTemplate },
    setup() {
        const { setEnrollFileImage, setVerifyFileImage } = useCropStore();
        const { replace } = useRouter();
        const { name } = useRoute();

        async function onSelectFile(file: File) {
            if(name == "enrollUpload") {
                await setEnrollFileImage(file);
                replace({ name: 'enroll' });
            }
            else if(name == "verifyUpload") {
                await setVerifyFileImage(file);
                replace({ name: 'verify' });
            }
        }

        return { onSelectFile };
    }
});

export default UploadPage;
</script>

<style>

</style>