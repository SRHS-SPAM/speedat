"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, ChangeEvent } from "react";
const Write = () => {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [files, setFiles] = useState<File[]>([]);
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files as FileList);
    setFiles(selectedFiles);

    const previews = selectedFiles.map((file) => URL.createObjectURL(file));
    setPreviewImages(previews);
  };
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  return (
    <div className="w-full flex flex-row justify-center">
      <div className="w-[80%] pt-5">
        <div className="text-zinc-900 text-[32px] font-bold font-['Pretendard'] h-10 w-full flex items-center mb-12">
          글 작성
        </div>
        <div className="mb-6">
          <select name="tab" className="w-full outline-none border border-gray-500 rounded p-1">
            <option value="1">설계과 게시판</option>
            <option value="2">제어과 게시판</option>
            <option value="3">시스템과 게시판</option>
            <option value="4">군특성화과 게시판</option>
          </select>
        </div>
        <div className="mb-8">
          <input
            placeholder="제목"
            type="text"
            className="w-full bg-gray-100 outline-none p-3"
            onChange={(e) => setTitle(e.target.value)}
          />
          <div id="image_container"></div>
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
        <textarea
          name="content"
          className="w-full h-full border border-gray-500 outline-none mb-8"
          onChange={(e) => setContent(e.target.value)}></textarea>
        <div className="w-full gap-12 flex flex-row justify-end">
          <button className="w-[116px] h-10 text-center bg-zinc-900 text-sm text-white font-medium font-['Pretendard'] rounded" onClick={() => router.back()}>
            취소
          </button>
          <button className="w-[116px] h-10 text-center bg-yellow-500 text-sm text-white font-medium font-['Pretendard'] rounded">
            저장
          </button>
        </div>
        <div className="h-8 w-full" />
      </div>
    </div>
  );
};
export default Write;
