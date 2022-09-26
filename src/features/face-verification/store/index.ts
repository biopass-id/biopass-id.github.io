import { computed, reactive } from "vue";
import useMultibiometricServices from "../../../services/multibiometrics_services";

const verifyStore = reactive({
    userName: "",
    enrollPicture: "",
    verifyPicture: "",
    match: false,
});

export default function useVerifyStore() {
    const { enrollService, verifyService } = useMultibiometricServices("f086157128364d95887467c1bc7c7c3d");

    const userName = computed({
        get: () => verifyStore.userName,
        set: (value: string) => verifyStore.userName = value,
    });

    const enrollPicture = computed(() => verifyStore.enrollPicture);
    const verifyPicture = computed(() => verifyStore.verifyPicture);
    const match = computed(() => verifyStore.match);

    /**
     * Setar a imagem via File
     */
    function setEnrollFileImage(file: File): Promise<void> {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => {
                verifyStore.enrollPicture = reader.result!.toString();
                resolve();
            };
            reader.readAsDataURL(file);
        });
    }

    /**
     * Setar imagem via base64
     */
    function setEnrollBase64Image(base64: string) {
        verifyStore.enrollPicture = base64;
    }
    /**
     * 
     * Setar a imagem via File
     */
    function setVerifyFileImage(file: File): Promise<void> {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => {
                verifyStore.verifyPicture = reader.result!.toString();
                resolve();
            };
            reader.readAsDataURL(file);
        });
    }

    /**
     * Setar imagem via base64
     */
    function setVerifyBase64Image(base64: string) {
        verifyStore.verifyPicture = base64;
    }

    async function enroll() {
        await enrollService({ customId: verifyStore.userName, face: verifyStore.enrollPicture });
    }

    async function verify() {
        const resp = await verifyService({ customId: verifyStore.userName, face: verifyStore.verifyPicture });
        verifyStore.match = resp.Person.Match;
    }

    function dispose() {
        verifyStore.userName= "";
        verifyStore.enrollPicture= "";
        verifyStore.verifyPicture= "";
        verifyStore.match = false;
    }

    return {
        userName,
        setEnrollFileImage,
        setEnrollBase64Image,
        setVerifyFileImage, 
        setVerifyBase64Image,
        enroll,
        verify,
        enrollPicture,
        verifyPicture,
        match,
        dispose,
    };
}