"use client";

import { useState } from "react";
import UpsertTransactionDialog from "./upset-transaction-dialog";
import { Button } from "./ui/button";
import { ArrowDownUpIcon } from "lucide-react";

const AddTransactionButton = () => {
  const [dialogIsOpen, setdialogIsOpen] = useState(false);

  return (
    <>
      <Button
        className="rounded-full font-bold"
        onClick={() => setdialogIsOpen(true)}
      >
        Adicionar Transação
        <ArrowDownUpIcon className="mr-2" />
      </Button>

      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setdialogIsOpen}
      />
    </>
  );
};

export default AddTransactionButton;
