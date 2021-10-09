const router = require('express-promise-router')();
const assetController = require('../controllers/assets');

router.route('/assets')
      .get(assetController.getAssets)

router.route('/asset')
      .get(assetController.getAsset)  

module.exports = router;