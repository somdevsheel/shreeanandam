// "use client";

// import { useState, useCallback } from "react";
// import { Booking, BookingStatus } from "@/lib/types";

// const STATUS_COLORS: Record<BookingStatus, string> = {
//   pending:   "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
//   confirmed: "bg-green-500/20  text-green-400  border-green-500/30",
//   cancelled: "bg-red-500/20    text-red-400    border-red-500/30",
// };
// const STATUS_LABEL: Record<BookingStatus, string> = {
//   pending:   "⏳ Pending",
//   confirmed: "✅ Confirmed",
//   cancelled: "❌ Cancelled",
// };

// export default function AdminPage() {
//   // Auth state
//   const [username,  setUsername]  = useState("");
//   const [password,  setPassword]  = useState("");
//   const [showPass,  setShowPass]  = useState(false);
//   const [authed,    setAuthed]    = useState(false);
//   const [authErr,   setAuthErr]   = useState("");
//   const [authLoading, setAuthLoading] = useState(false);

//   // Data state
//   const [bookings,   setBookings]   = useState<Booking[]>([]);
//   const [loading,    setLoading]    = useState(false);
//   const [filter,     setFilter]     = useState<"all" | BookingStatus>("all");
//   const [dateFilter, setDateFilter] = useState("");
//   const [updating,   setUpdating]   = useState<string | null>(null);

//   // Admin headers
//   const adminHeaders = {
//     "Content-Type":    "application/json",
//     "x-admin-username": username,
//     "x-admin-password": password,
//   };

//   const fetchBookings = useCallback(async (u: string, p: string) => {
//     setLoading(true);
//     try {
//       const res = await fetch("/api/bookings", {
//         headers: {
//           "x-admin-username": u,
//           "x-admin-password": p,
//         },
//       });
//       if (res.status === 401) {
//         setAuthErr("Invalid username or password.");
//         setAuthed(false);
//         return;
//       }
//       const data = await res.json();
//       setBookings(data.bookings || []);
//       setAuthed(true);
//     } catch {
//       setAuthErr("Connection error. Please try again.");
//     } finally {
//       setLoading(false);
//       setAuthLoading(false);
//     }
//   }, []);

//   async function handleLogin(e: React.FormEvent) {
//     e.preventDefault();
//     setAuthErr("");
//     if (!username.trim() || !password.trim()) {
//       setAuthErr("Please enter both username and password.");
//       return;
//     }
//     setAuthLoading(true);
//     await fetchBookings(username, password);
//   }

//   function handleLogout() {
//     setAuthed(false);
//     setUsername("");
//     setPassword("");
//     setBookings([]);
//   }

//   async function updateStatus(id: string, status: BookingStatus) {
//     setUpdating(id);
//     try {
//       await fetch(`/api/bookings/${id}`, {
//         method: "PATCH",
//         headers: adminHeaders,
//         body: JSON.stringify({ status }),
//       });
//       setBookings(prev => prev.map(b => b._id === id ? { ...b, status } : b));
//     } finally {
//       setUpdating(null);
//     }
//   }

//   async function deleteBooking(id: string) {
//     if (!confirm("Delete this booking permanently?")) return;
//     setUpdating(id);
//     try {
//       await fetch(`/api/bookings/${id}`, {
//         method: "DELETE",
//         headers: adminHeaders,
//       });
//       setBookings(prev => prev.filter(b => b._id !== id));
//     } finally {
//       setUpdating(null);
//     }
//   }

//   // Filtered list
//   const filtered = bookings.filter(b => {
//     const statusMatch = filter === "all" || b.status === filter;
//     const dateMatch   = !dateFilter || b.date === dateFilter;
//     return statusMatch && dateMatch;
//   });

//   // Stats
//   const stats = {
//     total:     bookings.length,
//     pending:   bookings.filter(b => b.status === "pending").length,
//     confirmed: bookings.filter(b => b.status === "confirmed").length,
//     cancelled: bookings.filter(b => b.status === "cancelled").length,
//   };

