import React from 'react';
import Quote from './components/Quote';

export default function App() {
  return (
    <>
    <div id="app">
        <Quote />
        <button type="button">Save</button>
    </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="savedQuotes" element={<Blogs />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}
