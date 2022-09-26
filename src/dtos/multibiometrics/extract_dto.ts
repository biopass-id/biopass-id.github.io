export default interface ExtractDTO {
    Extract: {
        Type: "FINGER" | "FACE",
        Format: "BIOPASS" | "ISO_IEC_2005_19794_2" | "ISO_IEC_2011_19794_2" | "ANSI_INCITS_378";
        Artifact: string;
    }
}