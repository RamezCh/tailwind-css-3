import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
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

px-0 is padding left & right (0 is 0px)
py-0 is padding top & bottom
pt, pr, pb, pl (top, right, bottom, left)
*/
