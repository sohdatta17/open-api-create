const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = 3000;

// Swagger Definition
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Sample OpenAPI',
      version: '1.0.0',
      description: 'This is a sample OpenAPI for demonstrating an Express server',
    },
  },
  apis: ['./index.js'], // Point to the file where your API definitions are
};

// Initialize Swagger
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Sample Endpoint
/**
 * @swagger
 * /hello:
 *   get:
 *     summary: Returns a hello world message
 *     responses:
 *       200:
 *         description: A hello world message
 */
app.get('/hello', (req, res) => {
  res.status(200).json({ message: 'Hello, World!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`Swagger docs are available at http://localhost:${port}/api-docs`);
});
