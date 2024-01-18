import React, { useEffect, useRef, useState } from 'react';
import { mount } from 'marketing/MarketingApp';
import { useNavigate, useLocation } from 'react-router-dom';

export function MarketingApp() {
  const ref = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  // TODO: Remove this when refactor creating the router here with subscribe inside useEffect
  const [navigateFromContainer, setNavigateFromContainer] = useState(null);

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        if (location.pathname !== nextPathname) {
          navigate(nextPathname);
        }
      },
    });

    // TODO: Uncomment when refactor
    // router.subscribe(({ location }) => {
    //   onParentNavigate?.({ pathname: location.pathname });
    // });

    setNavigateFromContainer(() => onParentNavigate);
  }, []);

  // TODO: Remove when refactor
  useEffect(
    () => navigateFromContainer?.({ pathname: location.pathname }),
    [location]
  );

  return <div ref={ref} />;
}
