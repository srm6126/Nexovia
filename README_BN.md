# SHAHIN APP — Source Package

**প্রতিষ্ঠান:** আবরার ট্রেডিং কর্পোরেশন  
**স্লোগান:** SMART BUSINESS SOLUTION  
**প্ল্যাটফর্ম:** Web + Android-এ Installable PWA  
**প্রাথমিক ভাষা:** বাংলা

## এই প্যাকেজে কী আছে

- React + TypeScript + Vite mobile-first frontend
- ৮টি Quick Action-সহ Dashboard UI
- Role-aware navigation এবং Admin-only Settings route guard (UI স্তর)
- সাতটি DSR হিসাবের centralized calculation function
- integer poisha-তে money calculation
- Stock quantity calculation ও unit conversion helper
- Supabase client connection placeholder
- Supabase initial schema ও RLS foundation migration
- Idempotent stock movement RPC example
- Vercel-compatible API health endpoint
- PWA manifest
- Environment variable template

## গুরুত্বপূর্ণ অবস্থা

এটি একটি **নতুন runnable foundation / implementation starter**, সম্পূর্ণ production Distribution Management System নয়। Scanner OCR, AI Support, PIN-based login, live multi-device business workflows, PDF/PNG exports, full Admin CRUD, Tally Khata, approval workflow, backup/restore এবং সব রিপোর্টের backend এখনো সম্পূর্ণ সংযুক্ত নয়। UI-তে যেখানে backend pending লেখা আছে, সেটি বাস্তব অবস্থা।

কোনো live Supabase project বা API key এই প্যাকেজে অন্তর্ভুক্ত নয়। Demo PIN বা hardcoded admin password রাখা হয়নি।

## চালানোর নিয়ম

1. Node.js 20 বা তার পরের LTS সংস্করণ ইনস্টল করুন।
2. ZIP Extract করুন।
3. Terminal-এ project folder খুলুন।
4. `npm install` চালান।
5. `.env.example` কপি করে `.env` তৈরি করুন।
6. Supabase project URL ও publishable/anon key বসান।
7. Supabase SQL Editor-এ `supabase/migrations/001_initial_schema.sql` এবং তারপর `002_atomic_stock_rpc.sql` পর্যালোচনা করে চালান।
8. `npm run dev` চালান।
9. Browser-এ প্রদর্শিত local URL খুলুন।

## Supabase Auth ও প্রথম Admin

- Supabase Dashboard → Authentication → Users থেকে প্রথম Admin user তৈরি করুন।
- organizations টেবিলে প্রতিষ্ঠান তৈরি করুন।
- profiles টেবিলে Auth user-এর একই UUID দিয়ে role=`admin`, display_name এবং organization_id যোগ করুন।
- Admin profile তৈরি না হওয়া পর্যন্ত অ্যাপে প্রবেশ করা যাবে না।
- Service Role Key কখনো VITE_ variable বা browser code-এ দেবেন না।

## Vercel Deployment

1. GitHub-এ project repository push করুন।
2. Vercel-এ Import Project করুন।
3. Framework: Vite; Build Command: `npm run build`; Output Directory: `dist`।
4. Environment Variables-এ `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY` দিন।
5. Server-side integration চালুর আগে প্রয়োজনীয় Vercel server environment variables আলাদাভাবে configure করুন।
6. Deploy করুন।

`api/health.ts` Vercel Function-এ health check উদাহরণ। এটি AI/Scanner/API integration নয়।

## হিসাবের নীতি ও সতর্কতা

- অর্থের হিসাব integer poisha-তে রাখা হয়; floating-point টাকা যোগ করা হয় না।
- DSR summary-তে damage একবার বাদ দেওয়া হয়।
- Damage gross sales-এর বেশি হলে calculation reject হয়।
- Stock negative হলে calculation reject হয়।
- Historical entry পরিবর্তন করলে production-এ affected subsequent days পুনর্গণনার transactional workflow তৈরি করতে হবে।
- Confirmed transaction delete না করে reversal/adjustment transaction ব্যবহার করতে হবে।
- প্রতিটি write-এ unique idempotency key আবশ্যক।
- Product-specific carton/packet conversion আলাদা করে সংরক্ষণ করতে হবে।

## Production-এ যাওয়ার আগে আবশ্যক কাজ

- প্রতিটি business write-এর জন্য atomic Postgres RPC / server action
- RLS policy security review ও role-specific scope tightening
- Secure PIN login (PIN hash + rate limit + server verification)
- API secret encryption ও server-side integration settings
- Admin Settings CRUD এবং audit log
- DSR/product/stock/challan/cash/expense/due full workflows
- Historical ledger recalculation and locking
- Support ticket + AI provider backend
- Scanner OCR backend and user confirmation flow
- PDF/PNG/CSV export
- Backup/restore with tested recovery
- Multi-device concurrency tests
- Full unit/integration/end-to-end tests

## হিসাবের সাতটি DSR Summary

1. সর্বমোট বিক্রি
2. ড্যামেজ মূল্য
3. ড্যামেজ বাদে সর্বমোট বিক্রি
4. নগদ জমা
5. আজকের বকেয়া
6. পূর্বের বকেয়া
7. সর্বমোট বকেয়া

এই starter-এ আজকের বকেয়া = ড্যামেজ বাদে বিক্রি − নগদ জমা + অনুমোদিত সমন্বয়; সর্বমোট বকেয়া = পূর্বের বকেয়া + আজকের বকেয়া। ব্যবসার চূড়ান্ত ledger rules নিশ্চিত করে production-এ প্রয়োগ করতে হবে।
