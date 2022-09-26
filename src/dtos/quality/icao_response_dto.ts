export default interface IcaoResponseDTO {
    ICAO: {
        FaceImageConformed: number;
        IsAllConformed: boolean;
        Requirements: {
            Blurred: {
                IsConformed: boolean;
                Confidence: number;
            },
            LookingAway: {
                IsConformed: boolean;
                Confidence: number;
            },
            InkMarked: {
                IsConformed: boolean;
                Confidence: number;
            },
            UnnaturalSkin: {
                IsConformed: boolean;
                Confidence: number;
            },
            TooDarkLight: {
                IsConformed: boolean;
                Confidence: number;
            },
            WashedOut: {
                IsConformed: boolean;
                Confidence: number;
            },
            Pixelation: {
                IsConformed: boolean;
                Confidence: number;
            },
            HairAcrossEyes: {
                IsConformed: boolean;
                Confidence: number;
            },
            EyesClosed: {
                IsConformed: boolean;
                Confidence: number;
            },
            VariedBackground: {
                IsConformed: boolean;
                Confidence: number;
            },
            Roll_Pitch_Yaw: {
                IsConformed: boolean;
                Confidence: number;
            },
            FlashReflectionOnSkin: {
                IsConformed: boolean;
                Confidence: number;
            },
            RedEyes: {
                IsConformed: boolean;
                Confidence: number;
            },
            ShadowsBehindHead: {
                IsConformed: boolean;
                Confidence: number;
            },
            ShadowsAcrossFace: {
                IsConformed: boolean;
                Confidence: number;
            },
            DarkTintedLenses: {
                IsConformed: boolean;
                Confidence: number;
            },
            FlashReflectionOnLenses: {
                IsConformed: boolean;
                Confidence: number;
            },
            FramesTooHeavy: {
                IsConformed: boolean;
                Confidence: number;
            },
            FramesCoveringEyes: {
                IsConformed: boolean;
                Confidence: number;
            },
            Hat_Cap: {
                IsConformed: boolean;
                Confidence: number;
            },
            VeilOverFace: {
                IsConformed: boolean;
                Confidence: number;
            },
            MouthOpen: {
                IsConformed: boolean;
                Confidence: number;
            },
            OtherFaces: {
                IsConformed: boolean;
                Confidence: number;
            }
        }
    }
}