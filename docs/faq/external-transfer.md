---
title: External transfer
category: FAQ
permalink: /faq/external-transfer
sidebarDepth: 1
description: This page lists frequently asked questions related to external transfers in labs.
---

# FAQ on external data transfer

This page lists frequently asked questions related to external transfers in labs.

[[toc]]


## External Kista

### Can parties outside HUNT Cloud upload data to my lab?
Yes.
Parties outside HUNT Cloud can upload data to your lab utilizing the external kista import service.
You can also make data available for parties outside HUNT Cloud via the external kista export service.

### What is an external kista?
External kista is our service for controlled data transfers between your lab and an external user outside HUNT Cloud.
The transfer take place on a time-limited SFTP server that is dedicated for your specific data transfer.

### How do I order an external kista?
Lab leaders can request an external kista by filling out the [External kista import order](/agreements/downloads/#external-kista-import-order) or [External kista export order](/agreements/downloads/#external-kista-export-order).
You will need to fill out the form in collaboration with the external party that will import/export data to/from your external kista and send it to us via [email](contact).
The external party must also meet the [technical requirements](data-transfers/external-kista) and share their public SSH key with us before we can setup the external kista.

### How quickly can I get access to an external kista?
You should order your kista a few weeks before you need the transfer.
The data importer outside HUNT Cloud may need to order firewall openings from his organization, the importer will need to generate a SSH key pair, and configure his/her local machine to connect with your external kista.

### What is an 'uploader' and 'downloader'?
We have defined the Uploader as the user outside HUNT Cloud that will import (upload) data to your external kista.
We have defined the Downloader as the user outside HUNT Cloud that will export (download) data from your external kista.

### How do I know the transfer size?
You may need to communicate with the Uploader if you do not know the size of your transfer.
We need this information to allocate storage to your kista.

### How do I know the IP of the external party?
You need to communicate with the external party to get the IPv4 address for the machine they will use to connect to your external kista.
We use this information to restrict access to your external kista for other machines.

### How do I access my external kista?
See our [external kista transfer guide](/data-transfers/external-kista/#for-external-users) for instruction on how to access and upload or download data for an internal kista.

### Can I import and export data in the same external kista?
No. For compliance reasons, kistas are for one way transfers only.
You will need to order two individual kistas if you plan to transfer data both ways.

### Do the Importer need to encrypt the data?
Most likely. However, this is decided by the data controller.
Feel free to [contact us](/contact) as we are more than happy to help with evaluations on encryption.

### Is external kistas secure enough for my data?
Most likely. The service allows you to be compliant with common acts and regulations such as GDPR and Helsenormen.
And the management and operations comply with our [certificates](/about/certificates/).
However, the decision of whether you can use this service is decided by your data controller.

### Where can I get additional security information on the external kistas?
[Contact us](/contact) for additional information on the external kista service aimed at security, privacy and compliance officers.

### How do I order a Kista for transfers from HEMIT?
[HEMIT](https://hemit.no/) is the Central Norway Regional Health Authority's IT department that coordinate transports from our regional hospitals such as St Olavs Hospital, Helse Nord-Trøndelag and Helse More og Romsdal. Transfers with external kistas are pre-approved by HEMIT for transfers from health trusts that hold data processor agreements with HUNT Cloud. Hospital departments can order transfers at **`HEMIT-torget`**. Place a free-text order for an "External kista to HUNT Cloud", include information from our [external kista import order](/agreements/downloads), and state if you need help from HEMIT to install the required SFTP application on your local hospital machine.


## Direct external transfers

### Can I transfer data directly with parties outside HUNT Cloud?
Yes and no. Direct transfers via SSH are blocked. However, your lab leader can allow network openings for data transactions outside HUNT Cloud (see below). Note that this is restricted to traffic that are initiated from inside your lab.

### Can I have permanent openings to machines outside my lab?
Yes. We do allow two-way data transactions between your lab and machines outside HUNT Cloud. Such openings needs to be approved by your service owner, documented in our [network opening order](/agreements/downloads/#network-opening-order), and the traffic needs to be initiated from inside your lab.

### How do I request a network opening?
Lab leaders can request network openings through our [network opening order](/agreements/downloads/#network-opening-order). We use this order to document outbound traffic from your lab.

### Which network openings do the machine outside HUNT Cloud need to approve?
Your remote party will need to open for incoming traffic from your lab in HUNT Cloud: **`IP 129.241.176.121`**. The IP is registered under NTNU. They will need to open for traffic on **`TCP port 22`** if you plan to use SSH-tools such as **`rsync`**.

### How do I transfer data to and from TSD at UiO?
Services for senstivie data ([TSD](https://www.uio.no/english/services/it/research/sensitive-data/)) at the University of Oslo has developed a handy [API client](https://github.com/unioslo/tsd-api-client) that can be utilized for direct data transfers to and from your lab. The setup requires that you hold user accounts for both TSD and HUNT Cloud. Depending on your lab configuration, you may have to [contact us](/contact) for a network opening.

::: details More information
For transfers from TSD to HUNT Cloud: On TSD, put your data in the **`file-export`** folder on **`durable`**. Then, log into your HUNT Cloud lab and download the data via the API as described in their [guide](https://github.com/unioslo/tsd-api-client).
:::

### Do I need to encrypt data for external transfers?
Most likely. It is your responsibility to ensure that the data maintain its confidentiality during the transfer. Even when you use an encrypted transport layer, encrypted data is a good way to ensure that only the indented receiver are able to access your data on the receiving end. Read our [7z guide](/working-in-your-lab/transfer-tools/7z/#install-the-software) on how encrypt and compress files for large transfers. [Contact us](/contact) if you wonder if your your data needs to be encrypted or not. We are more than happy to help with evaluations.
