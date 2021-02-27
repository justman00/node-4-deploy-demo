const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const welcomeRouter = require("./welcome/welcome-router")
const shoutsRouter = require("./shouts/shouts-router")

const server = express()
const port = 4000

server.use(express.json())
server.use(helmet())
server.use(cors())

server.use("/", welcomeRouter)
server.use("/shouts", shoutsRouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})
