import { filterStatus } from 'constants/filtres';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'redux-template/Button/Button';
import { filtersActions } from 'redux/filters/slice';
import css from './StatusFilter.module.css';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const status = useSelector(state => state.filters.status);

  const selectStatus = currentStatus => () => {
    dispatch(filtersActions.changeStatus(currentStatus));
  };
  return (
    <div className={css.wrapper}>
      <Button
        onClick={selectStatus(filterStatus.all)}
        type="button"
        selected={status === filterStatus.all}
      >
        All
      </Button>
      <Button
        onClick={selectStatus(filterStatus.active)}
        type="button"
        selected={status === filterStatus.active}
      >
        Active
      </Button>
      <Button
        onClick={selectStatus(filterStatus.completed)}
        type="button"
        selected={status === filterStatus.completed}
      >
        Completed
      </Button>
    </div>
  );
};
