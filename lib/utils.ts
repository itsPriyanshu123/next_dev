
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { techMap } from "@/constant/techmap"
import qs  from "querystring"




export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const getDevicon=(techName: string) => {
    const normalizedTechName = techName.toLowerCase().replace(/\s+/g, '-');

      return techMap[normalizedTechName]
  ? `${techMap[normalizedTechName]} colored`
  : "devicon-devicon-plain";

  }


