<template>
    <div class="flex-1 flex items-center justify-center">
        <FilePicker @fileSelected="$emit('fileSelected', $event)"/>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import FilePicker from '../FilePicker.vue';

const UploadPage = defineComponent({
    components: { FilePicker },
   
});

export default UploadPage;
</script>

<style>

</style>