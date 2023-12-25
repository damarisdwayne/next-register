import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import useCustomers from "@/hooks/use-customers";
import Customer from "@/model/customer";
import { Trash2Icon } from "lucide-react";

interface DeleteCustomerDialogProps {
  deleteCustomer: (customer: Customer) => void;
}

export function DeleteCustomerDialog({
  deleteCustomer,
}: DeleteCustomerDialogProps) {
  const { customer } = useCustomers();
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button>
          <Trash2Icon className="w-5 h-5 text-red-600 hover:text-red-600/50 transition-all duration-200" />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Tem certeza absoluta?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta ação não pode ser desfeita. Isso excluirá permanentemente e
            removerá os dados do cliente de nossos servidores.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={() => deleteCustomer(customer)}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
