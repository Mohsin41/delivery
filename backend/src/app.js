const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const passport = require('passport')
const cors = require('cors')

require('./models/product.js')
const User = require('./models/user.js')

const mongooseConnection = require('./database-connection')

const indexRouter = require('./routes/index')
const productsRouter = require('./routes/products')
const usersRouter = require('./routes/users')
const accountRouter = require('./routes/account.js')

const app = express()

app.use(
  cors({
    origin: true,
    credentials: true,
  })
)
if (app.get('env') == 'development') {
  /* eslint-disable-next-line */
  app.use(require('connect-livereload')())
  /* eslint-disable-next-line */
  require('livereload')
    .createServer({ extraExts: ['pug'], usePolling: true })
    .watch([`${__dirname}/public`, `${__dirname}/views`])
}
app.set('trust proxy', 1)
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())


app.use(
  session({
    secret: 'thisisasupersecuresecretsecret',
    store: new MongoStore({ mongooseConnection, stringify: false }),
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      path: '/',
      sameSite: process.env.NODE_EV == 'production' ? 'none' : 'strict',
      secure: process.env.NODE_EV == 'production',
    },

  
  })
)
app.use(passport.initialize())
app.use(passport.session())

passport.use(User.createStrategy())

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/products', productsRouter)
app.use('/users', usersRouter)
app.use('/account', accountRouter)
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')

})

module.exports = app
