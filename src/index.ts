import express from "express"
import config from "./config"
import AnswerNode from "./answer-node"

const app = express()
const port = config.port

app.use(express.text())


app.post(
	"/publish/:answerId",
	function (request: express.Request, response: express.Response): any {
		const answerId = request.params.answerId
		AnswerNode.setAnswer(parseInt(answerId), request.body)

		return response.send("Ok Published.")
	}
)

app.post(
	"/recieve/:answerId",
	function (request: express.Request, response: express.Response): any {
		const answerId = request.params.answerId
		const answer = AnswerNode.getAnswer(parseInt(answerId))
		if (!answer) {
			return response.send(`No answer for question: ${answerId}`)
		}

		return response.send(answer)
	}
)

app.listen(port, ()=> {
    console.log(`Answer node started on port: ${port}`);
})