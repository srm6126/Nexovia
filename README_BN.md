# মোসলেম বাজার — Starter Project

## কী আছে
- Mobile-first responsive customer storefront
- Demo product catalogue, category cards, flash sale, cart
- নিচে Home / Category / Offer / Wishlist / Account navigation
- Scrollable homepage sections
- `/admin6126` Admin login route
- Server-side password verification এবং HttpOnly signed session cookie
- Demo Admin Dashboard: product add/edit/delete

## স্থানীয়ভাবে চালানো
1. Node.js 18+ ইনস্টল করুন
2. `npm install`
3. `.env` ফাইল তৈরি করুন:
   ADMIN_PASSWORD=আপনার-শক্তিশালী-পাসওয়ার্ড
   ADMIN_SESSION_SECRET=কমপক্ষে-৩২-অক্ষরের-এলোমেলো-সিক্রেট
4. `npm run dev` — Vercel API function স্থানীয় Vite server-এ কাজ করবে না; Admin login API চালাতে Vercel dev ব্যবহার করুন:
   `npx vercel dev`
5. Build যাচাই: `npm run build`

## Vercel-এ প্রকাশ
1. ZIP Extract করে GitHub repository-তে Upload করুন।
2. Vercel-এ GitHub repository Import করুন।
3. Project Settings → Environment Variables-এ যোগ করুন:
   - `ADMIN_PASSWORD` = আপনার নতুন শক্তিশালী Admin password
   - `ADMIN_SESSION_SECRET` = দীর্ঘ random secret (কমপক্ষে 32 অক্ষর)
4. Redeploy করুন।
5. ওয়েবসাইট: `https://আপনার-ডোমেইন/`
6. Admin: `https://আপনার-ডোমেইন/admin6126`

## গুরুত্বপূর্ণ সীমাবদ্ধতা
- ব্যবহারকারীর দেওয়া `612600` পাসওয়ার্ডটি নিরাপত্তার কারণে সোর্স কোডে রাখা হয়নি। Vercel Environment Variable-এ নিজে সেট করতে হবে; বাস্তবে প্রকাশের আগে শক্তিশালী পাসওয়ার্ড ব্যবহার করুন।
- Product edits এই starter-এ browser localStorage-এ থাকে; এটি এক ডিভাইস/ব্রাউজারের demo মাত্র। বাস্তব multi-user store-এর জন্য Supabase database, server-side CRUD API, Row Level Security, audit logs দরকার।
- অর্ডার, Seller onboarding, real payments, courier integration, refunds, SMS, stock reservation এবং customer authentication এখনো demo নয়/সংযুক্ত নয়। এখানে দেখানো অর্ডার ও পরিসংখ্যান নমুনা।
- পণ্যের ছবি বাহ্যিক Unsplash URL থেকে আসে; ইন্টারনেট প্রয়োজন। এগুলো অস্থায়ী placeholder; মার্কেটপ্লেসে প্রকাশের আগে নিজের অনুমোদিত পণ্যের ছবি/তথ্য বসান।
- এই starter production-ready marketplace নয়; এটি বাস্তব কোডিংয়ের ভিত্তি ও UI prototype।
