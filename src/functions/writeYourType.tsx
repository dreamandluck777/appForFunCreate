

const questionTypeMapByQuestion: Record<
  'ru' | 'az',
  Record<string, "introvert" | "extrovert" | "ambivert">
> = {
  ru: {
    "Мне нравится быть в центре внимания.": "extrovert",
    "Я легко завожу новые знакомства.": "extrovert",
    "Большие вечеринки меня вдохновляют и заряжают энергией.": "extrovert",
    "Я часто инициирую общение с незнакомыми людьми.": "extrovert",
    "Я чувствую себя уставшим после длительного общения с большим количеством людей.": "introvert",
    "Мне нужно время наедине, чтобы восстановить силы.": "introvert",
    "Я предпочитаю проводить выходные дома, а не на шумных мероприятиях.": "introvert",
    "Я наслаждаюсь тихим отдыхом в одиночестве.": "introvert",
    "Иногда я чувствую себя перегруженным в больших компаниях.": "introvert",
    "Мне комфортнее обсуждать свои мысли с одним человеком, чем с группой.": "introvert",
    "Я предпочитаю работать в команде, чем один.": "extrovert",
    "Я часто проявляю инициативу на работе или в учебе.": "extrovert",
    "Я люблю делиться своими идеями и получать обратную связь.": "extrovert",
    "Мне проще концентрироваться и принимать решения наедине.": "introvert",
    "Я часто ищу новые впечатления и активности.": "ambivert",
    "Я люблю спонтанные события и приключения.": "extrovert",
    "Мне важно иметь глубокие личные отношения с несколькими людьми, чем множество поверхностных контактов.": "introvert",
    "Я часто говорю больше, чем слушаю.": "extrovert",
    "Мне нравится планировать своё время заранее, а не полагаться на импровизацию.": "introvert",
    "Я могу легко адаптироваться и к общению с людьми, и к одиночеству.": "ambivert",
  },
  az: {
    "Mən diqqət mərkəzində olmağı sevirəm.": "extrovert",
    "Mən asanlıqla yeni tanışlıqlar qururam.": "extrovert",
    "Böyük partiyalar məni ruhlandırır və enerji verir.": "extrovert",
    "Mən tez-tez tanımadığım insanlarla ünsiyyətə başlayıram.": "extrovert",
    "Çox insanla uzun ünsiyyətdən sonra yorğun oluram.": "introvert",
    "Mənə enerji toplamaq üçün tək vaxt lazımdır.": "introvert",
    "Mən həftə sonunu səs-küylü tədbirlərdə yox, evdə keçirməyi üstün tuturam.": "introvert",
    "Mən tək olarkən sakit istirahətdən zövq alıram.": "introvert",
    "Bəzən böyük şirkətlərdə özümü yüklənmiş hiss edirəm.": "introvert",
    "Fikirlərimi qrupla deyil, bir insanla müzakirə etmək daha rahatdır.": "introvert",
    "Mən tək yox, komandada işləməyi üstün tuturam.": "extrovert",
    "Mən tez-tez işdə və ya təhsildə təşəbbüs göstərirəm.": "extrovert",
    "Mən fikirlərimi paylaşmağı və geri bildirim alamağı sevirəm.": "extrovert",
    "Mənim üçün tək başına diqqət mərkəzləşmək və qərar qəbul etmək daha asandır.": "introvert",
    "Mən tez-tez yeni təcrübələr və fəaliyyətlər axtarıram.": "ambivert",
    "Mən ani hadisələri və macəraları sevirəm.": "extrovert",
    "Mənim üçün bir neçə insanla dərin münasibətlər qurmaq daha önəmlidir, yüzlərlə səthi əlaqələrdən.": "introvert",
    "Mən tez-tez danışmaqla dinləməkdən çox söz deyirəm.": "extrovert",
    "Mən vaxtımı əvvəlcədən planlaşdırmağı sevirəm, improvisasiyaya etibar etməyi yox.": "introvert",
    "Mən asanlıqla həm insanlarla ünsiyyətə, həm də təkliyə uyğunlaşa bilirəm.": "ambivert",
  },
};


const answerScores: Record<'ru' | 'az', Record<string, number>> = {
  ru: {
    'Совсем не согласен': 1,
    'Скорее не согласен': 2,
    'Нейтрально': 3,
    'Скорее согласен': 4,
    'Полностью согласен': 5,
  },
  az: {
    'Heç razı deyiləm': 1,
    'Daha çox razı deyiləm': 2,
    'Neytral': 3,
    'Daha çox razıyam': 4,
    'Tamamilə razıyam': 5,
  }
};
   
export function calculateAnswers(answers: Record<string, string>, lang : 'ru' | 'az'): "introvert" | "extrovert" | "ambivert" | "No type selected — looks like you ghosted the quiz 👻" {
  const counts = {
    introvert: 0,
    extrovert: 0,
    ambivert: 0
  }; 
  const byLang = lang === 'ru' ? questionTypeMapByQuestion.ru : questionTypeMapByQuestion.az;
  const byLangAnswere = lang === 'ru' ? answerScores.ru : answerScores.az;
  for (let [question, answer] of Object.entries(answers)) {
    const type = byLang[question];
    if (!type) continue;

    const score = byLangAnswere[answer];
    if (!score) continue;

    counts[type] += score;
  }

  const totalScore = counts.introvert + counts.extrovert + counts.ambivert;
  if (totalScore === 0) {
    return "No type selected — looks like you ghosted the quiz 👻";
  }

  if (counts.extrovert > counts.introvert && counts.extrovert > counts.ambivert) {
    return "extrovert";
  } else if (counts.introvert > counts.extrovert && counts.introvert > counts.ambivert) {
    return "introvert";
  } else {
    return "ambivert";
  }
}