//   // ── LOGIN SCREEN ──
//   if (!authed) {
//     return (
//       <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "#0e0703" }}>
//         <div className="w-full max-w-sm">

//           {/* Logo / Header */}
//           <div className="text-center mb-8">
//             <div className="w-16 h-16 rounded-full bg-saffron-500/20 flex items-center justify-center mx-auto mb-4">
//               <span className="text-3xl">🍽️</span>
//             </div>
//             <h1 className="font-display text-3xl text-saffron-300">Admin Panel</h1>
//             <p className="text-amber-200/40 text-sm mt-1">Anandam Sweets & Restaurant</p>
//           </div>

//           <form onSubmit={handleLogin}
//             className="rounded-3xl p-7 space-y-4"
//             style={{ background: "#261507", border: "1px solid rgba(200,120,30,0.25)" }}>

//             <h2 className="text-amber-200/70 font-medium text-center mb-2">Sign in to continue</h2>

//             {/* Username */}
//             <div>
//               <label className="block text-amber-200/60 text-sm mb-1.5">Username</label>
//               <div className="relative">
//                 <span className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-400/50">👤</span>
//                 <input
//                   type="text"
//                   value={username}
//                   onChange={e => { setUsername(e.target.value); setAuthErr(""); }}
//                   placeholder="Enter username"
//                   autoComplete="username"
//                   className="w-full pl-10 pr-4 py-3 rounded-xl text-amber-100 placeholder-amber-200/25 outline-none focus:ring-2 focus:ring-saffron-500 transition-all"
//                   style={{ background: "#1c1008", border: "1px solid rgba(200,120,30,0.3)" }}
//                 />
//               </div>
//             </div>

//             {/* Password */}
//             <div>
//               <label className="block text-amber-200/60 text-sm mb-1.5">Password</label>
//               <div className="relative">
//                 <span className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-400/50">🔒</span>
//                 <input
//                   type={showPass ? "text" : "password"}
//                   value={password}
//                   onChange={e => { setPassword(e.target.value); setAuthErr(""); }}
//                   placeholder="Enter password"
//                   autoComplete="current-password"
//                   className="w-full pl-10 pr-12 py-3 rounded-xl text-amber-100 placeholder-amber-200/25 outline-none focus:ring-2 focus:ring-saffron-500 transition-all"
//                   style={{ background: "#1c1008", border: "1px solid rgba(200,120,30,0.3)" }}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPass(p => !p)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-400/40 hover:text-amber-400/70 transition-colors text-sm"
//                 >
//                   {showPass ? "🙈" : "👁️"}
//                 </button>
//               </div>
//             </div>

//             {/* Error */}
//             {authErr && (
//               <div className="bg-red-900/30 border border-red-500/30 rounded-xl px-4 py-2.5 text-red-400 text-sm text-center">
//                 {authErr}
//               </div>
//             )}

//             {/* Submit */}
//             <button
//               type="submit"
//               disabled={authLoading}
//               className="w-full flex items-center justify-center gap-2 bg-saffron-500 hover:bg-saffron-400 disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-all active:scale-95 mt-2"
//             >
//               {authLoading ? (
//                 <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg> Signing in...</>
//               ) : "Sign In →"}
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   }

//   // ── DASHBOARD ──
//   return (
//     <div className="min-h-screen px-4 py-8" style={{ background: "#0e0703" }}>
//       <div className="max-w-6xl mx-auto">

