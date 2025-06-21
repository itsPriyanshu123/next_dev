import ROUTES from '@/constant/route';
import { getDevicon } from '@/lib/utils';
import { Badge } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

interface props {
  _id: string;
  name: string;
  question?: number;
  showCount?: boolean;
  compact?: boolean;
}


const TagCard: React.FC<props> = ({ _id, name, question, showCount, compact }) => {

  const iconClass= getDevicon(name);
  console.log('TagCard rendered with:', { _id, name, question, showCount, compact });
  return (
<Link href={ROUTES.TAGS(_id)} className='flex justify-between gap-2'>
  <div className='subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase flex-center space-x-2'>
       <i className={`${iconClass} text-sm`}></i>
    <span className='text-white'>{name}</span>
  </div>
  {showCount && (
    <p className='text-dark500_light700'>{question}</p>
  )}
</Link>

  )
}

export default TagCard