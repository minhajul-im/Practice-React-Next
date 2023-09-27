import Image from "next/image";

const ImageForService = ({ divStyle, src, imgStyle }) => {
  return (
    <div className={divStyle}>
      <Image
        src={src}
        alt="image"
        height={500}
        width={500}
        className={imgStyle}
      />
    </div>
  );
};

export default ImageForService;
