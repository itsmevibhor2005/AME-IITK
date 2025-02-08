"use client";


import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function Activities() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="h-full py-4 overflow-x-hidden">
      <h2 className="max-w-7xl pl-4 mx-auto sm:text-3xl text-2xl lg:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know the events and Activities..
      </h2>
      <Carousel items={cards} initialScroll={2} />
    </div>
  );
}

const DummyContent = ({ paragraph, images }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base lg:text-2xl sm:text-xl font-sans lg:max-w-3xl sm:max-w-2xl max-w-xl mx-auto">
        {paragraph}
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {images.map((image, index) => (
          <Image
            key={`dummy-content-image-${index}`}
            src={image.src}
            alt={image.alt}
            height={500}
            width={500}
            className="md:w-[250px] lg:h-[250px] sm:h-[200px] h-full w-full object-contain"
          />
        ))}
      </div>
    </div>
  );
};



const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        paragraph="Artificial Intelligence is revolutionizing the world. Explore its potential to enhance creativity, productivity, and problem-solving in everyday life. jzhsgfjzhgfgf sfiszgzfauf haisfiasfh hiashfiauh afiusfifias iasfgWEF SF ASUYFIUAIFUQ iuhisug iduhgiushegwsefdix siuhiwsehf sduhfsiuhiuh uhfisufh "
        images={[
          {
            src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "Artificial Intelligence concept",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
        ]}
      />
    ),
  },
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        paragraph="Artificial Intelligence is revolutionizing the world. Explore its potential to enhance creativity, productivity, and problem-solving in everyday life."
        images={[
          {
            src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "Artificial Intelligence concept",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
        ]}
      />
    ),
  },
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        paragraph="Artificial Intelligence is revolutionizing the world. Explore its potential to enhance creativity, productivity, and problem-solving in everyday life."
        images={[
          {
            src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "Artificial Intelligence concept",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
        ]}
      />
    ),
  },
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        paragraph="Artificial Intelligence is revolutionizing the world. Explore its potential to enhance creativity, productivity, and problem-solving in everyday life."
        images={[
          {
            src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "Artificial Intelligence concept",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
        ]}
      />
    ),
  },
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        paragraph="Artificial Intelligence is revolutionizing the world. Explore its potential to enhance creativity, productivity, and problem-solving in everyday life."
        images={[
          {
            src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "Artificial Intelligence concept",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
        ]}
      />
    ),
  },
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        paragraph="Artificial Intelligence is revolutionizing the world. Explore its potential to enhance creativity, productivity, and problem-solving in everyday life."
        images={[
          {
            src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "Artificial Intelligence concept",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
        ]}
      />
    ),
  },
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        paragraph="Artificial Intelligence is revolutionizing the world. Explore its potential to enhance creativity, productivity, and problem-solving in everyday life."
        images={[
          {
            src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "Artificial Intelligence concept",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
        ]}
      />
    ),
  },
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        paragraph="Artificial Intelligence is revolutionizing the world. Explore its potential to enhance creativity, productivity, and problem-solving in everyday life."
        images={[
          {
            src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "Artificial Intelligence concept",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
        ]}
      />
    ),
  },{
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunce Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunce lorem ipsum  "
        images={[
          {
            src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "Artificial Intelligence concept",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
          {
            src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "AI transforming productivity",
          },
        ]}
      />
    ),
  },
];


