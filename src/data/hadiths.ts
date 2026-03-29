export interface Hadith {
  id: number;
  narrator: string;
  englishText: string;
  reference: string;
  collection: string;
  hadithNumber?: string;
  grade: "Sahih" | "Hasan Sahih" | "Hasan" | "Da'if";
  commentary: string;
}

export interface Proof {
  id: number;
  title: string;
  context: string;
  urduText?: string;
  englishText?: string;
  references: string[];
  grade?: "Sahih" | "Hasan Sahih" | "Hasan" | "Da'if";
  result: string;
  opposingHadith?: {
    text: string;
    reference: string;
    grade: "Sahih" | "Hasan Sahih" | "Hasan" | "Da'if";
    refutation: string;
  };
}

export interface ScholarRow {
  scholar: string;
  dates: string;
  statement: string;
}

export interface PositionRow {
  number: number;
  position: string;
  arabicTerm: string;
  sources: string;
}

export interface ReferenceRow {
  id: number;
  narrator: string;
  collection: string;
  hadithNo: string;
  grade: "Sahih" | "Hasan Sahih" | "Hasan" | "Da'if";
}

export interface OpposingRow {
  narrator: string;
  source: string;
  scholarsWhoWeakenedIt: string;
}

export type SectionType =
  | "hadiths"
  | "scholars"
  | "positions"
  | "reference"
  | "opposing"
  | "proofs";

