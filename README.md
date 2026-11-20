# SHAHIN APP — Starter Website Source

এই ZIP-এ এক ফাইলের HTML/CSS/JavaScript ভিত্তিক SHAHIN APP starter আছে।

## দ্রুত চালানো
- `index.html` ফাইলটি ব্রাউজারে খুললেই UI দেখা যাবে।
- অনলাইনে প্রকাশ: GitHub-এ একটি repository তৈরি করে `index.html` আপলোড করুন।
- GitHub Pages চালু করুন: Repository Settings → Pages → Deploy from a branch → main / root।
- বিকল্পভাবে Cloudflare Pages-এ Direct Upload দিয়ে এই ফাইল প্রকাশ করতে পারেন।

## বর্তমান কার্যকারিতা
- মোবাইল-ফ্রেন্ডলি Dashboard
- ছয়টি সারাংশ কার্ড
- সমান আকারের আটটি Quick Access
- Express-এর জন্য ফাঁকা reserved strip
- মাসিক টার্গেট ও অর্জনের হিসাব
- DSR বিক্রয় এন্ট্রি, পণ্য, স্টক, নগদ জমা, খরচ, চালান, গ্রাহক/দোকান ও রিপোর্ট পেজ
- স্টক যোগ ও বিক্রয়ের সময় স্টক কমানো
- ব্রাউজারের localStorage-এ তথ্য সংরক্ষণ
- CSV export এবং ক্লাউড-ডাটাবেজের পরবর্তী সংযোগের ভিত্তি হিসেবে প্রস্তুত UI

## অত্যন্ত গুরুত্বপূর্ণ সীমাবদ্ধতা
এই প্রথম সংস্করণে ডাটা শুধু যে ব্রাউজারে ব্যবহার করছেন সেই ব্রাউজারের localStorage-এ থাকে। অন্য ফোন/কম্পিউটার বা অন্য ব্যবহারকারীর সঙ্গে ডাটা শেয়ার হবে না। PIN-টিও কেবল ডেমো গেট, নিরাপদ authentication নয়। বাস্তব কোম্পানির আর্থিক তথ্য ব্যবহারের আগে Supabase/Firebase-এর মতো cloud database, secure authentication, role permissions, database rules, backup ও audit log সংযোগ এবং পরীক্ষা করতে হবে। এই ফাইলকে production-ready ERP বলা হচ্ছে না।

## পরবর্তী ধাপ
প্রথমে এই UI নিজের হোস্টিংয়ে চালিয়ে দেখুন। তারপর আপনার Lovable-এর মূল প্রজেক্ট/কোড পাওয়া গেলে সেটির ফিচারগুলোর সঙ্গে মিলিয়ে ধাপে ধাপে cloud database ও multi-company ব্যবস্থা যুক্ত করা যাবে।
