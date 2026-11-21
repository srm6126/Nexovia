# SHAHIN APP — আপডেটেড মোবাইল ওয়েব অ্যাপ

## ফাইল
- `index.html` — অ্যাপের মূল কোড
- `manifest.webmanifest` — Chrome/PWA ইনস্টল পরিচিতি
- `sw.js` — Service Worker ও সীমিত অফলাইন ক্যাশ
- `icon-192.png`, `icon-512.png` — PWA অ্যাপ আইকন

## প্রকাশ
এই চারটি ফাইল একই GitHub repository-এর root-এ আপলোড করুন। HTTPS সমর্থিত static hosting (যেমন Cloudflare Pages বা Vercel) দিয়ে প্রকাশ করুন। PWA ইনস্টল সুবিধার জন্য HTTPS আবশ্যক। Chrome-এ সাইট খুলে মেনু থেকে **Install app / অ্যাপ ইনস্টল করুন** নির্বাচন করুন। ইনস্টল প্রম্পট Chrome-এর নিজস্ব যোগ্যতা ও ব্যবহার-সংকেতের ওপরও নির্ভর করে।

## লগইন
প্রাথমিক Admin PIN: `612600`। প্রথম লগইনের পর Settings থেকে পরিবর্তন করুন। নতুন অ্যাকাউন্ট তৈরির সময় আলাদা PIN দিন। একই PIN একাধিক অ্যাকাউন্টে ব্যবহার করবেন না।

## গুরুত্বপূর্ণ সীমাবদ্ধতা ও নিরাপত্তা
এটি এখনো একক ব্রাউজার `localStorage`-ভিত্তিক সংস্করণ। PIN ও role-ভিত্তিক দৃশ্যমানতা এই ক্লায়েন্ট কোডে বাস্তবায়িত; এটি সার্ভার-সুরক্ষিত authentication নয়। একাধিক ফোনে একই ডেটা সিঙ্ক, প্রকৃত অ্যাক্সেস কন্ট্রোল, নিরাপদ PIN সংরক্ষণ, অডিট লগ ও সার্ভার-সাইড ডিলিটের জন্য Supabase/Firebase-এর মতো backend যুক্ত করতে হবে। বাস্তব সংবেদনশীল ব্যবসায়িক তথ্য ব্যবহারের আগে backend/security যুক্ত করুন।

ডেটা রিসেট বা অ্যাকাউন্ট ডিলিটের আগে Settings থেকে JSON ব্যাকআপ ডাউনলোড করুন।


## Chrome-এ Install চালু করার জন্য জরুরি
- GitHub Pages / Cloudflare Pages / Vercel-এ সব ৬টি ফাইল একই প্রকাশিত ফোল্ডারে আপলোড করুন।
- সাইট অবশ্যই `https://` ঠিকানায় খুলতে হবে; `file://`, preview iframe, বা সাধারণ HTTP ঠিকানায় PWA install হবে না।
- Chrome-এ সাইট খুলে একবার রিফ্রেশ করুন, তারপর Site settings থেকে পুরোনো site data/cache পরিষ্কার করে আবার খুলুন। Service Worker সক্রিয় হতে কয়েক সেকেন্ড লাগতে পারে।
- যদি Install এখনও নিষ্ক্রিয় থাকে, Chrome-এর address bar-এর সঠিক HTTPS URL, Console/DevTools-এর manifest error এবং Network-এ `manifest.webmanifest`, `sw.js`, `icon-192.png`, `icon-512.png`-এর status যাচাই করতে হবে। কোড একা Chrome-এর install criteria bypass করতে পারে না।

DSR স্টেটমেন্টে পণ্যের তালিকা আলাদা স্ক্রল হয় এবং সারাংশ নিচে দৃশ্যমান থাকে। পূর্বের বকেয়া DSR-এর জন্য read-only; Admin সম্পাদনা করতে পারবেন।
