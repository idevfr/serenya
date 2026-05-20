import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AnimatedLayout from "../../Layout/AnimatedLayout";
import ContainerLayout from "../../Layout/ContainerLayout";
import QuoteIcon from "../../assets/icons/Qoute-icon.svg";
type ReviewItem = {
  id: number;
  review: string;
  customer_name: string;
  customer_company: string;
  customer_image: string;
};
const data: ReviewItem[] = [
  {
    id: 1,
    review:
      "“After my sessions with Sophia, I felt a calm I hadn’t experienced in years. Her guidance brought me back to myself gently and powerfully.”",
    customer_name: "Sarah Thompson",
    customer_company: "CEO - Apple INC",
    customer_image:
      "https://cdn.prod.website-files.com/683caab15ddff5862cbab42f/683caab15ddff5862cbab552_Testimonal%20Image%20(1).jpg",
  },
  {
    id: 2,
    review:
      "“The atmosphere, the energy, the coaching everything felt aligned. It’s rare to find someone who creates such a safe and open space.”",
    customer_name: "Michael Johnson",
    customer_company: "CEO - Apple INC",
    customer_image:
      "https://cdn.prod.website-files.com/683caab15ddff5862cbab42f/683caab15ddff5862cbab55e_Testimonal%20Image%20(4).jpg",
  },
  {
    id: 3,
    review:
      "“I came in feeling drained and left feeling energized and clear. It’s more than wellness — it’s a reset for the soul.”",
    customer_name: "David Rodriguez",
    customer_company: "CEO - Apple INC",
    customer_image:
      "https://cdn.prod.website-files.com/683caab15ddff5862cbab42f/683caab15ddff5862cbab55c_Testimonal%20Image%20(5).jpg",
  },
  {
    id: 4,
    review:
      "“I didn’t think breathwork could change my life until I tried it here. Now it’s part of my daily routine and I feel grounded for the first time in years.”",
    customer_name: "Lisa Martinez",
    customer_company: "CEO - Apple INC",
    customer_image:
      "https://cdn.prod.website-files.com/683caab15ddff5862cbab42f/683caab15ddff5862cbab566_Testimonal%20Image%20(2).jpg",
  },
  {
    id: 5,
    review:
      "“I came in feeling drained and left feeling energized and clear. It’s more than wellness it’s a reset for the soul.”",
    customer_name: "Emily Parker",
    customer_company: "CEO - Apple INC",
    customer_image:
      "https://cdn.prod.website-files.com/683caab15ddff5862cbab42f/683caab15ddff5862cbab582_Testimonal%20Image%20(6).jpg",
  },
  {
    id: 6,
    review:
      "“After my sessions with Sophia, I felt a calm I hadn’t experienced in years. Her guidance brought me back to myself gently and powerfully.”",
    customer_name: "Alex Carter",
    customer_company: "CEO - Apple INC",
    customer_image:
      "https://cdn.prod.website-files.com/683caab15ddff5862cbab42f/683caab15ddff5862cbab596_Testimonal%20Image%20(3).jpg",
  },
];
function ReveiewCard({ item }: { item: ReviewItem }) {
  return (
    <div
      key={item.id}
      className="h-100 w-full max-w-sm space-y-20 rounded-xl border border-gray-300 px-6 py-10 shadow-xl sm:h-120 sm:space-y-32 md:min-w-sm"
    >
      <div className="flex flex-col items-start justify-center gap-6">
        <img src={QuoteIcon} alt="icon-quote" />
        <p>{item.review}</p>
      </div>
      <div className="flex items-center justify-start gap-4">
        <img
          className="w-16 rounded-full"
          src={item.customer_image}
          alt="customer image"
        />
        <div>
          <p className="font-semibold">{item.customer_name}</p>
          <p className="text-gray-600">{item.customer_company}</p>
        </div>
      </div>
    </div>
  );
}
function CustomerReview() {
  return (
    <AnimatedLayout>
      <ContainerLayout>
        <div className="h-full w-full space-y-16">
          <div className="space-y-4">
            <h3 className="font-lora text-4xl italic">Words from the Heart</h3>
            <p className="ml-4 text-gray-600">
              Every story shared here is a reflection of connection, <br />
              trust, and transformation.
            </p>
          </div>
          <Carousel
            opts={{
              align: "center",
            }}
            className="flex w-full flex-col"
          >
            <CarouselContent>
              {data.map((item, i) => {
                return (
                  <CarouselItem
                    key={i}
                    className="basis-[100%] pl-4 sm:basis-[45%] lg:basis-[30%]"
                  >
                    <ReveiewCard item={item} />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="mt-10 flex items-center justify-center gap-4">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </ContainerLayout>
    </AnimatedLayout>
  );
}

export default CustomerReview;
