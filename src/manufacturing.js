export const manufacturingQN = {
    questions: [
      //PURCHASE DEPARTMENT
      {
        question: "Who is responsible for purchasing?",
        choices: [
          "A dedicated person is available",
          "Assigned to another profile",
          "MD/Promoter",
          "No Assigned Persons",
        ],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "How do you typically prepare the PR?",
        choices: [
          "ERP/EMAIL/PHYSICAL",
          "Verbal Communication Only",
          "None",
        ],
        scores: [10, 2.5, 0],
      },
      {
        question: "Are you able to achieve the proper clarity in the information required to prepare the PR?",
        choices: ["Yes", "Mostly", "Somewhat", "No"],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "Can you provide/get timely approvals?",
        choices: ["Always", "Frequently", "Occasionally", "Rarely"],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "Do you ensure that the proposed purchase aligns with the allocated purchase budget?",
        choices: ["Always", "Frequently", "Occasionally", "Rarely"],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "Do you face any difficulties in including all relevant information in Purchase Orders?",
        choices: ["Rarely", "Occasionally", "Frequently", "Always"],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "How do you receive goods in accordance with the purchase order?",
        choices: [
          "Physical Inspection & Cross checking with GRN",
          "Cross check with GRN Only",
          "Others",
          "None",
        ],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "Are there any steps available to identify missing or damaged items?",
        choices: ["YES", "Somewhat", "NIL"],
        scores: [10, 2.5, 0],
      },
      {
        question: "How do you maintain the record of transactions, including invoices and receipts?",
        choices: [
          "Hardcopy & Softcopy filing",
          "Somewhat keeping docs but not in a required way",
          "Not Maintaining any records",
        ],
        scores: [10, 2.5, 0],
      },
      {
        question: "Do you follow a properly documented purchase policy?",
        choices: ["YES", "Somewhat", "NIL"],
        scores: [10, 2.5, 0],
      },

      //PRODUCTION AND MANUFACTURING 
      {
        question: "How effectively is the production schedule planned and communicated?",
        choices: ["Very effectively", "Somewhat effectively", "Needs improvement"],
        scores: [10, 2.5, 0],
      },
      {
        question: "How well is the manufacturing capacity utilized?",
        choices: ["Fully utilized", "Partially utilized", "Underutilized"],
        scores: [10, 2.5, 0],
      },
      {
        question: "How would you rate the effectiveness of the quality control measures in place?",
        choices: ["Excellent", "Good", "Fair", "Poor"],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "How well is the inventory managed to avoid overstock or stockouts?",
        choices: ["Very well", "Adequately", "Needs improvement"],
        scores: [10, 5, 0],
      },
      {
        question: "Is preventive maintenance regularly performed on production equipment?",
        choices: ["Always", "Occasionally", "Rarely"],
        scores: [10, 2.5, 0],
      },
      {
        question: "How well-trained are the production staff in operating machinery and following procedures?",
        choices: ["Highly trained", "Moderately trained", "Insufficient training"],
        scores: [10, 5, 0],
      },
      {
        question: "How effectively is waste managed in the production process?",
        choices: ["Very effectively", "Adequately", "Needs improvement"],
        scores: [10, 5, 0],
      },
      {
        question: "To what extent is technology integrated into the manufacturing process?",
        choices: ["Fully integrated", "Partially integrated", "Not integrated"],
        scores: [10, 5, 0],
      },
      {
        question: "How well does the company manage production lead times?",
        choices: ["Excellently", "Acceptably", "Needs improvement"],
        scores: [10, 5, 0],
      },
      {
        question: "How well are production costs monitored and controlled?",
        choices: ["Very well", "Moderately well", "Poorly"],
        scores: [10, 5, 0],
      },

      //INVENTORY DEPARTMENT
      {
        question: "Is there any person designated to oversee inventory management?",
        choices: ["Yes", "Maybe", "No"],
        scores: [10, 2.5, 0],
      },
      {
        question: "Is there a systematic approach in use for inventory management?",
        choices: ["Yes", "No"],
        scores: [10, 0],
      },
      {
        question: "What type of inventory management system is currently in use?",
        choices: ["ERP / Systematic operation", "Manual operations", "No specific system available"],
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
        choices: ["Based on item size or type / According to frequency of use", "Items are stored randomly", "No specified mechanism"],
        scores: [10, 2.5, 0],
      },
      {
        question: "Are stock levels regularly monitored?",
        choices: ["Daily/ Weekly/ Monthly", "When it is required", "There is no specified monitoring system"],
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
        choices: ["Yes", "Consistently", "Occasionally", "No"],
        scores: [10, 5, 2.5, 0],
      },

      //DISPATCH AND DELIVERY
      {
        question: "How would you rate the timeliness of product deliveries to customers?",
        choices: ["Excellent", "Good", "Needs improvement"],
        scores: [10, 5, 0],
      },
      {
        question: "To what extent are routes optimized to ensure efficient and timely deliveries?",
        choices: ["Highly optimized", "Somewhat optimized", "Not optimized"],
        scores: [10, 2.5, 0],
      },
      {
        question: "How well is communication maintained with customers regarding delivery schedules?",
        choices: ["Excellent communication", "Adequate communication", "Poor communication"],
        scores: [10, 5, 0],
      },
      {
        question: "Is there a regular maintenance schedule for delivery vehicles to minimize breakdowns?",
        choices: ["Yes, regularly maintained", "Occasionally maintained", "Irregular maintenance"],
        scores: [10, 5, 0],
      },
      {
        question: "How is customer feedback integrated into the improvement of delivery processes?",
        choices: ["Regularly integrated", "Occasionally integrated", "Not integrated"],
        scores: [10, 5, 0],
      },
      {
        question: "How efficiently are products organized in the warehouse to facilitate quick retrieval?",
        choices: ["Highly efficient", "Moderately efficient", "Inefficient"],
        scores: [10, 5, 0],
      },
      {
        question: "How well does the Dispatch & Delivery department coordinate with other departments?",
        choices: ["Very well", "Moderately well", "Limited coordination"],
        scores: [10, 5, 0],
      },
      {
        question: "How well are product returns handled in the dispatch and delivery process?",
        choices: ["Very well", "Acceptably", "Needs improvement"],
        scores: [10, 5, 0],
      },
      {
        question: "How well-trained are the dispatch and delivery staff in handling various situations?",
        choices: ["Highly trained", "Moderately trained", "Insufficient training"],
        scores: [10, 5, 0],
      },
      {
        question: "How satisfied are customers with the overall delivery experience?",
        choices: ["Very satisfied", "Satisfied", "Dissatisfied"],
        scores: [10, 5, 0],
      },

      //SALES & MARKETING DEPARTMENT
      {
        question: "How engaged is the company's audience on social media platforms?",
        choices: ["Highly engaged", "Moderately engaged", "Low engagement"],
        scores: [10, 5, 0],
      },
      {
        question: "How would you rate the performance of the direct sales team?",
        choices: ["Excellent", "Satisfactory", "Needs improvement"],
        scores: [10, 5, 0],
      },
      {
        question: "How successful is the Sales & Marketing department in building and maintaining brand awareness?",
        choices: ["Very successful", "Moderately successful", "Unsuccessful"],
        scores: [10, 5, 0],
      },
      {
        question: "How relevant is the content produced for both direct and social media channels?",
        choices: ["Highly relevant", "Moderately relevant", "Irrelevant"],
        scores: [10, 5, 0],
      },
      {
        question: "How is customer feedback utilized for improving sales and marketing strategies?",
        choices: ["Actively utilized", "Occasionally utilized", "Not utilized"],
        scores: [10, 5, 0],
      },
      {
        question: "How long does it typically take to convert leads into customers?",
        choices: ["Quickly", "Moderately", "Slowly"],
        scores: [10, 5, 0],
      },
      {
        question: "How effective are social media advertising campaigns in driving sales?",
        choices: ["Very effective", "Moderately effective", "Ineffective"],
        scores: [10, 5, 0],
      },
      {
        question: "To what extent is CRM utilized for managing customer relationships?",
        choices: ["Fully utilized", "Partially utilized", "Not utilized"],
        scores: [10, 5, 0],
      },
      {
        question: "How successful is the expansion of the company's social media presence?",
        choices: ["Highly successful", "Moderately successful", "Unsuccessful"],
        scores: [10, 5, 0],
      },
      {
        question: "To what extent are social media analytics used to inform marketing decisions?",
        choices: ["Extensively", "To some extent", "Not utilized"],
        scores: [10, 5, 0],
      },

      //FINANCE AND ACCOUNTS DEPARTMENT
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

      //OPERATIONS DEPARTMENT
      {
        question: "How would you rate the overall efficiency of workflows within the Operations Department?",
        choices: ["Highly efficient", "Moderately efficient", "Inefficient"],
        scores: [10, 5, 0],
      },
      {
        question: "How well are training programs implemented for employees across departments?",
        choices: ["Very well", "Adequately", "Needs improvement"],
        scores: [10, 5, 0],
      },
      {
        question: "How effective are safety measures implemented in manufacturing operations and administrative areas?",
        choices: ["Very effective", "Moderately effective", "Ineffective"],
        scores: [10, 5, 0],
      },
      {
        question: "How satisfied are employees with their work environment, including admin and IT support?",
        choices: ["Very satisfied", "Satisfied", "Dissatisfied"],
        scores: [10, 5, 0],
      },
      {
        question: "How well are cost control measures implemented in both operations and administrative functions?",
        choices: ["Very well", "Adequately", "Needs improvement"],
        scores: [10, 5, 0],
      },
      {
        question: "How well do employees adhere to HR policies and procedures?",
        choices: ["Very well", "Moderately well", "Poor adherence"],
        scores: [10, 5, 0],
      },
      {
        question: "How efficient is the procurement process for acquiring goods and services?",
        choices: ["Highly efficient", "Moderately efficient", "Inefficient"],
        scores: [10, 5, 0],
      },
      {
        question: "How scalable is the current IT infrastructure to accommodate business growth?",
        choices: ["Highly scalable", "Moderately scalable", "Not scalable"],
        scores: [10, 5, 0],
      },
      {
        question: "How well are initiatives in place to support the well-being of employees across departments?",
        choices: ["Very well", "Adequately", "Needs improvement"],
        scores: [10, 5, 0],
      },
      {
        question: "How well are change management practices implemented for operational and administrative changes?",
        choices: ["Very well", "Moderately well", "Poorly implemented"],
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
        choices: ["Very successful", "Moderately successful", "Unsuccessful"],
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

      //RESEARCH AND DEVELOPMENT

      {
        question: "Is there a designated person responsible for overseeing the Research & Development (R&D) department within your organization?",
        choices: ["Yes", "No"],
        scores: [10, 0],
      },
      {
        question: "Are you satisfied with the budget allocated to R&D activities?",
        choices: ["Very satisfied", "Satisfied", "Dissatisfied"],
        scores: [10, 5, 0],
      },
      {
        question: "How often do R&D projects meet their deadlines?",
        choices: ["Always", "Sometimes", "Rarely"],
        scores: [10, 5, 0],
      },
      {
        question: "How well does R&D collaborate with other departments?",
        choices: ["Very well", "Okay", "Not well"],
        scores: [10, 5, 0],
      },
      {
        question: "Is market research integrated into R&D for product development?",
        choices: ["Fully integrated", "Partially integrated", "Not integrated"],
        scores: [10, 5, 0],
      },
      {
        question: "How often is customer feedback used to improve R&D projects?",
        choices: ["Always", "Sometimes", "Rarely"],
        scores: [10, 5, 0],
      },
      {
        question: "How often is competitor analysis conducted by R&D?",
        choices: ["Regularly", "Occasionally", "Rarely"],
        scores: [10, 5, 0],
      },
      {
        question: "How innovative would you say the R&D department is?",
        choices: ["Highly innovative", "Moderately innovative", "Not very innovative"],
        scores: [10, 5, 0],
      },
      {
        question: "How much does R&D consider environmental impacts in product development?",
        choices: ["A lot", "Somewhat", "Not at all"],
        scores: [10, 5, 0],
      },
      {
        question: "How aligned is R&D strategy with overall business goals?",
        choices: ["Very aligned", "Somewhat aligned", "Not aligned"],
        scores: [10, 5, 0],
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
    section9: Array(10).fill(0),  
    total: 0,
  };

  export const sectionInfo = {
    section1: {
      heading: "PURCHASE DEPARTMENT",
      numQuestions: 10,
    },

    section2: {
      heading: "PRODUCTION AND MANUFACTURING",
      numQuestions: 10,
    },

    section3: {
      heading: "INVENTORY DEPARTMENT",
      numQuestions: 10,
    },

    section4: {
      heading: "DISPATCH & DELIVERY",
      numQuestions: 10,
    },

    section5: {
      heading: "SALES AND MARKETING",
      numQuestions: 10,
    },

    section6: {
      heading: "FINANCE AND ACCOUNTS",
      numQuestions: 10,
    },
  
    section7: {
      heading: "OPERATIONS DEPARTMENT",
      numQuestions: 10,
    },

    section8: {
      heading: "CLIENT RELATION MANAGEMENT",
      numQuestions: 10,
    },

    section8: {
      heading: "RESEARCH AND DEVELOPMENT",
      numQuestions: 10,
    },
  };

  