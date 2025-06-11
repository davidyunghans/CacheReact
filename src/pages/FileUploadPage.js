import React, { useState, useRef } from 'react';
import './FileUploadPage.css';
import MetaBalls from '../components/MetaBalls'; 
import BlurText from "../components/BlurText";

const FileUploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const dropRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setSelectedFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) setSelectedFile(file);
    dropRef.current.classList.remove('drag-over');
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    dropRef.current.classList.add('drag-over');
  };

  const handleDragLeave = () => {
    dropRef.current.classList.remove('drag-over');
  };

  return (
    <main className="file-upload-page">
      <div style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
        <BlurText
            text="Upload Files"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-2xl mb-8"
        />
        </div>

      <div
        ref={dropRef}
        className="drop-zone"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <MetaBalls
          color="#00e5ff"
          cursorBallColor="#ffffff"
          cursorBallSize={2}
          ballCount={15}
          animationSize={20}
          enableMouseInteraction={true}
          enableTransparency={true}
          hoverSmoothness={0.05}
          clumpFactor={1}
          speed={0.3}
        />
        <div className="drop-zone-content">
          <label className="btn-get-started choose-file-label">
            Choose/Drop File
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden-file-input"
            />
          </label>
        </div>
      </div>

      {selectedFile && (
        <div className="file-info">
          <p>Selected File:</p>
          <strong>{selectedFile.name}</strong>
        </div>
      )}
    </main>
  );
};

export default FileUploadPage;
