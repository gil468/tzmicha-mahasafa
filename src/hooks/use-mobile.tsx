import * as React from "react";

const mobileWidthBreakpoint = import.meta.env.VITE_MOBILE_WIDTH_BREAKPOINT;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined
  );

  React.useEffect(() => {
    const mql = window.matchMedia(
      `(max-width: ${mobileWidthBreakpoint - 1}px)`
    );
    const onChange = () => {
      setIsMobile(window.innerWidth < mobileWidthBreakpoint);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < mobileWidthBreakpoint);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
