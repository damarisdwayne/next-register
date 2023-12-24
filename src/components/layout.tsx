import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReactNode } from "react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { RegisterTable } from "./register-table";

export const Layout: React.FC<LayoutProps> = () => {
  return (
    <Card className="flex flex-col w-2/3">
      <CardHeader>
        <CardTitle>Cadastro Simples</CardTitle>
      </CardHeader>
      <Separator />
      <Button className="self-end m-5">Novo cliente</Button>
      <CardContent>
        <Card>
          <CardContent>
            <RegisterTable />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};
