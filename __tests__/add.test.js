import { describe, expect, it } from 'vitest';
import add from '../api/v1/lib/add.js';

describe('Add function', () => {
  it('adds 1 + 2 and to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });
});
