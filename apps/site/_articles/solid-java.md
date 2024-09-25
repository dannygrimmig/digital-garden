---
title: 'Solid Principles in Java'
exerpt: 'My notes on the SOLID clean code architecture in Java.'
date: '2024-09-24'
author: 'Danny Grimmig'
tags: ['java', 'clean code', 'backend']
image: 
    src: "https://miro.medium.com/v2/resize:fit:1400/1*XOMTPWTpDLypkp079p9XXg.png"
    citation: 'BGL Tech via Medium'
---
SOLID principles, a set of guidelines for writing clean, maintainable, and scalable code in object-oriented programming.

## What is SOLID?
[SOLID](https://www.freecodecamp.org/news/solid-principles-for-programming-and-software-design/) is an acronym that stands for five design principles intended to improve software design. These principles help developers create more understandable, flexible, and maintainable software by promoting good object-oriented design practices:

- [Single Responsibility Principle (SRP)](http://principles-wiki.net/principles:single_responsibility_principle): A class should have only one reason to change, meaning it should have only one job or responsibility.
- [Open/Closed Principle (OCP)](http://principles-wiki.net/principles:open-closed_principle): Software entities (classes, modules, functions) should be open for extension but closed for modification.
- [Liskov Substitution Principle (LSP)](http://principles-wiki.net/principles:liskov_substitution_principle): Objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program.
- [Interface Segregation Principle (ISP)](http://principles-wiki.net/principles:interface_segregation_principle): A client should never be forced to implement an interface it doesn’t use. Instead, many small, specific interfaces are better than a single general-purpose one.
- [Dependency Inversion Principle (DIP)](http://principles-wiki.net/principles:dependency_inversion_principle): High-level modules should not depend on low-level modules. Both should depend on abstractions. Additionally, abstractions should not depend on details; details should depend on abstractions.
Where does it come from?

The SOLID principles were introduced by [Robert C. Martin (Uncle Bob)](https://cleancoders.com/episode/clean-code-episode-8). These principles are a core part of object-oriented design and have become a cornerstone for developers aiming to write better, more maintainable code. SOLID helps to keep codebases flexible, modular, and scalable by promoting separation of concerns and proper abstraction.

## Breakdown (with examples)
### Single Responsibility Principle (SRP)
A class should only have one responsibility or reason to change. For example, imagine a class Invoice. If the Invoice class is responsible for both calculating totals and printing invoices, it violates SRP. Instead, you could separate these concerns into two classes:

```java
class InvoiceCalculator {
    public double calculateTotal(Invoice invoice) { /* logic */ }
}

class InvoicePrinter {
    public void print(Invoice invoice) { /* logic */ }
}
```

### Open/Closed Principle (OCP)
Classes should be open for extension but closed for modification. For instance, if you have a PaymentProcessor class, it should allow you to add new payment methods (like PayPal or Credit Card) without modifying the existing code.

```java
interface PaymentMethod {
    void processPayment(double amount);
}

class CreditCardPayment implements PaymentMethod {
    public void processPayment(double amount) { /* logic */ }
}

class PayPalPayment implements PaymentMethod {
    public void processPayment(double amount) { /* logic */ }
}
```

In this case, you can add new payment methods by implementing PaymentMethod, without altering the PaymentProcessor.

### Liskov Substitution Principle (LSP)
Subtypes should be substitutable for their base types without affecting the functionality. For example, if you have a class Bird, and a subclass Penguin, you should be able to use Penguin wherever Bird is expected, without breaking the behavior of the program.

```java
Copy code
class Bird {
    public void fly() { /* flying logic */ }
}

class Penguin extends Bird {
    @Override
    public void fly() {
        throw new UnsupportedOperationException("Penguins can't fly");
    }
}
```
Here, Penguin violates LSP because it cannot fly. Instead, you might want to separate birds into FlyingBird and NonFlyingBird classes to ensure substitution works properly.

### Interface Segregation Principle (ISP)
Clients should not be forced to implement interfaces they do not use. For example, if you have a Worker interface that includes both work() and eat() methods, and a RobotWorker class that doesn’t eat, the robot is forced to implement a method it doesn’t need.

```java
interface Workable {
    void work();
}

interface Eatable {
    void eat();
}

class HumanWorker implements Workable, Eatable {
    public void work() { /* working logic */ }
    public void eat() { /* eating logic */ }
}

class RobotWorker implements Workable {
    public void work() { /* working logic */ }
}
```
By splitting the interface into two smaller, more specific interfaces, RobotWorker is no longer forced to implement unnecessary methods.

### Dependency Inversion Principle (DIP)
High-level modules should depend on abstractions, not on concrete implementations. For example, a class that handles logging should depend on a Logger interface rather than a specific implementation like FileLogger or DatabaseLogger.

```java
interface Logger {
    void log(String message);
}

class FileLogger implements Logger {
    public void log(String message) { /* logic to log to a file */ }
}

class Application {
    private Logger logger;

    public Application(Logger logger) {
        this.logger = logger;
    }

    public void performTask() {
        logger.log("Task performed");
    }
}
```
By depending on the Logger abstraction, you can easily switch between different logging mechanisms without changing the Application class.