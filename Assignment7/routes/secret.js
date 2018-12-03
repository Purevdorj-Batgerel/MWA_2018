const express = require('express');
const crypto = require('crypto');

const router = express.Router();

router.get('/', (req, res) => {
    const collection = req.db.collection('mongo1');
    collection.findOne({}, function (err, doc) {
        if (err) throw err;

        const decipher = crypto.createDecipher('aes256', 'asaadsaad');

        decipher.on('readable', () => {
            const data = decipher.read();
            if (data) {
                res.write(data);
            }
        });

        decipher.on('end', () => {
            res.end();
        })

        decipher.write(doc.message, 'hex');
        decipher.end();
    });
});

module.exports = router;