export interface Section {
  id: string;
  slug: string;
  title: string;
  arabicTitle?: string;
  description?: string;
  type: SectionType;
  hadiths?: Hadith[];
  proofs?: Proof[];
  scholars?: ScholarRow[];
  positions?: PositionRow[];
  referenceTable?: ReferenceRow[];
  opposingNarrations?: OpposingRow[];
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 1 — Sahih al-Bukhari
// ─────────────────────────────────────────────────────────────────────────────
const sahihBukhariHadiths: Hadith[] = [
  {
    id: 1,
    narrator: "Abdullah ibn Umar",
    englishText:
      "I saw the Messenger of Allah ﷺ opening the prayer with the Takbir and raising his hands to the level of his shoulders at the time of saying the Takbir. When he said the Takbir for bowing he did the same; and when he said 'Sami'a Allahu liman hamidah' he did the same, then said 'Rabbana wa laka al-hamd.' But he did not do the same upon prostrating or upon lifting his head from it.",
    reference: "Sahih al-Bukhari, Volume 1, Hadith 705 (Book of Prayer)",
    collection: "Sahih al-Bukhari",
    hadithNumber: "705",
    grade: "Sahih",
    commentary:
      "This is the foundational narration. Ibn Umar not only narrated it but personally practised Raf' al-Yadain throughout his life after the Prophet's ﷺ death, proving he knew of no abrogation.",
  },
  {
    id: 2,
    narrator: "Salim ibn Abdullah (from his father Abdullah ibn Umar)",
    englishText:
      "Whenever Ibn Umar started the prayer with Takbir, he used to raise his hands; whenever he bowed he used to raise his hands (before bowing); and also used to raise his hands on saying 'Sami'a Allahu liman hamidah'; and he used to do the same on rising from the second Rak'ah (for the third Rak'ah).",
    reference: "Sahih al-Bukhari, Volume 1, Hadith 706",
    collection: "Sahih al-Bukhari",
    hadithNumber: "706",
    grade: "Sahih",
    commentary:
      "A Tabi'i (Salim) observed his Companion-father perform Raf' al-Yadain after the Prophet's ﷺ death and attributed the practice directly to the Prophet ﷺ — a three-generation chain of practice.",
  },
  {
    id: 3,
    narrator: "Malik ibn Huwayrith — narrated by Abu Qilabah",
    englishText:
      "He saw Malik ibn Huwayrith praying and raising his hands when he began the prayer, when he bowed, and when he raised his head from bowing. He stated that the Messenger of Allah ﷺ used to do the same.",
    reference: "Sahih al-Bukhari, Hadith 737 | Sahih Muslim, Hadith 391",
    collection: "Sahih al-Bukhari",
    hadithNumber: "737",
    grade: "Sahih",
    commentary:
      "Malik ibn Huwayrith commanded: 'Pray as you have seen me praying,' echoing the Prophet's own words. His continued practice after the Prophet's ﷺ death is decisive proof against any abrogation.",
  },
  {
    id: 4,
    narrator: "Three-Generation Chain: Prophet ﷺ → Ibn Umar → Salim",
    englishText:
      "I saw Salim ibn Abdullah start the prayer with raising his hands, raise his hands when he bowed, and raise his hands when he raised his head from bowing. I asked him about this, and he said: 'I saw my father (Abdullah ibn Umar) do this, who said he saw the Messenger of Allah ﷺ do this.'",
    reference:
      "Hadith al-Siraj, 2/34–35, Hadith 115 (chain authenticated by scholars)",
    collection: "Hadith al-Siraj",
    hadithNumber: "115",
    grade: "Sahih",
    commentary:
      "SubhanAllah — three generations of unbroken practice: the Prophet ﷺ → Ibn Umar → Salim. If Raf' al-Yadain had been abrogated, why did a Companion who witnessed and narrated this Hadith continue it his entire life?",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 2 — Sahih Muslim
// ─────────────────────────────────────────────────────────────────────────────
const sahihMuslimHadiths: Hadith[] = [
  {
    id: 5,
    narrator: "Ali ibn Abi Talib — Fourth Caliph",
    englishText:
      "When the Messenger of Allah ﷺ stood for offering the obligatory prayer, he uttered the Takbir (Allahu Akbar) and raised his hands opposite to his shoulders; and he did like that when he finished the recitation of the Qur'an and was about to bow; and he did like that when he rose after bowing; and he did not raise his hands in his prayer while he was sitting.",
    reference:
      "Sahih Muslim, Hadith 401 | Sunan Abi Dawud, Hadith 744 | Musnad Ahmad",
    collection: "Sahih Muslim",
    hadithNumber: "401",
    grade: "Sahih",
    commentary:
      "Ali ibn Abi Talib — cousin and son-in-law of the Prophet ﷺ — is among the most authoritative narrators. His testimony confirms Raf' al-Yadain at three explicit positions in prayer.",
  },
  {
    id: 6,
    narrator: "Abdullah ibn Umar — Agreed-Upon (Muttafaq 'alayh)",
    englishText:
      "The Messenger of Allah ﷺ used to raise his hands to the level of his shoulders when he started the prayer, when he said Takbeer for Ruku', and when he raised his head from Ruku', saying 'Sami'a Allahu liman hamidah, Rabbana wa lakal hamd.' And he did not do this during the prostration.",
    reference:
      "Sahih al-Bukhari, 1/102, Hadith 735 & 738 | Sahih Muslim, 1/168, Hadith 390",
    collection: "Sahih Muslim",
    hadithNumber: "390",
    grade: "Sahih",
    commentary:
      "Agreed-upon (Muttafaq 'alayh) — recorded in both the two most authentic books of Hadith in Islam. This narration alone is considered conclusive proof by the vast majority of scholars.",
  },
  {
    id: 7,
    narrator: "Wa'il ibn Hujr",
    englishText:
      "He saw the Prophet ﷺ enter the prayer with raising his hands to the level of his ears, place his right hand over his left hand, and when he intended to bow he took his hands out from his garment and raised them; then he said Takbeer and bowed.",
    reference:
      "Sahih Muslim | Sunan Abi Dawud, Hadith 723 | Musnad Ahmad",
    collection: "Sahih Muslim",
    grade: "Sahih",
    commentary:
      "Wa'il ibn Hujr was a king from Yemen who came to the Prophet ﷺ. His testimony confirms raising hands to the level of the ears — showing the full range of the practice and its continued observance.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 3 — The Four Sunan Collections
// ─────────────────────────────────────────────────────────────────────────────
const fourSunanHadiths: Hadith[] = [
  {
    id: 8,
    narrator: "Abu Musa al-Ash'ari",
    englishText:
      "'Should I not show you how the Messenger of Allah ﷺ prayed?' He then said Takbeer and raised his hands, then said Takbeer again and raised his hands for Ruku', then said 'Sami'a Allahu liman hamidah' and raised his hands — three times.",
    reference: "Sunan Abi Dawud, Hadith 744 | Musnad Ahmad | al-Tahawi",
    collection: "Sunan Abi Dawud",
    hadithNumber: "744",
    grade: "Hasan Sahih",
    commentary:
      "A senior Companion demonstrating the Prophet's prayer to others — a live, physical transmission of the Sunnah. He raised his hands at three distinct positions.",
  },
  {
    id: 9,
    narrator: "Jabir ibn Abdullah",
    englishText:
      "Jabir ibn Abdullah would raise his hands when starting the prayer, when bowing, and when raising his head from bowing. He said that he saw the Prophet ﷺ do this.",
    reference:
      "Sunan Ibn Majah, Hadith 868 (chain graded Sahih) | Musnad al-Siraj",
    collection: "Sunan Ibn Majah",
    hadithNumber: "868",
    grade: "Sahih",
    commentary:
      "Jabir ibn Abdullah is one of the most prolific narrators among the Companions. A Tabi'i explicitly heard this from Jabir directly, confirming its soundness.",
  },
  {
    id: 10,
    narrator: "Wa'il ibn Hujr — detailed description",
    englishText:
      "I prayed with the Prophet ﷺ, and he raised his hands when he said Takbir, and he did the same before bowing and after raising his head from bowing.",
    reference:
      "Sunan al-Nasa'i | Sunan al-Tirmidhi, Hadith 304 | Musnad Ahmad 5/424 (chain graded Sahih)",
    collection: "Sunan al-Tirmidhi",
    hadithNumber: "304",
    grade: "Sahih",
    commentary:
      "Eyewitness testimony from a Companion affirming the continuity of Raf' al-Yadain. Al-Tirmidhi graded the chain as Sahih.",
  },
  {
    id: 11,
    narrator: "Ibn Umar — with four Rak'at specification",
    englishText:
      "The Prophet ﷺ used to raise his hands to the level of his shoulders when he began the prayer, before bowing, and when rising from Ruku', and when standing up after the first Tashahhud for the third Rak'ah.",
    reference:
      "Sunan Abi Dawud, Hadith 740 | Sunan al-Nasa'i | Sahih al-Bukhari (supporting)",
    collection: "Sunan Abi Dawud",
    hadithNumber: "740",
    grade: "Sahih",
    commentary:
      "This narration adds a fourth position — rising from the first Tashahhud — further expanding the documented instances of Raf' al-Yadain.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 4 — Muwatta Imam Malik & Musnad Ahmad
// ─────────────────────────────────────────────────────────────────────────────
const muwattaMusnadHadiths: Hadith[] = [
  {
    id: 12,
    narrator: "Narrated in Muwatta Imam Malik",
    englishText:
      "The Messenger of Allah ﷺ used to raise his hands to the level of his shoulders when he began the prayer and when he raised his head from the Ruku' he raised them in the same way.",
    reference: "Muwatta Imam Malik (Yahya's recension), Book of Prayer",
    collection: "Muwatta Imam Malik",
    grade: "Sahih",
    commentary:
      "Imam Malik himself narrated this Hadith and transmitted it to 26 of his students. This Hadith alone carries immense weight given Imam Malik's stature as 'Imam of the Abode of Migration (Madinah).'",
  },
  {
    id: 13,
    narrator: "The Hadith of the Ten Companions — Mass Testimony",
    englishText:
      "A man demonstrated the prayer of the Prophet ﷺ in the presence of ten Companions. He performed Raf' al-Yadain when starting the prayer, going into Ruku', rising from Ruku', and after the first two Rak'ahs. All ten Companions said: 'You have spoken the truth. This is exactly how the Prophet ﷺ prayed.'",
    reference:
      "Musnad Ahmad, 5/424 | Sunan al-Tirmidhi, Hadith 304 (chain graded Sahih)",
    collection: "Musnad Ahmad",
    grade: "Sahih",
    commentary:
      "Ten Companions in one sitting unanimously confirming Raf' al-Yadain — this is among the most powerful pieces of collective Companion testimony in all Hadith literature. It is impossible to fabricate such mass agreement.",
  },
  {
    id: 14,
    narrator: "Abu Hurairah",
    englishText:
      "The Messenger of Allah ﷺ, when he stood up for prayer, raised his hands stretched out, then said 'Allahu Akbar.'",
    reference:
      "Musnad Ahmad | Sunan Abi Dawud (supporting chains) | al-Bayhaqi",
    collection: "Musnad Ahmad",
    grade: "Sahih",
    commentary:
      "Abu Hurairah — one of the most prolific narrators of Hadith — confirms the practice at the opening Takbir.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 5 — Scholarly Consensus
// ─────────────────────────────────────────────────────────────────────────────
export const scholars: ScholarRow[] = [
  {
    scholar: "Imam al-Bukhari",
    dates: "d. 256 AH",
    statement:
      "Wrote Juz' Raf' al-Yadayn — over 50 narrations. Declared: 'It was not proven that any Companion did not raise his hands.'",
  },
  {
    scholar: "Imam al-Shafi'i",
    dates: "d. 204 AH",
    statement:
      "Practised Raf' al-Yadain at all three positions. Stated: 'The Hadith is Sahih and there is no opposing authentic narration.'",
  },
  {
    scholar: "Imam Ahmad",
    dates: "d. 241 AH",
    statement:
      "Affirmed Raf' al-Yadain and graded opposing hadiths as weak or fabricated. Specifically criticised narrations of Yazid ibn Abi Ziyad and Ibn Abi Layla.",
  },
  {
    scholar: "Imam Malik",
    dates: "d. 179 AH",
    statement:
      "Narrated the Hadith from Ibn Umar and transmitted it to 26 students. Performed Raf' al-Yadain at the beginning of prayer.",
  },
  {
    scholar: "Ibn Hajar al-Asqalani",
    dates: "d. 852 AH",
    statement:
      "Talkhis al-Habir (1/221-223): 'No authentic report exists that any Companion abandoned Raf' al-Yadain.' Graded all opposing hadiths as weak.",
  },
  {
    scholar: "Imam al-Nawawi",
    dates: "d. 676 AH",
    statement:
      "Confirmed in al-Majmu' that Raf' al-Yadain is Sunnah based on Sahih and Mutawatir narrations according to the Shafi'i school.",
  },
  {
    scholar: "al-Hafidh al-Zayla'i",
    dates: "d. 762 AH",
    statement:
      "Even while writing for the Hanafi school, acknowledged that the hadiths for Raf' al-Yadain are stronger in chain than those against it.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 6 — Four Authenticated Positions
// ─────────────────────────────────────────────────────────────────────────────
export const positions: PositionRow[] = [
  {
    number: 1,
    position: "Opening Takbir — start of prayer",
    arabicTerm: "Takbeer al-Tahreemah",
    sources: "Bukhari 735, Muslim 390, All Sunan",
  },
  {
    number: 2,
    position: "Before going into Ruku' (bowing)",
    arabicTerm: "Ind al-Ruku'",
    sources: "Bukhari 735, Muslim 390, Abu Dawud 740",
  },
  {
    number: 3,
    position: "Rising from Ruku' (after bowing)",
    arabicTerm: "Raf' min al-Ruku'",
    sources: "Bukhari 737, Muslim 391, Ibn Majah 868",
  },
  {
    number: 4,
    position: "Rising from first Tashahhud to 3rd Rak'ah",
    arabicTerm: "Qiyam min al-Tashahhud al-Awwal",
    sources: "Abu Dawud 740, Nasa'i, Bukhari (supporting)",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 7 — Opposing Narrations
// ─────────────────────────────────────────────────────────────────────────────
export const opposingNarrations: OpposingRow[] = [
  {
    narrator: "Ibn Mas'ud: 'He only raised hands once'",
    source: "Abu Dawud 748, Nasa'i 1027",
    scholarsWhoWeakenedIt:
      "Al-Bukhari, Ahmad, Ibn Hajar, al-Bayhaqi, al-Daraqutni, 'Abdullah ibn al-Mubarak",
  },
  {
    narrator: "Al-Bara' ibn 'Azib: 'Then he did not repeat it'",
    source: "Abu Dawud 749, Darqutni 1/293",
    scholarsWhoWeakenedIt:
      "Sufyan ibn 'Uyaynah, al-Shafi'i, Ahmad ibn Hanbal, Yahya ibn Ma'in, al-Bukhari, al-Humaydi (teacher of al-Bukhari)",
  },
  {
    narrator: "Second narration of al-Bara' ibn 'Azib",
    source: "Abu Dawud 752, Abu Ya'la 1689",
    scholarsWhoWeakenedIt:
      "Abu Dawud himself: 'Not authentic.' Imam Ahmad: 'Ibn Abi Layla had poor memory.' Ibn Abi Layla graded weak by the majority of Hadith scholars.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 8 — Quick Hadith Reference Table
// ─────────────────────────────────────────────────────────────────────────────
export const referenceTable: ReferenceRow[] = [
  { id: 1, narrator: "Ibn Umar", collection: "Sahih al-Bukhari", hadithNo: "735", grade: "Sahih" },
  { id: 2, narrator: "Ibn Umar", collection: "Sahih Muslim", hadithNo: "390", grade: "Sahih" },
  { id: 3, narrator: "Malik ibn Huwayrith", collection: "Sahih al-Bukhari", hadithNo: "737", grade: "Sahih" },
  { id: 4, narrator: "Malik ibn Huwayrith", collection: "Sahih Muslim", hadithNo: "391", grade: "Sahih" },
  { id: 5, narrator: "Ali ibn Abi Talib", collection: "Sahih Muslim", hadithNo: "401", grade: "Sahih" },
  { id: 6, narrator: "Wa'il ibn Hujr", collection: "Sunan Abi Dawud", hadithNo: "723", grade: "Sahih" },
  { id: 7, narrator: "Abu Musa al-Ash'ari", collection: "Sunan Abi Dawud", hadithNo: "744", grade: "Hasan Sahih" },
  { id: 8, narrator: "Jabir ibn Abdullah", collection: "Sunan Ibn Majah", hadithNo: "868", grade: "Sahih" },
  { id: 9, narrator: "Wa'il ibn Hujr", collection: "Sunan al-Tirmidhi", hadithNo: "304", grade: "Sahih" },
  { id: 10, narrator: "Ibn Umar", collection: "Sunan Abi Dawud", hadithNo: "740", grade: "Sahih" },
  { id: 11, narrator: "Ten Companions", collection: "Musnad Ahmad", hadithNo: "5/424", grade: "Sahih" },
  { id: 12, narrator: "Ibn Umar", collection: "Muwatta Imam Malik", hadithNo: "Bk 3", grade: "Sahih" },
  { id: 13, narrator: "Ali ibn Abi Talib", collection: "Sunan Abi Dawud", hadithNo: "744", grade: "Sahih" },
  { id: 14, narrator: "Salim ibn Abdullah", collection: "Sahih al-Bukhari", hadithNo: "706", grade: "Sahih" },
];

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 9 — Proofs of Non-Abrogation (from Rafal Yadain.docx)
// ─────────────────────────────────────────────────────────────────────────────
const proofs: Proof[] = [
  {
    id: 1,
    title: "The Testimony of Malik ibn Huwayrith",
    context:
      "Malik ibn Huwayrith and Wa'il ibn Hujr accepted Islam in 9 Hijri. The Prophet ﷺ commanded: 'Pray as you have seen me praying' (Bukhari 631).",
    urduText:
      "انہوں نے ابوقلابہ سے کہ انہوں نے مالک بن حویرث صحابی کو دیکھا کہ جب وہ نماز شروع کرتے تو تکبیر تحریمہ کے ساتھ رفع یدین کرتے ، پھر جب رکوع میں جاتے اس وقت بھی رفع یدین کرتے اور جب رکوع سے سر اٹھاتے تب بھی کرتے اور انھوں نے بیان کیا کہ رسول اللہ صلی اللہ علیہ وسلم بھی اسی طرح کیا کرتے تھے ۔",
    references: ["Bukhari 631", "Bukhari 737"],
    grade: "Sahih",
    result:
      "In Bukhari 737, a Tabi'i narrates that he saw Malik ibn Huwayrith pray with Raf' al-Yadain, which occurred after the death of Prophet Muhammad ﷺ. This indicates that Raf' al-Yadain was not abrogated.",
  },
  {
    id: 2,
    title: "The Narration of Nafi Mawla Ibn Umar",
    context:
      "Nafi was originally a resident of Daylam (now including the Gilan region in Iran) who was captured during the Muslim conquest of Persia and became a slave before being manumitted by Abdullah ibn Umar.",
    urduText:
      "ہم سے عیاش بن ولید نے بیان کیا ، کہا کہ ہم سے عبدالاعلیٰ بن عبدالاعلی نے بیان کیا ، کہا کہ ہم سے عبیداللہ عمری نے نافع سے بیان کیا کہ عبداللہ بن عمر رضی اللہ عنہما جب نماز میں داخل ہوتے تو پہلے تکبیر تحریمہ کہتے اور ساتھ ہی رفع یدین کرتے ۔ اسی طرح جب وہ رکوع کرتے تب اور جب «سمع الله لمن حمده» کہتے تب بھی ( رفع یدین کرتے ) دونوں ہاتھوں کو اٹھاتے اور جب قعدہ اولیٰ سے اٹھتے تب بھی رفع یدین کرتے ۔ آپ نے اس فعل کو نبی کریم صلی اللہ علیہ وسلم تک پہنچایا ۔ ( کہ آنحضرت صلی اللہ علیہ وسلم اسی طرح نماز پڑھا کرتے تھے ۔ )",
    references: ["Bukhari 739"],
    grade: "Sahih",
    result:
      "This hadith was narrated by Nafi Mawla Ibn Umar who accepted Islam after the death of Prophet Muhammad ﷺ, and this proves that Abdullah ibn Umar (RA) performed Raf' al-Yadain even after the death of Prophet Muhammad ﷺ.",
  },
  {
    id: 3,
    title: "The Eyewitness of Wa'il ibn Hujr",
    context:
      "Wa'il ibn Hujr accepted Islam in 9 AH, while Prophet Muhammad ﷺ died in 11 AH — making his testimony close to the time of the Prophet's death.",
    englishText:
      "He saw the Messenger of Allah ﷺ raising his hands at the time of beginning the prayer and reciting takbir, and according to Hammam (the narrator), the hands were lifted opposite to ears. He then wrapped his hands in his cloth and placed his right hand over his left hand. And when he was about to bow down, he brought out his hands from the cloth, and then lifted them, and then recited takbir and bowed down, and when he came back to the erect position he recited: 'Allah listened to him who praised Him.' And when he prostrated, he prostrated between his two palms.",
    references: ["Sahih Muslim 401"],
    grade: "Sahih",
    result:
      "Wa'il ibn Hujr accepted Islam in 9 AH, only two years before the Prophet's ﷺ death in 11 AH. His eyewitness testimony of the Prophet ﷺ performing Raf' al-Yadain is therefore close to the end of the Prophet's life — confirming it was not abrogated.",
  },
  {
    id: 4,
    title: "The Testimony of Ali ibn Abi Talib",
    context:
      "Ali ibn Abi Talib — cousin and son-in-law of the Prophet ﷺ, the Fourth Caliph — is among the most authoritative narrators in Islamic tradition.",
    englishText:
      "When the Messenger of Allah would stand for the obligatory prayer, he would raise his hands to the level of his shoulder, and he would do this also when he finished his recitation and intended to bow, and he would do it when he raised his head from Ruku', and he would not raise his hands in any of his prayers while he was seated.",
    references: ["Tirmidhi 3423", "Abu Dawud 744"],
    grade: "Hasan",
    result:
      "Ali ibn Abi Talib, the Fourth Caliph, confirms Raf' al-Yadain at three positions. Imam al-Shafi'i refuted all hadiths against Raf' al-Yadain, stating they are not established (Kitab al-Umm, Vol 7, Pg 201). Imam Ahmad bin Hanbal also criticised the main opposing hadith (Juz Rafa Yadain: 32).",
    opposingHadith: {
      text: "Abdullah ibn Mas'ud said: 'Shall I not demonstrate the Salat of Allah's Messenger to you?' Then he offered Salat and he did not raise his hands except while saying the first Takbir.",
      reference: "Sunan al-Tirmidhi 257",
      grade: "Da'if",
      refutation:
        "Imam Ahmad ibn Hanbal criticised this hadith. Imam al-Shafi'i declared all hadiths against Raf' al-Yadain unestablished. This is widely cited by those who do not perform Raf' al-Yadain, but the overwhelming majority of classical Hadith scholars have classified it as Da'if (weak).",
    },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// All Sections
// ─────────────────────────────────────────────────────────────────────────────
export const sections: Section[] = [
  {
    id: "sahih-bukhari",
    slug: "sahih-bukhari",
    title: "Sahih al-Bukhari",
    arabicTitle: "صحيح البخاري",
    description:
      "Imam al-Bukhari (194–256 AH) — the foremost Hadith scholar — recorded numerous hadiths on Raf' al-Yadain and wrote a separate treatise defending the practice, titled Juz' Raf' al-Yadayn, compiling over 50 supporting narrations.",
    type: "hadiths",
    hadiths: sahihBukhariHadiths,
  },
  {
    id: "sahih-muslim",
    slug: "sahih-muslim",
    title: "Sahih Muslim",
    arabicTitle: "صحيح مسلم",
    type: "hadiths",
    hadiths: sahihMuslimHadiths,
  },
  {
    id: "four-sunan",
    slug: "four-sunan",
    title: "The Four Sunan Collections",
    description:
      "The Four Sunan — Abu Dawud, al-Nasa'i, Ibn Majah, and al-Tirmidhi — all contain multiple narrations confirming Raf' al-Yadain at the opening Takbir, before Ruku', after rising from Ruku', and after the first two Rak'ahs.",
    type: "hadiths",
    hadiths: fourSunanHadiths,
  },
  {
    id: "muwatta-musnad",
    slug: "muwatta-musnad",
    title: "Muwatta Imam Malik & Musnad Ahmad",
    type: "hadiths",
    hadiths: muwattaMusnadHadiths,
  },
  {
    id: "scholarly-consensus",
    slug: "scholarly-consensus",
    title: "Scholarly Consensus & Hadith Grades",
    type: "scholars",
    scholars,
  },
  {
    id: "authenticated-positions",
    slug: "authenticated-positions",
    title: "The Four Authenticated Positions",
    type: "positions",
    positions,
  },
  {
    id: "opposing-narrations",
    slug: "opposing-narrations",
    title: "Opposing Narrations & Their Status",
    description:
      "For academic completeness, the narrations used against Raf' al-Yadain are listed below along with the grading they received from classical Hadith scholars.",
    type: "opposing",
    opposingNarrations,
  },
  {
    id: "hadith-reference",
    slug: "hadith-reference",
    title: "Quick Hadith Reference",
    type: "reference",
    referenceTable,
  },
  {
    id: "proofs-non-abrogation",
    slug: "proofs-non-abrogation",
    title: "Proofs of Non-Abrogation",
    description:
      "The following proofs establish that Raf' al-Yadain was not abrogated. Each proof traces the chain of narration through Companions and Tabi'in who continued the practice after the Prophet's ﷺ death.",
    type: "proofs",
    proofs,
  },
];
