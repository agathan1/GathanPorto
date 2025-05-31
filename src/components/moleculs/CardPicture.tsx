interface Props {
  image: string;
}

export default function CardPicture({ image }: Props) {
  return (
    <>
      <div className="size-68 max-md:size-48 origin-top-left min-md:rotate-[7deg] rotate-[2deg] bg-white border-3 border-black">
        <img
          src={image}
          alt="pic"
          className="size-67 max-md:size-47 object-cover object-left-top p-1 hover:scale-103 transition-all duration-300 ease-in-out"
        />
      </div>
    </>
  );
}
