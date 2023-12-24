import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "./ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import Customer from "@/model/customer";
interface CustomerFormProps {
  customer: Customer;
  showTable: () => void;
  saveCustomer: (customer: Customer) => void;
}

const formSchema = z.object({
  name: z
    .string({
      required_error: "O nome de usuário é obrigatório",
    })
    .min(3, { message: "O nome deve ter pelo menos 3 caracteres" }),
  age: z.number({
    required_error: "A idade é obrigatória.",
    invalid_type_error: "A idade deve conter apenas números",
  }),
});

export const CustomerForm: React.FC<CustomerFormProps> = ({
  customer,
  saveCustomer,
  showTable,
}) => {
  //const form = useForm<z.infer<typeof formSchema>>({
  const form = useForm<CustomerFormProps["customer"]>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: customer?.id,
      name: customer?.name ?? undefined,
      age: customer?.age ?? undefined,
    },
  });

  const onSubmit = (values: Customer) => {
    const data = new Customer(values.name, values.age, customer.id);
    saveCustomer(data);
    showTable();
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-8"
      >
        {customer?.id && (
          <FormField
            control={form.control}
            name="id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Código</FormLabel>
                <FormControl>
                  <Input readOnly {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Idade</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  onChange={(e) => {
                    const value = e.target.value;
                    field.onChange(value === "" ? null : Number(value));
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2 self-end">
          <Button variant="secondary" onClick={() => showTable()}>
            Cancelar
          </Button>
          <Button type="submit">{customer.id ? "Alterar" : "Salvar"}</Button>
        </div>
      </form>
    </FormProvider>
  );
};
