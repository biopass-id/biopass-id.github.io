<template>
    <div class="flex-1 flex items-center justify-center">
        <FilePicker @fileSelected="onSelectFile"/>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { FilePicker } from '../../../components';
import useLivenessStore from '../store';

const UploadPage = defineComponent({
    components: { FilePicker },
    setup() {
        const { setFileImage } = useLivenessStore();
        const { replace } = useRouter();

        async function onSelectFile(file: File) {
            await setFileImage(file);
            replace({ name: 'livenessLoading' });
        }

        return { onSelectFile };
    }
});

export default UploadPage;
</script>

<style>

</style>