import { CustomerForm } from "@/components/customer-form";
import { CustomerTable } from "@/components/customer-table";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import useCustomers from "@/hooks/use-customers";
import { PlusIcon } from "lucide-react";

export default function Home() {
  const {
    customer,
    customers,
    isTableVisible,
    showTable,
    newCustomer,
    saveCustomer,
    editCustomer,
    deleteCustomer,
  } = useCustomers();

  return (
    <main className="flex items-center justify-center h-screen mx-6">
      <Card className="flex flex-col w-full md:w-2/3">
        <CardHeader className="flex items-start justify-start gap-3 md:flex-row md:items-center md:justify-between">
          <CardTitle>Cadastro Simples</CardTitle>
          {isTableVisible && (
            <Button onClick={newCustomer}>
              <PlusIcon className="w-4 h-4 mr-1" />
              Novo cliente
            </Button>
          )}
        </CardHeader>
        <CardContent>
          {isTableVisible ? (
            <CustomerTable
              customers={customers}
              editCustomer={editCustomer}
              deleteCustomer={deleteCustomer}
            />
          ) : (
            <CustomerForm
              customer={customer}
              saveCustomer={saveCustomer}
              showTable={showTable}
            />
          )}
        </CardContent>
      </Card>
    </main>
  );
}
