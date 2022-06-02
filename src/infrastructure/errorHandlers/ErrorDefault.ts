import * as moment from "moment";

export class ErrorDefault{
    private status:number;
    private message:string;
    private timestamp:number;

    constructor(status:number, message:string){
        this.status = status;
        this.message = message;
        this.timestamp = moment().unix();
    }

    getError(){
        return {
            status:this.status,
            message:this.message,
            timestamp: this.timestamp
        }
    }
}