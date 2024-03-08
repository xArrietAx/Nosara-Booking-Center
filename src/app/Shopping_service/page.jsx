import { Categories } from "@/components/Shopping_Services/Categories";
import { Form } from "@/components/Shopping_Services/Form";
import { Table } from "@/components/Shopping_Services/Table";

export default async function page() {
 return (
    <main className="mb-36">
      <section className="container">
        <div className="space-y-3 mt-10 mb-20">
          <h1 className="font-[600] font text-center text-[2.5em] sm:text-3xl">
            Shopping
          </h1>
          <p className="text-center font-[400] text-xl sm:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi odit
            replorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex recusandae aspernatur corrupti minus laborum a quidem repudiandae suscipit tenetur vero eligendi in esse incidunt, sit reiciendis rem officiis at hic. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi odit laudantium ipsa, consequatur vel explicabo ratione cumque nisi voluptatum deserunt voluptate? Explicabo blanditiis culpa atque, alias quisquam cum aliquid voluptate.
          </p>
        </div>

        <div className="flex flex-col gap-16">
        <Categories />
        <Table />
        <Form />
        </div>

      </section>
    </main>
  );
}
