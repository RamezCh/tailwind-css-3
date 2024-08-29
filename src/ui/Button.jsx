import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base = '';

  if (to) return <Link to={to}>{children}</Link>;

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );

  return <button disabled={disabled}>{children}</button>;
}

export default Button;
