import Image from "next/image";
import Link from "next/link";

const popular = [
  { name: "Apple Telefonlar", image: "/placeholder1.jpg", link: "/category/apple-telefonlar" },
  { name: "Hediye Çeklerim", image: "/placeholder2.jpg", link: "/category/hediye-ceklerim" },
  { name: "Çok Satanlar", image: "/placeholder3.jpg", link: "/category/cok-satanlar" },
  { name: "Kurumsal Çözümler", image: "/placeholder4.jpg", link: "/category/kurumsal-cozumler" },
  { name: "Fırsatlar Kapısı", image: "/placeholder5.jpg", link: "/category/firsatlar-kapisi" },
  { name: "Akıllı Ev Sistemleri", image: "/placeholder6.jpg", link: "/category/akilli-ev-sistemleri" },
];
export default function PopularCategories() {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-10">
      <h2 className="text-xl font-semibold mb-4">Popüler Kategoriler</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {popular.map((cat) => (
          <Link key={cat.name} href={cat.link} className="text-center group">
            <div className="relative w-full h-24 rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition">
              <Image src={cat.image} alt={cat.name} fill className="object-cover" />
            </div>
            <span className="block mt-2 text-sm text-gray-700 group-hover:text-blue-600">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}