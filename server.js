const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://cdn.tailwindcss.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com"],
            scriptSrc: ["'self'", "https://cdn.tailwindcss.com"],
            imgSrc: ["'self'", "data:", "https:"],
            connectSrc: ["'self'"]
        }
    }
}));

// Compression middleware
app.use(compression());

// Serve static files
app.use(express.static(path.join(__dirname), {
    maxAge: '1h',
    setHeaders: (res, path) => {
        if (path.endsWith('.html')) {
            res.setHeader('Cache-Control', 'no-cache');
        }
    }
}));

// API endpoint for translations
app.get('/api/translations/:lang', (req, res) => {
    const lang = req.params.lang;
    const allowedLangs = ['pt', 'en', 'es'];
    
    if (!allowedLangs.includes(lang)) {
        return res.status(400).json({ error: 'Invalid language' });
    }
    
    res.sendFile(path.join(__dirname, 'i18n', `${lang}.json`));
});

// Serve index.html for all routes (SPA fallback)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`CryptoLar Conference server running on http://localhost:${PORT}`);
});

module.exports = app;