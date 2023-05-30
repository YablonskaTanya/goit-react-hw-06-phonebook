import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, setFilter } from 'redux/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <label className={css.contactLabel}>
      Find contacts by name
      <input
        className={css.contactInput}
        type="text"
        name={filter}
        value={filter}
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  OnChange: PropTypes.func,
};
