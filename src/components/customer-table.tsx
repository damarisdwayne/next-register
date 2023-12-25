import React from "react";
import { Edit } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Customer from "@/model/customer";
import { DeleteCustomerDialog } from "./delete-customer-dialog";

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
  const showActions = customers?.length && (editCustomer || deleteCustomer);
  const renderHeader = () => {
    return (
      <TableRow>
        <TableHead colSpan={2} className="text-left">
          Código
        </TableHead>
        <TableHead className="text-left">Nome</TableHead>
        <TableHead className="text-center">Idade</TableHead>
        {showActions ? (
          <TableHead className="text-center">Ações</TableHead>
        ) : (
          false
        )}
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
          <DeleteCustomerDialog
            deleteCustomer={() => deleteCustomer(customer)}
          />
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

  const renderEmptyBody = () => {
    return (
      <TableRow>
        <TableCell colSpan={4} className="text-center">
          Nenhum cliente encontrado
        </TableCell>
      </TableRow>
    );
  };

  return (
    <Table>
      <TableHeader>{renderHeader()}</TableHeader>
      <TableBody>
        {customers.length ? renderBody() : renderEmptyBody()}
      </TableBody>
    </Table>
  );
};
