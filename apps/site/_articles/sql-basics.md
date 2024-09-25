---
title: 'Basics of SQL'
exerpt: 'Helpful reference for SQL Basics'
date: '2024-10-01'
author: 'Danny Grimmig'
tags: ['sql', 'databases', 'backend']
image: 
    src: "https://miro.medium.com/v2/resize:fit:1024/1*lbZJd2zWpLnKXzcsiMpmLw.jpeg"
    citation: 'Kyle Farmer via Medium'
---

This article will act as both my live notes while I learn SQL, as well as a refence guide to look back at.

# What is SQL
[SQL](https://aws.amazon.com/what-is/sql/) (Structured Query Language) is a programming language used to create and manage relational databases. [Relational Databases](https://www.oracle.com/database/what-is-a-relational-database/) store data in tables made up of rows and columns.

| id    | band |
| -------- | ------- |
| 1 | Tallest Man on Earth |
| 2 | U2 |
| 3 | Shakey Graves |

<br />
A key feature to relational databases is how tables can *relate* to one another - they do so through linking rows together from a common key.
<br />


| id    | album | artist_id | 
| -------- | ------- | ------- | 
| 1 | Henry St. | 1 |
| 2 | Roll The Bones | 3 |
| 3 | Joshua Tree | 2 |

<br />
In the above example, one can see Henry St is an album by the Tallest Man on Earth, Roll the Bones by Shakey Graves, and Joshua Tree by U2. Relations can get more complicated, and span across multiple tables.

# Key Features
To break down SQL into a more digestable concept, it can be divided into 4 key concepts.
- [Manipulation](https://www.codecademy.com/learn/learn-sql/modules/learn-sql-manipulation/cheatsheet): Perform CRUD (Create, Read, Update, Delete) operations on a database.
- [Queries](https://www.codecademy.com/learn/learn-sql/modules/learn-sql-queries/cheatsheet): Interact with a database to retrieve and display specific data.
- [Aggregation](https://www.codecademy.com/learn/learn-sql/modules/learn-sql-aggregate-functions/cheatsheet): Apply mathematical operations on top of database queries.
- [Multiple Tables](https://www.codecademy.com/learn/learn-sql/modules/learn-sql-multiple-tables/cheatsheet): Handle data relationships across different tables.

# Database Normalization
A key aspect of good database design is normalization. [Normalization](https://learn.microsoft.com/en-us/office/troubleshoot/access/database-normalization-description) refers to organizing data into multiple related tables to reduce redundancy and ensure data integrity.

[Learn Database Normalization](https://www.youtube.com/watch?v=GFQaEYEc8_8&t=394s) provides a great in depth visual on normalization, the key ideas being:
- concept 1: asdfas
- concept 2: lorem ip ther ia lasdfki

