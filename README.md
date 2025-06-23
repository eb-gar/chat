**WebSocket Chat App**  

**📌 Descripción**  
Aplicación de chat en tiempo real usando **WebSocket** con **NestJS** (backend) y **Socket.IO** (frontend). El frontend HTML está integrado directamente en el proyecto NestJS. Permite a múltiples usuarios conectarse, enviar mensajes y verlos en tiempo real, mostrando eventos en la consola del navegador (DevTools).  

**📂 Estructura del Proyecto**
```
nest-websocket-chat/
├── src/
│   ├── chat/
│   │   ├── chat.gateway.ts    # Lógica WebSocket
│   │   └── chat.module.ts     # Módulo del Gateway
│   ├── app.module.ts          # Módulo principal
│   └── main.ts                # Punto de entrada
├── public/                    # Frontend HTML/JS
│   └── index.html             # Interfaz de chat
├── package.json
└── README.md
```

**🚀 Características**  
✅ **Frontend integrado** (HTML en `/public/index.html`)  
✅ **Conexión WebSocket** en tiempo real  
✅ **Envío/recepción de mensajes** entre todos los clientes  
✅ **Registro en consola** (DevTools) de conexiones y mensajes  
✅ **Interfaz responsive** con estilos CSS  

**⚙ Configuración**  

**1. Instalación**
```bash
# Clonar repositorio (si aplica)
git clone <tu-repositorio>

# Instalar dependencias
npm install @nestjs/websockets @nestjs/platform-socket.io
```

**2. Ejecutar el proyecto**
```bash
# Modo desarrollo (con hot-reload)
npm run start:dev
```

El servidor estará en:  
- **Backend WebSocket**: `http://localhost:3000`  
- **Frontend HTML**: `http://localhost:3000/index.html`  

**📝 Uso**  
1. **Accede al chat** desde:  
   ```
   http://localhost:3000/index.html
   ```
2. **Ingresa tu nombre** (opcional, por defecto "Anónimo")  
3. **Envía mensajes** (presiona Enter o el botón "Enviar")  

**Ejemplo de logs en DevTools (F12)**
```bash
Client connected: xyz789          # Al conectarse
Mensaje recibido de Juan: Hola!  # Al recibir mensajes
```

**🔍 Detalles Técnicos**  

**Backend (NestJS)**
- **`ChatGateway`** maneja:  
  ```typescript
  @WebSocketGateway()             // Habilita WebSocket
  handleConnection(client)        // Nuevas conexiones
  handleDisconnect(client)        // Desconexiones
  @SubscribeMessage('chatMessage') // Mensajes entrantes
  ```

**Frontend (HTML integrado)**
- **Ubicación**: `public/index.html`  
- **Conexión automática** al WebSocket:  
  ```js
  const socket = io('http://localhost:3000');
  ```

**📌 Personalización**  
**Cambiar puerto**  
Modifica `main.ts`:  
```typescript
await app.listen(4000);  // Nuevo puerto
```

**Habilitar CORS seguro**  
En `chat.gateway.ts`:  
```typescript
@WebSocketGateway({
  cors: {
    origin: 'https://tudominio.com'  // Reemplaza con tu URL
  }
})
```

**📄 Licencia**  
MIT License - Libre para uso y modificación.  

---

**🎉 ¡Listo!** El frontend ya está integrado en NestJS (`public/index.html`).  
**¿Problemas?** Verifica que:  
1. El servidor esté corriendo (`npm run start:dev`).  
2. Accedas a `http://localhost:3000/index.html`.