//         {/* Header */}
//         <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
//           <div>
//             <h1 className="font-display text-3xl text-saffron-300">Bookings Dashboard</h1>
//             <p className="text-amber-200/40 text-sm mt-0.5">
//               Logged in as <span className="text-saffron-500">{username}</span>
//             </p>
//           </div>
//           <div className="flex gap-3">
//             <button
//               onClick={() => fetchBookings(username, password)}
//               className="flex items-center gap-2 text-amber-200/60 hover:text-saffron-400 text-sm px-4 py-2 rounded-xl transition-colors"
//               style={{ background: "#261507", border: "1px solid rgba(200,120,30,0.2)" }}
//             >
//               🔄 Refresh
//             </button>
//             <button
//               onClick={handleLogout}
//               className="flex items-center gap-2 text-red-400/70 hover:text-red-400 text-sm px-4 py-2 rounded-xl transition-colors"
//               style={{ background: "#261507", border: "1px solid rgba(200,120,30,0.2)" }}
//             >
//               🚪 Logout
//             </button>
//           </div>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//           {[
//             { label: "Total",     value: stats.total,     color: "text-amber-300",  bg: "from-amber-900/20"  },
//             { label: "Pending",   value: stats.pending,   color: "text-yellow-400", bg: "from-yellow-900/20" },
//             { label: "Confirmed", value: stats.confirmed, color: "text-green-400",  bg: "from-green-900/20"  },
//             { label: "Cancelled", value: stats.cancelled, color: "text-red-400",    bg: "from-red-900/20"    },
//           ].map(s => (
//             <div key={s.label}
//               className={`rounded-2xl p-5 text-center bg-gradient-to-b ${s.bg} to-transparent`}
//               style={{ background: "#261507", border: "1px solid rgba(200,120,30,0.15)" }}>
//               <p className={`font-display text-4xl font-bold ${s.color}`}>{s.value}</p>
//               <p className="text-amber-200/50 text-sm mt-1">{s.label}</p>
//             </div>
//           ))}
//         </div>

//         {/* Filters */}
//         <div className="flex flex-wrap gap-3 mb-6">
//           {(["all","pending","confirmed","cancelled"] as const).map(f => (
//             <button key={f} onClick={() => setFilter(f)}
//               className={`px-4 py-2 rounded-full text-sm font-medium transition-all capitalize
//                 ${filter === f ? "bg-saffron-500 text-white shadow-md" : "text-amber-200/60 hover:text-saffron-400"}`}
//               style={filter !== f ? { background: "#261507", border: "1px solid rgba(200,120,30,0.2)" } : {}}>
//               {f === "all" ? "All Bookings" : f}
//             </button>
//           ))}

//           {/* Date filter */}
//           <input type="date" value={dateFilter} onChange={e => setDateFilter(e.target.value)}
//             className="px-4 py-2 rounded-full text-sm text-amber-200/70 outline-none focus:ring-1 focus:ring-saffron-500"
//             style={{ background: "#261507", border: "1px solid rgba(200,120,30,0.2)", colorScheme: "dark" }} />
//           {dateFilter && (
//             <button onClick={() => setDateFilter("")}
//               className="px-4 py-2 rounded-full text-sm text-amber-400/60 hover:text-saffron-400 transition-colors"
//               style={{ background: "#261507", border: "1px solid rgba(200,120,30,0.2)" }}>
//               Clear ✕
//             </button>
//           )}
//         </div>

//         {/* Results count */}
//         <p className="text-amber-200/30 text-sm mb-4">
//           Showing {filtered.length} of {bookings.length} booking{bookings.length !== 1 ? "s" : ""}
//         </p>

//         {/* Booking Cards */}
//         {loading ? (
//           <div className="text-center py-24 text-amber-200/30">
//             <svg className="w-8 h-8 animate-spin mx-auto mb-3 text-saffron-500" fill="none" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
//             </svg>
//             Loading bookings...
//           </div>
//         ) : filtered.length === 0 ? (
//           <div className="text-center py-24 rounded-2xl"
//             style={{ background: "#261507", border: "1px solid rgba(200,120,30,0.15)" }}>
//             <div className="text-5xl mb-3">📋</div>
//             <p className="text-amber-200/40">No bookings found</p>
//           </div>
//         ) : (
//           <div className="space-y-3">
//             {filtered.map(b => (
//               <div key={b._id}
//                 className={`rounded-2xl p-5 transition-all ${updating === b._id ? "opacity-60" : "hover:border-saffron-700/40"}`}
//                 style={{ background: "#261507", border: "1px solid rgba(200,120,30,0.18)" }}>

