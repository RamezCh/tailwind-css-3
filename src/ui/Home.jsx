import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 text-center sm:my-16">
      <h1 className="mb-8 px-4 text-xl font-semibold md:text-3xl">
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

mx-0 is margin left & right (0 is 0px)
my-0 is margin top & bottom
mt, mr, mb, ml (top, right, bottom, left)
m-auto (margin auto)

Tailwind has 5 break points
sm min-width: 640px
md min-width: 768px
lg min-width: 1024px
xl min-width: 1280px
2xl min-width: 1536px
*/
