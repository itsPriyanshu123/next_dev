
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ROUTES from "@/constant/route";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LocalSeacrch from "@/components/searchComponent/LocalSearch";
import HomeFilter from "@/components/filters/HomeFilter";
import Homefilter from "@/components/filters/HomeFilter";





const questions = [
  {
    _id: "1",
    title: "How to learn React?",
    description: "I want to learn React, can anyone help me?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "JavaScript" },
    ],
    author: { _id: "1", name: "John Doe" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "How to learn JavaScript?",
    description: "I want to learn JavaScript, can anyone help me?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "JavaScript" },
    ],
    author: { _id: "1", name: "John Doe" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
];



interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

 export default async function Home( {searchParams}:SearchParams) {

const { query = "", filter = "" } = await searchParams;

const filteredQuestions = questions.filter((question) => {
  const matchesQuery = question.title.toLowerCase().includes(query.toLowerCase());
  const matchesFilter =
    !filter ||
    question.tags.some((tag) => tag.name.toLowerCase() === filter.toLowerCase());
  return matchesQuery && matchesFilter;
});
  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSeacrch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />
      </section>
      <Homefilter/>
      <div className="mt-10 flex w-full flex-col gap-6">
    
      </div>
    </>

  );
}
