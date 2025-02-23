import { useState, useEffect } from "react";
import { fetchGalleryImages } from "../api/api";

const imagePosition = {
  topLeft: "cm6u63vtl0001ta7c1gp91sd6",
  bottomLeft: "cm6u63xpo0002ta7cr26fo5o8",
  center: "cm6u63zfq0003ta7clgqi7ba2",
  topRight: "cm6u641780004ta7cpgvzkb8x",
  bottomRight: "cm6u63rfp0000ta7cog34mfxz",
};

const useGalleryImages = () => {
  const [gallery, setGallery] = useState({
    topLeft: "",
    bottomLeft: "",
    center: "",
    topRight: "",
    bottomRight: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadGallery = async () => {
      try {
        const data = await fetchGalleryImages();
        if (data && Array.isArray(data)) {
          const mappedGallery = {
            topLeft:
              data.find((item) => item.id === imagePosition.topLeft)?.image ||
              "",
            bottomLeft:
              data.find((item) => item.id === imagePosition.bottomLeft)
                ?.image || "",
            center:
              data.find((item) => item.id === imagePosition.center)?.image ||
              "",
            topRight:
              data.find((item) => item.id === imagePosition.topRight)?.image ||
              "",
            bottomRight:
              data.find((item) => item.id === imagePosition.bottomRight)
                ?.image || "",
          };
          setGallery(mappedGallery);
          console.log("[GALLERY MAPPED]:", mappedGallery);
        }
      } catch (err) {
        setError(err.message || "Failed to load gallery images");
      } finally {
        setLoading(false);
      }
    };

    loadGallery();
  }, []);

  return { gallery, loading, error };
};

export default useGalleryImages;
