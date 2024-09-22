import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      discover: "Discover Unexplored Corners of the world with",
      about: "About",
      login: "Login",
      getStarted: "Get Started",
      explore: "Explore",
      search: "Search",
      discoverplaces: "Discover Places",
      uncover: "Uncover hidden gems and iconic destinations.",
      plan: "Plan Trips",
      seameless: "Create seamless itineraries with ease.",
      travel: "Travel Together",
      share: "Share Experience",
      sharejourney: "Share your journey and provide feedback.",
      connect: "Connect with like-minded explorers.",
      upcomingtrips: "UPCOMING TRIPS",
      Kashmir: "Kashmir",
      Kerela: "Kerala",
      Mumbai: "Mumbai",
      Agra: "Agra",
      july: "July",
      valuablefeedback: "Share Your Valuable Feedback",
      reviewsandrating: "Reviews and Ratings",
      joy: "Joy Sharma",
      sneha: "Sneha",
      joyreview:
        "“I recently joined a TripUnite tour to bali and had an amazing experience! I highly recommend this platform.",
      feedbacktitle: "Feedback",
      name: "Name",
      email: "Email",
      message: "Message",
      Rate: "Rate",
      Submit: "Submit",
      discoverwith: "Discover trips with like minded explorers",
      help: "Help",
      contactus: "Contact Us",
      getassistance: "Get Assistance",
      more: "More",
      Destinationfoot: "Destination",
      tripsfoot: "Trips",
      contact: "Contact",
      plantrips: "Plan Trips",
      donthaveaccount: "Don't have an account?",
      haveanaaccount: "Have an account?",
      signup: "SIGN UP",
      logg: "LOG IN",
      password: "Password",
      fullname: "Full Name",
      forgetpass: "FORGET PASSWORD?",
      home: "Home",
      Adventureawaits: "Adventure Awaits, Join the Journey.",
      jaipur: "Jaipur",
      book: "BOOK",
      onlyfemale: "Only Female",
      createtrip: "Create Trip",
      tailored: "Tailored journeys,crafted just for you.",
      nameoftrip: "Name of the Trip",
      desc: "Description",
      date: "Date",
      start: "Start:",
      end: "End:",
      estimatedbudget: "Estimated Budget",
      meetup: "Meetup",
      NeedaLocalGuide: "Need a Local Guide ?",
      yes: "Yes",
      no: "No",
      travellers: "Travellers",
      preference: "Preference",
      onlymale: "Only Male",
      nopreference: "No Preference",
      agerange: "Age range",
      age: "Age",
      max: "Max",
      min: "Min",
      remarks: "Remarks",
      craete: "Create",
      Joinus:
        "Join us on an unforgettable journey to the breathtaking landscapes of Kashmir. Immerse yourself in the region's stunning natural beauty, rich culture, and serene tranquility. Whether you're exploring lush valleys, majestic mountains, or charming local villages, this trip promises memories that will last a lifetime.",
      Newdelhi: "New Delhi",
      localguide: "Local Guide Provide",
      Groupsize: "Group Size",
      tripcreatedby: "Trip created by",
      price: "Price",
      jointrip: "Join Trip",
      gender: "Gender",
      other: "Other",
      male: "Male",
      female: "Female",
      join: "Join",
      pay: "Pay",
      AboutUs: "About Us",
      Welcome: "Welcome",
      WelcometoTripUnite:
        "Welcome to TripUnite, your ultimate travel companion for connecting with like-minded explorers. At TripUnite, we believe that the best adventures are those shared with others who share your passion for travel. Our platform offers personalized trip planning, secure bookings, and a wealth of travel resources to ensure your journey is seamless and memorable.",
      MeetOurdevelopers: "Meet Our Developers",
      AyushSah: "Rahul Thakur",
      Shudhanshu: "Shudhanshu",
      AnishaKumari: "Shivam Mourya",
      SanyaSingh: "Mandeep",
      Reachouttous: "Reach out to us!",
      ContactInformation: "Contact Information",
      Phno: "Ph. no.",
      Phonenumber: "Phone number",
      submit: "Submit",
      EstimatedBugdet: "Estimated Bugdet",
    },
  },
  हिं: {
    translation: {
      discover: "दुनिया के अनछुए कोनों की खोज करें",
      about: "बारे में",
      login: "लॉग इन",
      getStarted: "शुरू करें",
      explore: "अन्वेषण",
      search: "खोजें",
      discoverplaces: "स्थान खोजें",
      uncover: "छिपे हुए रत्नों और प्रतिष्ठित स्थलों को उजागर करें।",
      plan: "यात्राओं की योजना बनाएं",
      seameless: "आसानी से निर्बाध यात्रा कार्यक्रम बनाएं।",
      travel: "साथ में यात्रा करना",
      share: "शेयर अनुभव",
      sharejourney: "अपनी यात्रा साझा करें और प्रतिक्रिया दें।",
      connect: "समान विचारधारा वाले खोजकर्ताओं से जुड़ें।",
      upcomingtrips: "आगामी यात्राएँ",
      Kashmir: "कश्मीर",
      Kerela: "केरल",
      Mumbai: "मुंबई",
      Agra: "आगरा",
      july: "जुलाई",
      valuablefeedback: "अपनी बहुमूल्य प्रतिक्रिया साझा करें",
      reviewsandrating: "समीक्षाएं और रेटिंग",
      joy: "जॉय शर्मा",
      sneha: "स्नेहा",
      joyreview:
        "“मैं हाल ही में बाली के ट्रिपयूनाइट टूर में शामिल हुआ और मुझे एक अद्भुत अनुभव हुआ! मैं इस प्लेटफ़ॉर्म की अत्यधिक अनुशंसा करता हूँ।",
      feedbacktitle: "प्रतिक्रिया",
      name: "नाम",
      email: "ईमेल",
      message: "संदेश",
      Rate: "दर",
      Submit: "सबमिट करें",
      discoverwith: "समान विचारधारा वाले खोजकर्ताओं के साथ यात्राएँ खोजें",
      help: "मदद",
      contactus: "संपर्क करें",
      contact: "संपर्क",
      getassistance: "सहायता प्राप्त करें",
      more: "अधिक",
      Destinationfoot: "स्थान",
      tripsfoot: "ट्रिप्स",
      plantrips: "यात्राओं की योजना बनाएं",
      donthaveaccount: "कोई खाता नहीं है?",
      haveanaaccount: "क्या आपके पास कोई खाता है?",
      signup: "साइन अप करें",
      logg: "लॉग इन करें",
      password: "पासवर्ड",
      fullname: "पूरा नाम",
      forgetpass: "पासवर्ड भूल गए?",
      home: "होम",
      Adventureawaits: "रोमांच इंतजार कर रहा है, यात्रा में शामिल हों।",
      jaipur: "जयपुर",
      book: "बूक",
      onlyfemale: "केवल महिला",
      createtrip: "यात्रा बनाएँ",
      tailored: "अनुकूलित यात्राएँ,गढ़ी केवल आपके लिए।",
      nameoftrip: "यात्रा का नाम",
      desc: "विवरण",
      date: "तिथि",
      start: "शुरू",
      end: "अंत:",
      estimatedbudget: "अनुमानित बजट",
      meetup: "मिलना",
      NeedaLocalGuide: "स्थानीय मार्गदर्शक की आवश्यकता है?",
      yes: "हाँ",
      no: "नहीं",
      travellers: "यात्रियों की संख्या",
      preference: "पसंद",
      onlymale: "केवल पुरुष",
      nopreference: "कोई वरीयता नहीं",
      agerange: "आयु सीमा",
      age: "आयु",
      max: "अधिकतम",
      min: "न्यूनतम",
      remarks: "टिप्पणी",
      create: "बनाएं",
      Joinus:
        "कश्मीर के लुभावने परिदृश्यों की अविस्मरणीय यात्रा पर हमारे साथ जुड़ें। क्षेत्र की आश्चर्यजनक प्राकृतिक सुंदरता, समृद्ध संस्कृति और शांत शांति में डूब जाएं। चाहे आप हरी-भरी घाटियों, राजसी पहाड़ों, या आकर्षक स्थानीय गांवों की खोज कर रहे हों, यह यात्रा उन यादों का वादा करती है जो जीवन भर याद रहेंगी।",
      Newdelhi: "नई दिल्ली",
      localguide: "स्थानीय मार्गदर्शक की आवश्यकता",
      Groupsize: "समूह का आकार",
      tripcreatedby: "यात्रा निर्माता",
      price: "कीमत",
      jointrip: "यात्रा में शामिल हों",
      gender: "लिंग",
      other: "अन्य",
      male: "पुरुष",
      female: "महिला",
      join: "जुड़ें",
      pay: "पे",
      AboutUs: "हमारे बारे में",
      Welcome: "स्वागत है",
      WelcometoTripUnite:
        "TripUnite में आपका स्वागत है, यह आपके लिए एक बेहतरीन यात्रा साथी है, जहाँ आप अपने जैसे विचार वाले खोजकर्ताओं से जुड़ सकते हैं। TripUnite में,हम मानते हैं कि सबसे बेहतरीन रोमांच वे होते हैं जो यात्रा के प्रति आपके जुनून को साझा करने वाले अन्य लोगों के साथ साझा किए जाते हैं। हमारा प्लेटफ़ॉर्म व्यक्तिगत यात्रा योजना, सुरक्षित बुकिंग और यात्रा संसाधनों का खजाना प्रदान करता है ताकि यह सुनिश्चित हो सके कि आपकी यात्रा सहज और यादगार हो।",
      MeetOurdevelopers: "हमारे डेवलपर्स से मिलें",
      AyushSah: "आयुष साह",
      Shudhanshu: "सुधांशु",
      AnishaKumari: "अनिशा कुमारी",
      SanyaSingh: "सान्या सिंह",
      Reachouttous: "हम तक पहुंचें!",
      ContactInformation: "संपर्क की जानकारी",
      Phno: "फ़ोन नं",
      Phonenumber: "फ़ोन नंबर",
      submit: "सबमिट",
      EstimatedBugdet: "अनुमानित बजट",
    },
  },
};
i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
