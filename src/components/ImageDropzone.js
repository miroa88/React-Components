import React, { useCallback, useState} from 'react';
import { useDropzone } from 'react-dropzone';
import { readAndCompressImage } from 'browser-image-resizer';

const ImageDropzone = () => {
    const [imageData, setImageData] = useState(null);

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            readAndCompressImage(file, { quality: 0.5 })
                .then(resizedImage  => {

                })
                .catch(err => {
                    console.error(err);
                });
        });
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });
    console.log(imageData)
    return (
        <>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            {imageData && (
                <div>
                    <img src={imageData} alt="Selected" style={{ maxWidth: '100%' }} />
                </div>
            )}
        </>
    );
};

export default ImageDropzone;