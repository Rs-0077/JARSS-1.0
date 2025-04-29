/**
 * Utility functions for formatting data
 */

/**
 * Format a number as currency
 * @param value - The number to format
 * @param currency - The currency code (default: 'MXN')
 * @param locale - The locale (default: 'es-MX')
 * @returns Formatted currency string
 */
export const formatCurrency = (
  value: number,
  currency: string = 'MXN',
  locale: string = 'es-MX'
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value);
};

/**
 * Format a number with thousand separators
 * @param value - The number to format
 * @param locale - The locale (default: 'es-MX')
 * @returns Formatted number string
 */
export const formatNumber = (
  value: number,
  locale: string = 'es-MX'
): string => {
  return new Intl.NumberFormat(locale).format(value);
};

/**
 * Format a percentage
 * @param value - The number to format as percentage (0-1)
 * @param decimals - Number of decimal places (default: 2)
 * @param locale - The locale (default: 'es-MX')
 * @returns Formatted percentage string
 */
export const formatPercentage = (
  value: number,
  decimals: number = 2,
  locale: string = 'es-MX'
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'percent',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value / 100);
};

/**
 * Truncate a string if it exceeds a certain length
 * @param text - The string to truncate
 * @param maxLength - Maximum length before truncation (default: 50)
 * @returns Truncated string with ellipsis if needed
 */
export const truncateText = (
  text: string,
  maxLength: number = 50
): string => {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};

/**
 * Sanitize content to prevent XSS attacks
 * @param content - The content to sanitize
 * @returns Sanitized content
 */
export const sanitizeContent = (content: string): string => {
  // Simple sanitization - in a real app, use a library like DOMPurify
  return content
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};
