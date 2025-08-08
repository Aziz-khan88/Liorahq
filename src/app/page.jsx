import Banner from "@/src/app/home/banner"
import Feature from "@/src/app/home/feature"
import CtaBanner from "@/src/app/home/ctabanner"
import Work from "@/src/app/home/work"
import Trust from "@/src/app/home/trust"
import Pricing from "@/src/app/home/pricing"
import ContentBanner from "./home/contentbanner"
import Clients from "./home/clients"
import Faqs from "./home/faqs"

const Page = () => {
  return (
    <>
      <Banner />
      <Feature />
      <CtaBanner />
      <Work />
      <Trust />
      <Pricing />
      <ContentBanner />
      <Clients />
      <Faqs />
    </>
  )
}

export default Page