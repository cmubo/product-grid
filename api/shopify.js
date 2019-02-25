const express = require('express')

// Create express instnace
const app = express()

// Require API routes
const productsRoute = require('./shopify/products')

// Import API Routes
app.use(productsRoute);

// Export the server middleware
module.exports = {
    path: '/shopify',
    handler: app
}