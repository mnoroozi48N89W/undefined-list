/* ---------------------------------------------------------------
   The only file you need to edit.

   1. Paste the config block Firebase gives you when you register a
      web app (Project settings -> Your apps -> Web app -> Config).
   2. Put both of your Google addresses in ALLOWED_EMAILS, and the
      SAME two addresses in firestore.rules.

   None of this is secret. Firebase web API keys are public by
   design -- Google says so in their own docs. What actually keeps
   other people out is firestore.rules, which runs on their servers
   where nobody can edit it. So the addresses below are a courtesy
   (they produce a clearer error message); the rules are the lock.
   --------------------------------------------------------------- */

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCQ1Gs58yXHRNxgZZ4e0kut0E383hFyrtY",
  authDomain: "undefined-list.firebaseapp.com",
  projectId: "undefined-list",
  storageBucket: "undefined-list.firebasestorage.app",
  messagingSenderId: "264152148253",
  appId: "1:264152148253:web:8a89550f77ceb31464d9f4"

export const ALLOWED_EMAILS = [
  "quidpromoh@gmail.com",
  "mcgibbonkim@gmail.com"
];
