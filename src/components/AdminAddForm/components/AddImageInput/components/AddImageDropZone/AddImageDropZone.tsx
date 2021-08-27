import React from 'react';

interface AddImageProps {
  onFileSelected: (file: any) => void;
}

const AddImageDropZone = ({ onFileSelected }: AddImageProps) => {
  const onDropFile = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log('droppp');

    const items = e.dataTransfer.items;
    console.log('🚀 ~ file: AddImageDropZone.tsx ~ line 13 ~ onDropFile ~ items', items);

    if (items.length > 1) {
      alert('Only 1 file can dropped!');
      return;
    }

    onFileSelected(items[0].getAsFile());
  };

  return (
    <div
      className="DropFile"
      onDrop={onDropFile}
      onDragOver={(e) => {
        e.preventDefault();
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 16 16">
        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
        <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
      </svg>
      Drop IT !!! (jpg)
    </div>
  );
};

export default AddImageDropZone;
