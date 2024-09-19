import PropTypes from 'prop-types';
import { useState } from 'react';

import Input from './Input';

const Converter = ({ rates }) => {
    const [amount1, setAmount1] = useState("");
    const [amount2, setAmount2] = useState("");
    const [currency1, setCurrency1] = useState("USD");
    const [currency2, setCurrency2] = useState("UAH");

    const convert = (value, fromCurrency, toCurrency) => {
        if (fromCurrency === toCurrency) {
            return value;
        }

        if (fromCurrency === "UAH") {
            return (value / rates[toCurrency]).toFixed(2);
        } else if (toCurrency === "UAH") {
            return (value * rates[fromCurrency]).toFixed(2);
        } else {
            return ((value * rates[fromCurrency]) / rates[toCurrency]).toFixed(2);
        }
    };

    const handleAmount1Change = (e) => {
        const value = e.target.value;
        setAmount1(value);
        setAmount2(convert(value, currency1, currency2));
    };

    const handleAmount2Change = (e) => {
        const value = e.target.value;
        setAmount2(value);
        setAmount1(convert(value, currency2, currency1));
    };

    const handleCurrency1Change = (e) => {
        const newCurrency = e.target.value;
        setCurrency1(newCurrency);
        setAmount2(convert(amount1, newCurrency, currency2));
    };

    const handleCurrency2Change = (e) => {
        const newCurrency = e.target.value;
        setCurrency2(newCurrency);
        setAmount1(convert(amount2, newCurrency, currency1));
    };

    return (
        <div className="flex flex-col gap-4 mt-6 justify-center items-center">
            <Input
                amount={amount1}
                currency={currency1}
                onAmountChange={handleAmount1Change}
                onCurrencyChange={handleCurrency1Change}
            />
            <Input
                amount={amount2}
                currency={currency2}
                onAmountChange={handleAmount2Change}
                onCurrencyChange={handleCurrency2Change}
            />
        </div>
    );
};

Converter.propTypes = {
    rates: PropTypes.shape({
        USD: PropTypes.number,
        EUR: PropTypes.number,
        UAH: PropTypes.number
    }).isRequired
};

export default Converter;
