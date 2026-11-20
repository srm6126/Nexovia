# SHAHIN APP — GitHub Upload Package

## GitHub-এ আপলোড
এই ফোল্ডারের সব ফাইল repository-এর root folder-এ আপলোড করুন: `index.html`, `manifest.webmanifest`, `sw.js`, `README_BN.md`। তারপর Commit changes দিন। GitHub Pages / Vercel / Netlify-তে HTTPS deploy করুন।

## এই প্যাকেজে
- আগের `index.html`-এর Local Storage data model ও ব্যবসার হিসাবের logic রাখা হয়েছে।
- মোবাইল UI-এর রং, প্যানেল, টেবিল, ফর্ম, কার্ড ও পেজের ভিজ্যুয়াল স্টাইল রেফারেন্সের নীল-সাদা থিমে উন্নত করা হয়েছে।
- Dealer / DSR / Manager / Platform Super Admin role flow এবং Product, Stock, DSR sales, Accounts, Challan, Expense, Dues, Target, Reports, Company, Settings পেজের বিদ্যমান ফাংশন রাখা হয়েছে।
- JSON backup/restore, print/PDF, PWA manifest ও service worker অন্তর্ভুক্ত।

## Cloud Backend সংক্রান্ত জরুরি তথ্য
আপনার Supabase account তৈরি হয়েছে, কিন্তু নির্দিষ্ট Supabase project-এর সঙ্গে এই অ্যাপের secure cloud sync এখনো যুক্ত করা হয়নি। সেটি সম্পন্ন করতে দরকার:
1. Project URL (`https://YOUR-PROJECT-REF.supabase.co`)
2. Publishable key (বা legacy anon public key)

Supabase Dashboard → Project Settings → API থেকে পাবেন। **কখনো `service_role` বা Secret key GitHub/frontend-এ দেবেন না।** শুধু account খোলা থাকলেই cloud sync চালু হয় না; database schema, secure server-side authentication এবং RLS policy configure করতে হবে। তাই এই প্যাকেজে cloud sync চালু আছে বলে দাবি করা হচ্ছে না।

## ডাটা সুরক্ষা
- আপডেটের আগে পুরোনো অ্যাপের Settings থেকে JSON backup নিন।
- পুরোনো `shahin_master_db` ডাটা browser Local Storage-এ থাকে; অন্য ফোনে নিজে থেকে যাবে না।
- বর্তমান PIN ব্যবস্থা browser-side; production cloud authentication-এর বিকল্প নয়।
- বাস্তব ডাটা ব্যবহারের আগে test account, stock, DSR issue/return/damage, deposit এবং backup/restore পরীক্ষা করুন।
