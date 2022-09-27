<template>
    <div class="flex-1 flex flex-col items-stretch">
        <div class="flex-1 flex flex-col items-center justify-center">
            <Text class="mb-4">First enter a username so that we can identify you</Text>
            <input v-model="userName" class="rounded-lg border border-gray-400 p-4 w-full max-w-xl font-semibold" placeholder="User ID"/>
        </div>
        <div class="p-8 flex justify-center">
            <Button :disabled="!userName" class="w-full max-w-xs" @click="$router.replace({ name: 'enrollSelect'})">Next</Button>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { Button, Text } from '../../../components';
import useVerifyStore from '../store';

const HomePage = defineComponent({
    components: { Button, Text },
    setup() {
        const { userName } = useVerifyStore();
        return { userName };
    }
});

export default HomePage;
</script>

<style>

</style>