"use client";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { useState } from "react";
import { addTodo } from "@/api";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

export default function AddTodo() {
  const [openModal, setOpenModal] = useState(false);
  const [newTodoText, setNewTodoText] = useState("");
  const router = useRouter();

  const addTodoHandler = async (e) => {
    e.preventDefault();
    const newTodo = await addTodo({
      id: uuidv4(),
      text: newTodoText,
    });
    setNewTodoText("");
    setOpenModal(false);
    router.refresh();
  };

  return (
    <div>
      <button
        className="btn btn-primary w-full"
        onClick={() => setOpenModal(true)}
      >
        Add New Todo
        <AiOutlinePlus className="ml-2" size={18} />
      </button>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <form onSubmit={addTodoHandler} className="flex gap-4">
          <input
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            type="text"
            placeholder="Type here"
            style={{ outline: "none" }}
            className="input input-bordered w-fit max-w-xs"
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
}
