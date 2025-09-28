import Greetins from "./hooks/use-greetins";
import BigNumbersHome from "./big-numbers";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function HomePage() {
  return (
    <div className="h-full w-full flex flex-col gap-6">
      <Greetins />

      <BigNumbersHome />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="w-full h-[360px]">
          <CardHeader>
            <CardTitle>Categorias mais gastas (mês)</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center h-full text-muted-foreground">
            <span>Aqui vai o gráfico futuramente</span>
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Despesas recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Descrição</TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead className="text-right">Valor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Supermercado</TableCell>
                  <TableCell>Mercado</TableCell>
                  <TableCell>01/08/2025</TableCell>
                  <TableCell className="text-right">R$ 320,50</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Internet</TableCell>
                  <TableCell>Moradia</TableCell>
                  <TableCell>05/08/2025</TableCell>
                  <TableCell className="text-right">R$ 99,90</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Academia</TableCell>
                  <TableCell>Saúde</TableCell>
                  <TableCell>06/08/2025</TableCell>
                  <TableCell className="text-right">R$ 79,90</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
