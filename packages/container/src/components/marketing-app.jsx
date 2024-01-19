import React, { useEffect, useRef } from 'react';
import { mount } from 'marketing/MarketingApp';
import { useNavigate, useLocation } from 'react-router-dom';
import { router } from '../router';

export function MarketingApp() {
  const ref = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        if (location.pathname !== nextPathname) {
          navigate(nextPathname);
        }
      },
    });

    router.subscribe(({ location }) => {
      onParentNavigate?.({ pathname: location.pathname });
    });
  }, []);

  return <div ref={ref} />;
}
