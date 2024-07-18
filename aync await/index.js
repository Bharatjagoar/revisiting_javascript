const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Response from p1");
    }, 10000); // 10 seconds
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Response from p2");
    }, 5000); // 5 seconds
});

async function myFunction() {
    console.time("fdsaf::")
    console.log("Hello World");

    const res1 = await p1;
    console.log(res1);

    const res2 = await p2;
    console.log(res2);
    console.timeEnd("fdsaf::")
}

myFunction();
console.log("Function called");


// LEARNINGS
// WHENEVER YOU ARE GOING TO USE ASYNC AWAIT KEEP SUNSEPENDS THE FLOW OF THE ASYNC FUNCTION TILL IT COMPLETES ,
// ANOTHER THING TO KEEP IN MIND IS HERE THERE CALL BACKS ARE RESGISTERED IN TASK QUEUE ,
// WHEN THE CALL STACK GETS EMPTY IT THEN THE CALLBACKS IN TASK QUEUE GETS INTO CALL STACK 


// HERE IS SPECIAL CASE THAT PROMISE P1 TAKES 10 SECS AND P2 TAKES 5 SEC AND BOTH ARE IN SAME ASYNC FUNCTION 
// THEN THE TOTAL TIME TO BE TAKEN BY THIS FUNCTION IS 15 SECS BUT TAKING ONLY 10 SEC WHY SO ?
// IT IS BECAUSE IF THE PROMISE THAT IS TO BE RESOLVED NEXT , IF THE TIME TAKEN BY IT IS LESS LIKE HERE IT IS TAKING 5 SECONDS
// THEN IT WILL BE EXECUTED IN THE BACKGROUND
// OR ELSE SUM OF BOTH THE TIME WILL BE THE TOTAL TIME 
// TEXT FROM GEMINI :-

// In the context of p2 resolving "for free," the phrase "for free" signifies that it doesn't add any extra waiting time to the overall execution of myFunction. Here's a breakdown:

// JavaScript's Single Thread: Recall that JavaScript has a single thread for execution. This means the main thread can only handle one task at a time.
// Waiting on p1 with await: When await p1 is encountered in myFunction, the main thread essentially pauses its execution and waits for p1 to resolve (10 seconds in this case).
// p2's Potential Background Work: While the main thread is stuck waiting on p1, p2 doesn't have to wait idly. JavaScript's event loop, which manages asynchronous operations, might schedule p2 for resolution in the background.
// p1 Resolves, p2 Might Be Ready: Once p1 finishes its 10-second task, the main thread resumes execution. Here's the key point: If p2 has already completed its background work (which is likely because it takes only 5 seconds), its resolution happens without any additional waiting on the main thread.