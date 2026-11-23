import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { greet } from '../src/greet.js';

describe('greet', () => {
  it('greets by name', () => {
    assert.equal(greet('Benjamin'), 'Hello, Benjamin! Ready to build games and apps.');
  });

  it('rejects empty names', () => {
    assert.throws(() => greet('   '), /name is required/);
  });
});