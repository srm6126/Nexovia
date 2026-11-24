SHAHIN APP — ATC DISTRIBUTION MANAGEMENT SYSTEM
আবরার ট্রেডিং কর্পোরেশন | SMART BUSINESS SOLUTION
================================================

এটি V8-ভিত্তিক সমন্বিত সোর্স প্যাকেজ। মূল অ্যাপ: index.html।

ফাইলসমূহ
--------
- index.html: ওয়েব অ্যাপ সোর্স; boot error diagnostic ও ৩-বিভাগের স্টক মূল্যায়ন সংশোধন যুক্ত।
- manifest.webmanifest, sw.js, icons/: Android PWA ইনস্টল ফাইল।
- ATC_NON_DESTRUCTIVE_MIGRATION.sql: আগের additive migration; staging-এ schema যাচাই ছাড়া চালাবেন না।
- ORIGINAL_PIN_CLOUD_SETUP_REFERENCE_ONLY.sql: আগের PIN/cloud SQL; production-এ অন্ধভাবে চালাবেন না।
- DEPLOY_GUIDE_BN.txt: Vercel Preview নির্দেশিকা।
- RELEASE_SCOPE_BN.txt: সম্পূর্ণ ফিচার তালিকা ও যাচাই-অবস্থা।
- QA_CHECKLIST_BN.txt: পরীক্ষা তালিকা।
- android-capacitor/: Native Android wrapper তৈরির starter configuration; APK নয়।

নিরাপত্তা ও ডেটা
--------------
কোনো লাইভ Vercel/Supabase পরিবর্তন করা হয়নি। কোনো service_role secret বা API key ZIP-এ নেই।
পুরোনো ডেটা সংরক্ষণের জন্য বিদ্যমান database DROP/TRUNCATE করবেন না। আগে পূর্ণ backup এবং staging project ব্যবহার করুন।
বর্তমান legacy PIN cloud save পুরো JSON state overwrite করে; role-scoped transactional security migration ছাড়া production-এ বহু-ব্যবহারকারীর হিসাবকে নিরাপদ বলা যাবে না।

গুরুত্বপূর্ণ সীমাবদ্ধতা
--------------------
এই ZIP-কে production-ready final release বলা হচ্ছে না। RELEASE_SCOPE_BN.txt-এ কোন অংশ সোর্সে আছে, কোনটি আংশিক, কোনটি বাস্তব backend/device test ছাড়া অসম্পূর্ণ—স্পষ্ট লেখা আছে।
