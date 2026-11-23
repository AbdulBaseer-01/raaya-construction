import { redirect } from "next/navigation";
import {
  getAdminSession,
} from "@/lib/adminAuth";

export default async function AdminPage() {
  const session = await getAdminSession();

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <main className="min-h-screen bg-[#faf9f7] px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.25em] text-[#886c46]">
            Admin Dashboard
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Welcome, {session.username}
          </h1>

          <p className="mt-2 text-slate-600">
            Logged in as {session.email}
          </p>

          <form
            action="/admin/login"
            method="POST"
            className="mt-8"
            
          >
            <button
              type="submit"
              className="rounded-full bg-[#111110] px-5 py-3 text-sm font-medium text-white hover:bg-[#886c46]"
            >
              Logout
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}