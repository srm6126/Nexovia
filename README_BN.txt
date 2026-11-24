SHAHIN APP — ATC UPDATE PACKAGE
===============================
এই প্যাকেজটি মূল SHAHIN APP সোর্সের উপর ভিত্তি করে তৈরি। পুরোনো app_state JSON data structure বজায় রেখে additive update করা হয়েছে।

দৃশ্যমান আপডেট:
- Dashboard quick actions-এ চালান স্ক্যানার ও AI সহায়তা যোগ।
- Dealer/Manager/Admin dashboard-এ floating AI Support shortcut।
- Scanner ও Support page অ্যাপের মূল content area-তে সরানো হয়েছে।
- Scanner এখন Vercel /api/scan endpoint-এ authenticated image OCR request পাঠায়।
- Smart Support এখন Vercel /api/support endpoint-এ authenticated AI request পাঠায়।
- Gemini key server-side GEMINI_API_KEY থেকে পড়া হয়; browser-এ key রাখা হয় না।
- আগের manual scanner row, user review এবং explicit stock confirmation রাখা হয়েছে।

Deploy করার আগে DEPLOY_GUIDE_BN.txt পড়ুন।
এই প্যাকেজ Production-certified নয়। STATUS_AND_TESTS_BN.txt এবং RELEASE_SCOPE_BN.txt-এ সীমাবদ্ধতা দেওয়া আছে।
