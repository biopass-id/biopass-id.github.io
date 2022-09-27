<template>
    <div class="min-h-screen">
        <div class="px-10 mx-auto  h-full min-h-screen flex flex-col items-stretch">
            <FeatureTitle class="max-w-screen-xl mx-auto w-full" title="Face SDK" subtitle="Here you will discover all the power and customization of our Face SDK"/>

            <div class="aspect-video bg-gray-800 rounded-2xl overflow-hidden w-full max-w-4xl mx-auto mt-6 mb-8" ref="element"></div>

            <Button class="w-full max-w-sm mx-auto mb-8" @click="submit">Capture</Button>

            <form class="flex space-x-2 w-full justify-center flex-wrap">

                <!-- Opções -->
                <fieldset class="border border-gray-400 p-4 rounded mb-2 w-60">
                    <h2 class="font-bold text-xl text-gray-800 text-center">Settings</h2>
                    <div class="bg-gray-400 my-4 h-px"></div>
                    <!-- Configurações gerais -->
                    <label>Width</label>
                    <input v-model="options.width"/>

                    <label>Height</label>
                    <input v-model="options.height"/>

                    <label>Models directory</label>
                    <input v-model="options.modelsDirectory"/>

                    <label>Font Family</label>
                    <input v-model="options.fontFamily"/>


                    <!-- Camera Presets -->
                    <div class="bg-gray-400 my-4 h-px"></div>
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Camera Presets</h2>

                    <!-- Aspect -->
                    <label>Aspect Ratio</label>
                    <select v-model.number="options.cameraPresets.aspectRatio">
                        <option value="1.777777777777778">16/9</option>
                        <option value="0.5625">9/16</option>
                        <option value="1.333333333333333">4/3</option>
                    </select>

                    <!-- Resolution -->
                    <label>Preferred Resolution</label>
                    <select v-model.number="options.cameraPresets.preferredResolution">
                        <option value="480">480p</option>
                        <option value="720">720p</option>
                        <option value="1080">1080p</option>
                    </select>

                    <!-- Mask -->
                    <div class="bg-gray-400 my-4 h-px"></div>
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Mask Style</h2>

                    <!-- enabled -->
                    <label>Enabled</label>
                    <input type="checkbox" v-model="options.mask.enabled"/>

                    <!-- Background color -->
                    <label>Background Color</label>
                    <input type="color" v-model="options.mask.backgroundColor" />

                    <!-- Fram color -->
                    <label>Frame color</label>
                    <input type="color" v-model="options.mask.frameColor" />

                    <!-- Background opacity -->
                    <label>Background opacity</label>
                    <input type="range" step=".1" min="0" max="1" v-model.number="options.mask.backgroundOpacity"/>
                    <output>{{ options.mask.backgroundOpacity }}</output>

                    <!-- Frame thickness -->
                    <label>Frame Thickness</label>
                    <input type="range" min="0" max="10"  v-model.number="options.mask.frameThickness" />
                    <output>{{ options.mask.frameThickness }}</output>

                    
                    <!-- Mask -->
                    <div class="bg-gray-400 my-4 h-px"></div>
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Face Detection</h2>
                    <div class="bg-gray-400 my-4 h-px"></div>

                    <label>Enabled</label>
                    <input type="checkbox" v-model="options.faceDetection.enabled"/>

                    <label>Auto capture</label>
                    <input type="checkbox" v-model="options.faceDetection.autoCapture"/>
                </fieldset>

                <!-- Botão de Voltar -->
                <fieldset class="border border-gray-400 p-4 rounded mb-2">
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Back Button Style</h2>
                    <label>Enabled</label>
                    <input type="checkbox" v-model="options.backButton.enabled" />

                    <label>Size</label>
                    <input v-model="options.backButton.size"/>

                    <label>Background Color</label>
                    <input type="color" v-model="options.backButton.backgroundColor"/>

                    <label>Padding</label>
                    <input v-model="options.backButton.padding"/>
                        
                    <div class="bg-gray-400 my-4 h-px"></div>

                    <!-- back label -->
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Label</h2>

                    <label>Enabled</label>
                    <input type="checkbox" v-model="options.backButton.label.enabled"/>
                        
                    <label>Content</label>
                    <input  v-model="options.backButton.label.content"/>

                    <label>Size</label>
                    <input v-model="options.backButton.label.fontSize" />

                    <label>Font Weight</label>
                    <select v-model="options.backButton.label.fontWeight">
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="300">300</option>
                        <option value="400">400</option>
                        <option value="500">500</option>
                        <option value="600">600</option>
                        <option value="700">700</option>
                        <option value="800">800</option>
                    </select>

                    <label>Font color</label>
                    <input type="color" v-model="options.backButton.label.color"/>

                    <div class="bg-gray-400 my-4 h-px"></div>

                    <!-- back Icon -->
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Icon</h2>
                    <label>Enabled</label>
                    <input type="checkbox" v-model="options.backButton.icon.enabled"/>

                    <label>Source URL</label>
                    <input v-model="options.backButton.icon.source"/>

                    <label>Icon color</label>
                    <input type="color" v-model="options.backButton.icon.color"/>
                        
                    <label>Size</label>
                    <input  v-model="options.backButton.icon.size" />
                </fieldset>
                
                <!-- Botão de Trocar camera -->
                <fieldset class="border border-gray-400 p-4 rounded mb-2">
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Switch Button Style</h2>
                    <label>Enabled</label>
                    <input type="checkbox" v-model="options.switchButton.enabled" />

                    <label>Size</label>
                    <input v-model="options.switchButton.size"/>

                    <label>Background Color</label>
                    <input type="color" v-model="options.switchButton.backgroundColor"/>

                    <label>Padding</label>
                    <input v-model="options.switchButton.padding"/>
                        
                    <div class="bg-gray-400 my-4 h-px"></div>

                    <!-- back label -->
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Label</h2>

                    <label>Enabled</label>
                    <input type="checkbox" v-model="options.switchButton.label.enabled"/>
                        
                    <label>Content</label>
                    <input  v-model="options.switchButton.label.content"/>

                    <label>Size</label>
                    <input v-model="options.switchButton.label.fontSize" />

                    <label>Font Weight</label>
                    <select v-model="options.switchButton.label.fontWeight">
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="300">300</option>
                        <option value="400">400</option>
                        <option value="500">500</option>
                        <option value="600">600</option>
                        <option value="700">700</option>
                        <option value="800">800</option>
                    </select>

                    <label>Font color</label>
                    <input type="color" v-model="options.switchButton.label.color"/>

                    <div class="bg-gray-400 my-4 h-px"></div>

                    <!-- back Icon -->
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Icon</h2>
                    <label>Enabled</label>
                    <input type="checkbox" v-model="options.switchButton.icon.enabled"/>

                    <label>Source URL</label>
                    <input v-model="options.switchButton.icon.source"/>

                    <label>Icon color</label>
                    <input type="color" v-model="options.switchButton.icon.color"/>
                        
                    <label>Size</label>
                    <input  v-model="options.switchButton.icon.size" />
                </fieldset>

                <!-- Botão de Captura -->
                <fieldset class="border border-gray-400 p-4 rounded mb-2">
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Capture Button Style</h2>
                    <label>Enabled</label>
                    <input type="checkbox" v-model="options.captureButton.enabled" />

                    <label>Size</label>
                    <input v-model="options.captureButton.size"/>

                    <label>Background Color</label>
                    <input type="color" v-model="options.captureButton.backgroundColor"/>

                    <label>Padding</label>
                    <input v-model="options.captureButton.padding"/>
                        
                    <div class="bg-gray-400 my-4 h-px"></div>

                    <!-- back label -->
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Label</h2>

                    <label>Enabled</label>
                    <input type="checkbox" v-model="options.captureButton.label.enabled"/>
                        
                    <label>Content</label>
                    <input  v-model="options.captureButton.label.content"/>

                    <label>Size</label>
                    <input v-model="options.captureButton.label.fontSize" />

                    <label>Font Weight</label>
                    <select v-model="options.captureButton.label.fontWeight">
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="300">300</option>
                        <option value="400">400</option>
                        <option value="500">500</option>
                        <option value="600">600</option>
                        <option value="700">700</option>
                        <option value="800">800</option>
                    </select>

                    <label>Font color</label>
                    <input type="color" v-model="options.captureButton.label.color"/>

                    <div class="bg-gray-400 my-4 h-px"></div>

                    <!-- back Icon -->
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Icon</h2>
                    <label>Enabled</label>
                    <input type="checkbox" v-model="options.captureButton.icon.enabled"/>

                    <label>Source URL</label>
                    <input v-model="options.captureButton.icon.source"/>

                    <label>Icon color</label>
                    <input type="color" v-model="options.captureButton.icon.color"/>
                        
                    <label>Size</label>
                    <input  v-model="options.captureButton.icon.size" />
                </fieldset>

                <!-- Botão de Cancelar -->
                <fieldset class="border border-gray-400 p-4 rounded mb-2">
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Cancel Button Style</h2>
                    <label>Enabled</label>
                    <input type="checkbox" v-model="options.cancelButton.enabled" />

                    <label>Size</label>
                    <input v-model="options.cancelButton.size"/>

                    <label>Background Color</label>
                    <input type="color" v-model="options.cancelButton.backgroundColor"/>

                    <label>Padding</label>
                    <input v-model="options.cancelButton.padding"/>
                        
                    <div class="bg-gray-400 my-4 h-px"></div>

                    <!-- back label -->
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Label</h2>

                    <label>Enabled</label>
                    <input type="checkbox" v-model="options.cancelButton.label.enabled"/>
                        
                    <label>Content</label>
                    <input  v-model="options.cancelButton.label.content"/>

                    <label>Size</label>
                    <input v-model="options.cancelButton.label.fontSize" />

                    <label>Font Weight</label>
                    <select v-model="options.cancelButton.label.fontWeight">
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="300">300</option>
                        <option value="400">400</option>
                        <option value="500">500</option>
                        <option value="600">600</option>
                        <option value="700">700</option>
                        <option value="800">800</option>
                    </select>

                    <label>Font color</label>
                    <input type="color" v-model="options.cancelButton.label.color"/>

                    <div class="bg-gray-400 my-4 h-px"></div>

                    <!-- back Icon -->
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Icon</h2>
                    <label>Enabled</label>
                    <input type="checkbox" v-model="options.cancelButton.icon.enabled"/>

                    <label>Source URL</label>
                    <input v-model="options.cancelButton.icon.source"/>

                    <label>Icon color</label>
                    <input type="color" v-model="options.cancelButton.icon.color"/>
                        
                    <label>Size</label>
                    <input  v-model="options.cancelButton.icon.size" />
                </fieldset>

                <!-- Botão de Cancelar -->
                <fieldset class="border border-gray-400 p-4 rounded mb-2">
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Confirm Button Style</h2>
                    <label>Enabled</label>
                    <input type="checkbox" v-model="options.confirmButton.enabled" />

                    <label>Size</label>
                    <input v-model="options.confirmButton.size"/>

                    <label>Background Color</label>
                    <input type="color" v-model="options.confirmButton.backgroundColor"/>

                    <label>Padding</label>
                    <input v-model="options.confirmButton.padding"/>
                        
                    <div class="bg-gray-400 my-4 h-px"></div>

                    <!-- back label -->
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Label</h2>

                    <label>Enabled</label>
                    <input type="checkbox" v-model="options.confirmButton.label.enabled"/>
                        
                    <label>Content</label>
                    <input  v-model="options.confirmButton.label.content"/>

                    <label>Size</label>
                    <input v-model="options.confirmButton.label.fontSize" />

                    <label>Font Weight</label>
                    <select v-model="options.confirmButton.label.fontWeight">
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="300">300</option>
                        <option value="400">400</option>
                        <option value="500">500</option>
                        <option value="600">600</option>
                        <option value="700">700</option>
                        <option value="800">800</option>
                    </select>

                    <label>Font color</label>
                    <input type="color" v-model="options.confirmButton.label.color"/>

                    <div class="bg-gray-400 my-4 h-px"></div>

                    <!-- back Icon -->
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Icon</h2>
                    <label>Enabled</label>
                    <input type="checkbox" v-model="options.confirmButton.icon.enabled"/>

                    <label>Source URL</label>
                    <input v-model="options.confirmButton.icon.source"/>

                    <label>Icon color</label>
                    <input type="color" v-model="options.confirmButton.icon.color"/>
                        
                    <label>Size</label>
                    <input  v-model="options.confirmButton.icon.size" />
                </fieldset>

                <!-- Legenda -->
                <fieldset class="border border-gray-400 p-4 rounded mb-2">
                    <!-- confirm label -->
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Title</h2>

                    <label checked>Enabled</label>
                    <input type="checkbox" v-model="options.legend.title.enabled" />

                    <label>Content</label>
                    <input type="input"  v-model="options.legend.title.content"/>

                    <label>Size</label>
                    <input  v-model="options.legend.title.fontSize"/>

                    <label>Font Weight</label>
                    <select v-model="options.legend.title.fontWeight">
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="300">300</option>
                        <option value="400">400</option>
                        <option value="500">500</option>
                        <option value="600">600</option>
                        <option value="700">700</option>
                        <option value="800">800</option>
                    </select>

                    <label>Font color</label>
                    <input type="color" v-model="options.legend.title.color"/>

                    <div class="bg-gray-400 my-4 h-px"></div>
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Subtitle</h2>

                    <label checked>Enabled</label>
                    <input type="checkbox" v-model="options.legend.subtitle.enabled" />

                    <label>Content</label>
                    <input type="input"  v-model="options.legend.subtitle.content"/>

                    <label>Size</label>
                    <input  v-model="options.legend.subtitle.fontSize"/>

                    <label>Font Weight</label>
                    <select v-model="options.legend.subtitle.fontWeight">
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="300">300</option>
                        <option value="400">400</option>
                        <option value="500">500</option>
                        <option value="600">600</option>
                        <option value="700">700</option>
                        <option value="800">800</option>
                    </select>

                    <label>Font color</label>
                    <input type="color" v-model="options.legend.subtitle.color"/>
                </fieldset>
            </form>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from 'vue';
