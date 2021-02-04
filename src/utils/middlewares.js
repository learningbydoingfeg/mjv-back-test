const jwt = require('jsonwebtoken')

module.exports = {
  auth(req, res, next){
    
    try{  
      const { authorization } = req.headers
      if(!authorization){
        throw Error('your session has expired')
      }

      const [bearer, token] = req.headers.authorization.split(' ')
      
      if(!token){
        throw Error('your session has expired')
      }
      
      const { id } = jwt.verify(token, process.env.SECRET )
      
      req.user = id

      next()
    }
    catch(err){
       res.status(401).json({ message: err.message })
    }
  
  }
}