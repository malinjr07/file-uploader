import FileUploader from '@/components/FileUploader';
import { useState } from 'react';

export default function Home() {
  const [images, setImages] = useState<any[]>([]);

  return (
    <section className="w-screen h-screen py flex justify-center items-start ">
      <FileUploader updateFilesCb={(e) => setImages(e)} stateData={images} />
    </section>
  );
}
