export default function ButtonBuyNow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-14 py-2 border-2 border-white text-white text-lg font-lexend font-medium rounded-2xl bg-transparent hover:bg-white hover:text-black transition-colors mb-8"
    >
      Buy Now
    </button>
  );
}
