import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const FLASK_URL = process.env.NEXT_PUBLIC_FLASK_URL || ""
export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || ""
