// drag drop file component
"use client";
import React, { useState } from "react";
import "./DragDrop.css";
import { client } from "@/lib/sanity";
import { Dispatch } from "react";

export default function DragDropFile({ imgUrl, setImgUrl }) {
  // drag state
  const [dragActive, setDragActive] = React.useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  // ref
  const inputRef = React.useRef(null);

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = async function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // handleFiles(e.dataTransfer.files);
      console.log("이미지 놓아짐?", e.dataTransfer.files[0]);
      /**
       * //////////////////////// 아래에 작성
       */
      const imgUrl = await getImgUrl(e.dataTransfer.files[0]);
      console.log("img Url : ", imgUrl);
      setImgUrl(imgUrl);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // handleFiles(e.target.files);
      // console.log(e.target.files);
      console.log("이미지 놓아짐", e.target.files);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  const getImgUrl = async (selectedImage) => {
    if (selectedImage) {
      const imageAsset = await client.assets.upload("image", selectedImage);
      console.log("Image asset:", imageAsset.url);
      return imageAsset.url;
    }
  };

  const handleSubmit = (e) => {
    // const imgUrl = getImgUrl(e.)
    e.preventDefault();
    console.log("handle submit  :   ", e.dataTransfer.files[0]);
  };
  return (
    <form
      id="form-file-upload"
      onDragEnter={handleDrag}
      onSubmit={handleSubmit}
    >
      <input
        ref={inputRef}
        type="file"
        id="input-file-upload"
        multiple={true}
        onChange={handleChange}
      />
      <label
        id="label-file-upload"
        htmlFor="input-file-upload"
        className={dragActive ? "drag-active" : ""}
      >
        <div>
          <p>Drag and drop your file here or</p>
          <button className="upload-button" onClick={onButtonClick}>
            Upload a file
          </button>
        </div>
      </label>
      {dragActive && (
        <div
          id="drag-file-element"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        ></div>
      )}
    </form>
  );
}
