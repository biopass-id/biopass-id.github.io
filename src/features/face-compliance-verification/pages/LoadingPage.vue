<template>
    <LoadingTemplate/>
</template>

<script lang='ts'>
import { defineComponent, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import LoadingTemplate from '../../../components/pages/LoadingTemplate.vue';
import useComplianceStore from '../store';

const LoadingPage = defineComponent({
    components: { LoadingTemplate },
    setup() {
        const { replace } = useRouter();
        const { makeRequest } = useComplianceStore();

        async function handleRequest() {
            await makeRequest();
            replace({ name: 'complianceResult' });
        }

        onMounted(() => handleRequest());
    }
});

export default LoadingPage;
</script>

<style>

</style>