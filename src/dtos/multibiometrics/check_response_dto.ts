import { Picture } from "../../types/service_types";

export default interface CheckResponseDTO {
    DetectedFaces: {
        FaceNumber: number;
        FaceRects: {
            x: number;
            y: number;
            width: number;
            height: number;
        }[]
    },
    Picture: Picture;
}