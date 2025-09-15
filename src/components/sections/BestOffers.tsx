import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: "sac-kurutma-makinesi",
    name: "Saç Kurutma Makinesi",
    price: "999 TL",
    image: "https://picsum.photos/id/200/300/200",
  },
  {
    id: "laptop",
    name: "Laptop",
    price: "14.999 TL",
    image: "https://picsum.photos/id/201/300/200",
  },
  {
    id: "airpods",
    name: "AirPods",
    price: "4.499 TL",
    image: "https://picsum.photos/id/202/300/200",
  },
  {
    id: "supurge",
    name: "Dikey Süpürge",
    price: "3.299 TL",
    image: "https://picsum.photos/id/203/300/200",
  },
];
export default function BestOffers() {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-10">
      <h2 className="text-xl font-semibold mb-6">En İyi Teklifler</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((p) => (
          <Link
            key={p.id}
            href={`/product/${p.id}`}
            className="group border rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white"
          >
            <div className="relative w-full h-40">
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-3">
              <h3 className="text-sm font-medium text-gray-800 group-hover:text-blue-600">
                {p.name}
              </h3>
              <p className="text-blue-600 font-semibold">{p.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}