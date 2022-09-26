<template>
    <div class="min-h-screen">
        <div class="container px-10 mx-auto max-w-screen-xl h-full min-h-screen flex flex-col items-stretch">
            <FeatureTitle title="Face Liveness 2D" subtitle="Here you can check if face photos are real or attack attempts">
                <Chip text="Capture" :selected="$route.name != 'livenessResult'"/>
                <Chip text="Result" :selected="$route.name == 'livenessResult'"/>
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
import { defineComponent, onBeforeUnmount } from 'vue';
import { FeatureTitle, Chip } from '../../components';
import useLivenessStore from './store';

const LivenessFeature = defineComponent({
    components: { FeatureTitle, Chip },
    setup() {
        const { dispose } = useLivenessStore();
        onBeforeUnmount(() => dispose());
    }
});

export default LivenessFeature;
</script>

<style>

</style>