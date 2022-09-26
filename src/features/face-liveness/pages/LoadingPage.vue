<template>
    <LoadingTemplate/>
</template>

<script lang='ts'>
import { defineComponent, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import useLivenessStore from '../store';
import LoadingTemplate from '../../../components/pages/LoadingTemplate.vue';

const LoadingPage = defineComponent({
    components: { LoadingTemplate },
    setup() {
        const { replace } = useRouter();
        const { makeRequest } = useLivenessStore();

        async function handleRequest() {
            await makeRequest();
            replace({ name: 'livenessResult' });
        }

        onMounted(() => handleRequest());
    }
});

export default LoadingPage;
</script>

<style>

</style>