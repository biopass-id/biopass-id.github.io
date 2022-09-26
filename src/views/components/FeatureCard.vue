<template>
    <div class="bg-primary-light aspect-[1.6] rounded-[1.25rem] 
                shadow-md shadow-black/5 cursor-pointer active:scale-95
                transition-transform duration-300 relative
                bg-right-bottom bg-contain bg-no-repeat"
         :style="{'background-image': `url(${image})`}">

        <p class="absolute top-8 left-8 text-xl text-primary font-semibold" v-html="title"></p>

    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const FeatureCard = defineComponent({
    props: {
        title: {
            type: String,
            required: true,
        },
        image: {
            required: true,
        }
    }
});

export default FeatureCard;
</script>

<style>

</style>