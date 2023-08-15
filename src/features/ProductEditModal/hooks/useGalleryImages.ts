import { ChangeEvent, useRef, useState } from "react";
import { GalleryImage } from "../types/typedef";

type HandleLoadImage = (e: ChangeEvent<HTMLInputElement>) => void;
type HandleDeleteImg = (source: string) => void;
type UseGalleryImagesParams = {
  defaultImages?: Array<GalleryImage>;
};

type UseGalleryImagesResult = {
  handleLoadImage: HandleLoadImage;
  handleDeleteImg: HandleDeleteImg;
  galleryImages: Array<GalleryImage>;
  files: Array<File>;
  deletedImages: Array<string>;
};

type UseGalleryImages = (
  params: UseGalleryImagesParams
) => UseGalleryImagesResult;

/**
 * Хук предназначен для управления галлереей изображений
 */
export const useGalleryImages: UseGalleryImages = ({ defaultImages }) => {
  const [galleryImages, setGalleryImages] = useState<Array<GalleryImage>>(
    defaultImages ?? []
  );
  const [files, setFiles] = useState<Array<File>>([]);
  const deletedImages = useRef<Array<string>>([]);

  /* если юзер удаляет только что добавленное изображение
   * необходимо удалить этот файл из массива кандидатов на добавление
   * для этого необходимо будет сопоставить url файла с именем файла типа File
   */
  const urlToFileNameMap = useRef<Record<string, string>>({});

  /* При загрузке юзером изображения необходимо добавить его в массив-файлов кандидатов на добавление */
  const handleLoadImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.currentTarget.files) return;

    const file = e.currentTarget.files[0];

    /* получаем ссылку для рендера загруженного файла */
    const url = URL.createObjectURL(file);

    /* сетим урл в массив для рендеринга и записываем сам файл в массив файлов кандидатов на добавление */
    setGalleryImages((prevState) => [
      ...prevState,
      { id: "blob", source: url },
    ]);
    setFiles((prevState) => [...prevState, file]);

    /* делаем сопоставление урла с именем файла, для последующего удаления (при необходимости)*/
    urlToFileNameMap.current[url] = file.name;
  };

  const handleDeleteImg = async (source: string) => {
    const isDeleteImageNew = source.startsWith("blob");

    if (isDeleteImageNew) {
      /* если файл новый необходимо удалить его из массива для рендеринга и массива файлов кандидатов на добавление*/
      const deleteFileName = urlToFileNameMap.current[source];
      setFiles((prevState) =>
        prevState.filter((file) => file.name !== deleteFileName)
      );
      setGalleryImages((prevState) =>
        prevState.filter((image) => image.source !== source)
      );
    } else {
      /* если файл не новый необходимо добавить его в массив кандидатов на удаление */
      deletedImages.current.push(source);
      setGalleryImages((prevState) =>
        prevState.filter((image) => image.source !== source)
      );
    }
  };

  return {
    handleLoadImage,
    galleryImages,
    files,
    handleDeleteImg,
    deletedImages: deletedImages.current,
  };
};
