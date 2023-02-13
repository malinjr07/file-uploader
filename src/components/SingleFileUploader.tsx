import Image from 'next/image';
import React, { FC, useRef } from 'react';
import { uploaderProps } from 'utils/types';
import EditBtn from './EditBtn';
import RemoveBtn from './RemoveBtn';

const KILO_BYTES_PER_BYTE = 1000;
const convertBytesToKB = (bytes: number) =>
  Math.round(bytes / KILO_BYTES_PER_BYTE);

const SingleFileUploader: FC<uploaderProps> = ({
  label = 'upload Single Image',
  identifier = 'fileUploader',
  maxFileSizeInBytes = 50000000,
  updateFilesCb,
  stateData,
  ...otherProps
}) => {
  //   Ref To Handle additional click event to upload files
  const fileInputField = useRef<HTMLInputElement>(null);

  const handleUploadBtnClick = () => {
    fileInputField.current?.click();
  };

  const removeFile = (fileObj: any) => {
    const fileIndex = stateData.filter((e: any) => e.name !== fileObj.name);
    updateFilesCb(fileIndex);
  };

  return (
    <div className='w-full flex flex-col justify-start items-start gap-4  '>
      <label htmlFor={identifier} className='capitalize pb-3 font-medium '>
        {label}
      </label>
      {stateData.length <= 0 ? (
        <div className='flex border relative w-full py-6 px-9 flex-col flex-wrap items-center capitalize rounded-xl border-blue-400 border-dashed  '>
          {/* Main Image Uploader Component */}
          <p className='text-xl flex'>Drag and drop your files here or</p>
          <button
            type='button'
            onClick={handleUploadBtnClick}
            className='px-8 py-3 font-semibold rounded bg-slate-900 text-slate-50 my-4 dark:bg-gray-100 dark:text-gray-800 relative z-40 '
          >
            {' '}
            Click{' '}
          </button>
          <p className='text-xl flex'>to upload image</p>
          <input
            type='file'
            // This attribute remove the default title that the file field renders
            title=' '
            id={identifier}
            name={identifier}
            ref={fileInputField}
            className=' block border-0 opacity-0 absolute inset-0 z-30 w-full h-full '
            {...otherProps}
            multiple={false}
            onChange={(e) => {
              // If the Length of the newFiles (which is a fileList array) 0, then the boolean value will be false

              if (e.target.files?.length) {
                let updatedFiles = Object.values(e.target.files);
                updateFilesCb([...stateData, ...updatedFiles]);
              }
            }}
          />
        </div>
      ) : (
        <div className=' w-full gap-5 flex flex-col justify-center items-center '>
          {stateData[0].type.split('/')[0] === 'image' && (
            <div className='w-[570px] h-96 relative group border-2 border-emerald-500'>
              <Image
                src={URL.createObjectURL(stateData[0])}
                alt='image'
                fill
                className='object-contain'
              />
              <RemoveBtn onClick={() => removeFile(stateData[0])} />
              <EditBtn onClick={handleUploadBtnClick} />
              <input
                type='file'
                // This attribute remove the default title that the file field renders
                title=' '
                id={identifier}
                name={identifier}
                ref={fileInputField}
                className=' hidden border-0 absolute inset-0 z-30 w-0 h-0 '
                {...otherProps}
                multiple={false}
                onChange={(e) => {
                  // If the Length of the newFiles (which is a fileList array) 0, then the boolean value will be false

                  if (e.target.files?.length) {
                    let updatedFiles = Object.values(e.target.files);
                    updateFilesCb(updatedFiles);
                  }
                }}
              />
            </div>
          )}
          <div>
            <span className='capitalize'>{stateData[0].name}</span>
            <aside>
              <span>{convertBytesToKB(stateData[0].size)} kb</span>
              <i className='fas fa-trash-alt' />
            </aside>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleFileUploader;
