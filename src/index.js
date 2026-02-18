const express = require('express');

const app = express();
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
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 API Chida corriendo en http://localhost:${PORT}`);
});
