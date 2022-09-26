import { computed } from "vue";
import { reactive } from "vue";
import useMultibiometricServices  from '../../../services/multibiometrics_services';

interface CropStore {
    image: string;
    cropedImage: string;
}

const cropStore: CropStore = reactive({
    image: "",
    cropedImage: "",
});

export default function useCropStore() {

    const { faceDetectService } = useMultibiometricServices("f086157128364d95887467c1bc7c7c3d");

    const image = computed(() => cropStore.image);
    const cropedImage = computed(() => `data:image/png;base64,${cropStore.cropedImage}`);


    function setFileImage(file: File): Promise<void> {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => {
                cropStore.image = reader.result!.toString();
                resolve();
            };
            reader.readAsDataURL(file);
        });
    }

    function setBase64Image(base64: string) {
        cropStore.image = base64;
    }

    async function makeRequest() {
        const resp = await faceDetectService(cropStore.image);
        cropStore.cropedImage = resp.Picture.base64;
    }

    function dispose() {
        cropStore.image = "";
        cropStore.cropedImage = "";
    }

    return { setBase64Image, makeRequest, image, cropedImage, dispose, setFileImage };
}