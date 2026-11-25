# SHAHIN APP — Abrar Trading Corporation (Fresh Starter)

এটি সম্পূর্ণ নতুন Vercel/Vite ভিত্তিক ওয়েব অ্যাপের সোর্স প্যাকেজ। আগের কোনো ব্যবসায়িক হিসাব বা ডেটা এতে Import করা হয়নি।

## লোকালি চালানো
1. Node.js 20+ ইনস্টল করুন।
2. এই ফোল্ডারে `npm install` চালান।
3. `.env.example` কপি করে `.env` করুন। Supabase URL ও anon key বসান।
4. `npm run dev` চালান।

## Vercel Deploy
1. ZIP Extract করে GitHub-এ নতুন Repository-তে Push করুন।
2. Vercel-এ Import করুন; Framework Vite, Build `npm run build`, Output `dist`।
3. Environment Variables যোগ করুন: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `GEMINI_API_KEY`, `GEMINI_MODEL`। Gemini key শুধু Vercel server environment-এ রাখবেন।
4. Deploy করুন।

## Supabase
শুধু নতুন Supabase Project-এ `sql/001_schema.sql` চালানোর জন্য প্রস্তুত। Auth > Users থেকে ইউজার তৈরি করে `business_members`-এ business_id, user_id ও role যুক্ত করতে হবে।

## বর্তমান বাস্তব অবস্থা ও সীমা
- Dashboard, browser-local demo sales/cash, DSR 7-row হিসাব, stock buckets display, manual product/challan entry, OCR review flow, AI Support chat UI আছে।
- Demo data কেবল ঐ ব্রাউজারের localStorage-এ থাকে; Supabase-এর সাথে CRUD/Sync এখনও wired নয়। তাই এটিকে live business ledger হিসেবে ব্যবহার করবেন না।
- SQL schema হলো প্রাথমিক fresh schema; সব মডিউলের production-grade transaction/RPC, পূর্ণ role-specific policy, দোকানভিত্তিক due ledger, allocations, expense/income, report export history, backup/restore এখনও সম্পূর্ণ নয়।
- Scanner API Gemini OCR endpoint; key ও Vercel function dependency সেটআপ ছাড়া চলবে না। AI ফলাফল ভুল হতে পারে—Confirm-এর আগে যাচাই আবশ্যক।
- Support API কেবল UI থেকে পাঠানো summary-র ওপর উত্তর দেয়; এটি live database query করে না।
- কোনো APK তৈরি করা হয়নি। PWA হিসেবে install করা যায়।

## নিরাপত্তা
Service Role Key কখনো browser বা chat-এ দেবেন না। নতুন Supabase project ছাড়া SQL চালাবেন না। আগে test project-এ যাচাই করুন।
