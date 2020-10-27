var controllers=require('../controllers/controller')
var jwt=require('../utils/auth')


function api(appExpress){
appExpress.post('/api/register',controllers.stuRegister)
appExpress.post('/api/login',controllers.stuLogin)
appExpress.post('/api/logout',controllers.logout)
appExpress.get('/api/getUsers',jwt.verifyToken,controllers.getUsers)
appExpress.post('/api/getUserById',jwt.verifyToken,controllers.getUserById)

appExpress.post('/api/updatePassword',jwt.verifyToken,controllers.updatePassword)
appExpress.post('/api/deleteUser',jwt.verifyToken,controllers.deleteUser)








}
module.exports={
    api
}