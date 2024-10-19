class AnswerNode {
	static answers: string[] = []

	static setAnswer(index: number, content: string) {
		this.answers[index] = content
	}

    static getAnswer(index: number) {
        return this.answers[index]
    }
}

export default AnswerNode