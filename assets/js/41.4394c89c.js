(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{250:function(a,e,s){"use strict";s.r(e);var t=s(0),r=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"_7z"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7z"}},[a._v("#")]),a._v(" 7z")]),a._v(" "),s("p",[a._v("This guide explain how you can install, compress and decompress archives with the "),s("a",{attrs:{href:"https://www.7-zip.org/7z.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("7z"),s("OutboundLink")],1),a._v(" software, such as zip files.")]),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#install-the-software"}},[a._v("Install the software")])]),s("li",[s("a",{attrs:{href:"#extract-an-archive"}},[a._v("Extract an archive")])]),s("li",[s("a",{attrs:{href:"#compress-small-folders"}},[a._v("Compress small folders")])]),s("li",[s("a",{attrs:{href:"#compress-large-folders"}},[a._v("Compress large folders")])])])]),s("p"),a._v(" "),s("h2",{attrs:{id:"install-the-software"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-the-software"}},[a._v("#")]),a._v(" Install the software")]),a._v(" "),s("p",[a._v("Install the 7z software on your lab machine.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" p7zip-full\n")])])]),s("h2",{attrs:{id:"extract-an-archive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extract-an-archive"}},[a._v("#")]),a._v(" Extract an archive")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("7za e "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("myfile"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(".7z\n")])])]),s("p",[a._v("or")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("7za e "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("myfile"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(".zip\n")])])]),s("h2",{attrs:{id:"compress-small-folders"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compress-small-folders"}},[a._v("#")]),a._v(" Compress small folders")]),a._v(" "),s("p",[a._v("This command allow you to compress and encrypt a folder:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("7za a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("filename-for-new-file.7z"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("lab-folder"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" -p"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("ul",[s("li",[s("strong",[s("code",[a._v("<filename-for-new-file.7z>")])]),a._v(" - Replace this with the name for you new compressed archive.")]),a._v(" "),s("li",[s("strong",[s("code",[a._v("<lab-folder>")])]),a._v(" - Replace this with the path of the folder (or file) in your lab that will be compressed, for example "),s("strong",[s("code",[a._v("/mnt/cargo/export-folder/")])]),a._v(".")]),a._v(" "),s("li",[s("strong",[s("code",[a._v("<key>")])]),a._v(" - Replace this with the key (passphrase) that you will use to encrypt your archive and the receiever will use to decompress your archive. We recommend that your choose a "),s("router-link",{attrs:{to:"/getting-started/configure-ssh/#_3-2-design-a-passphrase"}},[a._v("passphrase")]),a._v(" of at least 12 characters.")],1)]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("Key transfer")]),a._v(" "),s("p",[a._v("Always transfer your key in a separate channel than your file. For example, you may consider to transfer files directly over SSH or filesender.no and keys over the encrypted mobile app Signal.")])]),a._v(" "),s("h2",{attrs:{id:"compress-large-folders"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compress-large-folders"}},[a._v("#")]),a._v(" Compress large folders")]),a._v(" "),s("p",[a._v("For larger folders we recommend to split your compressed file into several parts for easier transfers. The code below split your folder into 100G chunks:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("7za a -v100G "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("filename-for-new-file.7z"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("lab-folder"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" -p"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);