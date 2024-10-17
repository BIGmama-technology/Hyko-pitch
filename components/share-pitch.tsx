import { cn } from "@/lib/utils";
import { TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { CopyInput } from "./copy-input";
import { buttonVariants } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const SharePitch = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="p-6">
          <DialogHeader>
            <DialogTitle>Share</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Thanks for sharing our pitch deck.
          </DialogDescription>

          <div className="grid gap-6 py-4">
            <CopyInput value="https://pitch.hyko.ai" />
            <Link
              target="_blank"
              className={cn(
                buttonVariants({ variant: "default" }),
                "w-full flex items-center space-x-2 h-10"
              )}
              href="https://twitter.com/intent/tweet?text=Check this pitch deck https://pitch.hyko.ai @hykoai"
            >
              <span>Share on</span>
              <TwitterLogoIcon />
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SharePitch;
