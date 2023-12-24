import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit2Icon, TrashIcon } from "lucide-react";

export const RegisterTable: React.FC = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-left">Código</TableHead>
          <TableHead className="text-center">Nome</TableHead>
          <TableHead className="text-center">Idade</TableHead>
          <TableHead className="text-center">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>8kwihwkwodkoaRYb589</TableCell>
          <TableCell className="text-center">Gui gui</TableCell>
          <TableCell className="text-center">30</TableCell>
          <TableCell className="flex gap-2 items-center justify-center">
            <Edit2Icon className="w-4 h-4" /> <TrashIcon className="w-4 h-4" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
