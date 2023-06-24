import Image from "next/image";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center h-screen bg-black">
      <Image
        src="https://oystatic.ignimgs.com/src/social/img/mario_social-404.gif"
        width="950"
        height="450"
        className="py-6"
        alt="Page not found - 404 error"
      />
    </div>
  );
}
