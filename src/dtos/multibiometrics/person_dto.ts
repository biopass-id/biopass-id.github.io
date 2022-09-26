import { PersonParams } from "../../types/service_types";

export default interface PersonDTO {
    Person: {
        CustomID: string;
        Fingers?: {
            "Finger-1"?: string;
            "Finger-2"?: string;
            "Finger-3"?: string;
            "Finger-4"?: string;
            "Finger-5"?: string;
            "Finger-6"?: string;
            "Finger-7"?: string;
            "Finger-8"?: string;
            "Finger-9"?: string;
            "Finger-10"?: string;
        }[],
        Face?: { "Face-1": string }[];
    }
}

export function fromPersonParams(params:PersonParams): PersonDTO {
    const { customId, face, fingers } = params;

    const data:PersonDTO = {
        Person: {
            CustomID: customId,
        }
    };

    if(face){
        data.Person.Face = [{ "Face-1": face }];
    }

    if(fingers) {
        const {  finger1, finger2, finger3, finger4, finger5, finger6, finger7, finger8, finger9, finger10 } = fingers;
        data.Person.Fingers = [{
            "Finger-1": finger1,
            "Finger-2": finger2,
            "Finger-3": finger3,
            "Finger-4": finger4,
            "Finger-5": finger5,
            "Finger-6": finger6,
            "Finger-7": finger7,
            "Finger-8": finger8,
            "Finger-9": finger9,
            "Finger-10": finger10,
        }];
    }

    return data;
}