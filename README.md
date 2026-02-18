# API Chida 🚀

API para convertir texto e imágenes a Base64.

## Instalación

```bash
npm install
```

## Uso

```bash
# Producción
npm start

# Desarrollo (con hot reload)
npm run dev
```

## Endpoints

### GET /
Mensaje de bienvenida.

```bash
curl http://localhost:3000/
```

**Response:**
```json
{ "message": "🚀 API Chida funcionando!" }
```

---

### GET /health
Health check del servidor.

```bash
curl http://localhost:3000/health
```

**Response:**
```json
{ "status": "ok", "timestamp": "2026-02-18T02:45:00.000Z" }
```

---

### POST /text-to-base64
Convierte texto a Base64.

```bash
curl -X POST http://localhost:3000/text-to-base64 \
  -H "Content-Type: application/json" \
  -d '{"text": "Hola mundo"}'
```

**Request Body:**
```json
{ "text": "Hola mundo" }
```

**Response:**
```json
{
  "original": "Hola mundo",
  "base64": "SG9sYSBtdW5kbw=="
}
```

---

### POST /image-to-base64
Convierte una imagen a Base64.

```bash
curl -X POST http://localhost:3000/image-to-base64 \
  -F "image=@foto.png"
```

**Request:** `multipart/form-data` con campo `image`

**Response:**
```json
{
  "filename": "foto.png",
  "mimeType": "image/png",
  "size": 12345,
  "base64": "iVBORw0KGgo...",
  "dataUrl": "data:image/png;base64,iVBORw0KGgo..."
}
```

## Licencia

MIT
