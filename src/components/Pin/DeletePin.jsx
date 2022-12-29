import { AiTwotoneDelete } from 'react-icons/ai';
import { client } from '../../utils/sanityClient';

const DeletePin = ({ _id }) => {
  const deletePin = (id) => {
    client.delete(id).then(() => {
      window.location.reload();
    });
  };
  return (
    <div className="flex items-center justify-between w-full gap-2">
      <button
        className="p-2 text-base font-bold bg-white outline-none text-slate-900 opacity-70 hover:opacity-100 rounded-3xl hover:shadow-md"
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          deletePin(_id);
        }}>
        <AiTwotoneDelete className="text-xs" />
      </button>
    </div>
  );
};

export default DeletePin;
