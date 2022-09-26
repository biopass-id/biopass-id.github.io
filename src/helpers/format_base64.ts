export default function formatBase64(base64: string) {
    const parts = base64.split(',');
    return parts.length == 2 ? parts[1] : base64;
}