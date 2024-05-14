interface CouponProps {
  code: string;
  description: string;
}

export default function CouponSection({
  code = "EXAMPLECODE",
  description = "Here are the benefits of using this coupon: Free shipping, 10% off on all items, and more.",
}: CouponProps) {
  return (
    <div class="mx-auto flex flex-col items-center gap-8 py-20 px-5 md:px-10 lg:py-36">
      <div class="bg-white shadow-md rounded-lg p-6 text-center">
        <h2 class="text-2xl font-bold mb-4">Use o código do cupom abaixo</h2>
        <div class="bg-gray-200 text-lg font-mono py-2 px-4 rounded-md mb-4">
          {code}
        </div>
        <p class="text-zinc-400 text-[16px] md:text-[18px] leading-[150%]">
          {description}
        </p>
      </div>
    </div>
  );
}