import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-mesage.dto';

@Controller('messages')
export class MessagesController {

    @Get()
    listMessages() {
        return 'list all messages';
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        console.log('EL BODY ES: ' + JSON.stringify(body));

    }

    @Get('/:id')
    getMessage(@Param('id') id: string) {
        console.log('EL ID ES: ' + id);
        return 'get a message';
    }

}
