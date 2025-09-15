import React, { useState } from "react";


// Ürün tipi
interface Product {
    id: number;
    name: string;
    category: string;
    price: string;
    image: string;
}
const products: Product[] = [
    {
        id: 1,
        name: "iPhone 14",
        category: "Cep Telefonu",
        price: "45.000 TL",
        image: "https://via.placeholder.com/150x150?text=iPhone+14",
    },
    {
        id: 2,
        name: "Samsung Galaxy S23",
        category: "Cep Telefonu",
        price: "40.000 TL",
        image: "https://via.placeholder.com/150x150?text=Galaxy+S23",
    },
    {
        id: 3,
        name: "iPad Pro",
        category: "Tablet-Bilgisayar",
        price: "25.000 TL",
        image: "https://via.placeholder.com/150x150?text=iPad+Pro",
    },
    {
        id: 4,
        name: "MacBook Air",
        category: "Tablet-Bilgisayar",
        price: "35.000 TL",
        image: "https://via.placeholder.com/150x150?text=MacBook+Air",
    },
    {
        id: 5,
        name: "Saç Kurutma Makinesi",
        category: "Kişisel Bakım",
        price: "2.000 TL",
        image: "https://via.placeholder.com/150x150?text=Sac+Kurutma",
    },
    {
        id: 6,
        name: "Tıraş Makinesi",
        category: "Kişisel Bakım",
        price: "1.500 TL",
        image: "https://via.placeholder.com/150x150?text=Tiras+Makinesi",
    },
    {
        id: 7,
        name: "Dijital Tansiyon Aleti",
        category: "Sağlık",
        price: "1.200 TL",
        image: "https://via.placeholder.com/150x150?text=Tansiyon+Aletti",
    },
    {
        id: 8,
        name: "Ateş Ölçer",
        category: "Sağlık",
        price: "500 TL",
        image: "https://via.placeholder.com/150x150?text=Ates+Olcer",
    },
];
const categories = [
    "Tümü",
    "Cep Telefonu",
    "Tablet-Bilgisayar",
    "Kişisel Bakım",
    "Sağlık",
] as const;


type Category = typeof categories[number];


export default function BestSellers() {
    const [activeCategory, setActiveCategory] = useState<Category>("Tümü");


    const filteredProducts =
        activeCategory === "Tümü"
            ? products
            : products.filter((p) => p.category === activeCategory);
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">En Çok Satanlar</h2>


            {/* Kategori Butonları */}
            <div className="flex gap-3 mb-6 flex-wrap">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${activeCategory === cat
                                ? "bg-blue-600 text-white border-blue-600"
                                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            {/* Ürünler Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        className="border rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200"
                    >
                        <div className="h-32 flex items-center justify-center mb-3 rounded-lg overflow-hidden bg-gray-50">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="object-contain h-full w-full"
                            />
                        </div>
                        <h3 className="font-semibold text-base mb-1">{product.name}</h3>
                        <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                        <p className="font-bold text-blue-600">{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}