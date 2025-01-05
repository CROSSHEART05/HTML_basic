let display = document.getElementById('display');
let keys = document.querySelectorAll('.key');

let calculator = {
    displayValue: '',
    firstOperand: '',
    secondOperand: '',
    operator: '',

    init() {
        keys.forEach(key => {
            key.addEventListener('click', () => {
                this.handleKeyClick(key.id);
            });
        });
    },

    handleKeyClick(keyId) {
        switch (keyId) {
            case 'clear':
                this.clear();
                break;
            case 'backspace':
                this.backspace();
                break;
            case 'divide':
            case 'multiply':
            case 'subtract':
            case 'add':
                this.setOperator(keyId);
                break;
            case 'equals':
                this.calculate();
                break;
            default:
                this.appendNumber(keyId);
        }
        this.updateDisplay();
    },

    clear() {
        this.displayValue = '';
        this.firstOperand = '';
        this.secondOperand = '';
        this.operator = '';
    },

    backspace() {
        this.displayValue = this.displayValue.slice(0, -1);
    },

    setOperator(operator) {
        this.operator = operator;
        this.firstOperand = this.displayValue;
        this.displayValue = '';
    },

    appendNumber(number) {
        this.displayValue += number;
    },

    calculate() {
        this.secondOperand = this.displayValue;
        let result = 0;
    }
}