const { Router } = require('express')
const router = Router()
const request = require('request')

// GET /admin/products.json
router.get('/products', function (req, res, next) {
    request('https://e24cdb74b4c5b5ff015b6fc37ab63226:41f51c6077e848c139e6466fc4d119b9@callumdev.myshopify.com/admin/products.json', function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        res.send(response);
    });
})
module.exports = router
