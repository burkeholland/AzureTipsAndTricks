(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{387:function(e,t,a){"use strict";a.r(t);var o=a(43),r=Object(o.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h4",{attrs:{id:"azure-table-storage-and-azure-cosmos-db"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#azure-table-storage-and-azure-cosmos-db","aria-hidden":"true"}},[e._v("#")]),e._v(" Azure Table Storage and Azure Cosmos DB")]),e._v(" "),a("p",[e._v("Before you dive into this article, keep in mind that this is not a comparison and use what you feel is right for your scenario.")]),e._v(" "),a("h4",{attrs:{id:"azure-table-storage-in-a-nutshell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#azure-table-storage-in-a-nutshell","aria-hidden":"true"}},[e._v("#")]),e._v(" Azure Table Storage in a nutshell")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://azure.microsoft.com/services/storage/tables/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Table Storage"),a("OutboundLink")],1),e._v(" offers a NoSQL key-value store for semi-structured data.\nUnlike a traditional relational database, each entity (such as a row - in relational database terminology) can have a different structure, allowing your application to evolve without downtime to migrate between schemas.")]),e._v(" "),a("h4",{attrs:{id:"azure-cosmos-db-in-a-nutshell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#azure-cosmos-db-in-a-nutshell","aria-hidden":"true"}},[e._v("#")]),e._v(" Azure Cosmos DB in a nutshell")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://azure.microsoft.com/services/cosmos-db/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cosmos DB"),a("OutboundLink")],1),e._v(" is a multimodal database service designed for global use in mission-critical systems. Not only does it expose a Table API, it also has a SQL API, Apache Cassandra, MongoDB, Gremlin and Azure Table Storage. These allow you to easily swap out existing dbs with a Cosmos DB implementation.")]),e._v(" "),a("h4",{attrs:{id:"performance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#performance","aria-hidden":"true"}},[e._v("#")]),e._v(" Performance")]),e._v(" "),a("p",[e._v("Azure Table Storage has no upper bound on latency. Cosmos DB defines latency of single-digit milliseconds for reads and writes along with operations at sub-15 milliseconds at the 99th percentile worldwide. (That was a mouthful) Throughput is limited on Table Storage to 20,000 operations per second. On Cosmos DB, there is no upper limit on throughput, and more than 10 million operations per second are supported. Unlike Table Storage, Cosmos DB automatically indexes on all properties, and queries can take advantage of this to improve performance.")]),e._v(" "),a("h4",{attrs:{id:"global-distribution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#global-distribution","aria-hidden":"true"}},[e._v("#")]),e._v(" Global Distribution")]),e._v(" "),a("p",[e._v("Azure Table Storage supports a single region with an optional read-only secondary region for availability. Cosmos DB supports distribution from 1 to more than 30 regions with automatic failovers worldwide. You can easily manage this from the Azure portal and define the failover behavior. Five defined consistency levels allow you to select the right balance between availability, latency, throughput, and consistency.")]),e._v(" "),a("h4",{attrs:{id:"billing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#billing","aria-hidden":"true"}},[e._v("#")]),e._v(" Billing")]),e._v(" "),a("p",[e._v("Azure Table Storage uses storage volume to determine billing. It is priced per GB and the rates vary depending on the redundancy level selected. Pricing is tiered to get progressively cheaper per GB the more storage you use. Operations incur a charge measured per 10,000 transactions. All operation types are treated the same.")]),e._v(" "),a("p",[e._v("For Cosmos DB, throughput is measured in request units (RU)is also billed. The database is provisioned with a level of throughput in increments of 100 RU per second. These are billed hourly and you can elastically scale to meet changes in workload. This is in addition to a storage rate at a higher price per GB. Therefore, if your requirements are more modest and you don't have the need for the additional performance and redundancy options, Azure Table Storage could be an option. But this may seem like something that's very difficult to calculate, but there is an online tool that makes it easy for you to estimate costs.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/azure-cosmos-planner.png")}}),e._v(" "),a("p",[e._v("Calculator for estimating request units and data storage can be found at : https://www.documentdb.com/capacityplanner.")]),e._v(" "),a("h4",{attrs:{id:"consistent-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consistent-api","aria-hidden":"true"}},[e._v("#")]),e._v(" Consistent API")]),e._v(" "),a("p",[e._v("Both Azure Table Storage and Azure Cosmos DB support the same "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/cosmos-db/table-introduction",target:"_blank",rel:"noopener noreferrer"}},[e._v("Table API"),a("OutboundLink")],1),e._v(". SDKs are available for common programming environments along with a generic REST API. Because Cosmos DB exposes a superset of functionality, there are some overloaded API methods to specify additional options. The common API makes it easier to migrate a solution from Azure Table Storage to Cosmos DB as it grows. It also makes learning the API easier. You can target Azure Table Storage, Azure Cosmos DB, or the Azure storage emulator running location by simply replacing the connection string.")]),e._v(" "),a("h4",{attrs:{id:"a-code-sample"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-code-sample","aria-hidden":"true"}},[e._v("#")]),e._v(" A Code Sample")]),e._v(" "),a("p",[e._v("Sometimes I like to just look at the code vs. writing a full app and here is an example of accessing the Table API mentioned above.")]),e._v(" "),a("p",[e._v("In code, I'd create an instance of "),a("strong",[e._v("CloudStorageAccount")]),e._v(" passing your connection string. Then, from this object, you can call "),a("strong",[e._v("CreateCloudTableClient()")]),e._v(" to return the "),a("strong",[e._v("CloudTableClient")]),e._v(" object that can work with the Table Storage or Cosmos DB instance. To create a new table requires just two further lines of code: first, "),a("strong",[e._v("GetTableReference(tablename)")]),e._v("; then, call "),a("strong",[e._v("CreateIfNotExists")]),e._v(" on the returned "),a("strong",[e._v("CloudTable")]),e._v(".")]),e._v(" "),a("p",[e._v("To create entities to store in your table, they have to be classes derived from "),a("strong",[e._v("TableEntity")]),e._v(". This base class handles the serialization of the entity into a format that can be stored in the database. It also has standard properties for "),a("strong",[e._v("PartitionKey")]),e._v(" and "),a("strong",[e._v("RowKey")]),e._v(" that provide a unique identity for the item.")]),e._v(" "),a("p",[e._v("An individual operation on the table is performed with either a "),a("strong",[e._v("TableOperation")]),e._v(" or a "),a("strong",[e._v("TableBatchOperation")]),e._v(" for multiple items. You create a new operation, set up the actions to perform, and then call Execute on the "),a("strong",[e._v("CloudTable")]),e._v(" passing the operation object.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('EmployeeEntity employee1 = new EmployeeEntity("Case", "Justin");\nemployee1.Email = "justin@contoso.com";\nemployee1.PhoneNumber = "425-555-0101";\n\n// Create the TableOperation object that inserts the employee entity.\nTableOperation insertOperation = TableOperation.Insert(employee1);\n\n// Execute the insert operation.\ntable.Execute(insertOperation);\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("p",[e._v("In addition to "),a("strong",[e._v("Insert")]),e._v(", "),a("strong",[e._v("Retrieve")]),e._v(", "),a("strong",[e._v("Replace")]),e._v(", and "),a("strong",[e._v("Delete")]),e._v(" operations, there is an "),a("strong",[e._v("InsertOrReplace")]),e._v(" operation that will overwrite an entity matching the partition and row key.")]),e._v(" "),a("h4",{attrs:{id:"migration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migration","aria-hidden":"true"}},[e._v("#")]),e._v(" Migration")]),e._v(" "),a("p",[e._v("If you have existing data in Azure Table Storage, you can migrate it to Cosmos DB using the "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/cosmos-db/import-data",target:"_blank",rel:"noopener noreferrer"}},[e._v("Data Migration tool"),a("OutboundLink")],1),e._v(" or "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy",target:"_blank",rel:"noopener noreferrer"}},[e._v("AzCopy"),a("OutboundLink")],1),e._v(". Cosmos also supports import from other databases such as MongoDB. You may choose to start development with Table Storage and then migrate to Cosmos as your requirements evolve. Because the API is the same there is no impact to the code you write.")]),e._v(" "),a("h4",{attrs:{id:"wrapping-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wrapping-up","aria-hidden":"true"}},[e._v("#")]),e._v(" Wrapping up")]),e._v(" "),a("p",[e._v("So far we've covered a lot of information, this handy table below should help make sense of it all.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th"),e._v(" "),a("th",[e._v("Azure Table Storage")]),e._v(" "),a("th",[e._v("Azure Cosmos DB")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Throughput")]),e._v(" "),a("td",[e._v("Up to 20K operations per second")]),e._v(" "),a("td",[e._v("No upper limit, supports >10M operations per second")])]),e._v(" "),a("tr",[a("td",[e._v("Redundancy")]),e._v(" "),a("td",[e._v("One optional secondary read-only region")]),e._v(" "),a("td",[e._v("Multiple configurable worldwide regions")])]),e._v(" "),a("tr",[a("td",[e._v("Latency")]),e._v(" "),a("td",[e._v("No upper bounds")]),e._v(" "),a("td",[e._v("Single-digit milliseconds")])]),e._v(" "),a("tr",[a("td",[e._v("Consistency")]),e._v(" "),a("td",[e._v("Strong and Eventual consistency models")]),e._v(" "),a("td",[e._v("Five defined consistency models")])]),e._v(" "),a("tr",[a("td",[e._v("Query")]),e._v(" "),a("td",[e._v("Optimized for query on primary key")]),e._v(" "),a("td",[e._v("Improved query performance because all fields are indexed")])]),e._v(" "),a("tr",[a("td",[e._v("Failover")]),e._v(" "),a("td",[e._v("Can't initiate failover")]),e._v(" "),a("td",[e._v("Automatic and manual failovers")])]),e._v(" "),a("tr",[a("td",[e._v("Billing")]),e._v(" "),a("td",[e._v("Storage-based")]),e._v(" "),a("td",[e._v("Throughput-based")])])])]),e._v(" "),a("p",[e._v("Cosmos DB is a superset of the Azure Table Storage functionality. You will choose Cosmos DB when you need multiple region redundancy, the highest throughput, minimal latency, or control of failover scenarios. You can learn more about the differences between Azure Table Storage and Cosmos DB, along with the Table API "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/cosmos-db/table-introduction",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Thanks for reading and until next time! MC signing off.")])])},[],!1,null,null,null);t.default=r.exports}}]);