import PersonBaseResponseDTO from "./person_base_response_dto";

export default interface PersonResponseDTO extends PersonBaseResponseDTO {
    Person: {
        ClientID: string;
        CustomID: string;
        BioPassID: string;
    }
}