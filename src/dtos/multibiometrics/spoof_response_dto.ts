export default interface SpoofResponseDTO {
    Success: boolean;
    result: "Invalid JSON format" | "Image (base64) not found" | "Invalid base64 string" | "No Faces Detected" | "Multiple Faces Detected" | "Ok";
    spoof: boolean;
}