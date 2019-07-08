import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";

export default function withCurrentUser(Component) {
  return () => {
    const [user, setUser] = useState({});

    useEffect(() => {
      Auth.currentAuthenticatedUser().then(currentUser => {
        setUser(currentUser);
      });
    }, []);

    return <Component currentUser={user.username} />;
  };
}
