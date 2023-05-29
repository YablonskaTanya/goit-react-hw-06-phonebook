import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, OnChange }) => {
  return (
    <label className={css.contactLabel}>
      Find contacts by name
      <input
        className={css.contactInput}
        type="text"
        name="filter"
        value={filter}
        onChange={OnChange}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  OnChange: PropTypes.func,
};
