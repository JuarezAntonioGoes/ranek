import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contato } from "./components/Contato";
import { Produto } from "./components/Produto";
import { Produtos } from "./components/Produtos";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Produtos />} />
        <Route path="contato" element={<Contato />} />
        <Route path="produto/:id" element={<Produto />} />
      </Routes>
    </BrowserRouter>
  );
};
