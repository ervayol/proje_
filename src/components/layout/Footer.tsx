/*export default function Footer() {
    return ( <div>Footer kısmı</div>
        );
}*/

import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-10">
      {/* Üst kısım - Hızlı Linkler */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 p-8 text-sm text-gray-700">
        <div>
          <h3 className="font-semibold mb-2">Kurumsal</h3>
          <ul className="space-y-1">
            <li><Link href="#">Hakkımızda</Link></li>
            <li><Link href="#">Kampanyalar</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Yardım</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Kategoriler</h3>
          <ul className="space-y-1">
            <li><Link href="#">Cep Telefonu</Link></li>
            <li><Link href="#">Bilgisayar & Tablet</Link></li>
            <li><Link href="#">Aksesuar</Link></li>
            <li><Link href="#">Elektrikli Ev Aletleri</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Müşteri Hizmetleri</h3>
          <ul className="space-y-1">
            <li><Link href="#">Sipariş Takibi</Link></li>
            <li><Link href="#">İade & Değişim</Link></li>
            <li><Link href="#">Sıkça Sorulan Sorular</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Bizi Takip Edin</h3>
          <div className="flex gap-3 text-lg text-blue-600">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Youtube"><FaYoutube /></a>
          </div>
        </div>
      </div>
       {/* Alt kısım - Yasal bilgiler */}
      <div className="bg-gray-200 text-center py-4 text-xs text-gray-600">
        © {new Date().getFullYear()} Turkcell Pasaj (Clone). Tüm hakları saklıdır.
      </div>
    </footer>
  );
}