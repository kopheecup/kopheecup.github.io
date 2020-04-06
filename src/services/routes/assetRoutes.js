const express = require('express');
var assets = express.Router();

const controller = require('../controllers/assetControllers.js');

// Get all assets

assets.get('/', controller.getAsset);

// Get asset by ID

assets.get('/:id', controller.getAssetById);

// Create asset

assets.post('/', controller.createAsset);

// Update asset by ID

assets.put('/:id', controller.updateAssetById);

assets.post('/', upload.single('img'), uploading);

module.exports = assets;
