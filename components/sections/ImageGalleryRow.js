import { Grid } from "@mui/material";
import Image from "next/image";

export default function ImageGalleryRow({ images = [] }) {
  const imageColumnSpan = images.length > 0 ? 12 / images.length : 12;

  return (
    <>
      {images.length > 0 && (
        <Grid container>
          {images.map((url, index) => (
            <Grid item key={index} xs={imageColumnSpan}>
              <Image
                src={url}
                alt={`Image ${index}`}
                width={360}
                height={360}
                layout="responsive"
                style={{ width: "100%", height: "100%" }}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}
