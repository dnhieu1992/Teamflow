import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Conversation from "./pages/conversation/Conversation";

export default function FeedRoutes() {
  return (
    <Routes>
      <Route index element={<Conversation />} />
    </Routes>
  );
}