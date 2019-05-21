// This is a globally available object but could also be an array, string, number, etc. and can be passed between components without using props
import React from 'react';

const authContext = React.createContext({
    isLoggedIn: false,
    login: () => {},
});

export default authContext;
