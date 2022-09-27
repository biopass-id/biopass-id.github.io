<template>
    <div class="flex-1 flex flex-col items-stretch">
        <div class="flex-1 flex items-center justify-center my-4">
            <img class="max-w-sm rounded-2xl w-full" :src="image"/>
            <div class="w-px h-44 bg-gray-200 mx-20"></div>
            <img class="max-w-sm rounded-2xl w-full" :src="anonymizedImage"/>
        </div>
        <Divider class="mb-6"/>

        <Text class="mb-5 text-center">What would you like to do next?</Text>

        <div class="flex items-center justify-center space-x-4 max-w-md w-full mx-auto mb-8">
            <Button type="btnOutline" class="flex-1" @click="$router.replace({ name: 'main' })">Restart Demo</Button>
            <Button class="flex-1" @click="tryAgain">Another Match</Button>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { Text, Button, Divider } from '../../../components';
import useAnonymizerStore from '../store';

const ResultPage = defineComponent({
    components: { Text, Button, Divider },
    setup() {
        const { image, anonymizedImage, dispose } = useAnonymizerStore();

        const { replace } = useRouter();
        function tryAgain() {
            replace({ name: 'anonymizer' });
            setTimeout(() => dispose(), 300);
        }

        return { image, anonymizedImage, tryAgain };
    }
  
});

export default ResultPage;
</script>

<style>

</style>