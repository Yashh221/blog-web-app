"use client";
import { external, image, plus, video } from "../../../public";
import { ThemeContext } from "@/contexts/ThemeContext";
import Image from "next/image";
import React from "react";
import openai from 'openai';
import dynamic from "next/dynamic";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { app } from "@/utils/firebase";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { slugify } from "@/utils/slugify";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
type Props = {};

const storage = getStorage(app);
const WritePost = (props: Props) => {
  const { status } = useSession();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [file, setFile] = React.useState(null);
  const [media, setMedia] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [cat, setCat] = React.useState("");
  const [value, setValue] = React.useState("");
  const { theme } = React.useContext(ThemeContext);
  
  React.useEffect(() => {
    const upload = () => {
      const uniName = new Date().getTime + file?.name;
      const storageRef = ref(storage, uniName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };
    file && upload()
  }, [file]);
  if (status === "unauthenticated") {
    router.push("/");
  }

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({ title, desc: value, img: media, slug:slugify(title),catSlug:cat }),
      });
      console.log(res)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full px-8">
      <div className="flex flex-row text-[3.5rem] font-bold p-7">
        <input
          type="text"
          placeholder="Title"
          className="outline-none bg-transparent px-4"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-row items-center gap-4">
        <div className="w-[40px] h-[40px] flex justify-center items-center object-contain rounded-full overflow-hidden border-[1px] border-solid border-darkText">
          <Image
            src={plus}
            alt="add"
            className="w-[20px] h-[20px]"
            onClick={() => setOpen(!open)}
          />
        </div>
        {open && (
          <div className="flex flex-row gap-4">
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e?.target?.files[0])}
              style={{ display: "none" }}
            />
            <div className="w-[40px] h-[40px] flex justify-center items-center object-contain rounded-full overflow-hidden border-[1px] border-solid border-[#163e23] cursor-pointer">
              <label htmlFor="image">
                <Image
                  src={image}
                  alt="image"
                  className="w-[20px] h-[20px] cursor-pointer"
                />
              </label>
            </div>
            <div className="w-[40px] h-[40px] flex justify-center items-center object-contain rounded-full overflow-hidden border-[1px] border-solid border-[#163e23]">
              <Image
                src={external}
                alt="external"
                className="w-[20px] h-[20px]"
              />
            </div>
            <div className="w-[40px] h-[40px] flex justify-center items-center object-contain rounded-full overflow-hidden border-[1px] border-solid border-[#163e23]">
              <Image src={video} alt="video" className="w-[20px] h-[20px]" />
            </div>
          </div>
        )}
      </div>
      <div className="p-3">
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
          style={{ backgroundColor: "transparent" }}
        />
      </div>
      <div className="flex flex-row text-[1.5rem] font-bold p-7">
        <input
          type="text"
          placeholder="Mention your Category"
          className="outline-none bg-transparent px-4"
          value={cat}
          onChange={(e)=>setCat(e.target.value)}
        />
      </div>
      <button
        className={`absolute top-9 right-8 max-w-[120px] w-full py-2 bg-[#1a8917] rounded-full ${
          theme === "light" && "text-black"
        }`}
        onClick={handleSubmit}
      >
        Publish
      </button>
    </div>
  );
};

export default WritePost;
