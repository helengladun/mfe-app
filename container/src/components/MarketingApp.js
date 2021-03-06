import React, {useRef, useEffect} from "react";
import {mount} from 'marketing/MarketingApp';
import {useHistory} from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const {push, location, listen} = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = location;

        if (pathname !== nextPathname) {
          push(nextPathname);
        }
      }
    });

    listen(onParentNavigate);
  }, []);

  return <div ref={ref} />
}

