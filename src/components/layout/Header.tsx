/*
export default function Header() {
    return ( <div>Erva </div>);
}
    */

"use client";


import React, { useState } from "react";
import SearchBar from "./SearchBar";
import LoginModal from "./LoginModal";
import Link from "next/link";


export default function Header() {
    const [loginOpen, setLoginOpen] = useState(false);


    const topLinks = [
        "Favorilerim",
        "Kampanyalar",
        "Yardım",
        "Neden Pasaj",
        "Pasaj Blog",
        "Sipariş Sorgulama",
        "Markalar",
    ];

    const categories = [
        "Cep Telefonu - Aksesuar",
        "Bilgisayar - Tablet",
        "Elektrikli Ev Aletleri",
        "Sağlık - Kişisel Bakım",
        "Hobi - Oyun",
        "TV - Ses Sistemleri",
        "Ev - Yaşam",
    ];
    return (
        <header className="w-full sticky top-0 z-40 bg-white">
            {/* Top mini bar */}
            <div className="bg-gray-50 border-b">
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-sm py-2">
                    <div className="flex items-center gap-4">
                        <a
                            href="https://www.turkcell.com.tr/"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2"
                        >
                            <img
                                src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Hakkimizda/genel-bakis/logolarimiz/AMBLEM_SIYAH.jpg"
                                alt="Turkcell Logo"
                                className="h-6"
                            />
                            <span className="text-xs text-gray-700">turkcell.com.tr</span>
                        </a>


                        <nav className="hidden sm:flex gap-3 text-gray-600">
                            {topLinks.map((t) => (
                                <a key={t} className="hover:text-blue-600" href="#">
                                    {t}
                                </a>
                            ))}
                        </nav>
                    </div>


                    <div className="text-gray-600 hidden sm:block">Türkiye'nin dijital pazarı</div>
                </div>
            </div>
            {/* Main header */}
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-4">
                <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center gap-2">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Pasaj_logo.png"
                            alt="Pasaj"
                            className="h-8"
                            onError={(e: any) => {
                                // fallback to text if image fails
                                e.currentTarget.style.display = "none";
                            }}
                        />
                        <span className="font-semibold text-xl">Pasaj</span>
                    </Link>
                </div>


                <div className="flex-1 mx-6">
                    <SearchBar />
                </div>


                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setLoginOpen(true)}
                        className="px-4 py-2 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50"
                    >
                        Giriş Yap
                    </button>
                    <Link href="/favorites" className="hidden sm:inline-flex items-center gap-2 text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                        Favoriler
                    </Link>


                    <Link href="/cart" className="inline-flex items-center gap-2 bg-yellow-400 px-3 py-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
                        </svg>
                        Sepet
                    </Link>
                </div>
            </div>
            {/* Category navigation */}
            <nav className="bg-white border-t">
                <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
                    <ul className="flex gap-6 py-3 whitespace-nowrap">
                        {categories.map((cat) => (
                            <li key={cat}>
                                <a href="#" className="text-gray-700 hover:text-blue-600">
                                    {cat}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>


            <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
        </header>
    );
}