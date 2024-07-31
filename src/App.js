import './App.css';
import { useState } from 'react';

function App() {
  const text = "hello world";

  return (
    <TextDisplay text={text} />
  );
}

function TextDisplay({ text }) {
  const [typingText, setTypingText] = useState({
    typed: "",
    currentLetter: text[0],
    toType: text.slice(1)
  });

  const handleTyping = (e) => {
    const key = e.key;
    if (!(key === typingText.currentLetter)) return;
    nextLetter();

  }

  const nextLetter = () => {
    setTypingText({
      typed: typingText.typed + typingText.currentLetter,
      currentLetter: typingText.toType[0],
      toType: typingText.toType.slice(1)
    });
    
  }

  window.addEventListener('keydown', handleTyping);

  return (
    <div>
      <span>Hi there!</span>
      <span className='typed-text'>{typingText.typed}</span>
      <span className='current-letter'>{typingText.currentLetter}</span>
      <span className='to-type-text'>{typingText.toType}</span>
    </div>
  );
}

export default App;
