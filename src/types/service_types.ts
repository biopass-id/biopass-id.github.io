// ==============================
//  Parametros dos serviços 
// ==============================
export interface Picture {
    base64: string;
    width: number;
    height: number;
}

export interface Fingers {
    finger1?: string;
    finger2?: string;
    finger3?: string;
    finger4?: string;
    finger5?: string;
    finger6?: string;
    finger7?: string;
    finger8?: string;
    finger9?: string;
    finger10?: string;
}


/**
 * Parametro generico para serviços que usam imagens
 */
export interface ImageParams {
    picture: Picture;
}

/**
 * Parametros das chamadas dos serviços que utilizam o objeto Person
 */
export interface PersonParams {
    customId: string;
    fingers?: Fingers;
    face?: string;
}

/**
 * Match
 */
export interface MatchParams {
    type: "FINGER" | "FACE";
    format: "BIOPASS" | "ISO_IEC_2005_19794_2" | "ISO_IEC_2011_19794_2" | "ANSI_INCITS_378";
    artifactA: string;
    artifactB: string;
}

/**
 * Extract
 */
export interface ExtractParams {
    type: "FINGER" | "FACE";
    format: "BIOPASS" | "ISO_IEC_2005_19794_2" | "ISO_IEC_2011_19794_2" | "ANSI_INCITS_378";
    artifact: string;
}

/**
 * WSQ Encode
 */
export interface WSQEncodeParams {
    image: string;
    compression: number;
    ppi: number;
}