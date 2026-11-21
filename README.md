# SHAHIN APP — V3

এই প্যাকেজে মূল `index.html`-এর সব পুরোনো ফিচার ও ডেটা-স্ট্রাকচার অক্ষত রেখে সীমিত DSR layout/PWA সংশোধন যোগ করা হয়েছে।

## প্রকাশ
1. ZIP Extract করে সব ফাইল একই GitHub repository root-এ আপলোড করুন।
2. Cloudflare Pages / Netlify / Vercel-এ HTTPS-সহ deploy করুন।
3. `index.html`, `manifest.webmanifest`, `sw.js`, `icon-192.png`, `icon-512.png` একই root path-এ থাকতে হবে।
4. Chrome-এ HTTPS সাইটটি খুলে একবার reload দিন; তারপর Chrome menu থেকে Install app পরীক্ষা করুন।

## গুরুত্বপূর্ণ সীমাবদ্ধতা — বহু ডিভাইসে একই ডেটা
বর্তমান মূল অ্যাপ `localStorage` ব্যবহার করে। ফলে ডেটা শুধু যে ডিভাইস/ব্রাউজারে এন্ট্রি হয়েছে সেখানেই থাকে। PIN একই হলেও অন্য ফোনে সেই ডেটা নিজে থেকে আসবে না। সব ডিভাইসে একই হিসাব/ইতিহাস দেখাতে Supabase বা Firebase-এর মতো কেন্দ্রীয় ডেটাবেস, authentication/RLS policy এবং online sync যুক্ত করতে হবে। এই প্যাকেজে কোনো ভুয়া cloud sync দেখানো হয়নি। Supabase Project URL ও anon/publishable key এবং নিরাপদ database policy ছাড়া cross-device sync চালু বলা যাবে না।

## ডেটা সুরক্ষা
পুরোনো সাইট থেকে পরিবর্তনের আগে Settings > Backup থেকে JSON backup নিন। এই সংস্করণে কোনো ব্যবসায়িক ডেটা স্বয়ংক্রিয়ভাবে মুছে ফেলা হয় না।
