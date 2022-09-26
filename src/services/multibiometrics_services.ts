import { enrollInvalidCustomId, enrollInvalidParamsError, httpRequestError } from "../constants/errors";
import PersonResponseDTO from "../dtos/multibiometrics/person_response_dto";
import { fromPersonParams } from "../dtos/multibiometrics/person_dto";
import VerifyResponseDTO from "../dtos/multibiometrics/verify_response_dto";
import formatBase64 from "../helpers/format_base64";
import http from "../helpers/http";
import { ExtractParams, MatchParams, PersonParams, WSQEncodeParams } from "../types/service_types";
import BaseResponseDTO from "../dtos/multibiometrics/person_base_response_dto";
import MatchDTO from "../dtos/multibiometrics/match_dto";
import MatchResponseDTO from "../dtos/multibiometrics/match_response_dto";
import ExtractDTO from "../dtos/multibiometrics/extract_dto";
import WSQEncodeDTO from "../dtos/multibiometrics/wsq_encode_dto";
import WSQEncodeResponseDTO from "../dtos/multibiometrics/wsq_encode_response_dto";
import WSQDecodeResponseDTO from "../dtos/multibiometrics/wsq_decode_response_dto";
import WSQDecodeDTO from "../dtos/multibiometrics/wsq_decode_dto";
import CheckDTO from "../dtos/multibiometrics/check_dto";
import CheckResponseDTO from "../dtos/multibiometrics/check_response_dto";
import SpoofResponseDTO from "../dtos/multibiometrics/spoof_response_dto";
import SpoofDTO from "../dtos/multibiometrics/spoof_dto";
import AnonymizerResponseDTO from "../dtos/multibiometrics/anonymizer_response_dto";
import ExtractResponseDTO from "../dtos/multibiometrics/extract_response_dto";

