<template>
    <div class="flex-1 flex flex-col items-center justify-center mb-20">
        <Text class="mb-5">What would you like to do?</Text>
        <div class="flex space-x-4 max-w-sm w-full">
            <Button type="btnOutline" class="flex-1" @click="$emit('send')">Send a Picture</Button>
            <Button class="flex-1" @click="$emit('capture')">Face Capture</Button>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Text from '../Text.vue';
import Button from '../Button.vue';

const SelectionPage = defineComponent({
    components: { Text, Button }
});

export default SelectionPage;
</script>

<style>

</style>