<template>
    <div class="flex-1 flex items-center justify-center">
        <FilePicker @fileSelected="onSelectFile"/>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { FilePicker } from '../../../components';
import useAnonymizerStore from '../store';

const UploadPage = defineComponent({
    components: { FilePicker },
    setup() {
        const { setFileImage } = useAnonymizerStore();
        const { replace } = useRouter();

        async function onSelectFile(file: File) {
            await setFileImage(file);
            replace({ name: 'anonymizerLoading' });
        }

        return { onSelectFile };
    }
});

export default UploadPage;
</script>

<style>

</style>