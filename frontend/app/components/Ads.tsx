import React from "react";
import Image from "next/image";
import Link from "next/link";

interface AdProps {
  title: string;
  discount: string;
  image: string;
  link: string;
  brandName: string;
}

const AdCard = ({ title, discount, image, link, brandName }: AdProps) => (
  <Link
    href={link}
    className="block overflow-hidden bg-[#F0EEED] rounded-lg w-72 shadow-sm 
               hover:shadow-md transition-shadow duration-300"
  >
    <div className="relative h-80 w-full">
      <Image
        src={image}
        alt={`${discount} off at ${brandName}`}
        fill
        priority
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 300px"
      />
    </div>

    <div className="p-4">
      <h2 className="text-red-600 text-lg font-medium text-center">{title}</h2>
      <p className="text-gray-600 text-sm text-center mt-1">
        Shop now at {brandName}
      </p>
    </div>
  </Link>
);

export default function Ads() {
  const adData = {
    title: "Flat 40% off in H&M Brand",
    discount: "40%",
    image: "/images/customad.png",
    link: "/brands/hnm",
    brandName: "H&M",
  };

  return (
    <div className="flex justify-center items-center ">
      <AdCard {...adData} />
    </div>
  );
}
