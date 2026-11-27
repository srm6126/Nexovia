SHAHIN APP — CLOUDFLARE PAGES DIRECT UPLOAD

এই ZIP-এর ভেতরে index.html root-এ আছে। কোনো nested parent folder খুলে আলাদা করে ফাইল খুঁজতে হবে না।

আপলোড:
1) ZIP Extract করুন।
2) Extract করা SHAHIN_APP_CLOUDFLARE_PAGES ফোল্ডার খুলুন।
3) index.html, manifest.webmanifest, sw.js, _headers এবং sql ফোল্ডার একই root-এ আছে কি না দেখুন।
4) Cloudflare Dashboard → Workers & Pages → Create application → Pages → Upload your static files (Direct Upload) নির্বাচন করুন।
5) Extract করা ফোল্ডারটি সম্পূর্ণ upload করুন; শুধু index.html নয়।
6) Deploy করুন।

গুরুত্বপূর্ণ:
- এই build-এ CSS ও JavaScript index.html-এর ভেতরে embedded। তাই আলাদা assets/app.js বা assets/style.css আপলোড করতে হবে না।
- প্রথম Local Preview Admin PIN: 612600। প্রথম লগইনের পর Settings থেকে PIN বদলান।
- এটি LocalStorage-ভিত্তিক MVP। অন্য ফোনে ডেটা নিজে থেকে sync হবে না; production authentication, Supabase live sync, RLS, Worker backend, AI support এবং OCR scanner চালু আছে বলে ধরে নেবেন না।
- Settings-এর API fields configuration সংরক্ষণ করে; শুধু key বসালে API স্বয়ংক্রিয়ভাবে চালু হয় না। সংশ্লিষ্ট Worker/backend integration প্রয়োজন।
- কোনো Cloudflare API Token এই ZIP-এ রাখা হয়নি। API Token কখনো ওয়েবসাইটের ফাইল বা browser-side settings-এ রাখবেন না।
- Supabase schema: sql/001_initial_schema.sql। নতুন test project-এ review করে ব্যবহার করুন; existing production DB-তে না বুঝে চালাবেন না।
- Backup: Reports পেজ থেকে JSON backup নিন।
