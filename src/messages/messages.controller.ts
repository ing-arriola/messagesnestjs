import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-mesage.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {

    constructor(public messagesService: MessagesService) { }


    /*  messagesService: MessagesService;
    constructor() {
        //DON'T DO THIS IN A REAL APP
        // USE DEPENDENCY INJECTION
        this.messagesService = new MessagesService();
    } */

    @Get()
    listMessages() {
        return this.messagesService.findAll();
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        return this.messagesService.create(body.content);
    }

    @Get('/:id')
    async getMessage(@Param('id') id: string) {
        const message = await this.messagesService.findOne(id);
        if (!message) {
            throw new NotFoundException('Message not found');
        }
        return message;
    }

}
