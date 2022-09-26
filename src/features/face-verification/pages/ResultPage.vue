<template>
    <div class="flex-1 flex flex-col items-stretch">

        <!-- Conteúdo -->
        <div class="flex-1 flex items-center justify-center my-4">
            <div>
                <Text class="text-center mb-4">{{ userName }}</Text>
                <img class="max-w-sm rounded-2xl w-full" :src="enrollPicture"/>
            </div>
            <div class="w-px h-44 bg-gray-200 mx-20"></div>
            <div>
                <Text class="text-center mb-4">Match Picture</Text>
                <img class="max-w-sm rounded-2xl w-full" :src="verifyPicture"/>
            </div>
        </div>

        <Text class="text-center mb-4" type="titleMedium">Match Result</Text>

        <div class="px-8 py-2 rounded-lg font-bold mx-auto self-center mb-8" :class="!match ?'bg-red-100 text-red-500' :  'bg-green-100 text-green-500'">
            {{ !match ? 'Fail' : 'Success'}}
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
import useVerifyStore from '../store';

const ResultPage = defineComponent({
    components: { Text, Button, Divider },
    setup() {
        const { verifyPicture, enrollPicture, match, userName, dispose } = useVerifyStore();

        const { replace } = useRouter();
        function tryAgain() {
            replace({ name: 'verification' });
            setTimeout(() => dispose(), 300);
        }

        return { verifyPicture, enrollPicture, match, tryAgain, userName };
    }
  
});

export default ResultPage;
</script>

<style>

</style>