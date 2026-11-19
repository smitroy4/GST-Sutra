// App shell and routes. "/" shows the two-column workspace (learn + chat);
// "/learn/:slug" shows a single learning article. Header and footer are shared.
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import LearnPanel from './components/LearnPanel.jsx';
import ChatPanel from './components/ChatPanel.jsx';
import FactsTicker from './components/FactsTicker.jsx';
import LearnPage from './components/LearnPage.jsx';

function Home() {
  // The facts strip is visible only until the first answer/error arrives.
  // Resetting the chat in ChatPanel flips this back to false.
  const [hasAnswer, setHasAnswer] = useState(false);

  return (
    <main className="workspace-wrap">
      <div className="workspace">
        <aside className="learn-column" aria-label="Learn GST">
          <LearnPanel />
        </aside>
        <section className="chat-column" aria-label="GST chat">
          {!hasAnswer && <FactsTicker />}
          <ChatPanel onActivityChange={setHasAnswer} />
        </section>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn/:slug" element={<LearnPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}
