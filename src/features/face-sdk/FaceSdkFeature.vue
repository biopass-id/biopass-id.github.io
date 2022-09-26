<template>
    <div class="min-h-screen">
        <div class="container px-10 mx-auto max-w-screen-xl h-full min-h-screen flex flex-col items-stretch">
            <FeatureTitle title="Face SDK" subtitle="Here you will discover all the power and customization of our Face SDK"/>

            <div class="aspect-video bg-gray-800 rounded-2xl overflow-hidden w-full max-w-4xl mx-auto mt-6 mb-8" ref="element"></div>

            <Button class="w-full max-w-sm mx-auto mb-8" @click="submit">Capture</Button>

            <form class="flex space-x-2 w-full justify-center flex-wrap">

                <!-- Mask  -->
                <fieldset class="border border-gray-400 p-4 rounded mb-2">
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Mask Style</h2>
                    <div class="w-40">
                        <label class="block">Ativo</label>
                        <input id="maskEnabled" type="checkbox" checked />
                    </div>
                    <div class="w-40">
                        <label class="block">Background Color</label>
                        <input id="maskColor" type="color" value="#000000" />
                    </div>
                    <div class="w-40">
                        <label class="block">Frame color</label>
                        <input id="maskFrameColor" type="color" value="#FFFFFF" />
                    </div>
                    <div class="w-40">
                        <label class="block">Background opacity</label>
                        <input id="maskOpacity" type="range" step=".1" min="0" max="1" value=".6"
                               oninput="this.nextElementSibling.value = this.value" />
                        <output>.6</output>
                    </div>
                    <div class="w-40">
                        <label class="block">Frame Thickness</label>
                        <input id="maskThickness" type="range" min="0" max="10" value="3"
                               oninput="this.nextElementSibling.value = this.value" />
                        <output>3</output>
                    </div>
                </fieldset>

                <!-- Botão de Voltar -->
                <fieldset class="border border-gray-400 p-4 rounded mb-2">
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Back Button Style</h2>
                    <div class="w-40">
                        <label class="block">Enabled</label>
                        <input id="backEnabled" type="checkbox" checked />
                    </div>
                    <div class="w-40">
                        <label class="block">Size</label>
                        <input id="backSize" type="range" min="20" max="80" value="50"
                               oninput="this.nextElementSibling.value = this.value" />
                        <output>50</output>
                    </div>
                    <div class="w-40">
                        <label class="block">Background Color</label>
                        <input id="backColor" type="color" value="#FFFFFF" />
                    </div>
                    <div class="w-40">
                        <label class="block">Padding</label>
                        <input id="backPadding" type="input" value="0"/>
                    </div>
                    <div class="bg-gray-400 my-4 h-px"></div>

                    <!-- back label -->
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Label</h2>
                    <div class="w-40">
                        <label class="block">Enabled</label>
                        <input id="backLabelEnabled" type="checkbox"/>
                    </div>
                    <div class="w-40">
                        <label class="block">Content</label>
                        <input id="backLabelContent" type="input"/>
                    </div>
                    <div class="w-40">
                        <label class="block">Size</label>
                        <input id="backLabelSize" type="range" min="0" max="30" value="16"
                               oninput="this.nextElementSibling.value = this.value" />
                        <output>16</output>
                    </div>
                    <div class="w-40">
                        <label class="block">Font Weight</label>
                        <select id="backLabelWeight">
                            <option value="100">100</option>
                            <option value="200">200</option>
                            <option value="300">300</option>
                            <option value="400" selected>400</option>
                            <option value="500">500</option>
                            <option value="600">600</option>
                            <option value="700">700</option>
                            <option value="800">800</option>
                        </select>
                    </div>
                    <div class="w-40">
                        <label class="block">Font color</label>
                        <input id="backLabelColor" type="color" value="#000000" />
                    </div>

                    <div class="bg-gray-400 my-4 h-px"></div>

                    <!-- back Icon -->
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Icon</h2>
                    <div class="w-40">
                        <label class="block">Enabled</label>
                        <input id="backIconEnabled" type="checkbox" checked/>
                    </div>
                    <div class="w-40">
                        <label class="block">Source URL</label>
                        <input id="backIconSource" type="input"/>
                    </div>
                    <div class="w-40">
                        <label class="block">Icon color</label>
                        <input id="backIconColor" type="color" value="#000000" />
                    </div>
                    <div class="w-40">
                        <label class="block">Size</label>
                        <input id="backIconSize" type="range" min="20" max="80" value="30"
                               oninput="this.nextElementSibling.value = this.value" />
                        <output>30</output>
                    </div>
                </fieldset>

                <!-- Botão de Trocar camera -->
                <fieldset class="border border-gray-400 p-4 rounded mb-2">
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Switch Button Style</h2>
                    <div class="w-40">
                        <label class="block">Enabled</label>
                        <input id="switchEnabled" type="checkbox" checked />
                    </div>
                    <div class="w-40">
                        <label class="block">Size</label>
                        <input id="switchSize" type="range" min="20" max="80" value="50"
                               oninput="this.nextElementSibling.value = this.value" />
                        <output>50</output>
                    </div>
                    <div class="w-40">
                        <label class="block">Background Color</label>
                        <input id="switchColor" type="color" value="#FFFFFF" />
                    </div>
                    <div class="w-40">
                        <label class="block">Padding</label>
                        <input id="switchPadding" type="input" value="0"/>
                    </div>
                    <div class="bg-gray-400 my-4 h-px"></div>

                    <!-- switch label -->
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Label</h2>
                    <div class="w-40">
                        <label class="block">Enabled</label>
                        <input id="switchLabelEnabled" type="checkbox"/>
                    </div>
                    <div class="w-40">
                        <label class="block">Content</label>
                        <input id="switchLabelContent" type="input"/>
                    </div>
                    <div class="w-40">
                        <label class="block">Size</label>
                        <input id="switchLabelSize" type="range" min="0" max="30" value="16"
                               oninput="this.nextElementSibling.value = this.value" />
                        <output>16</output>
                    </div>
                    <div class="w-40">
                        <label class="block">Font Weight</label>
                        <select id="switchLabelWeight">
                            <option value="100">100</option>
                            <option value="200">200</option>
                            <option value="300">300</option>
                            <option value="400" selected>400</option>
                            <option value="500">500</option>
                            <option value="600">600</option>
                            <option value="700">700</option>
                            <option value="800">800</option>
                        </select>
                    </div>
                    <div class="w-40">
                        <label class="block">Font color</label>
                        <input id="switchLabelColor" type="color" value="#000000" />
                    </div>

                    <div class="bg-gray-400 my-4 h-px"></div>

                    <!-- switch Icon -->
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Icon</h2>
                    <div class="w-40">
                        <label class="block">Enabled</label>
                        <input id="switchIconEnabled" type="checkbox" checked/>
                    </div>
                    <div class="w-40">
                        <label class="block">Source URL</label>
                        <input id="switchIconSource" type="input"/>
                    </div>
                    <div class="w-40">
                        <label class="block">Icon color</label>
                        <input id="switchIconColor" type="color" value="#000000" />
                    </div>
                    <div class="w-40">
                        <label class="block">Size</label>
                        <input id="switchIconSize" type="range" min="20" max="80" value="30"
                               oninput="this.nextElementSibling.value = this.value" />
                        <output>30</output>
                    </div>
                </fieldset>

                <!-- Botão de Capturar -->
                <fieldset class="border border-gray-400 p-4 rounded mb-2">
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Capture Button Style</h2>
                    <div class="w-40">
                        <label class="block">Enabled</label>
                        <input id="captureEnabled" type="checkbox" checked />
                    </div>
                    <div class="w-40">
                        <label class="block">Size</label>
                        <input id="captureSize" type="range" min="20" max="80" value="50"
                               oninput="this.nextElementSibling.value = this.value" />
                        <output>50</output>
                    </div>
                    <div class="w-40">
                        <label class="block">Background Color</label>
                        <input id="captureColor" type="color" value="#FFFFFF" />
                    </div>
                    <div class="w-40">
                        <label class="block">Padding</label>
                        <input id="capturePadding" type="input" value="0"/>
                    </div>
                    <div class="bg-gray-400 my-4 h-px"></div>

                    <!-- capture label -->
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Label</h2>
                    <div class="w-40">
                        <label class="block">Enabled</label>
                        <input id="captureLabelEnabled" type="checkbox"/>
                    </div>
                    <div class="w-40">
                        <label class="block">Content</label>
                        <input id="captureLabelContent" type="input"/>
                    </div>
                    <div class="w-40">
                        <label class="block">Size</label>
                        <input id="captureLabelSize" type="range" min="0" max="30" value="16"
                               oninput="this.nextElementSibling.value = this.value" />
                        <output>16</output>
                    </div>
                    <div class="w-40">
                        <label class="block">Font Weight</label>
                        <select id="captureLabelWeight">
                            <option value="100">100</option>
                            <option value="200">200</option>
                            <option value="300">300</option>
                            <option value="400" selected>400</option>
                            <option value="500">500</option>
                            <option value="600">600</option>
                            <option value="700">700</option>
                            <option value="800">800</option>
                        </select>
                    </div>
                    <div class="w-40">
                        <label class="block">Font color</label>
                        <input id="captureLabelColor" type="color" value="#000000" />
                    </div>

                    <div class="bg-gray-400 my-4 h-px"></div>

                    <!-- capture Icon -->
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Icon</h2>
                    <div class="w-40">
                        <label class="block">Enabled</label>
                        <input id="captureIconEnabled" type="checkbox" checked/>
                    </div>
                    <div class="w-40">
                        <label class="block">Source URL</label>
                        <input id="captureIconSource" type="input"/>
                    </div>
                    <div class="w-40">
                        <label class="block">Icon color</label>
                        <input id="captureIconColor" type="color" value="#000000" />
                    </div>
                    <div class="w-40">
                        <label class="block">Size</label>
                        <input id="captureIconSize" type="range" min="20" max="80" value="30"
                               oninput="this.nextElementSibling.value = this.value" />
                        <output>30</output>
                    </div>
                </fieldset>

                <!-- Botão de Cancelar -->
                <fieldset class="border border-gray-400 p-4 rounded mb-2">
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Cancel Button Style</h2>
                    <div class="w-40">
                        <label class="block">Enabled</label>
                        <input id="cancelEnabled" type="checkbox" checked />
                    </div>
                    <div class="w-40">
                        <label class="block">Size</label>
                        <input id="cancelSize" type="range" min="20" max="80" value="50"
                               oninput="this.nextElementSibling.value = this.value" />
                        <output>50</output>
                    </div>
                    <div class="w-40">
                        <label class="block">Background Color</label>
                        <input id="cancelColor" type="color" value="#FF0000" />
                    </div>
                    <div class="w-40">
                        <label class="block">Padding</label>
                        <input id="cancelPadding" type="input" value="0"/>
                    </div>
                    <div class="bg-gray-400 my-4 h-px"></div>

                    <!-- cancel label -->
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Label</h2>
                    <div class="w-40">
                        <label class="block">Enabled</label>
                        <input id="cancelLabelEnabled" type="checkbox"/>
                    </div>
                    <div class="w-40">
                        <label class="block">Content</label>
                        <input id="cancelLabelContent" type="input"/>
                    </div>
                    <div class="w-40">
                        <label class="block">Size</label>
                        <input id="cancelLabelSize" type="range" min="0" max="30" value="16"
                               oninput="this.nextElementSibling.value = this.value" />
                        <output>16</output>
                    </div>
                    <div class="w-40">
                        <label class="block">Font Weight</label>
                        <select id="cancelLabelWeight">
                            <option value="100">100</option>
                            <option value="200">200</option>
                            <option value="300">300</option>
                            <option value="400" selected>400</option>
                            <option value="500">500</option>
                            <option value="600">600</option>
                            <option value="700">700</option>
                            <option value="800">800</option>
                        </select>
                    </div>
                    <div class="w-40">
                        <label class="block">Font color</label>
                        <input id="cancelabelColor" type="color" value="#FFFFFF" />
                    </div>

                    <div class="bg-gray-400 my-4 h-px"></div>

                    <!-- cancel Icon -->
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Icon</h2>
                    <div class="w-40">
                        <label class="block">Enabled</label>
                        <input id="cancelIconEnabled" type="checkbox" checked/>
                    </div>
                    <div class="w-40">
                        <label class="block">Source URL</label>
                        <input id="cancelIconSource" type="input"/>
                    </div>
                    <div class="w-40">
                        <label class="block">Icon color</label>
                        <input id="cancelIconColor" type="color" value="#FFFFFF" />
                    </div>
                    <div class="w-40">
                        <label class="block">Size</label>
                        <input id="cancelIconSize" type="range" min="20" max="80" value="30"
                               oninput="this.nextElementSibling.value = this.value" />
                        <output>30</output>
                    </div>
                </fieldset>

                <!-- Botão de Confirmar -->
                <fieldset class="border border-gray-400 p-4 rounded mb-2">
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Confirm Button Style</h2>
                    <div class="w-40">
                        <label class="block">Enabled</label>
                        <input id="confirmEnabled" type="checkbox" checked />
                    </div>
                    <div class="w-40">
                        <label class="block">Size</label>
                        <input id="confirmSize" type="range" min="20" max="80" value="50"
                               oninput="this.nextElementSibling.value = this.value" />
                        <output>50</output>
                    </div>
                    <div class="w-40">
                        <label class="block">Background Color</label>
                        <input id="confirmColor" type="color" value="#FFFFFF" />
                    </div>
                    <div class="w-40">
                        <label class="block">Padding</label>
                        <input id="confirmPadding" type="input" value="0"/>
                    </div>
                    <div class="bg-gray-400 my-4 h-px"></div>

                    <!-- confirm label -->
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Label</h2>
                    <div class="w-40">
                        <label class="block">Enabled</label>
                        <input id="confirmLabelEnabled" type="checkbox"/>
                    </div>
                    <div class="w-40">
                        <label class="block">Content</label>
                        <input id="confirmLabelContent" type="input"/>
                    </div>
                    <div class="w-40">
                        <label class="block">Size</label>
                        <input id="confirmLabelSize" type="range" min="0" max="30" value="16"
                               oninput="this.nextElementSibling.value = this.value" />
                        <output>16</output>
                    </div>
                    <div class="w-40">
                        <label class="block">Font Weight</label>
                        <select id="confirmLabelWeight">
                            <option value="100">100</option>
                            <option value="200">200</option>
                            <option value="300">300</option>
                            <option value="400" selected>400</option>
                            <option value="500">500</option>
                            <option value="600">600</option>
                            <option value="700">700</option>
                            <option value="800">800</option>
                        </select>
                    </div>
                    <div class="w-40">
                        <label class="block">Font color</label>
                        <input id="confirmLabelColor" type="color" value="#000000" />
                    </div>

                    <div class="bg-gray-400 my-4 h-px"></div>

                    <!-- confirm Icon -->
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Icon</h2>
                    <div class="w-40">
                        <label class="block">Enabled</label>
                        <input id="confirmIconEnabled" type="checkbox" checked/>
                    </div>
                    <div class="w-40">
                        <label class="block">Source URL</label>
                        <input id="confirmIconSource" type="input"/>
                    </div>
                    <div class="w-40">
                        <label class="block">Icon color</label>
                        <input id="confirmIconColor" type="color" value="#000000" />
                    </div>
                    <div class="w-40">
                        <label class="block">Size</label>
                        <input id="confirmIconSize" type="range" min="20" max="80" value="30"
                               oninput="this.nextElementSibling.value = this.value" />
                        <output>30</output>
                    </div>
                </fieldset>

                <!-- Legenda -->
                <fieldset class="border border-gray-400 p-4 rounded mb-2">
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Legenda</h2>

                    <!-- confirm label -->
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Title</h2>
                    <div class="w-52">
                        <label class="block" checked>Enabled</label>
                        <input id="titleEnabled" type="checkbox"/>
                    </div>
                    <div class="w-52">
                        <label class="block">Content</label>
                        <input id="titleContent" type="input" value="Captura Facial"/>
                    </div>
                    <div class="w-52">
                        <label class="block">Size</label>
                        <input id="titleSize" type="range" min="0" max="30" value="22"
                               oninput="this.nextElementSibling.value = this.value" />
                        <output>16</output>
                    </div>
                    <div class="w-52">
                        <label class="block">Font Weight</label>
                        <select id="titleWeight">
                            <option value="100">100</option>
                            <option value="200">200</option>
                            <option value="300">300</option>
                            <option value="400">400</option>
                            <option value="500">500</option>
                            <option value="600">600</option>
                            <option value="700" selected>700</option>
                            <option value="800">800</option>
                        </select>
                    </div>
                    <div class="w-52">
                        <label class="block">Font color</label>
                        <input id="titleColor" type="color" value="#FFFFFF" />
                    </div>

                    <div class="bg-gray-400 my-4 h-px"></div>
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Subtitle</h2>
                    <div class="w-52">
                        <label class="block" checked>Enabled</label>
                        <input id="subtitleEnabled" type="checkbox"/>
                    </div>
                    <div class="w-52">
                        <label class="block">Content</label>
                        <input id="subtitleContent" type="input" value="Encaixe seu rosto no espaço abaixo"/>
                    </div>
                    <div class="w-52">
                        <label class="block">Size</label>
                        <input id="subtitleSize" type="range" min="0" max="30" value="16"
                               oninput="this.nextElementSibling.value = this.value" />
                        <output>16</output>
                    </div>
                    <div class="w-52">
                        <label class="block">Font Weight</label>
                        <select id="subtitleWeight">
                            <option value="100">100</option>
                            <option value="200">200</option>
                            <option value="300">300</option>
                            <option value="400" selected>400</option>
                            <option value="500">500</option>
                            <option value="600">600</option>
                            <option value="700">700</option>
                            <option value="800">800</option>
                        </select>
                    </div>
                    <div class="w-52">
                        <label class="block">Font color</label>
                        <input id="subtitleColor" type="color" value="#FFFFFF" />
                    </div>
                </fieldset>

                <!-- Opções -->
                <fieldset class="border border-gray-400 p-4 rounded mb-2">
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Opções gerais</h2>

                    <div class="bg-gray-400 my-4 h-px"></div>
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Face Recognizier</h2>
                    <div class="w-52">
                        <label class="block" checked>Enabled</label>
                        <input id="faceRecognizerEnabled" type="checkbox" checked/>
                    </div>
                    <div class="w-52">
                        <label class="block" checked>Auto Capture</label>
                        <input id="autoCapture" type="checkbox"/>
                    </div>
                    <div class="bg-gray-400 my-4 h-px"></div>
                    <div class="w-52">
                        <label class="block">Width</label>
                        <input id="width" type="input" value="100%"/>
                    </div>
                    <div class="w-52">
                        <label class="block">Height</label>
                        <input id="height" type="input" value="100%"/>
                    </div>
                    <div class="w-52">
                        <label class="block">Models directory</label>
                        <input id="modelsDirectory" type="input" value="/models"/>
                    </div>
                    <div class="w-52">
                        <label class="block">Font Family</label>
                        <input id="fontFamily" type="input" value="inherit"/>
                    </div>
                    <div class="bg-gray-400 my-4 h-px"></div>
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Camera presets</h2>
                    <div class="bg-gray-400 my-4 h-px"></div>
                    <h2 class="font-bold text-xl text-gray-800 mb-5 text-center">Face Recognizier</h2> <div class="w-40">
                        <label class="block">Aspect Ratio</label>
                        <select id="aspectRatio" value="1.777777777777778">
                            <option value="1.777777777777778">16/9</option>
                            <option value="0.5625">9/16</option>
                            <option value="1.333333333333333">4/3</option>
                        </select>
                    </div>

                    <div class="w-40">
                        <label class="block">Preferred Resolution</label>
                        <select id="resolution" value="480">
                            <option value="480">480p</option>
                            <option value="720">720p</option>
                            <option value="1080">1080p</option>
                        </select>
                    </div>
            
                </fieldset>
            </form>

        </div>

     
    </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue';
