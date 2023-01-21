---
title: FAQ
category: Workbench
permalink: /working-in-your-lab/hunt-workbench/faq
sidebarDepth: 1
description: Frequently asked questions about Workbench in HUNT Lab.
---

# Workbench FAQ

**This page contain frequently asked questions about Workbench. Help us expand this section by [sending us questions and ideas](/contact) for new content.**

[[toc]]

::: tip Troubleshooting

Head over to our [Workbench troubleshooting](/working-in-your-lab/hunt-workbench/troubleshooting/) section if something is not working as expected.

:::

## Storage

### Where is my data?

Workbench uses the same storages volumes as your home machine. This means that you can access all lab data, including your home directory, using the same paths in your scripts, for example:

```bash
/mnt/archive/<my-data-folder>
```

### Where is my Workbench code stored?

Jupyter Notebooks and code are stored in the shared `work` volume on your home machine:

```bash
/mnt/work/workbench
```

## Reproducibility

### Can I create my own Conda environment for Jupyter?

Yes. Here's an example on how you create a Conda environments with Python and IPython kernel in [Workbench terminal](/working-in-your-lab/workbench/faq/#terminal):

```
conda create -n <name> 'python~=3.10.*' 'ipykernel'
```

And here's an example on how you create a Conda environment with R and R-IRkernel kernel and commonly used packages:

```
conda create -n <name> 'r-base>=4.0,<5.0' 'r-irkernel' 'r-devtools' 'r-remotes' 'r-dplyr' 'r-tidyverse' 'r-haven'
```

### How can I start a Notebook with my new Conda environment?

Here is an example of Notebooks that are connected to Conda environments.

![wb_notebook_envs.png](./images/wb_notebook_envs.png)

### How do I change the Conda environment for my Notebook?

You can change Conda environment of your Jupyter Notebook when it is open, by switching the kernel in the top right corner of menu:

![wb_notebook_kernel.png](./images/wb_notebook_kernel.png)

You will be able to select default environments including MATLAB kernel and custom environments which contain either `ipykernel` (Python) or `r-irkernel` (R 4.0):

![wb_notebook_conda_env.png](./images/wb_notebook_conda_env.png)

### Can others use packages I have installed?

