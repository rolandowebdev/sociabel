import { Link } from 'react-router-dom';
import { BsUpload } from 'react-icons/bs';

function Menu({ user }) {
  return (
    <div className="flex gap-3">
      <Link
        to="create-pin"
        className="flex text-[15px] items-center px-3 justify-center text-red-500 border-2 border-red-600 hover:bg-red-500 hover:text-white duration-200 rounded-md">
        <BsUpload size={20} />
      </Link>
      <Link className="w-12 overflow-hidden bg-black rounded-md" to={`user-profile/${user?._id}`}>
        <img className="w-full h-full" src={user?.image} alt={user?.username} />
      </Link>
    </div>
  );
}

export default Menu;
