import { AppContainer } from "@/src/layouts/container"

import { Title } from "@/src/shared/title";
import { Filters } from "@/src/widgets/filters";
import { ProductGroupList } from "@/src/widgets/product-group-list";

import { TopBar } from "@/src/widgets/top-bar";

export default function Home() {
  return (
    <>
      <AppContainer className="mt-5">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </AppContainer>
      <TopBar />
      <AppContainer className="pb-14">
        <div className="flex gap-[60px]">

          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductGroupList />
              <ProductGroupList />
            </div>
          </div>

        </div>
      </AppContainer>
    </>
  );
}
