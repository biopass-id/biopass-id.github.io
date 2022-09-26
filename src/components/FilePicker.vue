<template>
    <label class="flex items-center border-2 border-primary border-dashed rounded-[1.25rem] p-8 relative cursor-pointer">
        <input type="file" accept="image/png, image/jpeg, image/webp" class="hidden" @change="fileChange" ref="inputRef"/>
        <div class="m-16">
            <SelectPictureIcon class="w-20 mx-auto mb-5"/>
            <p class="text-center text-gray-800 w-44 text-xl font-bold">Drag and drop files to upload</p>
        </div>
        <div class="h-44 w-px bg-gray-200"></div>
        <Button class="w-40 m-16">Browse</Button>

        <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center backdrop-blur-xl rounded-[1.25rem]" v-if="dragOver">
            <p class="text-center text-gray-800 w-44 text-xl font-bold">Drop to send</p>
        </div>

        <div class="absolute top-0 left-0 right-0 bottom-0"
             @dragover="(e) => e.preventDefault()"
             @dragenter="dragEnter"
             @dragleave="dragLeave"
             @drop="drop">
        </div>

    </label>
</template>

<script lang='ts'>
import { computed, defineComponent, nextTick, PropType, ref, watch } from 'vue';
import { SelectPictureIcon } from '../icons';
import Button from './Button.vue';

const FilePicker = defineComponent({
    components: { SelectPictureIcon, Button },
    props: {
        modelValue: {
            type: Object as PropType<File>,
        },
        placeholder: {
            type: String,
        },
        fileName: {
            type: String,
        }
    },
    setup(props, context){
        const inputRef = ref<HTMLInputElement | null>(null);
        const dragOver = ref(false);
        watch(() => props.modelValue, () => {
            if(inputRef.value) {
                inputRef.value.value = '';
            }
        });

        const preview = computed(() => {
            if(props.modelValue) {
                return  URL.createObjectURL(props.modelValue);
            }
            if(props.placeholder) {
                return props.placeholder;
            }
            return null;
        });
        
        // Métodos
        const loadFile = (file: File) => {
            if(file.size < 800 * 1024) {
                context.emit('update:modelValue', file);
                nextTick(() => {
                    context.emit('fileSelected', file);
                });
            }
            else {
                context.emit('error', 'As imagens devem possuir no máximo 800kb');
                if(inputRef.value) {
                    inputRef.value.value = "";
                }
            }
        };
        
        const dragEnter = (e: DragEvent) => {
            e.preventDefault();
            dragOver.value = true;
        };
        const dragLeave = (e: DragEvent) => {
            e.preventDefault();
            dragOver.value = false;
        };
        const drop = (e: DragEvent) => {
            e.preventDefault();
            dragOver.value = false;
            const file = e.dataTransfer!.files[0];
            if(file != null && (file.type === 'image/jpeg' || file.type === 'image/png')) {
                loadFile(file);
            }
        };
        const fileChange = (e: Event) => {
            const files = (e.target as HTMLInputElement).files;
            if(files != null && files[0] != null) {
                if(props.fileName) {
                    const fileParts = files[0].name.split('.');
                    const extension = fileParts[fileParts.length -1];
                    const fileName = `${props.fileName}.${extension}`;
                    const newFile = new File([files[0]], fileName, { lastModified: files[0].lastModified, type: files[0].type, });
                    loadFile(newFile);
                }
                else {
                    loadFile(files[0]);
                }
            }
        };
        return { dragEnter, dragLeave, drop, fileChange, inputRef, dragOver,preview };
    }
});
export default FilePicker;
</script>

<style>
</style>