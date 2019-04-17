(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{353:function(e,t,o){"use strict";o.r(t);var a=o(43),r=Object(a.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h4",{attrs:{id:"use-run-from-zip-without-azure-storage-to-deploy-a-site-to-azure-web-apps-or-functions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#use-run-from-zip-without-azure-storage-to-deploy-a-site-to-azure-web-apps-or-functions","aria-hidden":"true"}},[e._v("#")]),e._v(" Use Run-From-Zip without Azure Storage to deploy a site to Azure Web Apps or Functions")]),e._v(" "),o("p",[o("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks134/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yesterday"),o("OutboundLink")],1),e._v(" I discussed a feature that gives you the ability to deploy a site to Azure Web Apps or Azure Functions from a zip file. It is called "),o("strong",[e._v("Run-From-Zip")]),e._v(" which you simply point to the location in your App Settings and it automatically gets mounted on wwwroot as read-only.")]),e._v(" "),o("p",[e._v("The one requirement that it had was that you need an Azure Storage Blob Container. If you don't want to do that than an alternative approach is to host the files on Kudu.")]),e._v(" "),o("p",[e._v("Open Kudu and create a "),o("code",[e._v("home\\data\\SitePackages")]),e._v(" folder, and drop your zip file in there.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/azkudu1.png")}}),e._v(" "),o("p",[e._v("Create a file named "),o("code",[e._v("packagename.txt")]),e._v(" and give it the name of your zip file.")]),e._v(" "),o("p",[e._v("Mine looks like the following "),o("code",[e._v("mcsample.zip")])]),e._v(" "),o("p",[e._v("In "),o("strong",[e._v("Azure App Settings")]),e._v(", set "),o("code",[e._v("WEBSITE_RUN_FROM_ZIP")]),e._v(" to "),o("code",[e._v("1")]),e._v(" instead of the full path that we used yesterday with Azure Storage Blob Container.")])])},[],!1,null,null,null);t.default=r.exports}}]);