# SHAHIN APP — প্রাথমিক Test & Delivery Report

তারিখ: ২৬ নভেম্বর ২০২৬

## প্যাকেজ যাচাই
- Source files তৈরি: সফল
- ZIP archive তৈরি: সফল
- SQL migration files অন্তর্ভুক্ত: সফল
- Environment template অন্তর্ভুক্ত: সফল
- PWA manifest অন্তর্ভুক্ত: সফল

## Source-level test cases অন্তর্ভুক্ত
- DSR damage একবার বাদ
- Damage gross sales-এর বেশি হলে reject
- Opening + received - sold + return - damage stock carry-forward
- Negative stock reject
- Unit conversion
- Money integer poisha calculation

## যেসব পরীক্ষা এই পরিবেশে চালানো হয়নি
- `npm install`, `npm run build`, `npm test`
- Live Supabase Authentication ও RLS
- Multi-device synchronization
- Scanner/OCR provider
- AI Support provider
- PDF/PNG export
- Production backup/restore
- Vercel live deployment

তাই এই ডেলিভারিকে runnable foundation/source starter হিসেবে গণ্য করতে হবে, production-certified সম্পূর্ণ অ্যাপ হিসেবে নয়।

## গুরুত্বপূর্ণ সতর্কতা
Dashboard-এ প্রদর্শিত বিক্রি, জমা, বকেয়া, মূল্য, লাভ ও Target-এর সংখ্যা UI preview placeholder; এগুলো বাস্তব Database থেকে আসছে না। Live ব্যবহার করার আগে database query ও verified ledger calculation দিয়ে প্রতিস্থাপন করতে হবে।
