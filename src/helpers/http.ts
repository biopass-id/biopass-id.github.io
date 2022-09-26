const baseUrl = "https://api.biopassid.com";

export default async function http<R, M = any>(data: { url: string, method: "GET" | "POST" | 'PUT' | 'DELETE', body?: M, token: string }) {

    const { url, method, body, token } = data;

    const resp = await fetch(baseUrl + url, {
        method: method, 
        body: body != null ? JSON.stringify(body) : undefined, 
        headers: { 
            'Ocp-Apim-Subscription-Key': token,
            'Content-Type': 'application/json'
        } 
    });

    if(resp.status >= 400) {
        throw resp;
    }

    const responseData = await resp.json();

    return responseData  as R; 
}