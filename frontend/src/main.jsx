import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext'; // Import your context
import store from './pages/store.jsx';
import { Provider } from 'react-redux';
import '../src/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AuthProvider> {/* Wrap App with AuthProvider */}
      <App />
    </AuthProvider>
  </Provider>
);
