import { useEffect, useState } from "react";

import "./UploadFile.css";

import UploadFileIcon from "../../assets/icons/UploadFileIcon";

import { UploadFileType, UploadFileStatusType } from "../../utils/types";

interface UploadFileProps {
  title: string;
  handleFile: (file: UploadFileType) => void;
};

const UploadFile = ({ title, handleFile }: UploadFileProps) => {
  const [status, setStatus] = useState<UploadFileStatusType>("empty");
  const [className, setClassName] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<UploadFileType>(null);
  const [description, setDescription] = useState<string>("");

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];

    setSelectedFile(file);
  };

  useEffect(() => {
    if (!selectedFile) return;

    const { type } = selectedFile;

    if (type === "image/jpeg") {
      setStatus("success");
      handleFile(selectedFile);
    } else {
      setStatus("error");
    };
  }, [selectedFile, handleFile]);

  useEffect(() => {
    if (!status) return;

    const classByStatus = {
      empty: "uploadfile",
      error: "uploadfile uploadfile--error",
      success: "uploadfile uploadfile--success"
    };

    const descriptionByStatus = {
      empty: "Falta subir",
      error: "¡Error al subir la imagen!",
      success: "¡Subido correctamente!"
    };

    setClassName(classByStatus[status]);
    setDescription(descriptionByStatus[status]);
  }, [status]);

  return (
    <div className={className}>
      <h3 className="uploadfile__title">{title}</h3>
      <div className="uploadfile__input">
        <UploadFileIcon width={95} height={95} />
        <input
          className="uploadfile__input"
          type="file"
          name="my-image"
          onChange={handleFileChange}
        />
      </div>
      <p className="uploadfile__description">{description}</p>
    </div>
  );
};

export default UploadFile;
