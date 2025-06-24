'use client';

import {
  CldUploadWidget,
  CloudinaryUploadWidgetInfo,
  CloudinaryUploadWidgetResults,
} from 'next-cloudinary';
import Image from 'next/image';

// import {
//   CldUploadWidget,
//   type CloudinaryUploadWidgetResults,
//   type CloudinaryUploadWidgetInfo,
// } from 'next-cloudinary';

import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { ImagePlus, Trash } from 'lucide-react';

interface ImageUploadProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  disabled,
  onChange,
  onRemove,
  value,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // const onUpload = (result: any) => {
  //   onChange(result.info.secure_url);
  // };

  const onUpload = (result: CloudinaryUploadWidgetResults) => {
    if (
      result.event === 'success' &&
      typeof result.info === 'object' &&
      result.info !== null &&
      'secure_url' in result.info
    ) {
      const info = result.info as CloudinaryUploadWidgetInfo;
      onChange(info.secure_url);
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <div className="mb-4 flex items-center gap-4">
        {value.map((url) => (
          <div
            key={url}
            className="relative w-[200px] h-[200px] rounded-md overflow-hidden"
          >
            <div className="z-10 absolute top-2 right-2">
              <Button
                type="button"
                onClick={() => onRemove(url)}
                variant="destructive"
                size="sm"
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
            <Image fill className="object-cover" alt="Image" src={url} />
          </div>
        ))}
      </div>
      {/* O-O */}
      <CldUploadWidget onUpload={onUpload} uploadPreset="nblu8g1u">
        {({ open }) => {
          const onClick = () => {
            open();
          };

          return (
            <Button
              type="button"
              disabled={disabled}
              variant="secondary"
              onClick={onClick}
            >
              <ImagePlus className="h-4 w-4 mr-2" />
              Upload an Image
            </Button>
          );
        }}
      </CldUploadWidget>
      {/* O_o */}
      {/* {isMounted && (
        <CldUploadWidget uploadPreset="dbdhkuh4m">
          {({ open, results }) => {
            const onClick = () => {
              open?.(); // Safe optional chaining
            };

            // Handle the uploaded result if needed
            if (
              results &&
              results.event === 'success' &&
              typeof results.info === 'object' &&
              results.info !== null &&
              'secure_url' in results.info
            ) {
              const info = results.info as CloudinaryUploadWidgetInfo;
              if (!value.includes(info.secure_url)) {
                onChange(info.secure_url); // Call your state handler
              }
            }

            return (
              <Button
                type="button"
                disabled={disabled}
                variant="secondary"
                onClick={onClick}
              >
                <ImagePlus className="h-4 w-4 mr-2" />
                Upload an Image
              </Button>
            );
          }}
        </CldUploadWidget>
      )} */}
    </div>
  );
};

export default ImageUpload;
