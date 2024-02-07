const BiotechDigitalData = [
  {
    list: "Phase 1: Creation of Data Lake",
    desc: {
      para: ["We address the following aspects:"],
      points: [
        "Multiple diverse Data Sources",
        "Multiple subsidiaries (e.g., Data providers)",
        "Availability of Data in multiple geographies (US, Europe, Australia, etc.)",
        "Data Lake compliance with GDPR and HIPAA",
        "Data Lake made available for Data Analysts to work within the first 4 weeks from the project's initiation",
      ],
    },
  },
  {
    list: "Phase 2: Ingestion and Data Quality Check",
    desc: {
      para: [""],
      points: [
        "Support for processing all Data Sources",
        "Ingestion of all data (including raw data) into the pipeline for Data Quality and Validation",
        "Placement of all processed data into the Data Lake for immediate analysis",
        "Implementation of ingestion into the pipeline during the POC",
      ],
    },
  },
  {
    list: "Phase 3: Processing, ML, and Analysis",
    desc: {
      para: [""],
      points: [
        "Processing of valid data after ingestion using Step Functions and AWS Glue (including any ML transformations needed)",
        "Availability of all processed data in Data Lake for immediate analysis",
        "Upload of all processed data into the Data Warehouse, accessible to all Data Analysts",
        "Full automation of the entire pipeline with multiple error retry mechanisms for self-sufficiency",
        "Implementation of logging and monitoring, including a notifications mechanism, during Phase 3",
        "Architecture designed to scale and handle any required load",
        "Completion of Phase 3 within 8 to 12 weeks after the POC",
      ],
    },
  },
  {
    list: "Phase 4: Visualization and Reporting",
    desc: {
      para: [""],
      points: [
        "Upload of all processed data into Redshift for Analysis and Visualization",
        "Granting of Redshift access to subsidiaries (e.g., stakeholders or third-party subsidiary investors needing data access)",
        "Creation of Visualization and Reports on top of Redshift tables using PowerBI",
        "Expected completion of Phase 4 within the same timeframe as Phase 3 (8 to 16 weeks after the POC)",
      ],
    },
  },
];

export default BiotechDigitalData;
