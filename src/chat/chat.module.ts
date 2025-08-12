import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatGateway } from './chat.gateway';
import { ChatService } from './chat.service';
import { MessageEntity } from './entities/message.entity';

@Module({
	imports: [TypeOrmModule.forFeature([MessageEntity])],
	providers: [ChatGateway, ChatService],
	exports: [ChatService],
})
export class ChatModule {}
