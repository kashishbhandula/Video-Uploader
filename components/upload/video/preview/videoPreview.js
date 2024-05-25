import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import React from "react";
export default function VideoPreview() {
  const router = useRouter();
  const { fileName } = router.query;
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    if (!fileName) {
      router.push("/upload/video");
      return;
    }
    try {
      const newFileName = JSON.parse(fileName);
      setVideoUrl(newFileName);
    } catch (error) {
      router.push("/upload/video");
    }
  }, [fileName]);

  return (
    <div className="md:pr-5 xl:pr-5 md:pl-0 xl:pl-0 pr-2 pl-2">
      <div className="h-[85vh] relative mt-20 bg-spyne_blue-20 border-spyne_blue-200 p-4 border-dashed border rounded-xl text-center lg:pt-10 pt-10 md:p-3 flex flex-col items-center justify-center">
        <h1 className="mb-4">Video Preview</h1>
        {videoUrl ? (
          <video height="800px" width="800px" controls>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
