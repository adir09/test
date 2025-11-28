// כל ה-JavaScript מהקוד המקורי - העתק את כל התוכן מה-script tag
const STORAGE_KEY = 'teacher_feedback_system_data';

let teachers = [];
let feedbackEntries = [];
let studentStats = {};

const quickTagSets = {
  compliment: ["מסביר ברור", "יחס טוב", "שומר על סדר", "נותן משוב מועיל"],
  remark: ["הסבר לא ברור", "ציון לא הוגן", "דיבור לא מכבד", "מאחר לשיעור"]
};

const appState = {
  currentScreen: "login",
  currentUser: null,
  selectedTeacherId: null,
  feedbackType: null
};

function loadData() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const data = JSON.parse(stored);
      teachers = data.teachers || [
        { id: 1, name: "אורן", subject: "אנגלית" },
        { id: 2, name: "אורית", subject: "מתמטיקה" },
        { id: 3, name: "רעות", subject: "לשון" },
        { id: 4, name: "אבי", subject: "השכלה כללית" },
        { id: 5, name: "נטע", subject: "היסטוריה" }
      ];
      feedbackEntries = data.feedback || [];
      studentStats = data.studentStats || {};
    } else {
      teachers = [
        { id: 1, name: "אורן", subject: "אנגלית" },
        { id: 2, name: "אורית", subject: "מתמטיקה" },
        { id: 3, name: "רעות", subject: "לשון" },
        { id: 4, name: "אבי", subject: "השכלה כללית" },
        { id: 5, name: "נטע", subject: "היסטוריה" }
      ];
      feedbackEntries = [];
      studentStats = {};
    }
    updateSyncStatus(true);
  } catch (error) {
    console.log('❌ שגיאה בטעינת הנתונים, משתמשים בנתוני ברירת מחדל');
    teachers = [
      { id: 1, name: "אורן", subject: "אנגלית" },
      { id: 2, name: "אורית", subject: "מתמטיקה" },
      { id: 3, name: "רעות", subject: "לשון" },
      { id: 4, name: "אבי", subject: "השכלה כללית" },
      { id: 5, name: "נטע", subject: "היסטוריה" }
    ];
    feedbackEntries = [];
    studentStats = {};
    updateSyncStatus(false);
  }
}

// המשך כל הפונקציות מה-script tag...
