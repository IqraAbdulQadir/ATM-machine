import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1111;
console.log(`Your current balance is ${myBalance}`);
let userPin =  await inquirer.prompt(
    [
        {
            name: "pin",
            message: "Please enter your pin.",
            type: "number"
        }
    ]

);

if (myPin === userPin.pin) {
    let userAction = await inquirer.prompt(
        [
            {
                name: "functions",
                message:"Please choose an option",
                type:"list",
                choices:["Withdraw amount", "Check my balance"]
            }
        ]
    );

    if (userAction.functions === "Withdraw amount"){
        let amountWithdrawn = await inquirer.prompt(
            [
                {
                    name: "Amount",
                    message: "Please choose the amount you would like to withdraw",
                    type:"list",
                    choices:["1000","2000","5000", "Other"]
                }
            ]
        )

        if (amountWithdrawn.Amount === "1000") {
            myBalance -= 1000
            console.log(`Your remaining balance is ${myBalance}`)
        }

        else if (amountWithdrawn.Amount === "2000") {
            myBalance -= 2000
            console.log(`Your remaining balance is ${myBalance}`)
        }

        else if (amountWithdrawn.Amount === "5000") {
            myBalance -= 5000
            console.log(`Your remaining balance is ${myBalance}`)
        }

        else if (amountWithdrawn.Amount === "Other") {
            let otherAmount = await inquirer.prompt (
                {
                    name: "customAmount",
                    message: "Please enter the amount you would like to withdraw",
                    type: "number"
                }
            )
            if (otherAmount.customAmount <= myBalance) {
                myBalance -= otherAmount.customAmount
            console.log(`Your remaining balance is ${myBalance}`)
            }

            else {console.log("Insufficient Balance")}
            
        }
    }

    else if (userAction.functions === "Check my balance") {
        console.log(`Your balance is ${myBalance}`)
    }
    
}


else {
    console.log("Incorrect Pin");
}

