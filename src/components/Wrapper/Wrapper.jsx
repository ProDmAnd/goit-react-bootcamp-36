import css from './Wrapper.module.css';

const Wrapper = ({ children }) => <div className={css.wrap}>{children}</div>;

export default Wrapper;
