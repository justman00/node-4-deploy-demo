const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
	res.status(200).json({
		message: "Welcome " + process.env.STEP_IT,
	})
})

module.exports = router
