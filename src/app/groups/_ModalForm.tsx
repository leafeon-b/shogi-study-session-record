import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

interface GroupFormInput {
  name: string;
  description?: string;
}

interface ModalFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: SubmitHandler<GroupFormInput>;
  title: string;
}

export default function ModalForm(props: ModalFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<GroupFormInput>();

  const handleClose = () => {
    reset(); // フォームのリセット
    props.onClose(); // 親コンポーネントのクローズ関数を呼び出し
  };

  const handleFormSubmit = (data: GroupFormInput) => {
    props.onSubmit(data); // データを親コンポーネントに送信
    handleClose(); // モーダルを閉じる
  };

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="名前"
            type="text"
            fullWidth
            {...register("name", { required: "名前は必須です" })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            margin="dense"
            id="description"
            label="説明"
            type="text"
            fullWidth
            multiline
            {...register("description")}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            キャンセル
          </Button>
          <Button type="submit" color="primary">
            送信
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
