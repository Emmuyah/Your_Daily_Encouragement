
const adviceCatalog = {
  0: ["Sundays remind you to breathe, recharge, and believe in tomorrow.",
    "Rest today, because strength comes from stillness.",
    "Your peace today will fuel your battles tomorrow.",
    "Sunday is life’s gentle reset button embrace it.",
    "Gratitude on Sunday creates blessings for the week ahead.",
    "Slow down today; the world moves fast enough without you.",
    "Let Sunday’s silence heal the noise of your week.",
    "Every Sunday carries hope for a brighter Monday."],
  1: ["Monday is proof that you can start over anytime.",
    "Face Monday with courage new doors open only when you knock.",
    "Your effort today lays the foundation for victories unseen.",
    "Rise today with purpose, and Monday will obey your will.",
    "Monday’s strength is born in the courage to begin again.",
    "Today is not heavy it’s full of possibilities waiting on you.",
    "A brave Monday births a victorious week.",
    "Don’t fear Monday; let it remind you of your resilience."],
  2: ["Tuesday is your reminder that persistence is power.",
    "The world bows to those who refuse to quit.",
    "Every step forward today is a promise to your future self.",
    "Tuesday rewards those who plant seeds, not excuses.",
    "What you water today will bloom tomorrow.",
    "Turn your effort into habit, and Tuesday will turn into triumph.",
    "Patience on Tuesday leads to joy on Friday.",
    "Tuesday’s strength lies in its quiet determination."],
  3: ["Wednesday whispers: You’re halfway, don’t lose heart.",
    "Push through today the mountain peak is closer than you think.",
    "Strength isn’t in never falling, it’s in rising every single time.",
    "Wednesday is the bridge don’t stop halfway across.",
    "Halfway means you’ve already conquered half the battle.",
    "Turn midweek doubts into midweek victories.",
    "Your consistency on Wednesday writes your weekend story.",
    "Wednesday teaches endurance more than any other day."],
  4: ["Thursday is for endurance what you build today will echo tomorrow.",
    "Don’t stop the finish line is nearer than your doubts tell you.",
    "Today’s struggles are shaping the version of you that cannot be broken.",
    "Thursday asks you to trust the process, even when tired.",
    "Keep walking Thursday turns effort into miracles.",
    "Thursday is the quiet hero of the week carry on.",
    "Stay steady today; breakthroughs are born from Thursdays.",
    "Let Thursday’s persistence paint your Friday’s joy."],
  5: ["Friday is the light at the end of the tunnel keep moving.",
    "Celebrate small wins, for they carry you to great victories.",
    "Your growth this week is proof of your resilience.",
    "Let Friday remind you: effort is never wasted.",
    "Friday is the week’s applause accept it with gratitude.",
    "Finish strong tomorrow’s peace is earned today.",
    "Friday smiles at those who didn’t quit.",
    "Celebrate progress, not perfection, this Friday."],
  6: ["Saturday sings of freedom use it to dream bigger.",
    "Joy today plants hope for tomorrow.",
    "Make today so meaningful that even rest feels purposeful.",
    "Saturday is proof that balance is beautiful.",
    "Your soul deserves the laughter Saturday brings.",
    "Peace is not found; it’s created, start today.",
    "Let Saturday’s calm prepare you for tomorrow’s storm.",
    "Saturday is a reminder that life is more than survival, it’s joy."]
};

// Images for each day
const imageCatalog = {
  0: ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg"],
  1: ["images/image4.jpg", "images/image5.jpg", "images/image6.jpg"],
  2: ["images/image7.jpg", "images/image8.jpg", "images/image9.jpg"],
  3: ["images/image10.jpg", "images/image11.jpg", "images/image12.jpg"],
  4: ["images/image13.jpg", "images/image14.jpg", "images/image15.jpg"],
  5: ["images/image16.jpg", "images/image17.jpg", "images/image18.jpg"],
  6: ["images/image19.jpg", "images/image20.jpg", "images/image21.jpg"]
};

