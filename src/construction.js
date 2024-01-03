export const constructionQN = {
    questions: [
      {
        question: "Is there a Responsible person/party available for Purchase?",
        choices: ["A dedicated person is available", "Assigned with another profile", "MD/Promoter", "No Assigned Persons"],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "Is there a Purchase Requisition system available? If Yes, How do you typically prepare the Purchase Request?",
        choices: ["ERP/EMAIL/PHYSICAL Document", "Verbal Communication Only", "None"],
        scores: [10, 2.5, 0],
      },
      {
        question: "Are you able to get the proper clarity in the product information required to prepare the PR?",
        choices: ["Yes", "Mostly", "Somewhat", "No"],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "Can you provide/get timely approvals?",
        choices: ["Always", "Frequently", "Occasionally", "Rarely"],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "Do you ensure that the proposed purchase aligns with the allocated purchase budget or plan?",
        choices: ["Always", "Frequently", "Occasionally", "Rarely"],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "Do you face any Difficulties in Including all relevant informations in Purchase Orders?",
        choices: ["Rarely", "Occasionally", "Frequently", "Always"],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "How do you receive goods in accordance with the purchase order?",
        choices: ["Physical Inspection & Cross checking with GRN", "Cross check with GRN Only", "Others", "None"],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "Are there any steps available to identify missing or damaged items?",
        choices: ["YES", "Somewhat", "NIL"],
        scores: [10, 2.5, 0],
      },
      {
        question: "How do you maintain the record of transactions, including invoices and receipts?",
        choices: ["Hardcopy & Softcopy filing", "Somewhat keeping docs but not in a required way", "Not Maintaining any records"],
        scores: [10, 5, 0],
      },
      {
        question: "Do you follow a properly documented purchase policy?",
        choices: ["YES", "Somewhat", "NO"],
        scores: [10, 2.5, 0],
      },

      //INVENTORY DEPARTMENT
      {
        question: "How would you rate the effectiveness of the current inventory management system?",
        choices: ["Highly effective", "Moderately effective", "Somewhat Effective", "Ineffective"],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "How accurate is the stock count in comparison to the recorded inventory levels?",
        choices: ["Very accurate", "Moderately accurate", "Somewhat Effective", "Inaccurate"],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "How well are relationships managed with suppliers to ensure timely and accurate deliveries?",
        choices: ["Very well", "Good", "Adequately", "Poorly"],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "Is there a Responsible person/party available to Monitor and Control the Process?",
        choices: ["A dedicated person is available", "Assigned with another profile", "MD/Promoter", "No Assigned Persons"],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "How well is emergency stock handled to meet unexpected demand?",
        choices: ["Very well", "Good", "Adequately", "Poorly"],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "How is the quality of inventory items ensured within the inventory management process?",
        choices: ["Rigorous quality control", "Moderate quality control", "Limited quality control", "No Quality Control"],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "How are supplier performances evaluated concerning their impact on inventory management?",
        choices: ["Regularly evaluated", "Occasionally evaluated", "Rarely", "Not evaluated"],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "How organized and comprehensive are documentation practices related to inventory transactions?",
        choices: ["Very organized", "Moderately organized", "Limitedly Organized", "Not Organized"],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "How well does the inventory department collaborate with Project Management?",
        choices: ["Very well", "Moderately well", "Limited collaboration", "No Collaboration"],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "How well is the Stock Keeping or Store Operations",
        choices: ["Very well", "Good", "Adequately", "Poorly"],
        scores: [10, 5, 2.5, 0],
      },

      //MARKETING DEPARTMENT
      {
        question: "How regularly does the Marketing Department conduct market research to understand industry trends and customer preferences?",
        choices: ["Regularly", "Occasionally", "Rarely", "Nil"],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "How well-defined is the customer segmentation strategy employed by the Marketing Department?",
        choices: ["Very well-defined", "Well Defined", "Moderately defined", "Undefined"],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "How frequently does the Marketing Department analyze competitors to identify strengths, weaknesses, opportunities, and threats?",
        choices: ["Frequently", "Occasionally", "Rarely", "Nil"],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "How would you describe the current perception & positioning of the company's brand in the market?",
        choices: ["Positive", "Neutral", "Negative"],
        scores: [10, 5, 0],
      },
      {
        question: "How strong is the company's digital marketing presence (e.g., website, social media)?",
        choices: ["Strong", "Moderate", "Weak", "Nil"],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "How effective is the Marketing Department in generating leads for the sales team?",
        choices: ["Highly effective", "Moderately effective", "Rarely effective", "Ineffective"],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "How effective are the strategies employed by the Marketing Department during product launches?",
        choices: ["Highly effective", "Moderately effective", "Rarely effective", "Ineffective"],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "How impactful is the company's marketing strategy?",
        choices: ["Highly effective", "Moderately effective", "Rarely effective", "Ineffective"],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "How well-defined are the strategies employed by the Marketing Department for customer retention?",
        choices: ["Very well-defined", "Moderately defined", "Undefined"],
        scores: [10, 2.5, 0],
      },
      {
        question: "How impactful are the company's participations in industry events and trade shows?",
        choices: ["Very impactful", "Moderately impactful", "Ineffective"],
        scores: [10, 2.5, 0],
      },

      //SALES DEPARTMENT
      {
        question: "Is there any responsible person for monitoring sales activities of the organization?",
        choices: ["A dedicated person available", "MD/management team", "No specified person available"],
        scores: [10, 5, 0],
      },
      {
        question: "How often do sales representatives interact with customers?",
        choices: ["Frequently", "Occasionally", "Rarely", "No"],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "How would you rate the sales team's knowledge about the projects/products/services?",
        choices: ["Excellent", "Good", "Needs improvement", "Nil"],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "How consistently does the sales team meet or exceed sales targets?",
        choices: ["Consistently", "Occasionally", "Rarely", "Nil"],
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

      //HR AND ADMIN DEPARTMENT
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

      //PROJECT MANAGEMENT

      {
        question: "Is there any responsible person for monitoring project management activities of the organization?",
        choices: ["A dedicated person is available", "Assigned to another profile", "MD/Promoter", "No Assigned Persons"],
        scores: [10, 5, 2.5, 0],
      },
      {
        question: "How effective is the current project planning process?",
        choices: ["Very effective", "Moderately effective", "Ineffective"],
        scores: [10, 2.5, 0],
      },
      {
        question: "How often do projects adhere to planned timelines?",
        choices: ["Consistently", "Occasionally", "Rarely"],
        scores: [10, 2.5, 0],
      },
      {
        question: "How streamlined is the design approval process before construction?",
        choices: ["Very streamlined", "Moderately streamlined", "Lengthy and complex"],
        scores: [10, 2.5, 0],
      },
      {
        question: "How well are risk management strategies implemented in projects?",
        choices: ["Very well", "Adequately", "Poorly implemented"],
        scores: [10, 2.5, 0],
      },
      {
        question: "How satisfied are clients with communication during project execution?",
        choices: ["Very satisfied", "Satisfied", "Dissatisfied"],
        scores: [10, 2.5, 0],
      },
      {
        question: "How adaptable are project plans to changes in requirements or unexpected challenges?",
        choices: ["Very adaptable", "Somewhat adaptable", "Resistant to changes"],
        scores: [10, 2.5, 0],
      },
      {
        question: "Is there a systematic approach to measuring client satisfaction after project completion?",
        choices: ["Yes, always", "Occasionally", "No"],
        scores: [10, 2.5, 0],
      },
      {
        question: "How would you rate the effectiveness of our current quality control practices in ensuring project standards?",
        choices: ["Highly effective", "Moderately effective", "Ineffective"],
        scores: [10, 2.5, 0],
      },
      {
        question: "How regularly are quality inspections conducted during different phases of the construction project?",
        choices: ["Regularly", "Occasionally", "Rarely"],
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
      heading: "PROJECT MANAGEMENT",
      numQuestions: 10,
    },
  };
