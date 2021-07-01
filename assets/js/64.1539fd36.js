(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{471:function(t,a,s){"use strict";s.r(a);var e=s(26),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"r"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#r"}},[t._v("#")]),t._v(" R")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.r-project.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("R"),s("OutboundLink")],1),t._v(" is a handy language and environment for statistical computing and graphics.\nWe have already installed the latest version on your home machines.\nFor those of you running unmanaged machines on our security tier 2 may want to upgrade to the latest version using the code below:")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#install-r"}},[t._v("Install R")]),s("ul",[s("li",[s("a",{attrs:{href:"#install-using-conda"}},[t._v("Install using Conda")])]),s("li",[s("a",{attrs:{href:"#install-using-system-packages"}},[t._v("Install using system packages")])]),s("li",[s("a",{attrs:{href:"#upgrade-to-latest-r-version-4-0"}},[t._v("Upgrade to latest R version (4.0)")])]),s("li",[s("a",{attrs:{href:"#downgrade-to-a-specific-r-version-iaas-machines"}},[t._v("Downgrade to a specific R version (IAAS machines)")])])])]),s("li",[s("a",{attrs:{href:"#install-r-studio"}},[t._v("Install R Studio")]),s("ul",[s("li",[s("a",{attrs:{href:"#download-the-latest-software-version"}},[t._v("Download the latest software version")])]),s("li",[s("a",{attrs:{href:"#configure-x2go"}},[t._v("Configure X2Go")])])])]),s("li",[s("a",{attrs:{href:"#troubleshooting"}},[t._v("Troubleshooting")]),s("ul",[s("li",[s("a",{attrs:{href:"#i-cannot-create-r-tempdir"}},[t._v("I cannot create R_TempDir")])]),s("li",[s("a",{attrs:{href:"#installation-of-devtools"}},[t._v("Installation of devtools")])]),s("li",[s("a",{attrs:{href:"#rstudio-do-not-recognize-the-latest-r-version"}},[t._v("RStudio do not recognize the latest R-version")])]),s("li",[s("a",{attrs:{href:"#predictabel-matplotlib-viridis-or-plyr-fails-to-import"}},[t._v("PredictABEL, matplotlib, viridis, or plyr fails to import")])])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"install-r"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-r"}},[t._v("#")]),t._v(" Install R")]),t._v(" "),s("h3",{attrs:{id:"install-using-conda"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-using-conda"}},[t._v("#")]),t._v(" Install using Conda")]),t._v(" "),s("p",[t._v("We recommend using "),s("RouterLink",{attrs:{to:"/working-in-your-lab/analytical-tools/conda/"}},[t._v("Conda")]),t._v(" to install R packages. Conda gives you better flexibility when choosing versions, which will not affect other researchers in your lab.")],1),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("We have very easy guide on how to get "),s("RouterLink",{attrs:{to:"/working-in-your-lab/analytical-tools/saige/"}},[t._v("Saige")]),t._v(" running in Conda environment.")],1)]),t._v(" "),s("p",[t._v("If you have a conda setup based on the guide above you will need some additional channels to install the packages.\nYou will need "),s("a",{attrs:{href:"https://anaconda.org/bioconda",target:"_blank",rel:"noopener noreferrer"}},[t._v("bioconda"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://anaconda.org/conda-forge",target:"_blank",rel:"noopener noreferrer"}},[t._v("conda-forge"),s("OutboundLink")],1),t._v(" channels.\nIf you have not set channels yet make sure to add them in the same order,\nbut feel free to skip bioconda if you do not see a need for it:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("conda config --add channels bioconda\nconda config --add channels conda-forge\n")])])]),s("p",[t._v("To install R (>=4.0.3) you have to install r-base package. In the example below we create an environment where r-base is being installed as default with devtools:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("conda create --name renv --channel conda-forge  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"r-base>=4.0.3"')]),t._v(" r-devtools\n")])])]),s("p",[t._v("To be able to work with R that you just installed you have to activate your conda environment:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("conda activate renv\nR\n")])])]),s("p",[t._v("Additional R packages can be found in channels or installed using R devtools. We highly recommend to use R packages from Conda channels "),s("a",{attrs:{href:"https://anaconda.org/bioconda",target:"_blank",rel:"noopener noreferrer"}},[t._v("bioconda"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://anaconda.org/conda-forge",target:"_blank",rel:"noopener noreferrer"}},[t._v("conda-forge"),s("OutboundLink")],1),t._v(". Conda packages usually have "),s("code",[t._v("r-")]),t._v(" prefix in their names. Here is an example how to install matrix R package into renv environment:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("conda "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -n renv r-matrix\n")])])]),s("p",[t._v("If you still decide to install cran packages when using conda, then you should minimize the issues encounted by specifying the library path. For example to install png package:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("install.packages"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"png"')]),t._v(", paste0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Sys.getenv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CONDA_PREFIX"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/lib/R/library"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v("\n")])])]),s("h4",{attrs:{id:"running-multiple-version-of-r"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-multiple-version-of-r"}},[t._v("#")]),t._v(" Running multiple version of R")]),t._v(" "),s("p",[t._v("To run multiple R versions with conda environments it may be necessary\nto setup custom "),s("code",[t._v("~/.Rprofile")]),t._v(" config. You can use example below as an inspiration for setting\nyour .Rprofile config to link each R version to library paths within environment:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("condaenv "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("- Sys.getenv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CONDA_PREFIX"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("condaenv "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  .libPaths"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("paste0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Sys.getenv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CONDA_PREFIX"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/lib/R/library"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"install-using-system-packages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-using-system-packages"}},[t._v("#")]),t._v(" Install using system packages")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Install R")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" r-base r-base-dev -y\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Add the updated package repository to your sources list:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# https://cran.r-project.org/bin/linux/ubuntu/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deb https://cloud.r-project.org/bin/linux/ubuntu '),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("lsb_release -cs"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('-cran35/"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/etc/apt/sources.list.d/'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("lsb_release -cs"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('-cran35.list"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Add keys for the CRAN repository")]),t._v("\ngpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys E298A3A825C0D65DFD57CBB651716619E084DAB9\ngpg -a --export E298A3A825C0D65DFD57CBB651716619E084DAB9 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" apt-key "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Update packages")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" upgrade\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" autoremove\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Start R")]),t._v("\nR\n")])])]),s("h3",{attrs:{id:"upgrade-to-latest-r-version-4-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-to-latest-r-version-4-0"}},[t._v("#")]),t._v(" Upgrade to latest R version (4.0)")]),t._v(" "),s("p",[t._v("The default version in Ubuntu is usually a few versions behind the newest R version available. Follow the code below if you need the newest version.")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Please note")]),t._v(" "),s("p",[t._v("Running upgrade affects versions of all packages on your machine. This may break your or others environments.\nWe recommend installing new R version using "),s("RouterLink",{attrs:{to:"/working-in-your-lab/analytical-tools/r-studio/#install-using-conda"}},[t._v("Conda")]),t._v(" instead.")],1)]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -- Add the new package repository to your sources list:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deb https://cloud.r-project.org/bin/linux/ubuntu '),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("lsb_release -cs"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('-cran40/"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/etc/apt/sources.list.d/'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("lsb_release -cs"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('-cran40.list"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Add keys for the r-project repository")]),t._v("\ngpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys E298A3A825C0D65DFD57CBB651716619E084DAB9\ngpg -a --export E298A3A825C0D65DFD57CBB651716619E084DAB9 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" apt-key "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -- Update packages")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" upgrade\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" r-base\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" autoremove -y\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -- Start R")]),t._v("\nR\n")])])]),s("h3",{attrs:{id:"downgrade-to-a-specific-r-version-iaas-machines"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#downgrade-to-a-specific-r-version-iaas-machines"}},[t._v("#")]),t._v(" Downgrade to a specific R version (IAAS machines)")]),t._v(" "),s("p",[t._v("Sometimes you may want to pin your R version to a specific release to please specific packages required for your work.\nBelow are a guide on how to downgrade and pin your R version to a specific release (just in case your figured out the need "),s("em",[t._v("after")]),t._v(" you upgraded R to a new version...).\nThe guide is copied from this great "),s("a",{attrs:{href:"https://askubuntu.com/questions/1056630/r-3-5-0-not-working-on-ubuntu-18-04/1057231#1057231",target:"_blank",rel:"noopener noreferrer"}},[t._v("forum post"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Please note")]),t._v(" "),s("p",[t._v("This setup below will only work on IAAS- or BLUE-machines as they require administrator privileges.\nContact us if you need to downgrade the R version on your home machine.")])]),t._v(" "),s("h4",{attrs:{id:"save-the-r-packages-that-is-already-installed-in-your-lab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#save-the-r-packages-that-is-already-installed-in-your-lab"}},[t._v("#")]),t._v(" Save the R-packages that is already installed in your lab")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("dpkg -l "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^ii  r-"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" r_packages.txt\n")])])]),s("h4",{attrs:{id:"pin-the-software-version-to-a-specific-version-in-this-case-r-3-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pin-the-software-version-to-a-specific-version-in-this-case-r-3-5"}},[t._v("#")]),t._v(" Pin the software version to a specific version (in this case R 3.5)")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("EOF"),s("span",{pre:!0,attrs:{class:"token bash punctuation"}},[t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" /etc/apt/preferences.d/pin-r35")]),t._v("\nPackage: r-*\nPin: release a="),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("lsb_release -cs"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("-cran35\nPin: version 3.5*\nPin-Priority: 800\n\nPackage: r-cran-nlme\nPin: release a="),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("lsb_release -cs"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("-cran35\nPin: version 3.1.139-1"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("lsb_release -cs"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("0\nPin-Priority: 800\nEOF")]),t._v("\n")])])]),s("h4",{attrs:{id:"purge-and-remove-the-current-r-version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#purge-and-remove-the-current-r-version"}},[t._v("#")]),t._v(" Purge and remove the current R version")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" purge r-*\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" autoremove\n")])])]),s("h4",{attrs:{id:"re-install-your-specific-r-version-and-your-r-packages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#re-install-your-specific-r-version-and-your-r-packages"}},[t._v("#")]),t._v(" Re-install your specific R version and your r-packages")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" r_packages.txt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{print "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$2")]),t._v("}'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n")])])]),s("h4",{attrs:{id:"check-that-the-new-correct-version-is-running"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#check-that-the-new-correct-version-is-running"}},[t._v("#")]),t._v(" Check that the new correct version is running")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("R\n\nR version "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.5")]),t._v(".3 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-03-11"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" -- "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Great Truth"')]),t._v("\n")])])]),s("h4",{attrs:{id:"optional-remove-the-version-pinning"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#optional-remove-the-version-pinning"}},[t._v("#")]),t._v(" Optional, remove the version pinning")]),t._v(" "),s("p",[t._v("Remove your pin-file if you want to revert to the newest version.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" /etc/apt/preferences.d/pin-r35\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" upgrade\n")])])]),s("h2",{attrs:{id:"install-r-studio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-r-studio"}},[t._v("#")]),t._v(" Install R Studio")]),t._v(" "),s("p",[t._v("We do provide the opportunity for a graphical interface via R Studio.\nResearchers may install this on unmanaged machines.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Make sure R-Studio is not already installed, if the lab was setup before command will return path.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("which")]),t._v(" rstudio\n")])])])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Please note")]),t._v(" "),s("p",[t._v("Installation on home-machines requires us to run some code.")]),t._v(" "),s("p",[t._v("The below guide will therefore not work on home-machines.")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Dependencies")]),t._v(" "),s("p",[s("code",[t._v("Without these, it will be impossible to get RStudio to work.")])]),t._v(" "),s("ul",[s("li",[t._v("R (installed as above)")]),t._v(" "),s("li",[t._v("A machine prepared for a "),s("RouterLink",{attrs:{to:"/working-in-your-lab/technical-tools/x2go/"}},[t._v("graphical interface (X2Go)")])],1),t._v(" "),s("li",[t._v("An IAAS-machine or BLUE-machine with administrator access")])])]),t._v(" "),s("h3",{attrs:{id:"download-the-latest-software-version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#download-the-latest-software-version"}},[t._v("#")]),t._v(" Download the latest software version")]),t._v(" "),s("p",[t._v("Search "),s("a",{attrs:{href:"https://www.rstudio.com/products/rstudio/download/#download",target:"_blank",rel:"noopener noreferrer"}},[t._v("www.rstudio.com"),s("OutboundLink")],1),t._v(" for the latest version in accordance with your operating system (e.g. Ubuntu 16.04 xenial).\nThe below text is an example code which you may cut and paste into your shell:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# download the package")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://download1.rstudio.org/rstudio-xenial-1.1.463-amd64.deb -O /tmp/rstudio.deb\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install essential dependencies")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y libnss3 libasound2\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install rstudio")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" /tmp/rstudio.deb\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# clean up files")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" /tmp/rstudio.deb\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Latest version")]),t._v(" "),s("p",[t._v("If you plan to install latest version (>=1.2.0) remember to use "),s("code",[t._v("--disable-gpu")]),t._v(" parameter when running R-Studio\nor setup environment variable as mentioned in "),s("a",{attrs:{href:"https://support.rstudio.com/hc/en-us/articles/360017886674-Troubleshooting-RStudio-Rendering-Errors",target:"_blank",rel:"noopener noreferrer"}},[t._v("Troubleshooting RStudio Rendering Errors"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("h3",{attrs:{id:"configure-x2go"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-x2go"}},[t._v("#")]),t._v(" Configure X2Go")]),t._v(" "),s("p",[t._v("To automatically start RStudio, revisit your "),s("em",[t._v("Session preferences")]),t._v(" in the "),s("RouterLink",{attrs:{to:"/working-in-your-lab/technical-tools/x2go/"}},[t._v("X2Go setup")]),t._v(" and update your "),s("em",[t._v("Single application command path")]),t._v(" to "),s("code",[t._v("/usr/bin/rstudio")]),t._v("and "),s("em",[t._v("Create a session icon on the desktop...")]),t._v(".")],1),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[t._v("There is a known bug in x2go "),s("code",[t._v("1.1.456")]),t._v(" that will go away if you comment out (add # before) a line in the x2goagent.options:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/x2go/x2goagent.options\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# X2GO_NXAGENT_DEFAULT_OPTIONS+=" -extension BIG-REQUESTS"')]),t._v("\n")])])])]),t._v(" "),s("h2",{attrs:{id:"troubleshooting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),s("h3",{attrs:{id:"i-cannot-create-r-tempdir"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#i-cannot-create-r-tempdir"}},[t._v("#")]),t._v(" I cannot create R_TempDir")]),t._v(" "),s("p",[t._v("If your system disk is full, R will not be able to store temporary files used for computation. You may see the error message "),s("strong",[s("code",[t._v("Fatal error: cannot create 'R_TempDir'")])]),t._v(". "),s("RouterLink",{attrs:{to:"/faq/storage/#how-can-i-see-the-sizes-of-my-lab-volumes"}},[t._v("Click here")]),t._v(" to verify if the disk disk is full, and this guide to change your temp folder to a larger volume.")],1),t._v(" "),s("h3",{attrs:{id:"installation-of-devtools"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation-of-devtools"}},[t._v("#")]),t._v(" Installation of devtools")]),t._v(" "),s("p",[t._v("You may need to install some more dependencies to get "),s("code",[t._v('install.packages("devtools")')]),t._v(" going:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" libcurl4-openssl-dev libssh2-1-dev libssl-dev libxml2-dev\n")])])]),s("h3",{attrs:{id:"rstudio-do-not-recognize-the-latest-r-version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rstudio-do-not-recognize-the-latest-r-version"}},[t._v("#")]),t._v(" RStudio do not recognize the latest R-version")]),t._v(" "),s("p",[t._v("Since R versions can be installed side-by-side on a system, you may need to select which version of R you would like RStudio to use. Click the "),s("a",{attrs:{href:"https://support.rstudio.com/hc/en-us/articles/200486138-Changing-R-versions-for-RStudio-desktop",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chaning R versions for RStudio desktop"),s("OutboundLink")],1),t._v(" on the RStudio support pages for more information.")]),t._v(" "),s("h3",{attrs:{id:"predictabel-matplotlib-viridis-or-plyr-fails-to-import"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#predictabel-matplotlib-viridis-or-plyr-fails-to-import"}},[t._v("#")]),t._v(" PredictABEL, matplotlib, viridis, or plyr fails to import")]),t._v(" "),s("p",[t._v("If running "),s("code",[t._v("library(PredictABEL)")]),t._v(" in rstudio server fails with:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("Error: package or namespace load failed "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'PredictABEL'")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v("\n .onLoad failed "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" loadNamespace"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tcltk'")]),t._v(", details:\n  call: fun"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("libname, pkgname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  error: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("converted from warning"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" couldn't connect to display "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('":0"')]),t._v("\n")])])]),s("p",[t._v("You need to install these packages related to tcl and tk:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" tcl tcl8.6 tk tk-table tk8.6\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);