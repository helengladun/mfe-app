import React, {useRef, useEffect} from "react";
import { useHistory } from 'react-router-dom';

import {mount} from 'auth/AuthApp';

export default ({ onSignIn }) => {
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
      },
      onSignIn
    });

    listen(onParentNavigate);
  }, []);

  return <div ref={ref} />
}

