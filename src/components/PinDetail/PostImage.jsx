import { urlFor } from '../../utils/sanityClient';

function PostImage({ pinDetail: { image } }) {
  return (
    <div className="flex-1">
      <img className="rounded-md" src={image && urlFor(image).url()} alt="user-post" />
    </div>
  );
}

export default PostImage;
