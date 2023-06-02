export default interface FormQuestionInterface {
  readonly id?: number;
  readonly question: String;
}

export const FormQuestions: FormQuestionInterface[] = [
  { id: 1, question: " How would you rate your child's eating habits?" },
  { id: 2, question: " Does your child consume a balanced diet?" },
  { id: 3, question: " How often does your child eat junk food?" },
  {
    id: 4,
    question: " How often does your child exhibit signs of anxiety or worry?",
  },
  {
    id: 5,
    question:
      " Does your child experience difficulty sleeping or have trouble falling asleep?",
  },
  {
    id: 6,
    question:
      " Has your child shown a decline in interest or pleasure in activities?",
  },
  {
    id: 7,
    question:
      " How effectively does your child express their needs and emotions?",
  },
  {
    id: 8,
    question: " Does your child actively listen and engage in conversations?",
  },
  {
    id: 9,
    question: " Is your child comfortable expressing their opinions and ideas?",
  },
  {
    id: 10,
    question:
      " Does your child struggle to pay attention or get easily distracted?",
  },
  {
    id: 11,
    question:
      " How difficult is for your child to stay focused on tasks or schoolwork?",
  },
  {
    id: 12,
    question:
      "  Does your child have difficulty organizing their time or belongings?",
  },
  {
    id: 13,
    question:
      " How often does your child engage in physical activities or sports?",
  },
  {
    id: 14,
    question:
      " Does your child show improvement in physical skills and coordination? ",
  },
  {
    id: 15,
    question:
      " Is your child involved in any organized sports or team activities?",
  },
];
