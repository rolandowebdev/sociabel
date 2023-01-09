import React from 'react';
import { BsLink45Deg } from 'react-icons/bs';
import { MdDownloadForOffline } from 'react-icons/md';

const PostHeader = ({ pinDetail: { image, destination } }) => {
  return (
    <div className="flex items-center justify-between">
      <a
        className="flex items-center justify-center w-10 h-10 text-left bg-white rounded-full outline-none opacity-75 text-slate-900 hover:opacity-100 hover:shadow-md hover:text-red-600"
        href={`${image?.asset?.url}?dl=`}
        onClick={(e) => e.stopPropagation()}
        download>
        <MdDownloadForOffline className="text-3xl" />
      </a>
      <a
        className="flex items-center gap-[2px] font-semibold duration-150 hover:underline hover:text-red-600"
        href={destination}
        target="_blank"
        rel="noreferrer">
        <BsLink45Deg className="text-2xl" />
        {destination?.length > 20 ? destination?.slice(8) : destination}
      </a>
    </div>
  );
};

export default PostHeader;
