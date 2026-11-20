# SHAHIN APP — Offline-first functional starter

## চালু করার পদ্ধতি
1. ZIP ফাইল Extract করুন।
2. `index.html` ফাইলটি GitHub repository-এর root-এ Upload করুন (পুরোনো `index.html` replace করুন)।
3. Commit changes দিন। Vercel connected থাকলে deployment হবে।
4. প্রথমবার সাইট খুলে Platform Super Admin-এর নাম ও কমপক্ষে ৬ সংখ্যার PIN তৈরি করুন। কোনো ডেমো PIN নেই।

## এই সংস্করণে কাজ করে
- মোবাইল-ফ্রেন্ডলি ড্যাশবোর্ড ও মেনু navigation
- প্রথমবার Admin setup; Dealer/DSR/Manager অ্যাকাউন্ট PIN দিয়ে তৈরি
- পণ্য Add, unit নির্বাচন (পাতা, পিস, কার্টুন, লিটার, গ্রাম, মিলি), ক্রয়/বিক্রয় রেট
- স্টক বৃদ্ধি/মাল গ্রহণ, DSR ইস্যু-ফেরত-ড্যামেজ-নিট বিক্রির হিসাব
- DSR role-এ নিজের বিক্রয়/জমা/বকেয়া তথ্য; লাভ-ক্ষতির রিপোর্ট লুকানো
- কোম্পানির চালান আলাদা; মাল গ্রহণ নিশ্চিত না করা পর্যন্ত স্টক বাড়ে না
- দোকান লেজার, খরচ, মাসিক/DSR টার্গেট, রিপোর্ট, প্রিন্ট/PDF, JSON backup/restore
- কোম্পানি তৈরি/সুইচ (একই ব্রাউজারের ডাটার মধ্যে)

## অত্যন্ত গুরুত্বপূর্ণ সীমাবদ্ধতা
এটি বর্তমানে **একটি ব্রাউজার/ডিভাইসে লোকাল ডাটা-সহ offline-first সংস্করণ**। Local Storage ডাটা অন্য ফোনে বা অন্য ব্যবহারকারীর লগইনে নিজে থেকে যাবে না। PIN hash করা হলেও এটি production-grade server authentication নয়; browser storage-এ ডাটা থাকা অবস্থায় যথাযথ cloud security/RLS নেই। একই লিংকে বিভিন্ন ডিভাইস থেকে লগইন, রিয়েল-টাইম সিঙ্ক, নিরাপদ বহু-কোম্পানি ডাটা, role-based server permissions, স্বয়ংক্রিয় cloud backup চালু করতে Supabase (বা অন্য backend), database schema, server-side PIN verification/Edge Function এবং RLS policy deploy ও configuration করতে হবে। এই ZIP-এ backend credential নেই; তাই সেগুলো সক্রিয় আছে বলে দাবি করা হচ্ছে না।

## হিসাবের নিয়ম
- DSR বিক্রয় পরিমাণ = ইস্যু − ফেরত − ড্যামেজ
- DSR ইস্যু স্টক থেকে কমে; ফেরত স্টকে যোগ হয়; ড্যামেজ স্টক থেকে বের হয়
- চালান সংরক্ষণে স্টক বাড়ে না; মাল গ্রহণ নিশ্চিত করলে পণ্যভিত্তিক স্টক বাড়ে
- বিক্রয় মূল্য, জমা ও বকেয়া আলাদা রাখা হয়
- রিপোর্ট থেকে Browser Print ব্যবহার করে PDF/প্রিন্ট করা যায়

## ব্যবহারের আগে
বাস্তব ব্যবসায়িক ডাটা দেওয়ার আগে পরীক্ষামূলক কয়েকটি পণ্য, চালান, DSR ইস্যু/ফেরত/ড্যামেজ, জমা এবং ব্যাকআপ-রিস্টোর পরীক্ষা করুন। নিয়মিত JSON backup ডাউনলোড করে নিরাপদ স্থানে রাখুন।

## PWA / অফলাইন খোলা
`index.html`, `manifest.webmanifest` এবং `sw.js`—তিনটি ফাইল একই root folder-এ রাখুন। HTTPS deployment-এ প্রথমবার একবার অনলাইনে খুললে Service Worker অ্যাপ shell cache করবে; এরপর একই ডিভাইসে cached অ্যাপ offline-এ খোলা যাবে। অফলাইনে ডাটা এই ডিভাইসেই থাকবে।
