(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{242:function(t,e,a){"use strict";a.r(e);var o=a(0),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"matlab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#matlab"}},[t._v("#")]),t._v(" Matlab")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.mathworks.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Matlab"),a("OutboundLink")],1),t._v(" is a computing environment developed by MatWorks for efficient matrix manipulations and other handy computing tools.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("These steps guide the installation of Matlab on unmanaged "),a("router-link",{attrs:{to:"/faq/compute/#machine-types"}},[t._v("iaas or blue")]),t._v(" machines. "),a("a",{attrs:{href:"/contat"}},[t._v("Contact us")]),t._v(" for installations on your "),a("router-link",{attrs:{to:"/faq/compute/#machine-types"}},[t._v("home machine")]),t._v(".")],1)]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Dependencies")]),t._v(" "),a("ul",[a("li",[t._v("An unmanaged iaas or blue machine where you have root access.")]),t._v(" "),a("li",[t._v("Installation of "),a("router-link",{attrs:{to:"/working-in-your-lab/technical-tools/x2go/"}},[t._v("X2Go server")]),t._v(" on this machine.")],1),t._v(" "),a("li",[t._v("Access to Matlab software binaries for Linux from your organizaton.")]),t._v(" "),a("li",[t._v("Access to a Matlab license for the users in your lab.")])])]),t._v(" "),a("h2",{attrs:{id:"download"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download"}},[t._v("#")]),t._v(" Download")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Download the Matlab software on your local computer (client).")]),t._v(" "),a("p",[t._v("For NTNU users, log into "),a("a",{attrs:{href:"https://software.ntnu.no/ntnu/Matlab",target:"_blank",rel:"noopener noreferrer"}},[t._v("NTNU's software repository for Matlab"),a("OutboundLink")],1),t._v(",\nchoose your desired version in the top right corner and download on your local computer.\nWe recommend that you skip the latest version and choose a slightly older version to ensure a reliable installation.")])]),t._v(" "),a("li",[a("p",[t._v("Transfer Matlab to your preferred folder in your lab machine, for example /mnt/work/software/Matlab/)")])]),t._v(" "),a("li",[a("p",[t._v("Unpack the zip file in your folder.")]),t._v(" "),a("p",[t._v("Install software:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v("\n")])])]),a("p",[t._v("Unzip:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Matlabfile.zip"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Make all files in folder executables: "),a("code",[t._v("chmod -R 777 <Matlab-folder>")]),t._v(". This is a primitive fix so you are able to run the files within subfolders as required by Matlab.")])])]),t._v(" "),a("h2",{attrs:{id:"activate-license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#activate-license"}},[t._v("#")]),t._v(" Activate license")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("For NTNU users, the exact content of this files is described in "),a("a",{attrs:{href:"https://software.ntnu.no/ntnu/Matlab",target:"_blank",rel:"noopener noreferrer"}},[t._v("NTNU's repository for Matlab"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("ul",[a("li",[t._v("Create a file named "),a("code",[t._v("license.dat")]),t._v(" with your license information. The content of this file is dependent on your organizations license. The example below will need you to replace "),a("code",[t._v("<license-server-address>")]),t._v(", "),a("code",[t._v("<key1>")]),t._v(" and "),a("code",[t._v("<key2>")]),t._v(" with an url-address and strings provided by your host institutions license page.:")])]),t._v(" "),a("div",{staticClass:"language-ini extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[t._v("SERVER <license-server-address> <key1> <key2>\nUSE_SERVER\n\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v('Make sure you add a new/empty line after "USE_SERVER".')])]),t._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),a("p",[t._v("The below steps require the code to be run in "),a("code",[t._v("xterm")]),t._v(" started from X2GO on the machine holding the Matlab files downloaded in the above steps.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Go to your Matlab folder and run the installer:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo ./install\n")])])])]),t._v(" "),a("li",[a("p",[t._v("During the install choose: "),a("code",[t._v("Use a File Installation Key")])])]),t._v(" "),a("li",[a("p",[t._v("Choose "),a("code",[t._v("I have the File Installation Key for my license")]),t._v(" and enter the key (these are found on you software repository)")])]),t._v(" "),a("li",[a("p",[t._v("Follow the installer and choose the packages you want.")])]),t._v(" "),a("li",[a("p",[t._v("When the installer ask for your product activation, choose the "),a("code",[t._v("non internet")]),t._v(" option and provide the location of the "),a("code",[t._v("license.dat")]),t._v(" file previously generated.")])]),t._v(" "),a("li",[a("p",[t._v('If successful, your should see a "product activation message".')])])]),t._v(" "),a("h2",{attrs:{id:"run"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[t._v("#")]),t._v(" Run")]),t._v(" "),a("ul",[a("li",[t._v("If you prefer Matlab's graphical interface, run "),a("code",[t._v("Matlab")]),t._v(" in your terminal ("),a("code",[t._v("xterm")]),t._v(") started in X2GO.")]),t._v(" "),a("li",[t._v("If you're fine with command lines, run "),a("code",[t._v("Matlab")]),t._v(" directly in your shell.")])]),t._v(" "),a("p",[t._v("With a little bit of luck, it's now time to celebrate with fresh coffee running your favourite test code on the fresh Matlab. If not, here's some of our known issues:")]),t._v(" "),a("h2",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),a("h3",{attrs:{id:"why-can-t-matlab-find-the-packages-i-choose-to-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-can-t-matlab-find-the-packages-i-choose-to-install"}},[t._v("#")]),t._v(" Why can't Matlab find the packages I choose to install?")]),t._v(" "),a("p",[t._v("One known issue is that sometimes the latest Matlab version compiled by some universities do miss some packages. Try to install a slightly older version. "),a("a",{attrs:{href:"/contact"}},[t._v("Contact us")]),t._v(" for assistance if this do not work.")]),t._v(" "),a("h3",{attrs:{id:"can-i-install-the-code-without-sudo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#can-i-install-the-code-without-sudo"}},[t._v("#")]),t._v(" Can I install the code without sudo?")]),t._v(" "),a("p",[t._v("No, not in an easy way. Thus, either we have to install on "),a("code",[t._v("home")]),t._v(" machines, or your can install these yourself on unmanaged iaas and blue machines where you get root. "),a("a",{attrs:{href:"/contact"}},[t._v("Contact us")]),t._v(" if you need Matlab on your home machine.")]),t._v(" "),a("h3",{attrs:{id:"my-product-activation-do-not-seem-to-work"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#my-product-activation-do-not-seem-to-work"}},[t._v("#")]),t._v(" My product activation do not seem to work?")]),t._v(" "),a("p",[t._v("We need to open for traffic from your lab to your organization's license server. "),a("a",{attrs:{href:"/contact"}},[t._v("Contact us")]),t._v(" for network openings.")])])}),[],!1,null,null,null);e.default=s.exports}}]);