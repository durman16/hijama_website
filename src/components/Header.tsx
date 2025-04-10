import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-green-600 text-white py-6 shadow-md">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold">Hijama Therapy</h1>
        <Link href="#book">
          <button className="mt-4 md:mt-0 bg-white text-green-700 px-4 py-2 rounded hover:bg-green-50 transition">
            Book an Appointment
          </button>
        </Link>
      </div>
    </header>
  );
}
