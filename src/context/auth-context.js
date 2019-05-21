// This is a globally available object but could also be an array, string, number, etc. and can be passed between components without using props
import React from 'react';

// This takes a default value that will apply if/when I don't set a value
const authContext = React.createContext({
    isLoggedIn: false,
    login: () => {},
});

export default authContext;
