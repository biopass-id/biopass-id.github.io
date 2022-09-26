import PersonBaseResponseDTO from "./person_base_response_dto";

export default interface VerifyResponseDTO extends PersonBaseResponseDTO {
    Person: {
        CustomID: string;
        Match: boolean;
        MatchDetails: {
            FaceMatched: boolean;
            NonMatchedFingers: string[];
        }
    }
}