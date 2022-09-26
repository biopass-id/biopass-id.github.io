import { computed } from "vue";
import { reactive } from "vue";
import useQualityServices from "../../../services/quality_service";

interface CropStore {
    image: string;
    cropedImage: string;
}

const cropStore: CropStore = reactive({
    image: "",
    cropedImage: "",
});

export default function useCropStore() {

    const { icaoCropService } = useQualityServices("5a2ab510234144ecbfb78faf820cf63c");

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
        const resp = await icaoCropService(cropStore.image);
        cropStore.cropedImage = resp.IcaoCropedImage.Image;
    }

    function dispose() {
        cropStore.image = "";
        cropStore.cropedImage = "";
    }

    return { setBase64Image, makeRequest, image, cropedImage, dispose, setFileImage };
}