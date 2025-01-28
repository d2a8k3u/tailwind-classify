import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge class names.
 *
 * - Leverages `clsx` for conditional class joining.
 * - Resolves conflicting Tailwind utility classes using `twMerge`.
 *
 * @param inputs - A list of class values (strings, arrays, objects).
 * @returns A deduplicated and merged class string.
 */
export function classify<T extends ClassValue[]>(...inputs: T): string {
  return twMerge(clsx(...inputs));
}