//                 <div className="flex flex-wrap items-start justify-between gap-4">
//                   {/* Info */}
//                   <div className="flex-1 min-w-0">
//                     <div className="flex items-center gap-3 mb-2 flex-wrap">
//                       <h3 className="font-display text-lg text-amber-100">{b.name}</h3>
//                       <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${STATUS_COLORS[b.status]}`}>
//                         {STATUS_LABEL[b.status]}
//                       </span>
//                     </div>

//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-1.5 text-sm">
//                       <span className="text-amber-200/50 flex items-center gap-1.5">
//                         📞
//                         <a href={`tel:${b.phone}`} className="text-saffron-400 hover:underline font-medium">
//                           {b.phone}
//                         </a>
//                       </span>
//                       <span className="text-amber-200/50">
//                         📅 {new Date(b.date + "T00:00:00").toLocaleDateString("en-IN", { day:"numeric", month:"short", year:"numeric" })}
//                       </span>
//                       <span className="text-amber-200/50">🕐 {b.time}</span>
//                       <span className="text-amber-200/50">👥 {b.guests} guest{b.guests !== "1" ? "s" : ""}</span>
//                     </div>

//                     {b.request && (
//                       <p className="text-amber-200/40 text-sm mt-2 italic">📝 "{b.request}"</p>
//                     )}
//                     <p className="text-amber-200/20 text-xs mt-2">
//                       Received: {new Date(b.createdAt).toLocaleString("en-IN")}
//                     </p>
//                   </div>

//                   {/* Action buttons */}
//                   <div className="flex flex-wrap gap-2 flex-shrink-0">
//                     {b.status !== "confirmed" && (
//                       <button onClick={() => updateStatus(b._id!, "confirmed")}
//                         disabled={updating === b._id}
//                         className="px-3 py-1.5 rounded-lg text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500/35 transition-colors disabled:opacity-40">
//                         ✅ Confirm
//                       </button>
//                     )}
//                     {b.status !== "cancelled" && (
//                       <button onClick={() => updateStatus(b._id!, "cancelled")}
//                         disabled={updating === b._id}
//                         className="px-3 py-1.5 rounded-lg text-xs font-medium bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/35 transition-colors disabled:opacity-40">
//                         ❌ Cancel
//                       </button>
//                     )}
//                     {b.status !== "pending" && (
//                       <button onClick={() => updateStatus(b._id!, "pending")}
//                         disabled={updating === b._id}
//                         className="px-3 py-1.5 rounded-lg text-xs font-medium bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 hover:bg-yellow-500/35 transition-colors disabled:opacity-40">
//                         ⏳ Pending
//                       </button>
//                     )}
//                     <button onClick={() => deleteBooking(b._id!)}
//                       disabled={updating === b._id}
//                       className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-500/15 text-gray-400 border border-gray-500/25 hover:bg-red-500/25 hover:text-red-400 transition-colors disabled:opacity-40">
//                       🗑️
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         <p className="text-center text-amber-200/15 text-xs mt-10">
//           Anandam Sweets & Restaurant — Admin Panel v1.0
//         </p>
//       </div>
//     </div>
//   );
// }





"use client";

import { useState, useEffect, useCallback } from "react";
import { BookingJSON as Booking, BookingStatus } from "@/lib/types";

const STATUS_COLORS: Record<BookingStatus, string> = {
  pending:   "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  confirmed: "bg-green-500/20  text-green-400  border-green-500/30",
  cancelled: "bg-red-500/20    text-red-400    border-red-500/30",
};
const STATUS_LABEL: Record<BookingStatus, string> = {
  pending:   "⏳ Pending",
  confirmed: "✅ Confirmed",
  cancelled: "❌ Cancelled",
};

