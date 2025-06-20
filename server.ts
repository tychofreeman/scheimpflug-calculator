import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import serverless from 'serverless-http';

// Get the directory name for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

const staticFile = (fileName: string) => path.join(__dirname, 'static', fileName);

// Serve static files from the dist directory (after build)
app.use(express.static(path.join(__dirname, 'static')));

// Handle all routes by serving the index.html
app.get('/', (_req, res) => {
  res.sendFile(staticFile('index.html'));
});

// Fallback route for any other requests
app.use((_req, res) => {
  res.sendFile(staticFile('index.html'));
});

// Export the serverless handler for AWS Lambda
export const handler = serverless(app);

// Only start the server if not running in Lambda
if (!process.env.AWS_LAMBDA_FUNCTION_NAME) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
