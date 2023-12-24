import Customer from "./customer";

export interface CustomerRepository {
  save(customer: Customer): Promise<Customer>;
  delete(customer: Customer): Promise<void>;
  getAll(): Promise<Customer[]>;
}
