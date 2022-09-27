<template>
    <div class="flex-1 flex flex-col items-center justify-center mb-20">

        <Text v-if="$route.name != 'enrollSelect'">Now you can try to match your face with user <b>{{ userName }}</b></Text>
        <Text class="mb-8">{{ $route.name = 'enrollSelect' ? "How would you like to Match?" : "Now capture a picture of your face using our Face SDK"}}</Text>
        
        <div class="flex space-x-4 max-w-sm w-full">
            <Button type="btnOutline"
                    class="flex-1"
                    @click="select">
                Send a Picture
            </Button>

            <Button class="flex-1"
                    @click="capture">
                Face Capture
            </Button>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Text, Button } from '../../../components';
import useVerifyStore from '../store';

const SelectionPage = defineComponent({
    components: { Text, Button },
    setup() {
        const { userName } = useVerifyStore();
        const { replace } = useRouter();
        const { name } = useRoute();

        function select() {
            replace({ name: name == 'enrollSelect' ? 'enrollUpload' : 'verifyUpload' });
        }

        function capture() {
            name == 'enrollSelect' 
                ? replace({ name: 'enrollCapture' })
                : replace({ name: 'verifyCapture' });
        }

        return { capture, select, userName };
    }
});

export default SelectionPage;
</script>

<style>

</style>