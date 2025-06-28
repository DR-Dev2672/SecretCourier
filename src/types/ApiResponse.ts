import { Message } from "@/model/User.model";

export interface ApiResponse{
    success:boolean;
    message:string;
    isAcceptinMessage?:boolean;
    messages?:Array<Message>

}