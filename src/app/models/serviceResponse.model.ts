import { Team } from "./componente-squadra.model"
export class ServiceResponse{
    data : Team[];
    constructor(data: Team[]){
        this.data = data;
    }
}