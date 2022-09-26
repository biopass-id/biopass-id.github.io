<template>
    <div class="min-h-screen">
        <div class="container px-10 mx-auto max-w-screen-xl h-full min-h-screen flex flex-col items-stretch">
            <FeatureTitle title="Face Anonymizer" subtitle="Here you can anonimyze any face">
                <Chip text="Capture" :selected="$route.name != 'anonymizerResult'"/>
                <Chip text="Result" :selected="$route.name == 'anonymizerResult'"/>
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
import useAnonymizerStore from './store';

const FaceAnonymizerFeature = defineComponent({
    components: { FeatureTitle, Chip },
    setup() {
        const { dispose } = useAnonymizerStore();
        onBeforeUnmount(() => dispose());
    }
});

export default FaceAnonymizerFeature;
</script>

<style>

</style>