/**
 * Browser utility functions to safely access browser APIs during SSR
 * These functions check if the code is running in the browser before accessing browser-specific APIs
 */

/**
 * Safely check if we're in a browser environment
 */
export const isBrowser = (): boolean => {
  return typeof window !== 'undefined';
};

/**
 * Safely access window object
 */
export const safeWindow = (): Window | null => {
  return isBrowser() ? window : null;
};

/**
 * Safely access document object
 */
export const safeDocument = (): Document | null => {
  return isBrowser() ? document : null;
};

/**
 * Safely access navigator object
 */
export const safeNavigator = (): Navigator | null => {
  return isBrowser() ? navigator : null;
};

/**
 * Safely access localStorage
 */
export const safeLocalStorage = () => {
  if (!isBrowser()) return null;
  
  try {
    return window.localStorage;
  } catch (error) {
    console.warn('localStorage is not available:', error);
    return null;
  }
};

/**
 * Safely access sessionStorage
 */
export const safeSessionStorage = () => {
  if (!isBrowser()) return null;
  
  try {
    return window.sessionStorage;
  } catch (error) {
    console.warn('sessionStorage is not available:', error);
    return null;
  }
};

/**
 * Safely copy text to clipboard
 */
export const safeCopyToClipboard = async (text: string): Promise<boolean> => {
  const nav = safeNavigator();
  if (!nav?.clipboard) {
    console.warn('Clipboard API is not available');
    return false;
  }
  
  try {
    await nav.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.warn('Failed to copy to clipboard:', error);
    return false;
  }
};

/**
 * Safely open URL in new window
 */
export const safeOpenUrl = (url: string, target: string = '_blank'): Window | null => {
  const win = safeWindow();
  if (!win) return null;
  
  try {
    return win.open(url, target);
  } catch (error) {
    console.warn('Failed to open URL:', error);
    return null;
  }
};

/**
 * Safely get user agent
 */
export const safeGetUserAgent = (): string | null => {
  const nav = safeNavigator();
  return nav?.userAgent || null;
};

/**
 * Safely check if browser is Safari
 */
export const isSafari = (): boolean => {
  const userAgent = safeGetUserAgent();
  if (!userAgent) return false;
  
  return /^((?!chrome|android).)*safari/i.test(userAgent);
};

/**
 * Safely get device pixel ratio
 */
export const safeGetDevicePixelRatio = (): number => {
  const win = safeWindow();
  return win?.devicePixelRatio || 1;
};

/**
 * Hook to check if component is mounted (client-side)
 */
export const useIsMounted = (): boolean => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  return isMounted;
};

// Import React hooks for the useIsMounted hook
import { useState, useEffect } from 'react';