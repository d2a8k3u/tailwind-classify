# Tailwind Classify

A lightweight utility function to merge and conditionally join class names in JavaScript/TypeScript, built on top of clsx and tailwind-merge for optimal CSS class management.

## Installation

You can install the package via npm:

```bash
  npm install tailwind-classify
```

Alternatively, you can install it using yarn:

```bash
  yarn add tailwind-classify
```

## Usage

The classify function allows you to conditionally combine strings, objects, and arrays of class names. It uses clsx for merging classes and tailwind-merge to handle duplicate Tailwind CSS classes correctly.

Examples:

```javascript
import { classify } from 'tailwind-classify';

// Basic usage
const buttonClass = classify('btn', 'btn-primary'); 
// Result: 'btn btn-primary'

// Handling falsy values
const buttonClass = classify('btn', false, 'btn-primary', undefined);
// Result: 'btn btn-primary' (falsy values are ignored)

// Conditional classes
const isActive = true;
const buttonClass = classify('btn', isActive && 'active');
// Result: 'btn active'

// Handling null values
const buttonClass = classify('btn', null, 'btn-primary');
// Result: 'btn btn-primary'

// Tailwind CSS class merging (removes duplicates)
const buttonClass = classify('p-4', 'bg-red-500', 'p-4');
// Result: 'p-4 bg-red-500'
```

## API

classify(...inputs: (string | boolean | undefined | null)[]): string
- inputs: Accepts a combination of strings, boolean values, null, or undefined values.
- returns: A string containing the merged class names, with falsy values and duplicates removed.

Features:
- Merges class names: Combines multiple class names into one string.
- Removes falsy values: Filters out false, undefined, null, and similar falsy values.
- Handles conditional classes: You can conditionally include class names based on boolean values or expressions.
- Tailwind CSS optimization: Uses tailwind-merge to prevent duplicate Tailwind classes and optimize the output.

## Example with Tailwind CSS Classes

```javascript
import { classify } from 'tailwind-classify';

const classString = classify('p-4', 'bg-blue-500', 'p-4', 'text-white');
// Result: 'p-4 bg-blue-500 text-white' (duplicates removed)
```

## Keywords

- classify
- tailwind
- tailwind classify
- tailwindcss
- utility function
- clsx
- tailwind-merge
- class merging
- conditional classes
- tailwind css optimization

## License
This package is completely free to use and is open-source under the MIT License. You can use, modify, and distribute it however you like.
