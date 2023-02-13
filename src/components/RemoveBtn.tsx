import React, { FC } from 'react';
import { PropsType } from 'utils/types';

const RemoveBtn: FC<PropsType> = (props) => {
  return (
    <button
      type='button'
      {...props}
      className='w-6 h-6 absolute top-1 right-1 rounded-full bg-gray-600 scale-0 transition-all group-hover:scale-100 '
    >
      <span className=' absolute top-1/2 left-1/2 rotate-45 -translate-x-1/2 -translate-y-1/2 w-[2px] h-3 bg-white' />
      <span className=' absolute top-1/2 left-1/2 -rotate-45 -translate-x-1/2 -translate-y-1/2 w-[2px] h-3 bg-white' />
    </button>
  );
};

export default RemoveBtn;
