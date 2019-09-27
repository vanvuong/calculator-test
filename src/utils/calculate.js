export default (operation) => {
    const operationRegex = new RegExp('([\\d]+\\.?[\\d]*)?([-+/*][\\d]+\\.?[\\d]*)*');
    const matched = operationRegex.exec(operation);

    if (!matched) {
        return 0;
    }

    if (/^[*+\/]/.test(operation)) {
        return () => {
            throw new Error('Incorrect operation!')
        }
    }

    return new Function(`return ${matched[0]}`)()
}