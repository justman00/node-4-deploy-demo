const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const welcomeRouter = require("./welcome/welcome-router")
const shoutsRouter = require("./shouts/shouts-router")

const server = express()
// environment variables
const port = process.env.PORT || 4000;


server.use(express.json())
server.use(helmet()) // set security headers X-Forwarder-for
server.use(cors()) // Cross origin Policy

// https://
// google.com
// originul-meu-malefic.com

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
