import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Alexandre Jardin",
    body: "What you manage to do is crazy. You're crazy!",
    img: "/human-clients/jardin.png",
  },
  {
    name: "Emmanuel Lechypre",
    body: "It's mind-boggling. People who don't take advantage of this kind of technology will find themselves back in the Middle Ages.",
    img: "/human-clients/lechypre.png",
  },
  {
    name: "Emmanuelle Duez",
    body: "What Hyko has done in just a few hours saves me 75,000 euros a year.",
    img: "/human-clients/duez.png",
  },
  {
    name: "Gilles Babinet",
    body: "Hyko is a technologically remarkable tool.",
    img: "/human-clients/babinet.jpg",
  },
  {
    name: "Samy Bengio",
    body: "The tool you made in a few hours could be of interest to millions of people.",
    img: "/human-clients/samm.jpeg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  body,
}: {
  img: string;
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-[350px] cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-start">{body}</blockquote>
    </figure>
  );
};

export function Testimonials() {
  return (
    <div className="flex w-full h-full flex-col items-center justify-center  text-center px-4 ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
