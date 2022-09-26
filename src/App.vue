<template>
    <div class="min-h-screen bg-white bg-bottom bg-contain bg-no-repeat" :style="{'background-image': `url(${background})`}">
        <RouterView #default="{Component}">
            <transition name="fade" mode="out-in">
                <component :is="Component"/>
            </transition>
        </RouterView>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { background } from './assets/images';

const App = defineComponent({
    setup() {
        return { background };
    }
});

export default App;
</script>

<style>

</style>