// Universal fallback advice & images
const universalAdvice = [
  "Believe in yourself today; your courage can move mountains.",
  "Even the darkest clouds are temporary, shine bright anyway.",
  "Your heart is stronger than any fear you face.",
  "Every challenge today is a stepping stone to your greatness.",
  "You are the author of your destiny, write it boldly.",
  "Hope is stronger than fear, carry it everywhere you go.",
  "Small steps forward still lead to great destinations.",
  "The storm will pass; the sun always finds its way back.",
  "You are not behind, you are right where growth is shaping you.",
  "Your scars are proof of battles survived, not of weakness.",
  "Every sunrise is a chance to begin again, don’t waste it.",
  "Strength is not about never falling, it’s about rising every time.",
  "Your dreams are waiting for your courage to catch up.",
  "Even on quiet days, your life has meaning beyond measure.",
  "The fact that you’re here today is already a victory.",
  "You are enough, just as you are, believe it deeply.",
  "Let go of what you can’t control; focus on what you can change.",
  "Your kindness is a light in a world that often feels dark.",
  "You have survived 100% of your worst days, trust your resilience.",
  "Your potential is limitless, don’t let fear define you.",
  "You are stronger than you think; your heart knows the way.",
  "Courage doesn’t always roar; sometimes it’s the quiet voice at day’s end saying, ‘I will try again tomorrow.’",
  "Your journey is unique, don’t compare it to anyone else’s.",
  "You are worthy of love and happiness, never forget that.",
  "The best view comes after the hardest climb, keep going.",
  "Your life is a gift, unwrap it with gratitude and joy.",
  "You are capable of amazing things, believe in your magic.",
  "Let your faith be bigger than your fears today.",
  "You are not alone; reach out and let others lift you up.",
  "Your story is still being written, make it a masterpiece.",
  "You have the power to create change, start with yourself.",
  "Your light shines brightest in the darkest times, let it glow.",
  "You are a warrior, wear your scars with pride.",
  "Every day is a new chance to be better than you were yesterday.",
  "You are more than your mistakes, learn, grow, and move forward.",
  "Your heart is a compass, let it guide you to where you belong.",
  "You are a beacon of hope, shine your light for others to see.",
  "Your resilience is your superpower, embrace it fully.",
  "You are a work in progress, and that’s perfectly okay.",
  "Your dreams are valid, chase them with all your heart.",
  "You are stronger than any storm that comes your way.",
  "Your kindness has the power to change the world, start with yourself.",
  "You are enough, just as you are, believe it deeply.",
  "Let go of what you can’t control; focus on what you can change.",
  "Your kindness is a light in a world that often feels dark.",
  "You have survived 100% of your worst days, trust your resilience.",
  "Your potential is limitless, don’t let fear define you.",
  "You are stronger than you think; your heart knows the way.",
  "Courage doesn’t always roar; sometimes it’s the quiet voice at day’s end saying, ‘I will try again tomorrow.’",
  "Your journey is unique, don’t compare it to anyone else’s.",
  "You are worthy of love and happiness, never forget that.",
  "The best view comes after the hardest climb, keep going.",
  "Your life is a gift, unwrap it with gratitude and joy."
];

const universalImages = [
  "images/fallback_img1.jpg",
  "images/fallback_img2.jpg",
  "images/fallback_img3.jpg",
  "images/fallback_img4.jpg",
  "images/fallback_img5.jpg"
];

const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const resultDiv = document.getElementById("result");

// Get today's date
const today = new Date();
const dayIndex = today.getDay();
// Build local date string in YYYY-MM-DD format
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed
const day = String(today.getDate()).padStart(2, "0");
const dateStr = `${year}-${month}-${day}`;

// Select advice: day-specific or fallback
let advices = adviceCatalog[dayIndex];
if (!advices || advices.length === 0) {
  advices = universalAdvice;
}

// Select image: day-specific or fallback
let images = imageCatalog[dayIndex];
if (!images || images.length === 0) {
  images = universalImages;
}

// Pick random advice and image
const randomAdvice = advices[Math.floor(Math.random() * advices.length)];
const randomImage = images[Math.floor(Math.random() * images.length)];

// Display advice and image
resultDiv.innerHTML = `
  <h2>Your Daily Encouragement (${weekdayNames[dayIndex]} - ${dateStr})<p class="tagline">Because every day deserves hope.</p></h2>
  <img src="${randomImage}" alt="Emotional visual" class="advice-img">
  <p>${randomAdvice}</p>
`;
