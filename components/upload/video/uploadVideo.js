import { useRouter } from "next/router";

export default function UploadVideo() {
  const router = useRouter();
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const videoUrl = URL.createObjectURL(selectedFile);
      router.push({
        pathname: `video/preview/${selectedFile.name}`,
        query: { fileName: JSON.stringify(videoUrl) },
      });
    }
  };

  return (
    <div className="md:pr-5 xl:pr-5 md:pl-0 xl:pl-0 pr-2 pl-2">
      <div className="h-[85vh] relative mt-20 bg-spyne_blue-20 border-spyne_blue-200 p-4 border-dashed border rounded-xl text-center lg:pt-10 pt-10 md:p-3 flex flex-col items-center justify-center">
        <input
          className="h-[10vh] w-full opacity-0"
          type="file"
          accept="video/*"
          onChange={handleFileChange}
        />
        <div className="uploadBoxContent pb-3">
          <img
            className="m-auto mb-6"
            src="https://prod-spyne-website.s3.amazonaws.com/ba4d9e53-62ef-46bb-a529-4f2a2dc67404"
            alt="Upload"
          />
          <label htmlFor="videoFile" className="btn">
            <p className="blue-btn m-auto w-52 cursor-pointer">Upload</p>
          </label>
          <input
            className="opacity-0 h-0"
            type="file"
            id="videoFile"
            accept="video/*"
            onChange={handleFileChange}
          />
          <p className="mt-[-12px]">Drop your video here</p>
        </div>
      </div>
    </div>
  );
}
