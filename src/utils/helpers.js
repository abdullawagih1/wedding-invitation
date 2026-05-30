/**
 * Pad a number to always have 2 digits: 5 → "05"
 */
export const pad = (n) => String(n).padStart(2, '0');

/**
 * Convert Western digits to Arabic-Indic numerals
 */
export const toArabicNumerals = (str) => {
  const map = { '0': '٠', '1': '١', '2': '٢', '3': '٣', '4': '٤',
                '5': '٥', '6': '٦', '7': '٧', '8': '٨', '9': '٩' };
  return String(str).replace(/[0-9]/g, (d) => map[d]);
};

/**
 * Clamp a number between min and max
 */
export const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
