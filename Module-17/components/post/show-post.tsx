import Link from "next/link";
import { cn, formatter } from "@/lib/utils";
import { Calendar } from "lucide-react";
import { buttonVariants } from "../ui/button";

type Post = {
  slug: string;
  title: string;
  date: string;
  published: boolean;
  body: string;
  description?: string | undefined;
};

const ShowPost = ({ slug, body, date, title, description }: Post) => {
  const url = slug.split("/").at(1);

  return (
    <article className="flex flex-col gap-2 border-border border-b py-3">
      <div>
        <h2 className="text-2xl font-bold">
          <Link href={"/posts/" + url}>{title}</Link>
        </h2>
      </div>

      <div className="max-w-none text-muted-foreground">{description}</div>
      <div className="flex justify-between items-center">
        <dl>
          <dt className="sr-only">Published On</dt>
          <dd className="text-sm sm:text-base font-medium flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time dateTime={date}>{formatter(date)}</time>
          </dd>
        </dl>
        <Link
          href={"/posts/" + url}
          className={cn(buttonVariants({ variant: "link" }), "py-0")}>
          Read more →
        </Link>
      </div>
    </article>
  );
};

export default ShowPost;
