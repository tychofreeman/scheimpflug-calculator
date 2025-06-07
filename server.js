"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var url_1 = require("url");
// Get the directory name for ES modules
var __filename = (0, url_1.fileURLToPath)(import.meta.url);
var __dirname = path_1.default.dirname(__filename);
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3000;
var staticFile = function (fileName) { return path_1.default.join(__dirname, 'static', fileName); };
// Serve static files from the dist directory (after build)
app.use(express_1.default.static(path_1.default.join(__dirname, 'static')));
// Handle all routes by serving the index.html
app.get('/', function (_req, res) {
    res.sendFile(staticFile('index.html'));
});
// Fallback route for any other requests
app.use(function (_req, res) {
    res.sendFile(staticFile('index.html'));
});
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
