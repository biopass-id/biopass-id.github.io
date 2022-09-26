import { computed } from "vue";
import { reactive } from "vue";
import useMultibiometricServices  from '../../../services/multibiometrics_services';

interface LivenessStore {
    image: string;
    spoof: boolean;
}

const livenessStore: LivenessStore = reactive({
    image: "",
    spoof: false,
});

export default function useLivenessStore() {

    const { faceSpoofService } = useMultibiometricServices("f086157128364d95887467c1bc7c7c3d");

    const image = computed(() => livenessStore.image);
    const spoof = computed(() => livenessStore.spoof);


    function setFileImage(file: File): Promise<void> {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => {
                livenessStore.image = reader.result!.toString();
                resolve();
            };
            reader.readAsDataURL(file);
        });
    }

    function setBase64Image(base64: string) {
        livenessStore.image = base64;
    }

    async function makeRequest() {
        const resp = await faceSpoofService(livenessStore.image);
        livenessStore.spoof = resp.spoof;
    }

    function dispose() {
        livenessStore.image = "";
        livenessStore.spoof = false;
    }

    return { setBase64Image, makeRequest, image, spoof, dispose, setFileImage };
}