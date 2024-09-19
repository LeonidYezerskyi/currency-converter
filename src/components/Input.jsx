import PropTypes from 'prop-types';

const Input = ({ amount, currency, onAmountChange, onCurrencyChange }) => {
    return (
        <div className="flex gap-1">
            <input
                type="number"
                value={amount}
                onChange={onAmountChange}
                className="border-2 border-lime-900 p-2 rounded-lg outline-none bg-lime-100"
                min="0"
            />
            <select
                value={currency}
                onChange={onCurrencyChange}
                className="border-2 bg-lime-100 outline-none border-lime-900 p-2 rounded-lg"
            >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="UAH">UAH</option>
            </select>
        </div>
    );
};

Input.propTypes = {
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    currency: PropTypes.string.isRequired,
    onAmountChange: PropTypes.func.isRequired,
    onCurrencyChange: PropTypes.func.isRequired
};

export default Input;
