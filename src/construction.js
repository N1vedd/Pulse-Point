export const constructionQN = {
    questions: [
      {
        question:
          "This is questions from construction?",
        choices: [
          "A dedicated person is available",
          "Assigned to another profile",
          "MD/Promoter",
          "No Assigned Persons",
        ],
        scores:[
          10,
          5,
          2.5,
          0,
        ],
      },
      {
        question: "How do you typically prepare the PR?",
        choices: [
          "ERP/EMAIL/PHYSICAL",
          "Verbal Communication Only",
          "None",
        ],
        scores:[
          10,
          2.5,
          0,
        ],
      },
      {
        question: "Are you able to achieve the proper clarity in the information required to prepare the PR?",
        choices: [
          "Yes",
          "Mostly",
          "Somewhat",
          "No",
        ],
        scores:[
          10,
          5,
          2.5,
          0,
        ],
      },
      {
        question:
          "Can you provide/get timely approvals?",
          choices: [
            "Always",
            "Frequently",
            "Occasionally",
            "Rarely",
          ],
          scores:[
            10,
            5,
            2.5,
            0,
          ],
      },
      {
        question: "Do you ensure that the proposed purchase aligns with the allocated purchase budget?",
        choices: [
          "Always",
          "Frequently",
          "Occasionally",
          "Rarely",
        ],
        scores:[
          10,
          5,
          2.5,
          0,
        ],
      },
      {
        question: "Do you face any Difficulties in Including all relevent informations in Purchase Orders?",
        choices: [
          "Rarely",
          "Occasionally",
          "Frequently",
          "Always",
        ],
        scores:[
          10,
          5,
          2.5,
          0,
        ],
      },
      {
        question:
          "How do you receive goods in accordance with the purchase order?",
        choices: [
          "Physical Inspection & Cross checking with GRN",
          "Cross check with GRN Only",
          "Others",
          "None",
        ],
        scores:[
          10,
          5,
          2.5,
          0,
        ],
      },
      {
        question: "Are there any steps available to identify missing or damaged items?",
        choices: [
          "Yes",
          "Mostly",
          "No",
        ],
        scores:[
          10,
          2.5,
          0,
        ],
      },
      {
        question:
          "How do you maintain the  record of transactions, including invoices and receipts?",
        choices: [
          "Hardcopy & Softcopy filing", 
          "Somewhat keeping docs but not in a required way", 
          "Not Maintaning any records"
        ],
        scores:[
          10,
          2.5,
          0,
        ],
      },
      {
        question: "Do you follow a properly documented purchase policy?",
        choices: [
          "Yes",
          "Somewhat",
          "No",
        ],
        scores:[
          10,
          2.5,
          0,
        ],
      },
    ],
  };
  
  export const resultInitialState = {
    section1: 0,
    section2: 0,
    total: 0,
  };

  export const sectionInfo = {
    section1: {
      heading: "Purchase Department",
      numQuestions: 4,

    },
    section2: {
      heading: "Inventory Department",
      numQuestions: 6,
    },
  };

  