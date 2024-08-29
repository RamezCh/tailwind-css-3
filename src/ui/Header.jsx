import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="bg-yellow-500 uppercase">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;

/*
tracking-width(tighter, tight, normal, wide, wider, widest) is letter spacing

we can also do tracking-[our value for e.g. 5px]

[] is an escape hatch, where we can escape the pre-defined tailwind css
*/
