SHAHIN APP — ATC DISTRIBUTION MANAGEMENT SYSTEM
আবরার ট্রেডিং কর্পোরেশন | SMART BUSINESS SOLUTION
================================================

এই প্যাকেজে যা আছে
------------------
1. index.html — V8-ভিত্তিক ওয়েব অ্যাপের মূল সোর্স
2. manifest.webmanifest — Android PWA ইনস্টল কনফিগারেশন
3. sw.js — PWA service worker
4. icons/ — 192px ও 512px অ্যাপ আইকন
5. ATC_NON_DESTRUCTIVE_MIGRATION.sql — নতুন ATC টেবিলের additive migration
6. ORIGINAL_PIN_CLOUD_SETUP_REFERENCE_ONLY.sql — আগের PIN/cloud SQL রেফারেন্স; যাচাই ছাড়া চালাবেন না
7. DEPLOY_GUIDE_BN.txt — Vercel Preview ও Android PWA নির্দেশিকা
8. STATUS_AND_TESTS_BN.txt — পরীক্ষার ফল ও অসম্পূর্ণ অংশের তালিকা

গুরুত্বপূর্ণ নিরাপত্তা
--------------------
- এই ZIP-এ কোনো Supabase service_role secret বা Gemini API key রাখা হয়নি।
- লাইভ Supabase ডেটাবেসে SQL চালানোর আগে পূর্ণ backup নিন।
- বিদ্যমান টেবিল DROP/TRUNCATE করবেন না।
- প্রথমে Supabase-এর staging/test project এবং Vercel Preview-তে পরীক্ষা করুন।
- বর্তমান PIN cloud flow-তে whole-state JSON save আছে; role-scoped transactional security migration সম্পন্ন ও যাচাই না হওয়া পর্যন্ত বহু-ব্যবহারকারীর production হিসাবের জন্য একে নিরাপদ ধরে নেবেন না।
- এই ZIP নিজে থেকে আপনার Vercel production site বা Supabase database পরিবর্তন করে না।

ব্যবহার
------
Vercel-এ Preview deployment তৈরি করে ZIP extract করা ফাইলগুলো project root-এ দিন।
মূল ফাইল index.html root-এ থাকতে হবে। তারপর Preview URL-এ পরীক্ষা করুন।
Android-এ HTTPS Preview URL Chrome দিয়ে খুলে ⋮ → Install app / Add to Home screen ব্যবহার করুন।

রিলিজ অবস্থা
------------
এটি সম্পূর্ণ সোর্স ও সেটআপ-ডকুমেন্টসহ একটি সমন্বিত V8 upgrade candidate package।
এটিকে production-ready final release বলা হচ্ছে না, কারণ নিচের বিষয়গুলো বাস্তব backend/device পরীক্ষায় এখনো সম্পন্ন/প্রমাণিত নয়:
- তিন স্টক বালতির end-to-end transactional ledger
- DSR দৈনিক issue/return/carry-forward এবং historical recalculation
- nested packaging conversion ও historical conversion snapshot
- secure role-scoped cloud RPC, conflict-safe concurrent sync
- cross-device support ticket notification
- নির্ভরযোগ্য challan OCR
- Native Android APK build/signing

Node.js JavaScript syntax check ও ZIP integrity check build-time-এ চালানো হয়েছে। Live Supabase, Vercel production, physical Android device বা APK signing পরীক্ষা করা হয়নি।
