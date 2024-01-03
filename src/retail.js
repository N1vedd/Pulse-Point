export const retailQN = {
    questions: [
      {
        question:
          "Who is responsible for purchasing?",
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

      //INVENTORY DEPARTMENT
      {
        question: "Is there any person designated to oversee inventory management?",
        choices: ["Yes", "Maybe", "No"],
        scores: [10, -2.5, 0],
      },
      {
        question: "Is there a systematic approach in use for inventory management?",
        choices: ["Yes", "No"],
        scores: [10, 0],
      },
      {
        question: "What type of inventory management system is currently in use?",
        choices: ["ERP/Systematic operation", "Manual operations", "No specific system available"],
        scores: [10, 0, 0],
      },
      {
        question: "Is there a standardized system for inventory cataloging that includes unique identifiers?",
        choices: ["Yes, with a unique code for each item", "Yes, using a combination of product details", "No, a standardized system is not in place", "Other (please specify)"],
        scores: [0, 2.5, 5, 0],
      },
      {
        question: "What procedures are in place for verifying incoming inventory against purchase orders?",
        choices: ["Cross-checking with packing slips/Physical inspection of each item", "Physical inspection of each item", "Randomly doing Verification system", "No procedure"],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "How are inventory items arranged for efficient storage and easy retrieval?",
        choices: ["Based on item size or type/According to frequency of use", "Items are stored randomly", "No specified mechanism"],
        scores: [10, 2.5, 0],
      },
      {
        question: "Are stock levels regularly monitored?",
        choices: ["Daily/Weekly/Monthly", "When it is required", "There is no specified monitoring system"],
        scores: [10, 5, 0],
      },
      {
        question: "Is the FSN system implemented and followed?",
        choices: ["Always", "Rarely", "No"],
        scores: [10, 2.5, 0],
      },
      {
        question: "Is a first-in, first-out (FIFO) system implemented to ensure product freshness?",
        choices: ["Yes, consistently", "Occasionally", "No, FIFO is not consistently followed"],
        scores: [10, 2.5, 0],
      },
      {
        question: "Have you been able to conduct aging and dead stock analysis?",
        choices: ["Yes", "Constantly", "Occasionally", "No"],
        scores: [10, 5, 2.5, 0],
      },

      //MARKETING DEPARTMENT
      {
        question: "Is there any responsible person for monitoring marketing activities of the organization?",
        choices: ["A dedicated person available", "MD/management team", "No specified person available"],
        scores: [10, 5, 0],
      },
      {
        question: "How is our current marketing strategy aligned with overall business goals?",
        choices: ["Clearly aligned with business goals", "Somewhat aligned", "Not clearly aligned"],
        scores: [10, 2.5, 0],
      },
      {
        question: "How active is our presence on social media platforms, and how do we engage with our audience?",
        choices: ["Regular posting and engagement", "Occasional posting", "Minimal presence", "No presence"],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "To what extent do we maintain an active presence on social media platforms, and what strategies do we employ to interact with our audience?",
        choices: ["Consistent posting and engagement", "Infrequent posting", "Limited presence", "No"],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "How frequently do we assess email performance, and what modifications are implemented based on the gathered data?",
        choices: ["Regularly, with prompt adjustments", "Periodically, with intermittent adjustments", "Infrequently, with limited adjustments", "No email monitoring"],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "In what manner is the website consistently maintained and enhanced to ensure a user-friendly experience?",
        choices: ["Regular updates to content", "Periodic updates", "No updates"],
        scores: [10, 5, 0],
      },
      {
        question: "How is customer feedback integrated into the marketing strategy?",
        choices: ["Actively sought and utilized", "Occasionally considered", "Rarely incorporated", "No emphasis on customer feedback"],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "How regularly does the organization conduct competitor analysis for marketing purposes?",
        choices: ["Regularly and systematically", "Occasionally", "Rarely", "No competitor analysis conducted"],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "How would you describe the organization's current marketing strategy?",
        choices: ["Comprehensive and well-defined", "Somewhat developed", "Limited or unclear", "No specific strategy in place"],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "Who is the primary target audience for the organization's marketing efforts?",
        choices: ["Clearly defined and segmented", "Somewhat identified", "Not well-defined", "No specific target audience"],
        scores: [10, 5, 2.5, 0],
      },

      //SALES DEPARTMENT

      {
        question: "Is there any responsible person for monitoring sales activities of the organization?",
        choices: ["A dedicated person available", "MD/management team", "No specified person available"],
        scores: [10, 5, 0],
      },
      {
        question: "How often do sales representatives interact with customers?",
        choices: ["Frequently", "Occasionally", "Rarely"],
        scores: [10, 2.5, 0],
      },
      {
        question: "How would you rate the sales team's knowledge about the products/services?",
        choices: ["Excellent", "Good", "Needs improvement"],
        scores: [10, 5, 0],
      },
      {
        question: "How consistently does the sales team meet or exceed sales targets?",
        choices: ["Consistently", "Occasionally", "Rarely"],
        scores: [10, 2.5, 0],
      },
      {
        question: "How often is customer feedback used to improve sales strategies?",
        choices: ["Always", "Sometimes", "Rarely"],
        scores: [10, 2.5, 0],
      },
      {
        question: "How effective is the sales team in upselling additional products/services?",
        choices: ["Very effective", "Moderately effective", "Ineffective"],
        scores: [10, 2.5, 0],
      },
      {
        question: "How regularly are sales team members provided with training programs?",
        choices: ["Regularly", "Occasionally", "Rarely"],
        scores: [10, 2.5, 0],
      },
      {
        question: "How quickly does the sales team respond to leads or inquiries?",
        choices: ["Very quickly", "Within a reasonable time", "Slow response"],
        scores: [10, 2.5, 0],
      },
      {
        question: "Are there defined metrics to measure the performance of individual sales team members?",
        choices: ["Yes", "Partially", "No"],
        scores: [10, 2.5, 0],
      },
      {
        question: "How well does the sales team align its strategies with the overall marketing efforts?",
        choices: ["Very well", "Moderately well", "Limited alignment"],
        scores: [10, 2.5, 0],
      },

      //FINANCE DEPARTMENT

      {
        question: "How effectively is cash flow managed to meet operational needs?",
        choices: ["Very effectively", "Adequately", "Needs improvement"],
        scores: [10, 5, 0],
      },
      {
        question: "How timely are financial reports prepared and shared with relevant stakeholders?",
        choices: ["Very timely", "Moderately timely", "Delayed"],
        scores: [10, 5, 0],
      },
      {
        question: "How well are cost control measures implemented to manage expenses?",
        choices: ["Very well", "Adequately", "Needs improvement"],
        scores: [10, 5, 0],
      },
      {
        question: "How prepared is the Finance Department for internal and external audits?",
        choices: ["Well-prepared", "Moderately prepared", "Unprepared"],
        scores: [10, 5, 0],
      },
      {
        question: "How effectively is the company's debt managed and serviced?",
        choices: ["Very effectively", "Adequately", "Ineffective"],
        scores: [10, 5, 0],
      },
      {
        question: "To what extent is financial software utilized for accounting and reporting?",
        choices: ["Fully utilized", "Partially utilized", "Not utilized"],
        scores: [10, 5, 0],
      },
      {
        question: "How effectively are employee expenses managed and monitored?",
        choices: ["Very effectively", "Adequately", "Needs improvement"],
        scores: [10, 5, 0],
      },
      {
        question: "How well is the cost of capital managed to optimize financing decisions?",
        choices: ["Very well", "Adequately", "Poorly managed"],
        scores: [10, 5, 0],
      },
      {
        question: "How well-trained are non-finance staff in understanding and managing financial aspects?",
        choices: ["Highly trained", "Moderately trained", "Insufficient training"],
        scores: [10, 5, 0],
      },
      {
        question: "How often is financial risk assessed, and strategies developed to mitigate risks?",
        choices: ["Regularly", "Occasionally", "Rarely"],
        scores: [10, 5, 0],
      },

      //HR & ADMIN DEPARTMENT
      {
        question: "How effective is the recruitment process in attracting and selecting qualified candidates?",
        choices: ["Very effective", "Moderately effective", "Ineffective"],
        scores: [10, 5, 0],
      },
      {
        question: "How well is the onboarding process implemented to integrate new employees into the organization?",
        choices: ["Very well", "Adequately", "Needs improvement"],
        scores: [10, 5, 0],
      },
      {
        question: "How would you rate the overall level of employee engagement within the company?",
        choices: ["High", "Moderate", "Low"],
        scores: [10, 5, 0],
      },
      {
        question: "How valuable are the training and development programs provided to employees?",
        choices: ["Highly valuable", "Moderately valuable", "Ineffective"],
        scores: [10, 5, 0],
      },
      {
        question: "How well are employee relations managed to foster a positive work environment?",
        choices: ["Very well", "Adequately", "Needs improvement"],
        scores: [10, 5, 0],
      },
      {
        question: "How satisfied are employees with the compensation and benefits packages?",
        choices: ["Very satisfied", "Satisfied", "Dissatisfied"],
        scores: [10, 5, 0],
      },
      {
        question: "How well does the HR & Admin Department ensure compliance with health and safety regulations?",
        choices: ["Very well", "Moderately well", "Inadequate"],
        scores: [10, 5, 0],
      },
      {
        question: "How effectively are conflicts among employees resolved within the organization?",
        choices: ["Very effectively", "Adequately", "Ineffectively"],
        scores: [10, 5, 0],
      },
      {
        question: "How effectively are HR policies communicated to employees?",
        choices: ["Very effectively", "Moderately effectively", "Ineffective"],
        scores: [10, 5, 0],
      },
      {
        question: "How efficient are administrative processes within the HR & Admin Department?",
        choices: ["Highly efficient", "Moderately efficient", "Inefficient"],
        scores: [10, 5, 0],
      },

      //CLIENT RELATION MANAGEMENT
      {
        question: "How accurate is the customer data maintained in the CRM system?",
        choices: ["Very accurate", "Moderately accurate", "Inaccurate"],
        scores: [10, 5, 0],
      },
      {
        question: "How well are customer interactions tracked and documented in the CRM?",
        choices: ["Very well", "Adequately", "Needs improvement"],
        scores: [10, 5, 0],
      },
      {
        question: "How successful is the CRM system in converting leads into customers?",
        choices: ["High conversion rate", "Moderate conversion rate", "Low conversion rate"],
        scores: [10, 5, 0],
      },
      {
        question: "How quickly are customer complaints addressed and resolved?",
        choices: ["Very quickly", "Moderately quickly", "Slowly"],
        scores: [10, 5, 0],
      },
      {
        question: "How is customer feedback utilized for improving products and services?",
        choices: ["Actively utilized", "Occasionally utilized", "Not utilized"],
        scores: [10, 5, 0],
      },
      {
        question: "How successful are customer loyalty programs managed through the CRM?",
        choices: ["Highly successful", "Moderately successful", "Unsuccessful"],
        scores: [10, 5, 0],
      },
      {
        question: "How well-trained are employees in using the CRM system for customer interactions?",
        choices: ["Very effective", "Moderately effective", "Ineffective"],
        scores: [10, 5, 0],
      },
      {
        question: "How effective are automated marketing campaigns managed through the CRM?",
        choices: ["Highly integrated", "Partially integrated", "Not integrated"],
        scores: [10, 5, 0],
      },
      {
        question: "How well is the CRM integrated with social media platforms for customer engagement?",
        choices: ["Highly integrated", "Partially integrated", "Not integrated"],
        scores: [10, 5, 0],
      },
      {
        question: "Is there an ongoing process for continuous improvement of CRM strategies and functionalities?",
        choices: ["Yes, regularly implemented", "Occasionally implemented", "Not implemented"],
        scores: [10, 5, 0],
      },

      
      //INFORMATION TECHNOLOGY
      {
        question: "Is there any responsible person for monitoring IT activities of the organization?",
        choices: ["Yes", "MD/Management team", "No specified person available"],
        scores: [10, 5, 0],
      },
      {
        question: "How reliable are our IT systems and infrastructure?",
        choices: ["Highly reliable", "Moderately reliable", "Unreliable"],
        scores: [10, 2.5, 0],
      },
      {
        question: "How well are data security measures implemented to protect customer information?",
        choices: ["Very well", "Adequately", "Poorly"],
        scores: [10, 2.5, 0],
      },
      {
        question: "How responsive is the IT department in addressing user support requests?",
        choices: ["Very responsive", "Moderately responsive", "Slow responsiveness"],
        scores: [10, 2.5, 0],
      },
      {
        question: "How regularly are software and system updates performed?",
        choices: ["Regularly", "Occasionally", "Rarely"],
        scores: [10, 2.5, 0],
      },
      {
        question: "How well-trained are employees in utilizing IT tools and systems?",
        choices: ["Highly trained", "Moderately trained", "Insufficient training"],
        scores: [10, 2.5, 0],
      },
      {
        question: "How easily can the IT infrastructure scale to accommodate business growth?",
        choices: ["Very easily", "Moderately", "Difficult"],
        scores: [10, 2.5, 0],
      },
      {
        question: "How frequently are data backup procedures executed?",
        choices: ["Regularly", "Occasionally", "Rarely"],
        scores: [10, 2.5, 0],
      },
      {
        question: "How effectively does the IT department respond to and resolve incidents?",
        choices: ["Very effectively", "Moderately effectively", "Ineffective"],
        scores: [10, 2.5, 0],
      },
      {
        question: "How aware are employees of IT security policies and guidelines?",
        choices: ["Very aware", "Somewhat aware", "Unaware"],
        scores: [10, 2.5, 0],
      },
    ],
  };
  
  export const resultInitialState = {
    section1: Array(10).fill(0),
    section2: Array(10).fill(0),
    section3: Array(10).fill(0),
    section4: Array(10).fill(0),
    section5: Array(10).fill(0),
    section6: Array(10).fill(0),
    section7: Array(10).fill(0),
    section8: Array(10).fill(0),  
    total: 0,
  };

  export const sectionInfo = {
    section1: {
      heading: "PURCHASE DEPARTMENT",
      numQuestions: 10,
    },

    section2: {
      heading: "INVENTORY DEPARTMENT",
      numQuestions: 10,
    },

    section3: {
      heading: "MARKETING DEPARTMENT",
      numQuestions: 10,
    },

    section4: {
      heading: "SALES MANAGEMENT",
      numQuestions: 10,
    },

    section5: {
      heading: "FINANCE DEPARTMENT",
      numQuestions: 10,
    },

    section6: {
      heading: "HR & ADMIN DEPARTMENT",
      numQuestions: 10,
    },
  
    section7: {
      heading: "CUSTOMER RELATIONS MANAGEMENT",
      numQuestions: 10,
    },

    section8: {
      heading: "INFORMATION TECHNOLOGY",
      numQuestions: 10,
    },
  };


  