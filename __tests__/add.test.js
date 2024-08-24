import add from '@api/lib/add.js';
import { describe, expect, it } from 'vitest';

describe('Add function', () => {
  it('adds 1 + 2 and to equal 3', () => {
    expect(add(1, 2).toBe(3));
  });
});
