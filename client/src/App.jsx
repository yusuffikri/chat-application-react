import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Chat from "@/components/chat";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <div>
        <BrowserRouter>
        <Routes>
        <Route path="/chat" element={<Chat/>} />
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
