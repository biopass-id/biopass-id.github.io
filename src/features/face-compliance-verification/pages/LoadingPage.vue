<template>
    <div class="flex-1 flex flex-col items-center justify-center">
        <Loading class="mb-4"/>
        <Text>Please wait, we are making a request to the BioPass ID Face Compliance API</Text>
    </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { Text, Loading } from '../../../components';
import useComplianceStore from '../store';

const LoadingPage = defineComponent({
    components: { Text, Loading },
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