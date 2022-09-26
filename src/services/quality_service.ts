import { httpRequestError } from "../constants/errors";
import CheckDTO from "../dtos/multibiometrics/check_dto";
import IcaoCropResponseDTO from "../dtos/quality/icao_crop_response_dto";
import IcaoResponseDTO from "../dtos/quality/icao_response_dto";
import NFIQResponseDTO from "../dtos/quality/nfiq_response_dto";
import formatBase64 from "../helpers/format_base64";
import http from "../helpers/http";

export default function useQualityServices(key: string) {
    const qualityServices = {
        /**
         * Face image quality assessment operation following the ISO/IEC 19794-5 (ICAO) requirements. 
         * View more: {@link https://docs.biopassid.com/#6b0f1a2c-f032-473d-b30f-ae5f24fc2b51}
         */
        async icaoQualityCheckService(picture: string): Promise<IcaoResponseDTO> {
            try {
              

                // Dados a serem enviados
                const dataToSend: CheckDTO = {
                    Check: {
                        Image: formatBase64(picture)
                    }
                };

                // Requisição
                const resp = await http<IcaoResponseDTO, CheckDTO>({ url: '/quality/check_icao', token: key, method: 'POST', body: dataToSend });

                return resp;
                
            } catch (error) {
                throw httpRequestError;
            }
        },

        /**
         * Face image crop operation following the ISO/IEC 19794-5 (ICAO) requirements. It considers the individual's eye coordinates and face geometry in order to perform the crop operation.
         * View more: {@link https://docs.biopassid.com/#c91b1e23-31b7-4f20-9909-525ead6e66a6}
         */
        async icaoCropService(picture: string): Promise<IcaoCropResponseDTO> {
            try {
         

                // Dados a serem enviados
                const dataToSend: CheckDTO = {
                    Check: {
                        Image: formatBase64(picture)
                    }
                };

                // Requisição
                const resp = await http<IcaoCropResponseDTO, CheckDTO>({ url: '/quality/icao_crop', token: key, method: 'POST', body: dataToSend });

                return resp;
                
            } catch (error) {
                throw httpRequestError;
            }
        },

        /**
         * Fingerprint image quality assessment operation following the NIST (Fingerprint Image Quality) standard, part of ISO/IEC 29794-4.
         * View more: {@link https://docs.biopassid.com/#4e529987-93c9-4676-8935-b3c5e9595b16}
         */
        async checkNfiqService(picture: string): Promise<NFIQResponseDTO> {
            try {

                // Dados a serem enviados
                const dataToSend: CheckDTO = {
                    Check: {
                        Image: formatBase64(picture)
                    }
                };

                // Requisição
                const resp = await http<NFIQResponseDTO, CheckDTO>({ url: '/quality/check_nfiq', token: key, method: 'POST', body: dataToSend });

                return resp;
                
            } catch (error) {
                throw httpRequestError;
            }
        }
    };

    return qualityServices;
}