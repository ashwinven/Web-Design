const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');

router.get('/', (req, res) => {
    res.render("user/addOrEdit", {
        viewTitle: "Insert User"
    });
});

router.post('/', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
        else
        updateRecord(req, res);
});

function insertRecord(req, res) {
    var user = new User();
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => {
        if (!err)
            res.redirect('user/list');
        else{
             if (err.name == 'ValidationError') {
                    handleValidationError(err, req.body);
                    res.render("user/addOrEdit", {
                        viewTitle: "Insert User",
                        user: req.body
                    });
                }
                else
                    console.log('Error during record insertion : ' + err);
            }
        });
    }

    function updateRecord(req, res) {
        User.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
            if (!err)
             { res.redirect('user/list'); }
            else {
                if (err.name == 'ValidationError') {
                    handleValidationError(err, req.body);
                    res.render("user/addOrEdit", {
                        viewTitle: 'Update User',
                        user: req.body
                    });
                }
                else
                    console.log('Error during record update : ' + err);
            }
        });
    }

function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'email':
                body['emailError'] = err.errors[field].message;
                break;
            case 'password':
                body['passwordError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}

router.get('/list', (req, res) => {
    User.find((err, docs) => {
        if (!err) {
            res.render("user/list", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving user list :' + err);
        }
    });
});

router.get('/:id', (req, res) => {
    User.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("user/addOrEdit", {
                viewTitle: "Update User",
                user: doc
            });
        }
    });
});

router.get('/delete/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id,  (err, doc) => {
        if (!err) {
            res.redirect("/user/list");
        }
        else { console.log('Error in user delete :' + err); }
    });
});


module.exports = router;