const DenominationLookup = {
    'k': 1000,
    'm': 1000000,
    b: 1000000000,
};

export default class Converter {

    static convertNumber(num) {
        let converted = 0;
        const demonination = this.getDemonination(num);
        if (demonination) {
            debugger;
            const conversionAttempt = +num.slice(0, -1) * demonination
            if (!isNaN(conversionAttempt)) {
                converted = conversionAttempt.toLocaleString();
            }
        } else {
            converted = !isNaN(num)
                ? num
                : 0;
        }

        return converted;
    }

    static getDemonination(num) {
        if (!num.length) {
            return null;
        }

        if (typeof num[num.length - 1] !== 'string') {
            return 1;
        }

        return DenominationLookup[num[num.length - 1].toLowerCase()];
    }
}