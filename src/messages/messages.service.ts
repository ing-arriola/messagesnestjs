import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";

@Injectable()
export class MessagesService {

    constructor(public messagesRepo: MessagesRepository) { }


    // constructor() {
    //     //services is creating its onw dependencies
    //     //DON'T DO THIS IN A REAL APP
    //     this.messagesRepo = new MessagesRepository();
    // }

    findOne(id: string) {
        return this.messagesRepo.findOne(id);
    }

    findAll() {
        return this.messagesRepo.findAll();
    }

    create(content: string) {
        return this.messagesRepo.create(content);
    }
}