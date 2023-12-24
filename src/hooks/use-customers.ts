import Customer from "@/model/customer";
import CustomerCollection from "@/model/customer-collection";
import { CustomerRepository } from "@/model/customer-repository";
import { useState, useEffect } from "react";
import useCurrentView from "./use-current-view";

const useCustomers = () => {
  const [customer, setCustomer] = useState(Customer.empty());
  const [customers, setCustomers] = useState<Customer[]>([]);

  const { isFormVisisble, isTableVisible, showForm, showTable } =
    useCurrentView();

  const repository: CustomerRepository = new CustomerCollection();

  const getAll = () => {
    repository.getAll().then((customer) => {
      setCustomers(customer);
      showTable();
    });
  };

  const saveCustomer = (customer: Customer) => {
    repository.save(customer);
    getAll();
  };

  const editCustomer = (customer: Customer) => {
    setCustomer(customer);
    showForm();
  };

  const deleteCustomer = async (customer: Customer) => {
    await repository.delete(customer);
    getAll();
  };

  const newCustomer = () => {
    setCustomer(Customer.empty());
    showForm();
  };

  useEffect(() => getAll, []);

  return {
    customer,
    customers,
    isFormVisisble,
    isTableVisible,
    showTable,
    saveCustomer,
    deleteCustomer,
    editCustomer,
    newCustomer,
    getAll,
  };
};

export default useCustomers;
