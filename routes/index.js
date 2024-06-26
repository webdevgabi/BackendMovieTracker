const router = require('express').Router();

const loginRoute = require('./login');
router.use('/login', loginRoute);

const signupRoute = require('./signup');
router.use('/signup', signupRoute);

const logoutRoute = require('./logout');
router.use('/logout', logoutRoute);

const noPageRoute = require('./noPage');
router.use('/*', noPageRoute);

module.exports = router;