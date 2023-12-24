import React from "react";
import { Edit, Trash2Icon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Customer from "@/model/customer";

interface CustomerTableProps {
  customers: Customer[];
  editCustomer?: (customer: Customer) => void;
  deleteCustomer?: (customer: Customer) => void;
}

export const CustomerTable: React.FC<CustomerTableProps> = ({
  customers,
  editCustomer,
  deleteCustomer,
}) => {
  const showActions = editCustomer || deleteCustomer;
  const renderHeader = () => {
    return (
      <TableRow>
        <TableHead colSpan={2} className="text-left">
          Código
        </TableHead>
        <TableHead className="text-left">Nome</TableHead>
        <TableHead className="text-center">Idade</TableHead>
        {showActions && <TableHead className="text-center">Ações</TableHead>}
      </TableRow>
    );
  };

  const renderActions = (customer: Customer) => {
    return (
      <TableCell className="flex gap-2 items-center justify-center">
        {editCustomer && (
          <button onClick={() => editCustomer(customer)}>
            <Edit className="w-5 h-5 text-green-600 hover:text-green-600/50 transition-all duration-200" />
          </button>
        )}
        {deleteCustomer && (
          <button onClick={() => deleteCustomer(customer)}>
            <Trash2Icon className="w-5 h-5 text-red-600 hover:text-red-600/50 transition-all duration-200" />
          </button>
        )}
      </TableCell>
    );
  };
  const renderBody = () => {
    return customers.map((customer) => (
      <TableRow key={customer.id}>
        <TableCell colSpan={2}>{customer.id}</TableCell>
        <TableCell className="text-left">{customer.name}</TableCell>
        <TableCell className="text-center">{customer.age}</TableCell>
        {showActions && renderActions(customer)}
      </TableRow>
    ));
  };

  return (
    <Table>
      <TableHeader>{renderHeader()}</TableHeader>
      <TableBody>{renderBody()}</TableBody>
    </Table>
  );
};
