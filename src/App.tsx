import AppRoutes from "../routes";
import * as dayjs from "dayjs";
import "dayjs/locale/pt-br";

function App() {
  dayjs.locale("pt-br");
  return <AppRoutes />;
}

export default App;
