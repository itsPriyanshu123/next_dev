
"use client"
import React, { useEffect } from 'react'
import { Input } from '../ui/input'
import Image from 'next/image'
import { RemoveUrlQueryParams } from '@/lib/url'

import { useSearchParams,useRouter,usePathname } from 'next/navigation'
import { Key } from 'lucide-react'


interface Props {
  route: string;
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
}
const LocalSearch: React.FC<Props> = ({
  route,
  imgSrc,
  placeholder,
  otherClasses,
}) => {


  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const query = searchParams.get("query") || "";
  const [searchQuery, setSearchQuery] = React.useState<string>(query);

  useEffect(() => {
      const delayDebounceFn= setTimeout(()=>{
        if (searchQuery) {
   
   
      const newUrl = formUrlQuery({
        value: searchQuery,
        Key: "query",
        parmas: searchParams.toString()
      });
      router.push(newUrl,{scroll: false});
    } else {
      if (pathname === route) {
        const newUrl = RemoveUrlQueryParams({
          keysToRemove: ["query"],
          params: searchParams.toString()
        });
        router.push(newUrl);
      }
    }
     },1000)
 
    return ()=>clearTimeout(delayDebounceFn)
  }, [searchQuery, router, searchParams, route, pathname]);

  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      <Image
        src={imgSrc}
        width={24}
        height={24}
        alt="Search"
        className="cursor-pointer"
      />

      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="paragraph-regular no-focus placeholder text-dark400_light700 border-none shadow-none outline-none"
      />
    </div>
  )
}

export default LocalSearch

function formUrlQuery({ value, Key, parmas }: { value: string; Key: string; parmas: string }): string {
  const params = new URLSearchParams(parmas);
  params.set(Key, value);
  return `?${params.toString()}`;
}
