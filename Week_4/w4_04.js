function evaluateExpression(operandOne, operandTwo, operator){
	switch(operator) {
		case '+':
			return operandOne + operandTwo;
			break;
		case '-':
			return operandOne - operandTwo;
			break;
		case '*':
			return operandOne * operandTwo;
			break;
		case '/':
			return operandOne / operandTwo;
			break;
		case '%':
			return operandOne % operandTwo;
			break;
		default:
			return 'Invalid operator.'
	}
}