export default function AdminPage() {
  // Auth state — restored from sessionStorage on refresh
  const [username,  setUsername]  = useState(() =>
    typeof window !== "undefined" ? sessionStorage.getItem("admin_u") || "" : ""
  );
  const [password,  setPassword]  = useState(() =>
    typeof window !== "undefined" ? sessionStorage.getItem("admin_p") || "" : ""
  );
  const [showPass,  setShowPass]  = useState(false);
  const [authed,    setAuthed]    = useState(false);
  const [authErr,   setAuthErr]   = useState("");
  const [authLoading, setAuthLoading] = useState(false);

  // Data state
  const [bookings,   setBookings]   = useState<Booking[]>([]);
  const [loading,    setLoading]    = useState(false);
  const [filter,     setFilter]     = useState<"all" | BookingStatus>("all");
  const [dateFilter, setDateFilter] = useState("");
  const [updating,   setUpdating]   = useState<string | null>(null);

  // Auto-login on page load if credentials exist in sessionStorage
  useEffect(() => {
    const u = sessionStorage.getItem("admin_u");
    const p = sessionStorage.getItem("admin_p");
    if (u && p && !authed) {
      fetchBookings(u, p);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Admin headers
  const adminHeaders = {
    "Content-Type":    "application/json",
    "x-admin-username": username,
    "x-admin-password": password,
  };

  const fetchBookings = useCallback(async (u: string, p: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/bookings", {
        headers: {
          "x-admin-username": u,
          "x-admin-password": p,
        },
      });
      if (res.status === 401) {
        setAuthErr("Invalid username or password.");
        setAuthed(false);
        return;
      }
      const data = await res.json();
      setBookings(data.bookings || []);
      setAuthed(true);
      // Persist credentials so refresh doesn't log out
      sessionStorage.setItem("admin_u", u);
      sessionStorage.setItem("admin_p", p);
    } catch {
      setAuthErr("Connection error. Please try again.");
    } finally {
      setLoading(false);
      setAuthLoading(false);
    }
  }, []);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setAuthErr("");
    if (!username.trim() || !password.trim()) {
      setAuthErr("Please enter both username and password.");
      return;
    }
    setAuthLoading(true);
    await fetchBookings(username, password);
  }

  function handleLogout() {
    setAuthed(false);
    setUsername("");
    setPassword("");
    setBookings([]);
    sessionStorage.removeItem("admin_u");
    sessionStorage.removeItem("admin_p");
  }

  async function updateStatus(id: string, status: BookingStatus) {
    setUpdating(id);
    try {
      await fetch(`/api/bookings/${id}`, {
        method: "PATCH",
        headers: adminHeaders,
        body: JSON.stringify({ status }),
      });
      setBookings(prev => prev.map(b => b._id === id ? { ...b, status } : b));
    } finally {
      setUpdating(null);
    }
  }

  async function deleteBooking(id: string) {
    if (!confirm("Delete this booking permanently?")) return;
    setUpdating(id);
    try {
      await fetch(`/api/bookings/${id}`, {
        method: "DELETE",
        headers: adminHeaders,
      });
      setBookings(prev => prev.filter(b => b._id !== id));
    } finally {
      setUpdating(null);
    }
  }

  // Filtered list
  const filtered = bookings.filter(b => {
    const statusMatch = filter === "all" || b.status === filter;
    const dateMatch   = !dateFilter || b.date === dateFilter;
    return statusMatch && dateMatch;
  });

  // Stats
  const stats = {
    total:     bookings.length,
    pending:   bookings.filter(b => b.status === "pending").length,
    confirmed: bookings.filter(b => b.status === "confirmed").length,
    cancelled: bookings.filter(b => b.status === "cancelled").length,
  };

  // ── LOGIN SCREEN ──
  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "#0e0703" }}>
        <div className="w-full max-w-sm">

          {/* Logo / Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-saffron-500/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🍽️</span>
            </div>
            <h1 className="font-display text-3xl text-saffron-300">Admin Panel</h1>
            <p className="text-amber-200/40 text-sm mt-1">Anandam Sweets & Restaurant</p>
          </div>

          <form onSubmit={handleLogin}
            className="rounded-3xl p-7 space-y-4"
            style={{ background: "#261507", border: "1px solid rgba(200,120,30,0.25)" }}>

            <h2 className="text-amber-200/70 font-medium text-center mb-2">Sign in to continue</h2>

            {/* Username */}
            <div>
              <label className="block text-amber-200/60 text-sm mb-1.5">Username</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-400/50">👤</span>
                <input
                  type="text"
                  value={username}
                  onChange={e => { setUsername(e.target.value); setAuthErr(""); }}
                  placeholder="Enter username"
                  autoComplete="username"
                  className="w-full pl-10 pr-4 py-3 rounded-xl text-amber-100 placeholder-amber-200/25 outline-none focus:ring-2 focus:ring-saffron-500 transition-all"
                  style={{ background: "#1c1008", border: "1px solid rgba(200,120,30,0.3)" }}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-amber-200/60 text-sm mb-1.5">Password</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-400/50">🔒</span>
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={e => { setPassword(e.target.value); setAuthErr(""); }}
                  placeholder="Enter password"
                  autoComplete="current-password"
                  className="w-full pl-10 pr-12 py-3 rounded-xl text-amber-100 placeholder-amber-200/25 outline-none focus:ring-2 focus:ring-saffron-500 transition-all"
                  style={{ background: "#1c1008", border: "1px solid rgba(200,120,30,0.3)" }}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(p => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-400/40 hover:text-amber-400/70 transition-colors text-sm"
                >
                  {showPass ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* Error */}
            {authErr && (
              <div className="bg-red-900/30 border border-red-500/30 rounded-xl px-4 py-2.5 text-red-400 text-sm text-center">
                {authErr}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={authLoading}
              className="w-full flex items-center justify-center gap-2 bg-saffron-500 hover:bg-saffron-400 disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-all active:scale-95 mt-2"
            >
              {authLoading ? (
                <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg> Signing in...</>
              ) : "Sign In →"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ── DASHBOARD ──
  return (
    <div className="min-h-screen px-4 py-8" style={{ background: "#0e0703" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <h1 className="font-display text-3xl text-saffron-300">Bookings Dashboard</h1>
            <p className="text-amber-200/40 text-sm mt-0.5">
              Logged in as <span className="text-saffron-500">{username}</span>
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => fetchBookings(username, password)}
              className="flex items-center gap-2 text-amber-200/60 hover:text-saffron-400 text-sm px-4 py-2 rounded-xl transition-colors"
              style={{ background: "#261507", border: "1px solid rgba(200,120,30,0.2)" }}
            >
              🔄 Refresh
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-400/70 hover:text-red-400 text-sm px-4 py-2 rounded-xl transition-colors"
              style={{ background: "#261507", border: "1px solid rgba(200,120,30,0.2)" }}
            >
              🚪 Logout
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total",     value: stats.total,     color: "text-amber-300",  bg: "from-amber-900/20"  },
            { label: "Pending",   value: stats.pending,   color: "text-yellow-400", bg: "from-yellow-900/20" },
            { label: "Confirmed", value: stats.confirmed, color: "text-green-400",  bg: "from-green-900/20"  },
            { label: "Cancelled", value: stats.cancelled, color: "text-red-400",    bg: "from-red-900/20"    },
          ].map(s => (
            <div key={s.label}
              className={`rounded-2xl p-5 text-center bg-gradient-to-b ${s.bg} to-transparent`}
              style={{ background: "#261507", border: "1px solid rgba(200,120,30,0.15)" }}>
              <p className={`font-display text-4xl font-bold ${s.color}`}>{s.value}</p>
              <p className="text-amber-200/50 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          {(["all","pending","confirmed","cancelled"] as const).map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all capitalize
                ${filter === f ? "bg-saffron-500 text-white shadow-md" : "text-amber-200/60 hover:text-saffron-400"}`}
              style={filter !== f ? { background: "#261507", border: "1px solid rgba(200,120,30,0.2)" } : {}}>
              {f === "all" ? "All Bookings" : f}
            </button>
          ))}

          {/* Date filter */}
          <input type="date" value={dateFilter} onChange={e => setDateFilter(e.target.value)}
            className="px-4 py-2 rounded-full text-sm text-amber-200/70 outline-none focus:ring-1 focus:ring-saffron-500"
            style={{ background: "#261507", border: "1px solid rgba(200,120,30,0.2)", colorScheme: "dark" }} />
          {dateFilter && (
            <button onClick={() => setDateFilter("")}
              className="px-4 py-2 rounded-full text-sm text-amber-400/60 hover:text-saffron-400 transition-colors"
              style={{ background: "#261507", border: "1px solid rgba(200,120,30,0.2)" }}>
              Clear ✕
            </button>
          )}
        </div>

        {/* Results count */}
        <p className="text-amber-200/30 text-sm mb-4">
          Showing {filtered.length} of {bookings.length} booking{bookings.length !== 1 ? "s" : ""}
        </p>

        {/* Booking Cards */}
        {loading ? (
          <div className="text-center py-24 text-amber-200/30">
            <svg className="w-8 h-8 animate-spin mx-auto mb-3 text-saffron-500" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
            </svg>
            Loading bookings...
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-24 rounded-2xl"
            style={{ background: "#261507", border: "1px solid rgba(200,120,30,0.15)" }}>
            <div className="text-5xl mb-3">📋</div>
            <p className="text-amber-200/40">No bookings found</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map(b => (
              <div key={b._id}
                className={`rounded-2xl p-5 transition-all ${updating === b._id ? "opacity-60" : "hover:border-saffron-700/40"}`}
                style={{ background: "#261507", border: "1px solid rgba(200,120,30,0.18)" }}>

                <div className="flex flex-wrap items-start justify-between gap-4">
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="font-display text-lg text-amber-100">{b.name}</h3>
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${STATUS_COLORS[b.status]}`}>
                        {STATUS_LABEL[b.status]}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-1.5 text-sm">
                      <span className="text-amber-200/50 flex items-center gap-1.5">
                        📞
                        <a href={`tel:${b.phone}`} className="text-saffron-400 hover:underline font-medium">
                          {b.phone}
                        </a>
                      </span>
                      <span className="text-amber-200/50">
                        📅 {new Date(b.date + "T00:00:00").toLocaleDateString("en-IN", { day:"numeric", month:"short", year:"numeric" })}
                      </span>
                      <span className="text-amber-200/50">🕐 {b.time}</span>
                      <span className="text-amber-200/50">👥 {b.guests} guest{b.guests !== "1" ? "s" : ""}</span>
                    </div>

                    {b.request && (
                      <p className="text-amber-200/40 text-sm mt-2 italic">📝 "{b.request}"</p>
                    )}
                    <p className="text-amber-200/20 text-xs mt-2">
                      Received: {new Date(b.createdAt).toLocaleString("en-IN")}
                    </p>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-wrap gap-2 flex-shrink-0">
                    {b.status !== "confirmed" && (
                      <button onClick={() => updateStatus(b._id!, "confirmed")}
                        disabled={updating === b._id}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500/35 transition-colors disabled:opacity-40">
                        ✅ Confirm
                      </button>
                    )}
                    {b.status !== "cancelled" && (
                      <button onClick={() => updateStatus(b._id!, "cancelled")}
                        disabled={updating === b._id}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/35 transition-colors disabled:opacity-40">
                        ❌ Cancel
                      </button>
                    )}
                    {b.status !== "pending" && (
                      <button onClick={() => updateStatus(b._id!, "pending")}
                        disabled={updating === b._id}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 hover:bg-yellow-500/35 transition-colors disabled:opacity-40">
                        ⏳ Pending
                      </button>
                    )}
                    <button onClick={() => deleteBooking(b._id!)}
                      disabled={updating === b._id}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-500/15 text-gray-400 border border-gray-500/25 hover:bg-red-500/25 hover:text-red-400 transition-colors disabled:opacity-40">
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <p className="text-center text-amber-200/15 text-xs mt-10">
          Anandam Sweets & Restaurant — Admin Panel v1.0
        </p>
      </div>
    </div>
  );
}