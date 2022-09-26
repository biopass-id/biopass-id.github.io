<template>
    <div class="min-h-screen">
        <div class="container px-10 mx-auto max-w-screen-xl h-full min-h-screen flex flex-col items-stretch">
            <FeatureTitle title="Face Crop" subtitle="Here you can crop a face image following ICAO requirements">
                <Chip text="Capture" :selected="$route.name != 'cropResult'"/>
                <Chip text="Result" :selected="$route.name == 'cropResult'"/>
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
import useCropStore from './store';

const FaceCropFeature = defineComponent({
    components: { FeatureTitle, Chip },
    setup() {
        const { dispose } = useCropStore();
        onBeforeUnmount(() => dispose());
    }
});

export default FaceCropFeature;
</script>

<style>

</style>