import { FeatureTitle, Button } from '../../components';
import { useCamera } from '@biopassid/face-sdk';
import type { Options } from '@biopassid/face-sdk/types/options';

const FaceSdkFeature = defineComponent({
    components: { FeatureTitle, Button },
    setup() {
        const { takePicture } = useCamera();

        const element = ref<HTMLElement | null>(null);

        const options = reactive<Required<Options>>({
            width: "100%",
            height: "100%",
            modelsDirectory: "/models",
            fontFamily: "inherit",
            cameraPresets: {
                aspectRatio: 1.777777777777778,
                preferredResolution: 480,
            },
            mask: {
                type: "face",
                enabled: true,
                backgroundColor: "#000000",
                backgroundOpacity: .6,
                frameColor: "#FFFFFF",
                frameThickness: 3,
            },
            faceDetection: {
                enabled: true,
                autoCapture: false,
            },
            backButton: {
                enabled: true,
                size: "50px",
                backgroundColor: "#FFFFFF",
                padding: "0",
                label: {
                    enabled: false,
                    content: "",
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#000000",
                },
                icon: {
                    enabled: true,
                    source: "",
                    color: "#000000",
                    size: "30px",
                }
            },
            switchButton: {
                enabled: true,
                size: "50px",
                backgroundColor: "#FFFFFF",
                padding: "0",
                label: {
                    enabled: false,
                    content: "",
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#000000",
                },
                icon: {
                    enabled: true,
                    source: "",
                    color: "#000000",
                    size: "30px",
                }
            },
            captureButton: {
                enabled: true,
                size: "50px",
                backgroundColor: "#FFFFFF",
                padding: "0",
                label: {
                    enabled: false,
                    content: "",
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#000000",
                },
                icon: {
                    enabled: true,
                    source: "",
                    color: "#000000",
                    size: "30px",
                }
            },
            cancelButton: {
                enabled: true,
                size: "50px",
                backgroundColor: "#FF0000",
                padding: "0",
                label: {
                    enabled: false,
                    content: "",
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#FFFFFF",
                },
                icon: {
                    enabled: true,
                    source: "",
                    color: "#FFFFFF",
                    size: "30px",
                }
            },
            confirmButton: {
                enabled: true,
                size: "50px",
                backgroundColor: "#FF0000",
                padding: "0",
                label: {
                    enabled: false,
                    content: "",
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#000000",
                },
                icon: {
                    enabled: true,
                    source: "",
                    color: "#000000",
                    size: "30px",
                }
            },
            legend: {
                title: {
                    enabled: true,
                    content: "Face Capture",
                    fontSize: "22px",
                    fontWeight: "700",
                    color: "#FFFFFF",
                },
                subtitle: {
                    enabled: true,
                    content: "Fit your face on the space above",
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#FFFFFF",
                }
            },
            loading: {
                dotsSize: '6px',
                dotsSpacing: '2px',
                dotsColor: 'black',
                backgroundColor: "#FFFFFF",
                size: "50px",
                enabled: false
            },
        });

        async function submit () {
           

            const resp = await takePicture({
                element: element.value!,
                options,
            });

            console.log(resp);

            window.alert('Detect finished');
        }

        return { element, submit, options };
    }
});

export default FaceSdkFeature;
</script>

<style scoped>
label {
    display: block;
    font-size: 0.75rem;
    font-weight: 600;
}
input:not([type=checkbox]):not([type=range]), option, select { 
    border: solid gray 1px;
    border-radius: 5px;
    padding: 2px 5px;
    width: 100%;
    margin-bottom: 6px;
}

input[type=range] {
    height: 10px;
    display: inline-block;
    background: red;
}
output {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 600;
    margin-left: 4px;
}
</style>