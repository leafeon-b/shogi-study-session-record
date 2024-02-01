"use client";

import { IconButton } from "@mui/material";
import ModalForm from "./_ModalForm";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";

export default function AddIconButton() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleFormSubmit = (data: { name: string; description?: string }) => {
    console.log(data); // ここでAPI呼び出しや他の処理を行う
    // API呼び出し後にページのリストを更新
  };

  return (
    <>
      <IconButton onClick={handleOpenModal} aria-label="add">
        <AddCircleIcon />
      </IconButton>
      <ModalForm
        open={openModal}
        onClose={handleCloseModal}
        onSubmit={handleFormSubmit}
        title="研究会の追加"
      />
    </>
  );
}
