import { computed } from "vue";
import { reactive } from "vue";
import useQualityServices from "../../../services/quality_service";

interface ComplianceStore {
    image: string;
    results: { key: string, isConformed: boolean }[];
}

const complianceStore: ComplianceStore = reactive({
    image: "",
    results: [],
});

export default function useComplianceStore() {

    const { icaoQualityCheckService } = useQualityServices("5a2ab510234144ecbfb78faf820cf63c");

    const image = computed(() => complianceStore.image);
    const results = computed(() => complianceStore.results);

    function _mapIcaoResult(data: { [key: string]: {  IsConformed: boolean; Confidence: number;}}): { key: string, isConformed: boolean }[] {
        return Object.entries(data).map(([key, value]) => {
            return {
                key: key,
                isConformed: value.IsConformed,
            };
        });
    }

    function setFileImage(file: File): Promise<void> {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => {
                complianceStore.image = reader.result!.toString();
                resolve();
            };
            reader.readAsDataURL(file);
        });
    }

    function setBase64Image(base64: string) {
        complianceStore.image = base64;
    }

    async function makeRequest() {
        const resp = await icaoQualityCheckService(complianceStore.image);
        complianceStore.results = _mapIcaoResult(resp.ICAO.Requirements);
    }

    function dispose() {
        complianceStore.image = "";
        complianceStore.results = [];
    }

    return { setBase64Image, makeRequest, image, results, dispose, setFileImage };
}