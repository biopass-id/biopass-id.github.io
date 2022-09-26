import { computed } from "vue";
import { reactive } from "vue";
import useMultibiometricServices  from '../../../services/multibiometrics_services';
interface AnonymizerStore {
    image: string;
    anonymizedImage: string;
}

const anonymizerStore: AnonymizerStore = reactive({
    image: "",
    anonymizedImage: "",
});

export default function useAnonymizerStore() {

    const { anonymizerService } = useMultibiometricServices("f086157128364d95887467c1bc7c7c3d");

    const image = computed(() => anonymizerStore.image);
    const anonymizedImage = computed(() => `data:image/png;base64,${anonymizerStore.anonymizedImage}`);


    function setFileImage(file: File): Promise<void> {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => {
                anonymizerStore.image = reader.result!.toString();
                resolve();
            };
            reader.readAsDataURL(file);
        });
    }

    function setBase64Image(base64: string) {
        anonymizerStore.image = base64;
    }

    async function makeRequest() {
        const resp = await anonymizerService(anonymizerStore.image);
        anonymizerStore.anonymizedImage = resp.FaceAnonymizer.Image;
    }

    function dispose() {
        anonymizerStore.image = "";
        anonymizerStore.anonymizedImage = "";
    }

    return { setBase64Image, makeRequest, image, anonymizedImage, dispose, setFileImage };
}