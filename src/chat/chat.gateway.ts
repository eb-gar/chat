import { WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
    cors: {
      origin: '*',
    },
})

export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() server: Server;


    handleConnection(client: Socket) {
        console.log(`Client connected: ${client.id}`);
        this.server.emit('chat_message', { user: 'System', message: `Welcome ${client.id}!` });
    }

    handleDisconnect(client: Socket) {
        console.log(`Client disconnected: ${client.id}`);
        this.server.emit('chat_message', { user: 'System', message: `Goodbye ${client.id}!` });
    }

    @SubscribeMessage('chatMessage')
  handleMessage(client: Socket, payload: { user: string; message: string }): void {
    console.log(`Mensaje recibido de ${payload.user}: ${payload.message}`);

        this.server.emit('chatMessage', payload);
    }
}