Not directly. The packages you install in your Workbench are usually not shared. The separation prevent others from breaking your packages, for example during upgrades. However, you may utilize the powers of Conda to export the definition of your environments so others can use restore function to be able to use the very same packages that you use. Learn how to manage environments on [docs.conda.io](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html) or skip directly to [sharing an environment guide](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#sharing-an-environment).

### How can I install apt packages?

We recommend that instead of using apt, you install your packages using Conda into your environment since these will be installed on disk and such be persistent during restarts (regular apt commands run in terminal will be removed during your next restart). Search [Conda repository](https://anaconda.org/) to identify your package name and get going with your installation.

Example with [plink2](https://anaconda.org/bioconda/plink2) package:

```
conda install -n default -c bioconda -y plink2
conda activate default
plink2 --help
```

## Management

### How can I restart my Workbench environment?

Sometimes you might want to start over with a fresh environment:

(1) Select control panel in top right corner:

![wb_topbar_cp.png](./images/wb_topbar_cp.png)

(2) Then in the control panel hit stop server:

![wb_cp_stopserver.png](./images/wb_cp_stopserver.png)

You can either start the new instance by hitting the button or by logging in again.

### Can I install Jupyter extensions?

No. Due to security reasons, this is currently not allowed and the Jupyter extension manager is disabled. Feel free to reach out to us on Slack so we can discuss adding useful extensions into your Workbench.

## MATLAB

### Are there any limitations to MATLAB in Workbench?

Yes, some limitations to web-based version of MATLAB may apply. Read more in the [official documentation](https://se.mathworks.com/products/matlab-online/limitations.html) from MathWorks.

### How do I report issues with MATLAB?

Try to note down times when the issues occurred and collect the error logs from Status information window.
Additionally you could also help by taking a screenshot of error logs in browser console.
Usually you can open the console with a shortcut: `CTRL + SHIFT + J` (MacOS: `CMD + Option + J`), but this can vary between browsers. Share these logs with us on slack, or feel free to [contact us on email](https://docs.hdc.ntnu.no/contact/).

### How can I increase the number of parallel workers?

If you already have "Parallel Computing Toolbox" and cannot set the higher number parallel workers in the pool, Select "Parallel" menu and click on "Create and Manage Clusters":

![MATLAB-manage-clusters.png](./images/MATLAB-manage-clusters.png)

Then hit "Edit" and update the "NumWorkers" value (usually number of CPUs):

![MATLAB-numWorkers.png](./images/MATLAB-numWorkers.png)

### Can I install new toolboxes

Probably not. [Contact us](/contact) on Slack or email if you need new toolboxes in your MATLAB installation. 

## RStudio

### Which R version is available in RStudio?

RStudio is configured to use packages installed in the conda environment named `r-base`.
You can find your R version using [Workbench terminal](/working-in-your-lab/hunt-workbench/faq/#terminal):

1. Open your Workbench terminal.

![workbench_terminal.png](./images/workbench_terminal.png)

2. List the packages in your r-base conda environment.

```bash
conda list -n r-base | grep r-base
```

### Which R packages are preinstalled?

Currently we setup `r-base` environment with these conda packages: `r-base`, `r-irkernel`, `r-devtools`, `r-remotes`, `r-dplyr`, `r-tidyverse`, `r-haven`. If you have older setup and missing some of these packages you can follow the answer below to install them.

### How do I install additional R packages?

If you want to install your own packages, we recommend to use [Conda](/working-in-your-lab/analytical-tools/conda/) where possible. You can defer to alternative methods such as `install.packages()` when the package is not available in Conda. To install a package:

1. Open your [Workbench terminal](/working-in-your-lab/hunt-workbench/faq/#terminal):

![workbench_terminal.png](./images/workbench_terminal.png)

2. Activate r-base environment

```bash
conda activate r-base
```

3. Add packages to your `r-base` code environment:

```bash
# -- Principal example
conda install -n r-base -c conda-forge r-'<package-name>' r-'<another-package-name>'

# -- Practical example*
conda install -n r-base -c conda-forge r-dplyr
```

For example, the above example installs the [dplyr package](https://anaconda.org/conda-forge/r-dplyr).

4. When the installation is complete, open RStudio or R in your Workbench and load your new package:

```bash
# -- Principal example
library(<package-name>)

# -- Practical example
library(dplyr)
```

### How do I install R packages not found in Conda?

If you did not find R package in conda as described above and you have to defer to running `install.packages()` command,
we advice to use `R` in [Workbench terminal](/working-in-your-lab/hunt-workbench/faq/#terminal),
instead of using RStudio. Otherwise RStudio might lead to a broken state of environment where your custom package will not work.

Packages installed into `r-base` environment through **R** in [terminal](/working-in-your-lab/workbench/faq/#terminal) will be available in **RStudio**.

Make sure to activate the `r-base` environment before running **R** command.

```bash
conda activate r-base
```

### How can I use R in Workbench terminal?

Start by activate `r-base` environment:

```
conda activate r-base
```

Then start **R** inside your `r-base` environment:

```
R
```

### How can I recover my R environment in case of broken package installation?

If you are getting errors about `GLIBCXX` library not found and essential R packages are not working,
typically after installing some custom package, you might consider recreating `r-base` environment from scratch.

You can do that in [Workbench terminal](/working-in-your-lab/hunt-workbench/faq/#terminal):

```
conda create --yes -n r-base 'r-base>=4.0,<5.0' 'r-irkernel' 'r-devtools' 'r-remotes' 'r-dplyr' 'r-tidyverse' 'r-haven'
```

Remember that this command also removes your other custom packages that might be working.

### How do I reset my user state in RStudio?

When you [restart your Workbench](/working-in-your-lab/hunt-workbench/faq/#how-can-i-restart-my-workbench-environment), your RStudio user state might still be preserved. To achieve complete reset read the RStudio support pages about how you can [manually remove your user state](https://support.rstudio.com/hc/en-us/articles/218730228-Resetting-a-user-s-state-on-RStudio-Workbench-RStudio-Server).

## Terminal

### Can I use a terminal from my Workbench?

Yes. You can find Workbench Terminal in main view of applications under the section: Other.

![other_apps_terminal.png](./images/other_apps_terminal.png)

### When do I need to use a terminal?

Terminal can be handy when it comes to managing [Conda packages](/working-in-your-lab/analytical-tools/conda/), monitoring resources (`htop`), or handling other tasks.