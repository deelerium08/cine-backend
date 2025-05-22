const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const movieRoutes = require('./routes/movieRoutes');
app.use('/auth', authRoutes);
app.use('/movies', movieRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('🎬 Backend funcionando');
});

// Conexión a MongoDB y arranque del servidor
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log('✅ MongoDB conectado');
        app.listen(process.env.PORT || 3000, () => {
            console.log(`🚀 Servidor en http://localhost:${process.env.PORT || 3000}`);
        });
    })
    .catch(err => {
        console.error('❌ Error conectando a MongoDB:', err);
    });
