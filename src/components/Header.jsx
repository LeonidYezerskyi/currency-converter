import PropTypes from 'prop-types';

const Header = ({ rates }) => {
    return (
        <div className="bg-lime-700 font-bold p-4 rounded-lg">
            <h1 className="text-2xl font-bold pb-2 text-secondary-900 underline">Курс валют</h1>
            <div className="flex space-x-4 justify-center items-center text-secondary-200">
                {rates && (
                    <>
                        <div>1 USD = {rates.USD ? rates.USD.toFixed(2) : "Loading..."} UAH</div>
                        <div>1 EUR = {rates.EUR ? rates.EUR.toFixed(2) : "Loading..."} UAH</div>
                    </>
                )}
            </div>
        </div>
    );
};

Header.propTypes = {
    rates: PropTypes.shape({
        USD: PropTypes.number,
        EUR: PropTypes.number
    }).isRequired
};

export default Header

