import { AppContainer } from "@/src/layouts/container"

import { Title } from "@/src/shared/title";
import { Filters } from "@/src/widgets/filters";
import { ProductGroupList } from "@/src/widgets/product-group-list";

import { TopBar } from "@/src/widgets/top-bar";

export default function Home() {
  return (
    <>
      <AppContainer className="mt-5">
        <Title text={"Все пиццы"} size="lg" className="font-extrabold" />
      </AppContainer>
      <TopBar />

      <AppContainer className="mt-10 pb-14">
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
// 1:16:10 time stop

//1.) change global theme
//2.) change Checkbox shadcn from git ulbi
