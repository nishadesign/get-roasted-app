import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileImage } from 'lucide-react';
import './UploadZone.css';

const UploadZone = ({ onImageUpload }) => {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      
      reader.onload = () => {
        const imageData = {
          id: Date.now() + Math.random(),
          name: file.name,
          url: reader.result,
          uploadDate: new Date().toISOString(),
          size: file.size
        };
        onImageUpload(imageData);
      };
      
      reader.readAsDataURL(file);
    });
  }, [onImageUpload]);

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.bmp', '.webp', '.svg']
    },
    multiple: true,
    maxSize: 10 * 1024 * 1024 // 10MB
  });

  const getClassName = () => {
    let className = 'upload-zone';
    if (isDragActive) className += ' drag-active';
    if (isDragAccept) className += ' drag-accept';
    if (isDragReject) className += ' drag-reject';
    return className;
  };

  return (
    <div {...getRootProps()} className={getClassName()}>
      <input {...getInputProps()} />
      <div className="upload-content">
        {isDragActive ? (
          <>
            <FileImage size={48} className="upload-icon animate-bounce" />
            <p className="upload-text">Drop your designs here!</p>
          </>
        ) : (
          <>
            <Upload size={48} className="upload-icon" />
            <h3 className="upload-title">Ready to get roasted?</h3>
            <p className="upload-text">
              Drag & drop your design files here, or click to browse
            </p>
            <p className="upload-subtext">
              Supports JPG, PNG, GIF, SVG (max 10MB)
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default UploadZone;
