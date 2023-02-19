
import HeroBanner from "@/features/Home/Components/HeroBanner";
import DefaultLayout from "@/features/Layout/DefaultLayout";

export default function Home({ properties }) {
  console.log(properties + 'hello');
  return (
    <DefaultLayout>
      <HeroBanner />
    </DefaultLayout>
  )
}

export async function getStaticProbs() {
  const { hits } = await require('@/features/data/properties');
  console.log(hits);
  return {
    props: { properties: hits }
  }
}
getStaticProbs();


