const express = require("express")
const shoutsModel = require("./shouts-model")

const router = express.Router()

router.get("/", (req, res, next) => {
	shoutsModel.find()
		.then((data) => res.status(200).json(data))
		.catch((err) => next(err))
})

router.get("/:id", validateShoutId(), (req, res, next) => {
	res.status(200).json(req.shout)
})

router.post("/", (req, res, next) => {
	shoutsModel.add(req.body)
		.then((data) => res.status(201).json(data))
		.catch((err) => next(err))
})

router.delete("/:id", validateShoutId(), (req, res, next) => {
	Shouts.remove(req.params.id)
		.then(() => res.status(204).end())
		.catch((err) => next(err))
})

function validateShoutId() {
	return (req, res, next) => {
		shoutsModel.findById(req.params.id)
			.then((shout) => {
				if (shout) {
					req.shout = shout
					next()
				} else {
					res.status(404).json({
						message: "Could not find shout",
					})
				}
			})
			.catch(next)
	}
}

module.exports = router
