/*"use client";


import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";


type Product = {
    id: number;
    title: string;
    price: number;
    image?: string;
};
const sampleProducts: Product[] = [
    { id: 1, title: "Samsung Galaxy S23", price: 29999, image: "https://via.placeholder.com/60" },
    { id: 2, title: "iPhone 14 Pro", price: 44999, image: "https://via.placeholder.com/60" },
    { id: 3, title: "Xiaomi Redmi Note 12", price: 8999, image: "https://via.placeholder.com/60" },
    { id: 4, title: "Apple AirPods Pro", price: 2999, image: "https://via.placeholder.com/60" },
    { id: 5, title: "Logitech Wireless Mouse", price: 399, image: "https://via.placeholder.com/60" },
    { id: 6, title: "Lenovo IdeaPad 3", price: 7999, image: "https://via.placeholder.com/60" },
    { id: 7, title: "XBox Series X", price: 15999, image: "https://via.placeholder.com/60" },
    { id: 8, title: "Sony Bravia 55' 4K", price: 12999, image: "https://via.placeholder.com/60" },
];

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const containerRef = useRef<HTMLDivElement | null>(null);


    const results = query.trim().length > 0
        ? sampleProducts.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()))
        : [];


    useEffect(() => {
        function onClick(e: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("click", onClick);
        return () => document.removeEventListener("click", onClick);
    }, []);


    function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        // go to search page; create query param
        router.push(`/search?q=${encodeURIComponent(query)}`);
        setOpen(false);
    }
    return (
        <div ref={containerRef} className="relative w-full max-w-2xl">
            <form onSubmit={onSubmit} className="">
                <div className="flex items-center border rounded-md overflow-hidden shadow-sm">
                    <input
                        value={query}
                        onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
                        placeholder="Ürün, kategori veya marka ara"
                        className="w-full px-4 py-2 outline-none"
                        aria-label="Arama"
                        onKeyDown={(e) => {
                            if (e.key === "Escape") {
                                setOpen(false);
                            }
                        }}
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700"
                        aria-label="Ara"
                    >
                        Ara
                    </button>
                </div>
            </form>


            {open && results.length > 0 && (
                <ul className="absolute left-0 right-0 bg-white border mt-2 rounded-md shadow-lg max-h-60 overflow-auto z-50">
                    {results.map((r) => (
                        <li
                            key={r.id}
                            className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 cursor-pointer"
                            onClick={() => router.push(`/product/${r.id}`)}
                        >
                            <img src={r.image} alt={r.title} className="w-12 h-12 object-cover rounded" />
                            <div>
                                <div className="font-medium">{r.title}</div>
                                <div className="text-sm text-gray-500">₺{r.price.toLocaleString("tr-TR")}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            {open && query.trim().length > 0 && results.length === 0 && (
                <div className="absolute left-0 right-0 bg-white border mt-2 rounded-md shadow-lg p-4 z-50">Aradığınız ürün bulunamadı.</div>
            )}
        </div>
    );
}

*/


import { useState } from "react";
import { useRouter } from "next/router";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return; // boş aramayı engelle
    router.push(`/search?q=${query}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        placeholder="Ürün ara..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded-l-md w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
      >
        Ara
      </button>
    </form>
  );
}