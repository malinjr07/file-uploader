import React, { FC } from 'react';
import { PropsType } from 'utils/types';

const EditBtn: FC<PropsType> = (props) => {
  return (
    <button
      type='button'
      {...props}
      className='px-3 py-1 rounded-xl absolute top-3 text-white left-1 capitalize bg-gray-600 scale-0 transition-all group-hover:scale-100 '
    >
      change
    </button>
  );
};

export default EditBtn;
