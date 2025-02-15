import { BadgeMinus, ThumbsDown, ThumbsUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
interface BookSingleProps {
  book: Book;
  dispatch: React.Dispatch<Action>;
}
function BookSingle({ book, dispatch }: BookSingleProps) {
  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>{book.author}</CardTitle>
        <CardDescription>{book.rating}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-semibold">{book.title}</p>
      </CardContent>
      <CardFooter className="flex gap-1 items-center">
        <Button
          variant="outline"
          onClick={() => dispatch({ type: "like", payload: book.id })}
        >
          <ThumbsUp />
        </Button>
        <Button
          variant="outline"
          onClick={() => dispatch({ type: "dislike", payload: book.id })}
        >
          <ThumbsDown />
        </Button>
        <Button variant="destructive">
          <BadgeMinus />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default BookSingle;
