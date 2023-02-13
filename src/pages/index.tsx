import MultipleFileUploader from '@/components/MultipleFileUploader';
import SingleFileUploader from '@/components/SingleFileUploader';
import { useState } from 'react';

export default function Home() {
  const [singleImages, setSingleImages] = useState<any[]>([]);
  const [multipleImages, setMultipleImages] = useState<any[]>([]);
  const [threeInOne, setThreeInOne] = useState<any[]>([]);
  const [threeInTwo, setThreeInTwo] = useState<any[]>([]);
  const [threeInThree, setThreeInThree] = useState<any[]>([]);

  return (
    <section className='w-screen min-h-screen py-4 px-16 flex flex-col flex-wrap justify-start items-start '>
      <h1 className='text-2xl mb-20'>File Uploader</h1>
      <div className='w-full flex flex-col flex-wrap justify-start items-start gap-7'>
        <MultipleFileUploader
          updateFilesCb={(e) => setSingleImages(e)}
          stateData={singleImages}
        />
        <SingleFileUploader
          placeholder='upload a single Image'
          updateFilesCb={(e) => setMultipleImages(e)}
          stateData={multipleImages}
          inputClass='border-4 !w-full '
          groupClass='w-2/3'
        />
      </div>
    </section>
  );
}
