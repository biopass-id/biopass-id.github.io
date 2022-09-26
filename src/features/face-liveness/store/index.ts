import { computed } from "vue";
import { reactive } from "vue";
import useMultibiometricServices  from '../../../services/multibiometrics_services';

interface LivenessStore {
    image: string;
    success: boolean;
    spoofResult: string;
}

const livenessStore: LivenessStore = reactive({
    image: "",
    success: false,
    spoofResult: "",
});

export default function useLivenessStore() {

    const { faceSpoofService } = useMultibiometricServices("f086157128364d95887467c1bc7c7c3d");

    const image = computed(() => livenessStore.image);
    const success = computed(() => livenessStore.success);
    const result = computed(() => livenessStore.spoofResult);


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
        livenessStore.success = resp.Success && !resp.spoof;
        livenessStore.spoofResult = resp.spoof == true ? 'Attack' : resp.result;
    }

    function dispose() {
        livenessStore.image = "";
        livenessStore.success = false;
        livenessStore.spoofResult = "";

    }

    return { setBase64Image, makeRequest, image, success, dispose, setFileImage, result };
}