export default function useMultibiometricServices(key: string) {
   
    // ======= Funções privadas =========
    async function makePersonRequest<M extends BaseResponseDTO>(data: { params: PersonParams; method: "GET" | "POST" | "PUT" | "DELETE"; url: string; biometryRequired: boolean }): Promise<M> {
        const { params, method, url, biometryRequired } = data;

        // Verificar se possui um customID válido
        if(!params.customId || params.customId.length == 0){
            throw enrollInvalidCustomId;
        }

        // Necessário ter pelo menos uma face ou os dedos
        if(biometryRequired && !params.face && !params.fingers) {
            throw enrollInvalidParamsError;
        }

        const paramsRef = { ...params };

        // Formatar base64 da face
        if(paramsRef.face){
            paramsRef.face = formatBase64(params.face!);
        }

        const dataToSend = fromPersonParams(paramsRef);

        try {
            // Realizar requisição
            const resp = await http<M>({ url: url, token: key, method: method, body: dataToSend });

            // Caso a operação não seja realizada com sucesso lançar o erro
            if(resp.Success == false) {
                throw `generic/${resp.Message ? resp.Message.toLowerCase().split(' ').join("_") : 'failed'}`;
            }
            
            return resp;
        } catch (e) {

            // Verificar se uma string
            if(typeof e == 'string') {
                throw e;
            }

            // Verificar se é uma resposta http
            if(typeof e == 'object') {
                const error = e as Response;
                if(typeof error.status == "number" && error.status == 400) {
                    const body = await error.text();
                    const message = body.length > 0 ? `generic/${body.toLowerCase().replaceAll(' ', '_').replaceAll('.', '')}` : httpRequestError;
                    throw message;
                }
            }

            throw httpRequestError;
        }
    }

    // ======= Funções públicas ======

    const multibiometricsService = {
  
        /**
         * Operation to register an individual.
         */
        async enrollService(params: PersonParams): Promise<PersonResponseDTO> {
            return makePersonRequest<PersonResponseDTO>({ 
                biometryRequired: true, 
                method: "POST",
                params: params, 
                url: "/multibiometrics/enroll"
            });
        },

        /**
         * Operation to update a person's data.
         */
        async updateService(params: PersonParams): Promise<PersonResponseDTO> {
            return makePersonRequest<PersonResponseDTO>({ 
                biometryRequired: true, 
                method: "PUT",
                params: params, 
                url: "/multibiometrics/update"
            });
        },

        /**
         * Operation to delete a person's data.
         */
        async deleteService(params: PersonParams): Promise<Partial<PersonResponseDTO>> {
            return makePersonRequest<PersonResponseDTO>({ 
                biometryRequired: false, 
                method: "DELETE",
                params: params, 
                url: "/multibiometrics/delete"
            });
        },

        /**
         * Verify operation. It verifies if the given biometric data matches the person informed in the CustomID. 
         */
        async verifyService(params: PersonParams): Promise<VerifyResponseDTO> {
            return makePersonRequest<VerifyResponseDTO>({ 
                biometryRequired: true, 
                method: "POST",
                params: params, 
                url: "/multibiometrics/verify"
            });
        },

        /**
         * Operation that compares two biometric templates.
         */
        async matchService(params: MatchParams): Promise<MatchResponseDTO> {
            try {
                const { artifactA, artifactB, format, type } = params;

                // Dados a serem enviados
                const dataToSend: MatchDTO = {
                    Match: {
                        Type: type,
                        Artifact_A: formatBase64(artifactA),
                        Artifact_B: formatBase64(artifactB),
                        Format: format,
                    }
                };
                // Requisição
                const resp = await http<MatchResponseDTO, MatchDTO>({ url: '/multibiometrics/match', token: key, method: 'POST', body: dataToSend });

                return resp;
                
            } catch (error) {
                throw httpRequestError;
            }
        },

        /**
         * Operation to extract a template from a given biometric image (a face or a fingerprint).
         */
        async extractService(params: ExtractParams): Promise<ExtractResponseDTO> {
            try {
                const { artifact, format, type } = params;

                // Dados a serem enviados
                const dataToSend: ExtractDTO = {
                    Extract: {
                        Type: type,
                        Artifact: formatBase64(artifact),
                        Format: format,
                    }
                };
                // Requisição
                const resp = await http<ExtractResponseDTO, ExtractDTO>({ url: '/multibiometrics/extract', token: key, method: 'POST', body: dataToSend });

                return resp;
                
            } catch (error) {
                throw httpRequestError;
            }
        },

        /**
         * Fingerprint image compression operation based on the Wavelet Scalar Quantization (WSQ) method.
         */
        async wsqEncode(params: WSQEncodeParams): Promise<WSQEncodeResponseDTO> {
            try {
                const { compression, image, ppi } = params;

                // Dados a serem enviados
                const dataToSend: WSQEncodeDTO = {
                    Encode: {
                        Compression: compression,
                        Image: formatBase64(image),
                        PPI: ppi
                    }
                };

                // Requisição
                const resp = await http<WSQEncodeResponseDTO, WSQEncodeDTO>({ url: '/multibiometrics/wsq_encode', token: key, method: 'POST', body: dataToSend });

                return resp;
                
            } catch (error) {
                throw httpRequestError;
            }
        },

        /**
         * Fingerprint image decompression operation based on the Wavelet Scalar Quantization (WSQ) method.
         */
        async wsqDecode(picture: string): Promise<WSQDecodeResponseDTO> {
            try {
                // Dados a serem enviados
                const dataToSend: WSQDecodeDTO = {
                    Decode: {
                        Wsq: formatBase64(picture)
                    }
                };

                // Requisição
                const resp = await http<WSQDecodeResponseDTO, WSQDecodeDTO>({ url: '/multibiometrics/decode', token: key, method: 'POST', body: dataToSend });

                return resp;
                
            } catch (error) {
                throw httpRequestError;
            }
        },

        /**
         * Face detection operation. It returns the number of faces found and the rectangles indicating said faces in the given image.
         */
        async faceDetectService(picture: string): Promise<CheckResponseDTO> {
            try {

                // Dados a serem enviados
                const dataToSend: CheckDTO = {
                    Check: {
                        Image: formatBase64(picture)
                    }
                };

                // Requisição
                const resp = await http<CheckResponseDTO, CheckDTO>({ url: '/multibiometrics/face_detect', token: key, method: 'POST', body: dataToSend });
                resp.Picture = { base64: picture, height: 0, width: 0 };
                return resp;
                
            } catch (error) {
                throw httpRequestError;
            }
        },

        /**
         * Face spoofing detection operation.
         */
        async faceSpoofService(picture: string): Promise<SpoofResponseDTO> {
            try {
                
                // Dados a serem enviados
                const dataToSend: SpoofDTO = {
                    Spoof: {
                        Image: formatBase64(picture)
                    }
                };

                // Requisição
                const resp = await http<SpoofResponseDTO, SpoofDTO>({ url: '/multibiometrics/liveness', token: key, method: 'POST', body: dataToSend });

                return resp;
                
            } catch (error) {
                throw httpRequestError;
            }
        },

        /**
         * Face anonymization operation.
         */
        async anonymizerService(picture: string): Promise<AnonymizerResponseDTO> {
            try {
                
                // Dados a serem enviados
                const dataToSend: CheckDTO = {
                    Check: {
                        Image: formatBase64(picture)
                    }
                };

                // Requisição
                const resp = await http<AnonymizerResponseDTO, CheckDTO>({ url: '/multibiometrics/anonymizer', token: key, method: 'POST', body: dataToSend });

                return resp;
                
            } catch (error) {
                throw httpRequestError;
            }
        }
    };

    return multibiometricsService;
}


