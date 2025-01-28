import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { classify } from '../src';

vi.mock('clsx', () => ({
  __esModule: true,
  default: vi.fn(),
}));

vi.mock('tailwind-merge', () => ({
  twMerge: vi.fn(),
}));

describe('Classify utility function', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should merge class names correctly using clsx and twMerge', () => {
    (clsx as any).mockReturnValue('class1 class2');
    (twMerge as any).mockReturnValue('class1 class2');

    const result = classify('class1', 'class2');

    expect(clsx).toHaveBeenCalledWith('class1', 'class2');
    expect(twMerge).toHaveBeenCalledWith('class1 class2');

    expect(result).toBe('class1 class2');
  });

  it('should handle falsy values and remove them', () => {
    (clsx as any).mockReturnValue('class1 class2');
    (twMerge as any).mockReturnValue('class1 class2');

    const result = classify('class1', false, 'class2', undefined);

    expect(clsx).toHaveBeenCalledWith('class1', false, 'class2', undefined);
    expect(twMerge).toHaveBeenCalledWith('class1 class2');

    expect(result).toBe('class1 class2');
  });

  it('should ignore null values', () => {
    (clsx as any).mockReturnValue('class1 class2');
    (twMerge as any).mockReturnValue('class1 class2');

    const result = classify('class1', null, 'class2');

    expect(clsx).toHaveBeenCalledWith('class1', null, 'class2');
    expect(twMerge).toHaveBeenCalledWith('class1 class2');

    expect(result).toBe('class1 class2');
  });

  it('should handle conditional classes correctly', () => {
    (clsx as any).mockReturnValue('btn active');
    (twMerge as any).mockReturnValue('btn active');

    const isActive = true;
    const result = classify('btn', isActive && 'active');

    expect(clsx).toHaveBeenCalledWith('btn', isActive && 'active');
    expect(twMerge).toHaveBeenCalledWith('btn active');

    expect(result).toBe('btn active');
  });

  it('should not add duplicate classes', () => {
    (clsx as any).mockReturnValue('btn btn-primary');
    (twMerge as any).mockReturnValue('btn btn-primary');

    const result = classify('btn', 'btn-primary');

    expect(clsx).toHaveBeenCalledWith('btn', 'btn-primary');
    expect(twMerge).toHaveBeenCalledWith('btn btn-primary');

    expect(result).toBe('btn btn-primary');
  });

  it('should correctly merge tailwind classes', () => {
    (clsx as any).mockReturnValue('p-4 bg-red-500');
    (twMerge as any).mockReturnValue('p-4 bg-red-500');

    const result = classify('p-4', 'bg-red-500');

    expect(clsx).toHaveBeenCalledWith('p-4', 'bg-red-500');
    expect(twMerge).toHaveBeenCalledWith('p-4 bg-red-500');

    expect(result).toBe('p-4 bg-red-500');
  });

  it('should return an empty string if no class names are provided', () => {
    (clsx as any).mockReturnValue('');
    (twMerge as any).mockReturnValue('');

    const result = classify();

    expect(clsx).toHaveBeenCalledWith();
    expect(twMerge).toHaveBeenCalledWith('');

    expect(result).toBe('');
  });
});
