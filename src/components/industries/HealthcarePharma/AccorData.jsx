const BiotechDigitalData = [
  {
    list: "Stage 1: Data Lake Creation",
    desc: {
      para: ["We deal with the following:"],
      points: [
        "Multiple diverse Data Sources",
        "Multiple subsidiaries (e.g. Data providers)",
        "Availability of Data in multiple geographies (US, Europe, Australia, etc.)",
        "Data Lake compliance with GDPR and HIPAA",
        "Availability of Data Lake for Data Analysts to work within first 4 weeks from the beginning of the project",
      ],
    },
  },
  {
    list: "Stage 2: Ingestion and Data Quality Check",
    desc: {
      para: ["We deal with the following:"],
      points: [
        "All Data Sources are supported for processing",
        "All data (including raw data) is ingested into the pipeline for Data Quality and Validation",
        "All processed data is placed into the Data Lake available for immediate analysis",
        "Ingestion is implemented into the pipeline during the POC",
      ],
    },
  },
  {
    list: "Stage 3: Processing, ML and Analysis",
    desc: {
      para: ["We deal with the following:"],
      points: [
        "Valid Data after the ingestion is processed by the Step Functions and AWS Glue (this includes any ML transformations needed)",
        "All Processed Data is available in Data Lake for immediate analysis",
        "All Processed Data is uploaded into the Data Warehouse and available for all Data Analysts",
        "The whole pipeline is fully automated and built with multiple error retry mechanisms to be self-sufficient",
        "Logging and monitoring including notifications mechanism to be implemented during Stage 3",
        "Architecture supports scalability to handle any load required",
        "Stage 3 is complete in 8 to 12 weeks after the POC",
      ],
    },
  },
  {
    list: "Stage 4: Visualization and Reports",
    desc: {
      para: ["We deal with the following:"],
      points: [
        "All Processed Data is uploaded into Redshift for Analysis and Visualization",
        "Redshift access can be granted to any subsidiaries (e.g. stakeholders or third-party subsidiary investors that need access to data)",
        "Visualization and Reports are built on top of Redshift tables with PowerBI",
        "Stage 4 is expected to be complete within the same data frame as Stage 3 (8 to 16 weeks after the POC)",
      ],
    },
  },
];

export default BiotechDigitalData;
