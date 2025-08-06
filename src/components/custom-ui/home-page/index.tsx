import BigNumbersHome from "./big-numbers";
import Greetins from "./hooks/use-greetins";

export default function HomePage() {

  return (
    <div className="h-full w-full flex flex-col">
      <Greetins />
      <BigNumbersHome />
    </div>
  );
}
