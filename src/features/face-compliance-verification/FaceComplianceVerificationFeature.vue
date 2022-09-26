<template>
    <div class="min-h-screen">
        <div class="container px-10 mx-auto max-w-screen-xl h-full min-h-screen flex flex-col items-stretch">
            <FeatureTitle title="Face Compliance" subtitle="Here you can check if a face image are following ICAO requirements">
                <Chip text="Capture" :selected="$route.name != 'complianceResult'"/>
                <Chip text="Result" :selected="$route.name == 'complianceResult'"/>
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
import useComplianceStore from './store';

const FaceComplianceVerificationFeature = defineComponent({
    components: { FeatureTitle, Chip },
    setup() {
        const { dispose } = useComplianceStore();
        onBeforeUnmount(() => dispose());
    }
});

export default FaceComplianceVerificationFeature;
</script>

<style>

</style>