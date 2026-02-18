const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer({ storage: multer.memoryStorage() });
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: '🚀 API Chida funcionando!' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// POST /text-to-base64 - Convierte texto a base64
app.post('/text-to-base64', (req, res) => {
  const { text } = req.body;
  
  if (!text) {
    return res.status(400).json({ error: 'Se requiere el campo "text"' });
  }
  
  const base64 = Buffer.from(text, 'utf-8').toString('base64');
  res.json({ original: text, base64 });
// POST /image-to-base64 - Convierte imagen a base64
app.post('/image-to-base64', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Se requiere un archivo "image"' });
  }
  
  const base64 = req.file.buffer.toString('base64');
  const mimeType = req.file.mimetype;
  const dataUrl = `data:${mimeType};base64,${base64}`;
  
  res.json({
    filename: req.file.originalname,
    mimeType,
    size: req.file.size,
    base64,
    dataUrl
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 API Chida corriendo en http://localhost:${PORT}`);
});
