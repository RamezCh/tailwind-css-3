import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="">
      <h1 className="text-center text-xl font-semibold">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;

/*
text-color-intensity
text-property (inherit, transparent)
bg-name-intensity
text-position (left, center, right)
text-size (xs, sm, base, lg ,xl till 9xl)
font-weight(thin, extralight, light, normal, medium, semibold, bold..)
*/
