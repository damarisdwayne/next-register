import { CustomerForm } from "@/components/customer-form";
import { CustomerTable } from "@/components/customer-table";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Customer from "@/model/customer";
import CustomerCollection from "@/model/customer-collection";
import { CustomerRepository } from "@/model/customer-repository";
import { PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentView, setCurrentView] = useState<"table" | "form">("table");
  const [customer, setCustomer] = useState(Customer.empty());
  const [customers, setCustomers] = useState<Customer[]>([]);

  const repository: CustomerRepository = new CustomerCollection();

  const getAll = () => {
    repository.getAll().then((customer) => {
      setCustomers(customer);
      setCurrentView("table");
    });
  };

  const saveCustomer = (customer: Customer) => {
    repository.save(customer);
    getAll();
  };

  const editCustomer = (customer: Customer) => {
    setCustomer(customer);
    setCurrentView("form");
  };

  const deleteCustomer = async (customer: Customer) => {
    await repository.delete(customer);
    getAll();
  };

  const newCustomer = () => {
    setCustomer(Customer.empty());
    setCurrentView("form");
  };

  useEffect(() => getAll, []);

  const isTableMode = currentView === "table";
  return (
    <main className="flex items-center justify-center h-screen mx-6">
      <Card className="flex flex-col w-full md:w-2/3">
        <CardHeader className="flex items-start justify-start gap-3 md:flex-row md:items-center md:justify-between">
          <CardTitle>Cadastro Simples</CardTitle>
          {isTableMode && (
            <Button onClick={newCustomer}>
              <PlusIcon className="w-4 h-4 mr-1" />
              Novo cliente
            </Button>
          )}
        </CardHeader>
        <CardContent>
          {isTableMode ? (
            <CustomerTable
              customers={customers}
              editCustomer={editCustomer}
              deleteCustomer={deleteCustomer}
            />
          ) : (
            <CustomerForm
              customer={customer}
              saveCustomer={saveCustomer}
              setCurrentView={setCurrentView}
            />
          )}
        </CardContent>
      </Card>
    </main>
  );
}
