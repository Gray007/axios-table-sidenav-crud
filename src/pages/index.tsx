import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Project Demo</title>
        <meta name="description" content="Project Demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#3353df] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Project Demo
          </h1>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/products"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Products</h3>
              <div className="text-lg">
                Click here to go to the product page.
              </div>
            </Link>
        </div>
      </main>
    </>
  );
}