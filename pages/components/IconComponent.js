import Image from "next/image";

const Icon = ({ icon, alt, width, height }) => {
  return (
    <Image src={"/" + icon + ".svg"} alt={alt} width={width} height={height} />
  );
};

export default Icon;
