<template>
    <LoadingTemplate/>
</template>

<script lang='ts'>
import { defineComponent, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import LoadingTemplate from '../../../components/pages/LoadingTemplate.vue';
import useVerifyStore from '../store';

const LoadingPage = defineComponent({
    components: { LoadingTemplate },
    setup() {
        const { replace } = useRouter();
        const { name } = useRoute();
        const { enroll, verify } = useVerifyStore();

        async function makeRequest() {
            try {
                if(name == 'enroll') {
                    await enroll();
                    replace({ name: 'verifySelect' });
                }
                else if(name == 'verify'){
                    await verify();
                    replace({ name: 'verifyResult' });
                }
            }
            catch(e) {
                alert(e);
                replace({ name: 'verification' });
            }
        }

        onMounted(() => makeRequest());
    }
});

export default LoadingPage;
</script>

<style>

</style>