import s from './RowCenteredBox.module.scss';

const RowCenteredBox = ({ children }) => <div className={s.row}>{children}</div>;
export default RowCenteredBox;
