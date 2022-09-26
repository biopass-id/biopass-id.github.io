<template>
    <div class="flex-1 flex flex-col items-stretch">
        <div class="flex-1 flex flex-col items-center justify-center my-4">
            <Text class="mb-4">Source Image</Text>
            <img class="max-w-sm rounded-2xl w-full mb-8" :src="image"/>
            <Text type="titleMedium" class="mb-4">Liveness Result</Text>

            <div class="px-8 py-2 rounded-lg font-bold" :class="spoof ?'bg-red-100 text-red-500' :  'bg-green-100 text-green-500'">
                {{ spoof ? 'Attack' : 'Real'}}
            </div>
        </div>
        <Divider class="mb-6"/>

        <Text class="mb-5 text-center">What would you like to do next?</Text>

        <div class="flex items-center justify-center space-x-4 max-w-md w-full mx-auto mb-8">
            <Button type="btnOutline" class="flex-1" @click="$router.go(-1)">Restart Demo</Button>
            <Button class="flex-1" @click="tryAgain">Another Match</Button>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { Text, Button, Divider } from '../../../components';
import useLivenessStore from '../store';

const ResultPage = defineComponent({
    components: { Text, Button, Divider },
    setup() {
        const { image, dispose, spoof } = useLivenessStore();

        const { replace } = useRouter();
        function tryAgain() {
            replace({ name: 'liveness' });
            setTimeout(() => dispose(), 300);
        }

        return { image, tryAgain, spoof };
    }
  
});

export default ResultPage;
</script>

<style>

</style>