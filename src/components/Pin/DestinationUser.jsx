import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';

const DestinationUser = ({ destination }) => {
  return (
    <a
      className="flex items-center gap-2 p-2 pl-4 pr-4 text-[10px] font-bold text-slate-900 bg-white rounded-full opacity-70 hover:opacity-100 hover:shadow-md"
      href={destination}
      target="_blank"
      rel="noreferrer"
      onClick={(e) => e.stopPropagation()}>
      <BsFillArrowUpRightCircleFill className="text-xs" />
      {destination?.length > 15 ? `${destination?.slice(0, 15)}...` : destination}
    </a>
  );
};

export default DestinationUser;
