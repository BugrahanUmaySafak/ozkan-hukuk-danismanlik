"use client";

import { useState, useRef, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

interface Props {
  _id: string;
  title: string;
  description: string;
  youtubeId: string;
  createdAt: string;
  priority?: boolean;
}

export default function VideoCard({
  title,
  description,
  youtubeId,
  createdAt,
}: Props) {
  const [open, setOpen] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  const checkScrollable = () => {
    if (dialogRef.current) {
      const el = dialogRef.current;
      const hasScroll = el.scrollHeight > el.clientHeight;
      setIsScrollable(hasScroll);
    }
  };

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        checkScrollable();
      }, 100);

      const resizeObserver = new ResizeObserver(() => {
        checkScrollable();
      });

      if (dialogRef.current) {
        resizeObserver.observe(dialogRef.current);
      }

      return () => {
        clearTimeout(timer);
        resizeObserver.disconnect();
      };
    } else {
      setIsScrollable(false);
    }
  }, [open]);

  useEffect(() => {
    const handlePopState = () => {
      if (open) setOpen(false);
    };

    window.addEventListener("popstate", handlePopState);

    if (open) {
      history.pushState(null, "", location.href);
    }

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Card className="w-full overflow-hidden cursor-pointer transition-transform duration-200 ease-in-out hover:shadow-lg hover:scale-[1.02] hover:bg-slate-50">
        <div className="relative aspect-video w-full pointer-events-auto">
          <LiteYouTubeEmbed
            id={youtubeId}
            title={title}
            noCookie={true}
            poster="hqdefault"
            adNetwork={false}
            wrapperClass="yt-lite w-full h-full"
          />
        </div>

        <DialogTrigger asChild>
          <div
            className="flex flex-col text-left cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label={`Videoyu detaylı görüntüle: ${title}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setOpen(true);
              }
            }}
          >
            <CardHeader>
              <CardTitle className="text-xl truncate" title={title}>
                {title}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <CardDescription
                className="text-sm text-gray-700 truncate"
                title={description}
              >
                {description}
              </CardDescription>

              <p className="text-xs text-muted-foreground">
                {new Date(createdAt).toLocaleDateString("tr-TR")}
              </p>

              <Button variant="default" size="sm" className="w-full">
                Tamamını Gör
              </Button>
            </CardContent>
          </div>
        </DialogTrigger>
      </Card>

      <DialogContent
        className="w-full max-w-sm sm:max-w-2xl md:max-w-3xl  mx-auto rounded-lg p-0"
        aria-labelledby="title"
        aria-describedby="description"
      >
        <div
          ref={dialogRef}
          className="overflow-y-auto max-h-[80vh] p-4 sm:p-6 md:p-8"
        >
          <div className="relative w-full aspect-[16/9]">
            <LiteYouTubeEmbed
              id={youtubeId}
              title={title}
              noCookie={true}
              poster="maxresdefault"
              adNetwork={false}
              wrapperClass="yt-lite w-full h-full rounded-t-lg"
            />
          </div>

          <div className="pt-4 sm:pt-6 md:pt-8">
            <DialogTitle className="text-base sm:text-lg md:text-xl font-semibold text-foreground">
              {title}
            </DialogTitle>

            <DialogDescription className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
              {description}
            </DialogDescription>
          </div>
        </div>

        {isScrollable && (
          <div className="sticky bg-white text-center text-sm text-blue-600 py-2 border-t">
            Devamı için aşağı kaydırın ↓
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
