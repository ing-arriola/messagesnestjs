import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {

    @Get()
    listMessages() {
        return 'list all messages';
    }

    @Post()
    createMessage() {
        return 'create a message';
    }

    @Get('/:id')
    getMessage() {
        return 'get a message';
    }

}
