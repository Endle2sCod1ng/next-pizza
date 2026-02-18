import { AppContainer } from "@/src/layouts/container"
import { Categories } from "@/src/shared/categories";
import { Title } from "@/src/shared/title";

export default function Home() {
  return (
    <>
      <AppContainer className="mt-5">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
        <Categories />
      </AppContainer>
    </>
  );
}
