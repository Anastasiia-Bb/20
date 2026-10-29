import { isValidEmail, isValidUrl } from '../main.js';

describe('isValidEmail', () => {
  it('should return true for a valid email', () => {
    expect(isValidEmail('example@example.com')).toBe(true);
  });

  it('should return false for an invalid email', () => {
    expect(isValidEmail('invalid-email')).toBe(false);
  });
});

describe('isValidUrl', () => {
  it('should return true for a valid URL', () => {
    expect(isValidUrl('https://www.example.com')).toBe(true);
  });

  it('should return false for an invalid URL', () => {
    expect(isValidUrl('invalid-url')).toBe(false);
  });
});