"use client";

import React, { useState } from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { formUrlQuery, RemoveUrlQueryParams } from '@/lib/url';

const filters = [
  {name:"React", value:"react"},
  {name:"JavaScript", value:"javascript"},
  // { name: "Newest", value: "newest" },
  // { name: "Popular", value: "popular" },
  // { name: "Unanswered", value: "unanswered" },
  // { name: "Recommended", value: "recommended" },
];

const Homefilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filterParam = searchParams.get('filter');
  const [active, setActive] = useState(filterParam || '');

  const handleTypeClick = (filter: string) => {
    let newUrl = '';

    if (filter === active) {
      setActive('');
      newUrl = RemoveUrlQueryParams({
        params: searchParams.toString(),
        keysToRemove: ["filter"],
      });
    } else {
      setActive(filter);
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "filter",
        value: filter.toLowerCase(),
      });
    }

    router.push(newUrl);
  };

  return (
    <div className="mt-10 hidden flex-wrap gap-3 sm:flex">
      {filters.map((filter) => (
        <Button
          key={filter.name}
          className={cn(
            `body-medium rounded-lg px-6 py-3 capitalize shadow-none`,
            active === filter.value
              ? "bg-primary-100 text-primary-500 hover:bg-primary-100 dark:bg-dark-400 dark:text-primary-500 dark:hover:bg-dark-400"
              : "bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300"
          )}
          onClick={() => handleTypeClick(filter.value)}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};

export default Homefilter;
