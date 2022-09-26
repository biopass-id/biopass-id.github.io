<template>
    <div class="aspect-video bg-gray-800 rounded-2xl overflow-hidden" ref="element">

    </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, ref } from 'vue';
import { useCamera } from '@biopassid/face-sdk';

const FaceCapture = defineComponent({
    setup(props, { emit }) {
        const element = ref<HTMLElement | null>(null);
        
        const { takePicture } = useCamera();

        async function startCapture() {
            const result = await takePicture({
                element: element.value!,
                options: {
                    backButton: {
                        enabled: false
                    },
                    legend: {
                        title: {
                            content: "Face Capture"
                        },
                        subtitle: {
                            content: "Fit your face to the shape and click the button below",
                        }
                    },
                    mask: {
                        backgroundOpacity: .9,
                        frameColor: 'var(--primary-color)',
                    },
                    captureButton: {
                        backgroundColor: 'var(--primary-color)',
                        icon: {
                            color: 'white',
                        }
                    },
                    confirmButton: {
                        backgroundColor: 'var(--primary-color)',
                        icon: {
                            color: 'white',
                        }
                    }
                }
            });

            emit('onCapture', result.base64);
        }

        onMounted(() => startCapture());

        return { element };
    }
});

export default FaceCapture;
</script>

<style>

</style>