var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});
 
router.post('/sendMail',function (req,res,next) {
    var msg = {
        to: 'vikas.weddingplanners@gmail.com',
        from: 'donotreply@vikasevents.com',
        subject: 'Event Request',
        text: req.body.message,
        html: '<strong>Contact Number: '+req.body.phone+'</strong>'
    };
    sgMail.send(msg,function (err,json) {
        if(err){
            throw err;
        }

       res.send({'success':true});
    });
});

router.get('/getMenu',function (req,res,next) {
    res.render('menu.html');
})
module.exports = router;
