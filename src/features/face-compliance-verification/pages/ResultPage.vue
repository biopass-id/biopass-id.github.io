<template>
    <div class="flex-1 flex flex-col items-stretch">
        <div class="flex-1 flex items-center justify-center my-4">
            <img class="max-w-sm rounded-2xl w-full" :src="image"/>
            <div class="w-px h-44 bg-gray-200 mx-20"></div>

            <div class="max-w-sm rounded-2xl w-full bg-gray-100 h-96 overflow-auto py-2">
                <div class="flex items-center px-4 py-2" v-for="(result, index) in results" :key="index" >
                    <component :is="result.isConformed ? 'CheckIcon' : 'AlertIcon'" class="w-6 mr-4"/>
                    <p class="text-lg font-medium text-gray-800">{{ result.key }}</p>
                </div>
            </div>
        </div>
        <Divider class="mb-6"/>

        <Text class="mb-5 text-center">What would you like to do next?</Text>

        <div class="flex items-center justify-center space-x-4 max-w-md w-full mx-auto mb-8">
            <Button type="btnOutline" class="flex-1" @click="$router.replace({ name: 'main' })">Restart Demo</Button>
            <Button class="flex-1" @click="tryAgain">Another Compliance</Button>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { Text, Button, Divider } from '../../../components';
import { CheckIcon, AlertIcon } from '../../../icons';

import useComplianceStore from '../store';

const ResultPage = defineComponent({
    components: { Text, Button, Divider, CheckIcon, AlertIcon },
    setup() {
        const { image, results, dispose } = useComplianceStore();

        const { replace } = useRouter();
        function tryAgain() {
            replace({ name: 'compliance' });
            setTimeout(() => dispose(), 300);
        }

        return { image, tryAgain, results };
    }
  
});

export default ResultPage;
</script>

<style>

</style>