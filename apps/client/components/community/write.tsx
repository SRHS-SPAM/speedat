"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

const WriteForm: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [files, setFiles] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files as FileList);
    setFiles(selectedFiles);

    const previews = selectedFiles.map((file) => URL.createObjectURL(file));
    setPreviewImages(previews);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    files.forEach((file) => formData.append("files", file));

    try {
      const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("글이 성공적으로 작성되었습니다!");
        // 초기화
        setTitle("");
        setContent("");
        setFiles([]);
        setPreviewImages([]);
      } else {
        alert("글 작성에 실패했습니다. 다시 시도해 주세요.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("글 작성 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <form onSubmit={handleSubmit} className="w-[80%] p-5 border rounded-md shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">제목</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">파일 업로드</label>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="w-full px-3 py-2 border rounded"
          />
          <div className="mt-3 flex flex-wrap gap-3">
            {previewImages.map((src, index) => (
              <img key={index} src={src} alt={`Preview ${index}`} className="h-20 border rounded" />
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">내용</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-3 py-2 border rounded h-40"
            required></textarea>
        </div>

        <div className="flex justify-end">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            글 작성
          </button>
        </div>
      </form>
    </div>
  );
};

export default WriteForm;
