import express from 'express'
import morgan from 'morgan'
import { conectDB } from './database/conection'
import { routerPost } from './routes/post'
import { validUrl } from './src/middlewares/validUrl'
import bodyParser from 'body-parser'

const app = express()
app.use(morgan('tiny'))
app.use(validUrl)
conectDB()
app.use('/api/posts', routerPost)
app.use(express.json())
app.listen(3000, () => console.log('Listening on port 3000...'))