import { FeatureTitle, Button } from '../../components';
import { useCamera } from '@biopassid/face-sdk';

const FaceSdkFeature = defineComponent({
    components: { FeatureTitle, Button },
    setup() {
        const { takePicture } = useCamera();

        const element = ref<HTMLElement | null>(null);

        async function submit () {
            const options = {
                mask: {
                    enabled: (document.querySelector("#maskEnabled")! as any).checked,
                    type: 'face',
                    backgroundColor: (document.querySelector("#maskColor")! as any).value,
                    backgroundOpacity: (document.querySelector("#maskOpacity")! as any).value,
                    frameColor: (document.querySelector("#maskFrameColor")! as any).value,
                    frameThickness: (document.querySelector("#maskThickness")! as any).value,
                },
                backButton: {
                    enabled: (document.querySelector("#backEnabled")! as any).checked,
                    size: `${(document.querySelector("#backSize")! as any).value}px`,
                    backgroundColor: (document.querySelector("#backColor")! as any).value,
                    label: {
                        enabled: (document.querySelector("#backLabelEnabled")! as any).checked,
                        content: (document.querySelector("#backLabelContent")! as any).value,
                        fontSize: `${(document.querySelector("#backLabelSize")! as any).value}px`,
                        fontWeight: (document.querySelector("#backLabelWeight")! as any).value,
                        color: (document.querySelector("#backLabelColor")! as any).value,
                    },
                    icon: {
                        enabled: (document.querySelector("#backIconEnabled")! as any).checked,
                        source: (document.querySelector("#backIconSource")! as any).value,
                        color: (document.querySelector("#backIconColor")! as any).value,
                        size: `${(document.querySelector("#backIconSize")! as any).value}px`,
                    },
                    padding: (document.querySelector("#backPadding")! as any).value,
                },
                switchButton: {
                    enabled: (document.querySelector("#switchEnabled")! as any).checked,
                    size: `${(document.querySelector("#switchSize")! as any).value}px`,
                    backgroundColor: (document.querySelector("#switchColor")! as any).value,
                    label: {
                        enabled: (document.querySelector("#switchLabelEnabled")! as any).checked,
                        content: (document.querySelector("#switchLabelContent")! as any).value,
                        fontSize: `${(document.querySelector("#switchLabelSize")! as any).value}px`,
                        fontWeight: (document.querySelector("#switchLabelWeight")! as any).value,
                        color: (document.querySelector("#switchLabelColor")! as any).value,
                    },
                    icon: {
                        enabled: (document.querySelector("#switchIconEnabled")! as any).checked,
                        source: (document.querySelector("#switchIconSource")! as any).value,
                        color: (document.querySelector("#switchIconColor")! as any).value,
                        size: `${(document.querySelector("#switchIconSize")! as any).value}px`,
                    },
                    padding: (document.querySelector("#switchPadding")! as any).value,
                },
                captureButton: {
                    enabled: (document.querySelector("#captureEnabled")! as any).checked,
                    size: `${(document.querySelector("#captureSize")! as any).value}px`,
                    backgroundColor: (document.querySelector("#captureColor")! as any).value,
                    label: {
                        enabled: (document.querySelector("#captureLabelEnabled")! as any).checked,
                        content: (document.querySelector("#captureLabelContent")! as any).value,
                        fontSize: `${(document.querySelector("#captureLabelSize")! as any).value}px`,
                        fontWeight: (document.querySelector("#captureLabelWeight")! as any).value,
                        color: (document.querySelector("#captureLabelColor")! as any).value,
                    },
                    icon: {
                        enabled: (document.querySelector("#captureIconEnabled")! as any).checked,
                        source: (document.querySelector("#captureIconSource")! as any).value,
                        color: (document.querySelector("#captureIconColor")! as any).value,
                        size: `${(document.querySelector("#captureIconSize")! as any).value}px`,
                    },
                    padding: (document.querySelector("#capturePadding")! as any).value,
                },
                cancelButton:{
                    enabled: (document.querySelector("#cancelEnabled")! as any).checked,
                    size: `${(document.querySelector("#cancelSize")! as any).value}px`,
                    backgroundColor: (document.querySelector("#cancelColor")! as any).value,
                    label: {
                        enabled: (document.querySelector("#cancelLabelEnabled")! as any).checked,
                        content: (document.querySelector("#cancelLabelContent")! as any).value,
                        fontSize:`${ (document.querySelector("#cancelLabelSize")! as any).value}px`,
                        fontWeight: (document.querySelector("#cancelLabelWeight")! as any).value,
                        color: (document.querySelector("#cancelabelColor")! as any).value,
                    },
                    icon: {
                        enabled: (document.querySelector("#cancelIconEnabled")! as any).checked,
                        source: (document.querySelector("#cancelIconSource")! as any).value,
                        color: (document.querySelector("#cancelIconColor")! as any).value,
                        size: `${(document.querySelector("#cancelIconSize")! as any).value}px`,
                    },
                    padding: (document.querySelector("#cancelPadding")! as any).value,
                },
                confirmButton: {
                    enabled: (document.querySelector("#confirmEnabled")! as any).checked,
                    size: `${(document.querySelector("#confirmSize")! as any).value}px`,
                    backgroundColor: (document.querySelector("#confirmColor")! as any).value,
                    label: {
                        enabled: (document.querySelector("#confirmLabelEnabled")! as any).checked,
                        content: (document.querySelector("#confirmLabelContent")! as any).value,
                        fontSize: `${(document.querySelector("#confirmLabelSize")! as any).value}px`,
                        fontWeight: (document.querySelector("#confirmLabelWeight")! as any).value,
                        color: (document.querySelector("#confirmLabelColor")! as any).value,
                    },
                    icon: {
                        enabled: (document.querySelector("#confirmIconEnabled")! as any).checked,
                        source: (document.querySelector("#confirmIconSource")! as any).value,
                        color: (document.querySelector("#confirmIconColor")! as any).value,
                        size: `${(document.querySelector("#confirmIconSize")! as any).value}px`,
                    },
                    padding: (document.querySelector("#confirmPadding")! as any).value,
                },
                legend: {
                    title: {
                        enabled: (document.querySelector("#titleEnabled")! as any).checked,
                        content: (document.querySelector("#titleContent")! as any).value,
                        fontSize: `${(document.querySelector("#titleSize")! as any).value}px`,
                        fontWeight: (document.querySelector("#titleWeight")! as any).value,
                        color: (document.querySelector("#titleColor")! as any).value,
                    },
                    subtitle: {
                        enabled: (document.querySelector("#subtitleEnabled")! as any).checked,
                        content: (document.querySelector("#subtitleContent")! as any).value,
                        fontSize: `${(document.querySelector("#subtitleSize")! as any).value}px`,
                        fontWeight: (document.querySelector("#subtitleWeight")! as any).value,
                        color: (document.querySelector("#subtitleColor")! as any).value,
                    },
                },
                faceRecognizer: {
                    enabled: (document.querySelector("#faceRecognizerEnabled")! as any).checked,
                    autoCapture: (document.querySelector("#autoCapture")! as any).checked,
                },
                width: (document.querySelector("#width")! as any).value,
                height: (document.querySelector("#height")! as any).value,
                modelsDirectory: (document.querySelector("#modelsDirectory")! as any).value,
                cameraPresets: {
                    aspectRatio: (document.querySelector("#aspectRatio")! as any).value,
                    preferredResolution: (document.querySelector("#resolution")! as any).value,
                },
                fontFamily: (document.querySelector("#fontFamily")! as any).value,
            };

            const resp = await takePicture({
                element: element.value!,
                options: options as any,
            });

            console.log(resp);

            window.alert('Detect finished');
        }

        return { element, submit };
    }
});

export default FaceSdkFeature;
</script>

<style>

</style>