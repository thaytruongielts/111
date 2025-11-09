import { Unit } from '../types';

export const grammarUnits: Unit[] = [
  {
    id: 'unit-1',
    title: 'Unit 1',
    subtitle: 'Past simple vs. Present perfect',
    theory: [
      {
        title: 'Past simple (Quá khứ đơn)',
        definition: 'Thì quá khứ đơn mô tả các hành động hoặc sự kiện đã xảy ra và hoàn thành tại một thời điểm cụ thể trong quá khứ.',
        usage: [
          'Cho các hành động trong quá khứ có một thời điểm bắt đầu và kết thúc rõ ràng.',
          'Thói quen hoặc lịch trình hàng ngày trong quá khứ.',
          'Kể lại một chuỗi các sự kiện đã hoàn thành.',
        ],
        structure: [
          {
            title: 'Khẳng định',
            format: 'S + V2 + O',
            note: 'S = chủ ngữ; V2 = động từ chia ở dạng quá khứ đơn; O = tân ngữ',
            example: 'I went to the gym and exercised for about 2 hours yesterday. (Hôm qua tôi đi phòng tập và tập luyện khoảng 2 tiếng.)',
          },
          {
            title: 'Phủ định',
            format: "S + did not (didn't) + V1 + O",
            note: 'V1 = động từ nguyên mẫu',
            example: "They didn't have a good night's sleep, so they are exhausted now. (Họ không có giấc ngủ ngon nên bây giờ họ mệt lử.)",
          },
          {
            title: 'Nghi vấn',
            format: 'Did + S + V1 + O?',
            example: 'Did the doctor prescribe you medicine for your fever? (Bác sĩ có kê thuốc sốt cho cậu không?)',
          },
        ],
      },
      {
        title: 'Present perfect (Hiện tại hoàn thành)',
        definition: 'Thì hiện tại hoàn thành được sử dụng để nói về những hành động hoặc sự việc xảy ra trong quá khứ nhưng kéo dài đến hiện tại hoặc có ý nghĩa trong ngữ cảnh hiện tại.',
        usage: [
          'Mô tả các hành động trong quá khứ có liên quan đến hiện tại.',
          'Khi có các từ "since, for, so far, just, recently" trong câu.',
        ],
        structure: [
          {
            title: 'Khẳng định',
            format: 'S + have/ has + V3 + O',
            note: 'V3 = Past participle verbs: động từ quá khứ phân từ',
            example: 'Lily has received excellent treatment at the hospital for her injuries recently. (Lily gần đây nhận được sự chữa trị xuất sắc tại bệnh viện cho những vết thương của mình)',
          },
          {
            title: 'Phủ định',
            format: "S + have/ has not (haven't/ hasn't) + V3 + O",
            example: "I haven't had soft drinks for a year. (Tôi đã không uống nước ngọt trong 1 năm qua.)",
          },
          {
            title: 'Nghi vấn',
            format: 'Have/ Has + S + V3 + O?',
            example: 'Have they finished their project? (Họ có hoàn thành dự án đó chưa?)',
          },
        ],
      },
      {
        title: 'Sự khác biệt giữa Past simple và Present perfect',
        comparisonTable: {
          headers: ['Past simple', 'Present perfect'],
          rows: [
            ['Cách dùng: Hành động diễn ra vào một thời điểm cụ thể trong quá khứ. Nhấn mạnh hành động đã hoàn thành.', 'Cách dùng: Hành động hoặc sự việc xảy ra trong quá khứ nhưng kéo dài đến hiện tại hoặc có ý nghĩa trong ngữ cảnh hiện tại. Nhấn mạnh sự liên quan giữa quá khứ và hiện tại.'],
            ['Các từ thường xuất hiện: yesterday, last year, ago, in 1999, then', 'Các từ thường xuất hiện: yet, already, ever, never, just, recently, since, for'],
            ['Ví dụ: My brother lost his keys earlier but now he has found them.', ''],
          ],
        },
      },
    ],
    exercises: [
      {
        question: 'I _______ to the cinema yesterday.',
        options: ['go', 'have gone', 'went', 'am going'],
        correctAnswerIndex: 2,
      },
      {
        question: 'She _______ in this city for ten years.',
        options: ['lived', 'has lived', 'lives', 'is living'],
        correctAnswerIndex: 1,
      },
      {
        question: 'They _______ their homework yet.',
        options: ["didn't finish", "haven't finished", 'not finish', 'don\'t finish'],
        correctAnswerIndex: 1,
      },
      {
        question: '_______ you ever _______ to Japan?',
        options: ['Did / go', 'Have / been', 'Do / go', 'Were / going'],
        correctAnswerIndex: 1,
      },
      {
        question: 'He bought a new car last week. He _______ it since then.',
        options: ['drove', 'drives', 'has driven', 'was driving'],
        correctAnswerIndex: 2,
      },
      {
        question: 'We _______ to Paris last summer.',
        options: ['have been', 'went', 'go', 'were going'],
        correctAnswerIndex: 1,
      },
      {
        question: "I _______ my keys. I can't find them anywhere.",
        options: ['lost', 'have lost', 'lose', 'was losing'],
        correctAnswerIndex: 1,
      },
      {
        question: 'Shakespeare _______ many famous plays.',
        options: ['has written', 'wrote', 'writes', 'is writing'],
        correctAnswerIndex: 1,
      },
      {
        question: 'My parents _______ here since 2005.',
        options: ['lived', 'have lived', 'live', 'were living'],
        correctAnswerIndex: 1,
      },
      {
        question: 'I _______ that movie three times already.',
        options: ['saw', 'see', 'have seen', 'am seeing'],
        correctAnswerIndex: 2,
      },
      {
        question: 'What time _______ you get home last night?',
        options: ['did', 'have', 'do', 'were'],
        correctAnswerIndex: 0,
      },
      {
        question: 'She _______ just _______ from her trip.',
        options: ['did / return', 'has / returned', 'returned', 'returns'],
        correctAnswerIndex: 1,
      },
      {
        question: 'They _______ married for 20 years and are still very happy.',
        options: ['were', 'have been', 'are', 'got'],
        correctAnswerIndex: 1,
      },
      {
        question: 'When _______ the Roman Empire _______?',
        options: ['has / fallen', 'did / fall', 'does / fall', 'fell'],
        correctAnswerIndex: 1,
      },
      {
        question: 'So far this week, I _______ two books.',
        options: ['read', 'was reading', 'have read', 'reads'],
        correctAnswerIndex: 2,
      },
    ],
  },
  {
    id: 'unit-2',
    title: 'Unit 2',
    subtitle: 'Modal verbs: must, have to and should',
    theory: [
      {
        title: 'Must',
        definition: '"Must" thường cho biết rằng điều gì đó là rất quan trọng hoặc có nghĩa vụ phải thực hiện.',
        usage: ['Khi người học muốn truyền đạt một sự việc hoặc yêu cầu nào đó mang tính cần thiết hoặc bắt buộc.'],
        examples: [{ text: 'We must revise all 6 units of Biology for the final exam. (Chúng ta phải ôn lại 6 bài học môn Sinh cho kì thi cuối kỳ.)', explanation: 'Chúng ta phải làm điều này để đạt điểm cao.' }],
      },
      {
        title: 'Have to',
        definition: '"Have to" thể hiện sự cần thiết hoặc nghĩa vụ do tác động bên ngoài. Nó ngụ ý rằng có ai đó hoặc điều gì đó bên ngoài người nói đang yêu cầu hoặc buộc phải thực hiện hành động đó.',
        usage: ['Sử dụng "have to" khi bạn muốn chỉ ra nghĩa vụ được áp đặt bởi tình huống hoặc quy tắc do người khác đặt cho.'],
        examples: [{ text: 'I have to wear ao dai to school every Monday. (Mình phải mặc áo dài đến trường mỗi thứ Hai.)', explanation: 'Vì đây là luật của trường.' }],
      },
      {
        title: 'Should',
        definition: '"Should" được sử dụng để đưa ra ý kiến, lời khuyên hoặc đề xuất. Nó ngụ ý rằng điều gì đó là tốt hoặc nên làm theo.',
        usage: ['Khi muốn đưa ra lời khuyên, hướng dẫn hoặc nêu ý kiến về điều gì đó được xem là lựa chọn tốt nhất.', '"Should" mang tính chất bắt buộc nhẹ hơn so với must hoặc have to.'],
        examples: [{ text: 'You should apologize to your mother for your rudeness. (Bạn nên xin lỗi mẹ bạn vì sự thô lỗ của mình.)', explanation: 'Đó là điều đúng đắn nên làm.' }],
      },
      {
        title: 'So sánh must, have to và should',
        comparisonTable: {
            headers: ["Must/ Have to", "Should"],
            rows: [
                ["- Biểu thị sự bắt buộc, cần thiết hoặc mệnh lệnh. 'Must' thường là sự bắt buộc từ bên trong (cá nhân), 'have to' là từ bên ngoài (quy tắc).", "- Đưa ra lời khuyên, đề xuất hoặc ý kiến về việc gì là đúng hoặc sai. Mang tính chất bắt buộc nhẹ hơn must hoặc have to."],
                ["Ví dụ: You must finish this report by 5 PM.", "Ví dụ: I think you should hit the road early."],
                ["Dạng phủ định: Mustn't (cấm đoán), Don't have to (không cần thiết)", "Dạng phủ định: Shouldn't (không nên)"],
                ["Ví dụ: You mustn't smoke here.", "Ví dụ: He shouldn't talk back to his teacher."]
            ]
        }
      }
    ],
    exercises: [
        {
            question: "You _______ see a doctor. You look very ill.",
            options: ["should", "must", "have to", "shouldn't"],
            correctAnswerIndex: 0
        },
        {
            question: "In our school, all students _______ wear a uniform.",
            options: ["must", "have to", "should", "don't have to"],
            correctAnswerIndex: 1
        },
        {
            question: "It's a secret. You _______ tell anyone.",
            options: ["mustn't", "don't have to", "shouldn't", "must"],
            correctAnswerIndex: 0
        },
        {
            question: "I think you _______ take a break. You've been working for hours.",
            options: ["must", "have to", "should", "mustn't"],
            correctAnswerIndex: 2
        },
        {
            question: "You _______ pay for the tickets. They are free.",
            options: ["mustn't", "don't have to", "shouldn't", "have to"],
            correctAnswerIndex: 1
        },
        {
            question: "The sign says 'No parking'. You _______ park here.",
            options: ["don't have to", "shouldn't", "mustn't", "must"],
            correctAnswerIndex: 2
        },
        {
            question: "If you want to pass the exam, you _______ study harder.",
            options: ["should", "have to", "mustn't", "don't have to"],
            correctAnswerIndex: 0
        },
        {
            question: "You _______ come to the party if you don't want to.",
            options: ["mustn't", "don't have to", "shouldn't", "have to"],
            correctAnswerIndex: 1
        },
        {
            question: "I _______ get up early tomorrow for my flight.",
            options: ["should", "have to", "must not", "don't have to"],
            correctAnswerIndex: 1
        },
        {
            question: "He is very rich. He _______ work.",
            options: ["mustn't", "has to", "shouldn't", "doesn't have to"],
            correctAnswerIndex: 3
        },
        {
            question: "All passengers _______ show their passports at the gate.",
            options: ["should", "must", "shouldn't", "don't have to"],
            correctAnswerIndex: 1
        },
        {
            question: "It's getting late. I think we _______ go home now.",
            options: ["must", "have to", "should", "mustn't"],
            correctAnswerIndex: 2
        },
        {
            question: "You _______ be quiet in the library.",
            options: ["should", "must", "don't have to", "shouldn't"],
            correctAnswerIndex: 1
        },
        {
            question: "I'm sorry, but you _______ bring your dog in here. It's not allowed.",
            options: ["don't have to", "mustn't", "shouldn't", "must"],
            correctAnswerIndex: 1
        },
        {
            question: "This is a great book. You _______ read it!",
            options: ["must", "have to", "don't have to", "mustn't"],
            correctAnswerIndex: 0
        }
    ]
  },
   {
    id: 'unit-3',
    title: 'Unit 3',
    subtitle: 'Stative verbs and Linking verbs',
    theory: [
      {
        title: 'Stative verbs (Động từ chỉ trạng thái)',
        definition: 'Động từ chỉ trạng thái là những động từ mô tả trạng thái hoặc tình trạng, điều kiện của người nói hay vật đề cập đến hành động của họ.',
        characteristics: [
          'Động từ chỉ trạng thái thường không sử dụng thì tiếp diễn (ví dụ: hiện tại tiếp diễn hoặc quá khứ tiếp diễn).',
          'Thường mô tả một trạng thái hoặc điều kiện thay vì thể hiện hành động.',
        ],
        types: [
            { title: 'Động từ chỉ suy nghĩ và quan điểm: agree, believe, remember, think, understand', example: 'The students believe that everyone should find ways to reduce their carbon footprint.'},
            { title: 'Động từ chỉ cảm xúc: hate, love, prefer', example: 'I hate using the public transport during the rush hour.'},
            { title: 'Động từ chỉ các giác quan: appear, hear, look, see, seem, smell, taste', example: 'The steak tastes delicious!'},
            { title: 'Động từ chỉ sự sở hữu: belong, have, own', example: 'Alice owns more than 200 dresses.'}
        ],
        note: 'Tùy vào ngữ cảnh mà một số động từ chỉ trạng thái như have, see, taste có thể được dùng với thì tiếp diễn để mô tả hành động.',
        examples: [
            { text: 'My friend has 2 robot vacuums. (have thể hiện sự sở hữu - trạng thái).'},
            { text: 'My friend is having some noodles. (have thể hiện hành động - ăn).'}
        ]
      },
      {
        title: 'Linking verbs (Động từ nối/Liên động từ)',
        definition: 'Động từ nối hoặc liên động từ được dùng để nối chủ ngữ với danh từ hoặc tính từ mô tả chủ ngữ. Nó chỉ trạng thái của sự vật, hiện tượng, hoặc người được nói đến.',
        characteristics: [
            'Chỉ thể hiện trạng thái của chủ thể.',
            'Nối chủ ngữ và bổ ngữ của chủ ngữ (danh từ hoặc tính từ).',
            'Các loại thông dụng: be, seem, look, become, appear, sound, taste, smell.'
        ],
        examples: [
            { text: 'The residents appear mad at the mayor. (appear là linking verb)'},
            { text: 'The residents appeared at the candidate\'s campaign yesterday. (appear là action verb)'}
        ]
      }
    ],
    exercises: [
        {
            question: 'This soup _______ delicious.',
            options: ['is tasting', 'tastes', 'taste', 'are tasting'],
            correctAnswerIndex: 1
        },
        {
            question: 'I _______ you are right.',
            options: ['am thinking', 'thinks', 'think', 'thought'],
            correctAnswerIndex: 2
        },
        {
            question: 'She _______ a new car.',
            options: ['is having', 'has', 'have', 'is owning'],
            correctAnswerIndex: 1
        },
        {
            question: "Right now, I'm _______ about my vacation plans.",
            options: ['think', 'am thinking', 'thinks', 'thought'],
            correctAnswerIndex: 1
        },
        {
            question: 'The flowers _______ beautiful.',
            options: ['smell', 'are smelling', 'smells', 'smelt'],
            correctAnswerIndex: 0
        },
        {
            question: 'This perfume _______ really nice.',
            options: ['is smelling', 'smells', 'smell', 'are smelling'],
            correctAnswerIndex: 1
        },
        {
            question: 'He _______ very tired after the long journey.',
            options: ['seemed', 'was seeming', 'seems', 'is seeming'],
            correctAnswerIndex: 0
        },
        {
            question: 'Do you _______ what I mean?',
            options: ['understand', 'are understanding', 'understands', 'understood'],
            correctAnswerIndex: 0
        },
        {
            question: 'This bag _______ to me.',
            options: ['is belonging', 'belongs', 'belong', 'has belonged'],
            correctAnswerIndex: 1
        },
        {
            question: 'She _______ to be a very talented singer.',
            options: ['is appearing', 'appears', 'appear', 'has appeared'],
            correctAnswerIndex: 1
        },
        {
            question: 'I _______ chocolate ice cream.',
            options: ['am loving', 'love', 'loves', 'loving'],
            correctAnswerIndex: 1
        },
        {
            question: 'The situation _______ serious.',
            options: ['is', 'is being', 'are', 'are being'],
            correctAnswerIndex: 0
        },
        {
            question: 'The children _______ happy with their new toys.',
            options: ['seem', 'are seeming', 'seems', 'has seemed'],
            correctAnswerIndex: 0
        },
        {
            question: 'This box _______ ten kilograms.',
            options: ['is weighing', 'weighs', 'weigh', 'has weighed'],
            correctAnswerIndex: 1
        },
        {
            question: 'The music _______ too loud.',
            options: ['is sounding', 'sounds', 'sound', 'has sounded'],
            correctAnswerIndex: 1
        }
    ]
  },
  {
    id: 'unit-4',
    title: 'Unit 4',
    subtitle: 'Gerunds as subjects and objects',
    theory: [
      {
        title: 'Gerunds (Danh động từ)',
        definition: 'Danh động từ là khi các động từ thêm đuôi -ing và có chức năng như một danh từ trong câu. (Ví dụ: read → reading)',
        types: [
            { title: 'Làm chủ ngữ', example: 'Volunteering at the local shelter can help those in need.'},
            { title: 'Bổ ngữ sau động từ "be"', example: 'Their dream is traveling to ASEAN countries.'},
            { title: 'Tân ngữ của động từ (sau like, enjoy, hate, mind, etc.)', example: 'This project involves interviewing students.'},
            { title: 'Tân ngữ của giới từ', example: 'After discussing the theme, we began to design the poster.'}
        ]
      }
    ],
    exercises: [
        {
            question: '_______ is my favorite hobby.',
            options: ['To read', 'Reading', 'Read', 'I read'],
            correctAnswerIndex: 1
        },
        {
            question: 'I enjoy _______ to music in my free time.',
            options: ['listening', 'to listen', 'listen', 'listened'],
            correctAnswerIndex: 0
        },
        {
            question: 'She is good at _______ languages.',
            options: ['learn', 'to learn', 'learning', 'learned'],
            correctAnswerIndex: 2
        },
        {
            question: 'Thank you for _______ me.',
            options: ['help', 'helping', 'to help', 'helped'],
            correctAnswerIndex: 1
        },
        {
            question: '_______ too much junk food is unhealthy.',
            options: ['Eat', 'To eat', 'Eating', 'Eaten'],
            correctAnswerIndex: 2
        },
        {
            question: 'He is interested in _______ a new business.',
            options: ['start', 'to start', 'starting', 'started'],
            correctAnswerIndex: 2
        },
        {
            question: '_______ is a good way to stay fit.',
            options: ['Swim', 'To swim', 'Swimming', 'Swam'],
            correctAnswerIndex: 2
        },
        {
            question: "I can't help _______ when I see that movie.",
            options: ['cry', 'to cry', 'crying', 'cried'],
            correctAnswerIndex: 2
        },
        {
            question: 'She avoids _______ fast food.',
            options: ['eat', 'to eat', 'eating', 'eaten'],
            correctAnswerIndex: 2
        },
        {
            question: 'Would you mind _______ the window?',
            options: ['close', 'to close', 'closing', 'closed'],
            correctAnswerIndex: 2
        },
        {
            question: 'He admitted _______ the money.',
            options: ['steal', 'to steal', 'stealing', 'stolen'],
            correctAnswerIndex: 2
        },
        {
            question: 'Before _______, please turn off the lights.',
            options: ['leave', 'to leave', 'leaving', 'left'],
            correctAnswerIndex: 2
        },
        {
            question: 'I look forward to _______ you again soon.',
            options: ['see', 'seeing', 'saw', 'to see'],
            correctAnswerIndex: 1
        },
        {
            question: 'My doctor suggested _______ more vegetables.',
            options: ['eat', 'to eat', 'eating', 'eaten'],
            correctAnswerIndex: 2
        },
        {
            question: 'One of her duties is _______ the phone.',
            options: ['answer', 'to answer', 'answering', 'answered'],
            correctAnswerIndex: 2
        }
    ]
  },
  {
    id: 'unit-5',
    title: 'Unit 5',
    subtitle: 'Present participle clauses vs Past participle clauses',
    theory: [
      {
        title: 'Present participle clauses (Mệnh đề hiện tại phân từ)',
        definition: 'Mệnh đề hiện tại phân từ rút gọn từ mệnh đề phụ thuộc trong câu phức, được bắt đầu bằng động từ V-ing.',
        characteristics: [
          'Có cùng chủ ngữ với mệnh đề chính.',
          'Động từ trong mệnh đề phải mang nghĩa chủ động.',
          'Chức năng: Diễn tả lý do hoặc hành động diễn ra đồng thời.'
        ],
        examples: [
          { text: 'Because my grandpa grew up on a farm, he knew how to raise cattle.', explanation: '→ Growing up on a farm, my grandpa knew how to raise cattle.'}
        ]
      },
      {
        title: 'Past participle clauses (Mệnh đề quá khứ phân từ)',
        definition: 'Mệnh đề quá khứ phân từ rút gọn từ mệnh đề phụ thuộc trong câu phức, được bắt đầu bằng động từ V3/ed.',
        characteristics: [
          'Có cùng chủ ngữ với mệnh đề chính.',
          'Động từ trong mệnh đề phải ở dạng bị động (be + V3/ed).',
          'Chức năng: Diễn tả lý do hoặc điều kiện "if".'
        ],
        examples: [
          { text: 'If trees are cleared for agricultural land, they can release huge amounts of carbon dioxide.', explanation: '→ Cleared for agricultural land, trees can release huge amounts of carbon dioxide.'}
        ]
      },
      {
        title: 'Comparison',
        comparisonTable: {
            headers: ["Present participle clauses", "Past participle clauses"],
            rows: [
                ["Bắt đầu bằng V-ing", "Bắt đầu bằng V3/ed"],
                ["Thể chủ động", "Thể bị động"],
            ]
        }
      }
    ],
    exercises: [
        {
            question: '_______ his homework, he went to bed.',
            options: ['Finishing', 'Finished', 'Having finished', 'To finish'],
            correctAnswerIndex: 0
        },
        {
            question: '_______ by the teacher, the student stood up and answered.',
            options: ['Calling', 'Called', 'To call', 'Having called'],
            correctAnswerIndex: 1
        },
        {
            question: '_______ the door, I saw a strange man.',
            options: ['Opening', 'Opened', 'To open', 'Having been opened'],
            correctAnswerIndex: 0
        },
        {
            question: '_______ in 1990, the building is now very old.',
            options: ['Building', 'To build', 'Built', 'Having built'],
            correctAnswerIndex: 2
        },
        {
            question: '_______ tired, she decided to take a short nap.',
            options: ['Felt', 'To feel', 'Feels', 'Feeling'],
            correctAnswerIndex: 3
        },
        {
            question: 'The man _______ next to me was very friendly.',
            options: ['sitting', 'sat', 'to sit', 'sits'],
            correctAnswerIndex: 0
        },
        {
            question: '_______ in a hurry, she forgot her keys.',
            options: ['Leaving', 'Left', 'To leave', 'Leave'],
            correctAnswerIndex: 0
        },
        {
            question: 'The letter _______ yesterday needs a reply.',
            options: ['sending', 'sent', 'to send', 'sends'],
            correctAnswerIndex: 1
        },
        {
            question: '_______ from a distance, the city looks beautiful.',
            options: ['Seeing', 'Seen', 'To see', 'See'],
            correctAnswerIndex: 1
        },
        {
            question: 'The boy _______ the window has to pay for it.',
            options: ['breaking', 'broken', 'broke', 'breaks'],
            correctAnswerIndex: 0
        },
        {
            question: '_______ with care, this product will last for years.',
            options: ['Using', 'Used', 'To use', 'Use'],
            correctAnswerIndex: 1
        },
        {
            question: '_______ nothing to do, they went for a walk.',
            options: ['Having', 'Had', 'To have', 'Have'],
            correctAnswerIndex: 0
        },
        {
            question: 'The ideas _______ in this book are very interesting.',
            options: ['presenting', 'presented', 'to present', 'presents'],
            correctAnswerIndex: 1
        },
        {
            question: '_______ for the job, he was very excited.',
            options: ['Accepting', 'Accepted', 'To accept', 'Accept'],
            correctAnswerIndex: 1
        },
        {
            question: '_______ the test, she felt very relieved.',
            options: ['Passing', 'Passed', 'To pass', 'Having passed'],
            correctAnswerIndex: 0
        }
    ]
  }
];
