import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "~/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "~/components/ui/dropdown-menu";
import { getBookChaptersFn } from "../-funs";
import { Button } from "~/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { cn } from "~/lib/utils";
import { Link } from "@tanstack/react-router";

interface ChapterNavigationProps {
  bookId: string;
  currentChapterId: string;
}

export function ChapterNavigation({
  bookId,
  currentChapterId,
}: ChapterNavigationProps) {
  const { data, isLoading } = useQuery({
    queryKey: ["book-chapters", bookId],
    queryFn: () => getBookChaptersFn({ data: { bookId } }),
  });

  if (isLoading || !data) return null;

  const currentChapter = data.chapters.find(
    (chapter) => parseInt(currentChapterId) === chapter.id
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="gap-2 h-10 px-3 py-2 text-sm ring-offset-background border border-input bg-background hover:bg-accent hover:text-accent-foreground"
        >
          <span>{currentChapter ? currentChapter.title : "Chapters"}</span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-[400px] bg-background border border-input shadow-md"
      >
        {data.chapters.map((chapter, index) => (
          <DropdownMenuItem
            key={chapter.id}
            asChild
            className="focus:bg-accent focus:text-accent-foreground cursor-pointer"
          >
            <Link
              to="/books/$bookId/chapters/$chapterId"
              params={{
                bookId: bookId,
                chapterId: chapter.id.toString(),
              }}
              className={cn(
                "w-full truncate cursor-pointer",
                parseInt(currentChapterId) === chapter.id && "font-bold"
              )}
            >
              {index + 1}. {chapter.title}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
