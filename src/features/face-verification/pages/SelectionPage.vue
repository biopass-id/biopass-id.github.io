<template>
    <SelectionTemplate
        @send="$router.replace({ name: $route.name == 'enrollSelect' ? 'enrollUpload' : 'verifyUpload'})"
        @capture="$router.replace({ name: $route.name == 'enrollSelect' ? 'enrollCapture' : 'verifyCapture'})"/>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import SelectionTemplate from '../../../components/pages/SelectionTemplate.vue';

const SelectionPage = defineComponent({
    components: { SelectionTemplate },
});

export default SelectionPage;
</script>

<style>

</style>