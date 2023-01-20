// Created by: Owen Whalley
// Created on: January 16th, 2023
// 
// This makes the counter go up by 1 every time the player presses the a button.
input.onButtonPressed(Button.A, function () {
    Number_counter += 1
})
// Created by: Owen Whalley
// Created on: January 16th, 2023
// 
// This resets the counter to zero for when the game resets.
input.onButtonPressed(Button.AB, function () {
    Number_counter = 0
})
// Created by: Owen Whalley
// Created on: January 16th, 2023
// 
// This makes the counter go down by 1 when the player presses the b button.
input.onButtonPressed(Button.B, function () {
    Number_counter += -1
})
// Created by: Owen Whalley
// Created on: January 16th, 2023
// 
// This starts the counter at zero
let Number_counter = 0
Number_counter = 0
// Created by: Owen Whalley
// Created on: January 16th, 2023
// 
// This makes it so the player always knows the number they counted up to
basic.forever(function () {
    basic.showNumber(Number_counter)
})
