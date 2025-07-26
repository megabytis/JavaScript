#### What are Promises?

    A promise is an object used as a placeholder for the future result of an asynchronous operation i.e. A container for asynchronous deliver future value

#### Why Use Promises?

- Before Promises, developers relied heavily on callbacks or event listeners to handle asynchronous operations.
- However, these approaches often led to "CALLBACK-HELL" (nested callbacks) or complex event management.

**_ Promises offer several advantages: _**

    Cleaner Code: Promises allow you to write asynchronous code in a more linear and readable manner.

    Error Handling: Promises provide a standardized way to handle errors using .catch().

    Chaining Operations: You can chain multiple asynchronous operations together using .then().

#### Example: Lottery Ticket Analogy

    Buying a Lottery Ticket: When you buy a lottery ticket, you're making a promise to yourself that you might win money if the outcome is correct.

    Asynchronous Process: The lottery draw happens asynchronously (you don't know the result immediately).

    Resolution: If the outcome is correct, the promise is fulfilled, and you receive money.

#### Promise Lifecycle

┌─────────────┐
│  PENDING    │ ◄── Initial state
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  SETTLED    │ ◄── Final state (can't change)
└──────┬──────┘
       │
    ┌──▼──┐
    ▼     ▼
┌───────┐ ┌────────┐
│SUCCESS│ │REJECTED│
│(Value)│ │(Error) │
└───────┘ └────────┘

**_ Lottery Ticket Analogy _**

┌─────────────────┐
│   LOTTERY       │
│   TICKET        │ ◄── You bought a ticket (PENDING)
│   (Pending)     │     Outcome unknown yet
└─────────┬───────┘
          │
          ▼
┌─────────────────┐
│   LOTTERY       │
│   DRAW          │ ◄── Waiting for results (SETTLED)
│   (Async Task)  │     Drawing numbers...
└─────────┬───────┘
          │
    ┌─────▼─────┐
    ▼           ▼
┌─────────┐ ┌──────────┐
│  WINNER │ │  LOSER   │
│  🎉     │ │   💩     │
│(Money!) │ │(No prize)│
└─────────┘ └──────────┘
    ▼           ▼
┌─────────┐ ┌──────────┐
│FULFILLED│ │REJECTED  │
│(Success)│ │(Failure) │
└─────────┘ └──────────┘