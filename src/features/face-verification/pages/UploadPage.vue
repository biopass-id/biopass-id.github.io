<template>
    <div class="flex-1 flex items-center justify-center">
        <FilePicker @fileSelected="onSelectFile"/>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { FilePicker } from '../../../components';
import useCropStore from '../store';

const UploadPage = defineComponent({
    components: { FilePicker },
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