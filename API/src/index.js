import express from 'express'
import 'dotenv/config'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json())


server.listen(process.env.PORT, () => console.log(`API online na Porta ${process.env.PORT}`))