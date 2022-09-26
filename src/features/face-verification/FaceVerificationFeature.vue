<template>
    <div class="min-h-screen">
        <div class="container px-10 mx-auto max-w-screen-xl h-full min-h-screen flex flex-col items-stretch">
            <FeatureTitle title="Face Verification" subtitle="Here you can Enroll faces and do face matches.">
                <Chip text="Username" :selected="$route.name == 'verification'"/>
                <Chip text="Enroll" :selected="['enrollSelect', 'enrollCapture', 'enrollUpload', 'enroll'].includes($route.name)"/>
                <Chip text="Match" :selected="['verifySelect', 'verifyCapture', 'verifyUpload', 'verify', 'verifyResult'].includes($route.name)"/>
            </FeatureTitle>

            <RouterView #default="{Component}">
                <transition name="fade" mode="out-in">
                    <component :is="Component"/>
                </transition>
            </RouterView>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent, onBeforeMount } from 'vue';
import { FeatureTitle, Chip } from '../../components';
import useVerifyStore from './store';

const FaceCropFeature = defineComponent({
    components: { FeatureTitle, Chip },
    setup() {
        const { dispose } = useVerifyStore();
        onBeforeMount(() => dispose());
    }
});

export default FaceCropFeature;
</script>

<style>

</style>