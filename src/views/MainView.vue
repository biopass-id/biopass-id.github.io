<template>
    <div class="min-h-screen" >
        <div class="container p-10 mx-auto max-w-screen-xl">
            <Text type="titleLarge">Welcome</Text>
            <Text class="mb-7">to BioPass ID web demonstrations</Text>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                <FeatureCard :image="illustrationFaceSdk" title="Face <br>SDK" @click="$router.push({ name: 'sdk'})"/>
                <FeatureCard :image="illustrationFaceVerification" title="Face<br>Verification" @click="$router.push({ name: 'verification'})"/>
                <FeatureCard :image="illustrationFaceLiveness" title="Face<br>Liveness 2D" @click="$router.push({ name: 'liveness'})"/>
                <FeatureCard :image="illustrationFacesCrop" title="Face<br>Crop" @click="$router.push({ name: 'crop'})"/>
                <FeatureCard :image="illustrationFaceCompliance" title="Face<br>Compliance<br>Verification" @click="$router.push({ name: 'compliance'})"/>
                <FeatureCard :image="illustrationFaceAnonymizer" title="Face<br>Anonymizer" @click="$router.push({ name: 'anonymizer'})"/>
            </div>
        </div>
        
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import {
    illustrationFaceAnonymizer, 
    illustrationFaceCompliance,
    illustrationFaceLiveness,
    illustrationFaceVerification, 
    illustrationFacesCrop,
    illustrationFaceSdk 
} from '../assets/images';
import { Text } from '../components';
import FeatureCard from './components/FeatureCard.vue';

const MainView = defineComponent({
    
    components: { Text, FeatureCard },
    setup() {
        return {
            illustrationFaceAnonymizer, 
            illustrationFaceCompliance,
            illustrationFaceLiveness,
            illustrationFaceVerification, 
            illustrationFacesCrop,
            illustrationFaceSdk,
        };
    }
});

export default MainView;
</script>

<style>

</style>