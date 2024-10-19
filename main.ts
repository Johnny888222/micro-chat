let Set_string = 0
let Message = 0
input.onButtonPressed(Button.A, function () {
    if (!(Set_string == 10)) {
        Set_string += 1
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    if (!(Set_string == 1)) {
        Set_string += -1
    }
})
basic.forever(function () {
    if (Set_string == 1) {
        Message = 1
        if (input.logoIsPressed()) {
            radio.sendString("Hello")
        }
    }
    if (Set_string == 2) {
        Message = 2
        if (input.logoIsPressed()) {
            radio.sendString("How are you?")
        }
    }
    if (Set_string == 3) {
        Message = 3
        if (input.logoIsPressed()) {
            radio.sendString("Good ")
        }
    }
    if (Set_string == 4) {
        Message = 4
        if (input.logoIsPressed()) {
            radio.sendString("Ok")
        }
    }
    if (Set_string == 5) {
        Message = 5
        if (input.logoIsPressed()) {
            radio.sendString("Bad")
        }
    }
    if (Set_string == 6) {
        Message = 6
        if (input.logoIsPressed()) {
            radio.sendString("Sos!")
        }
    }
    if (Set_string == 7) {
        Message = 7
        if (input.logoIsPressed()) {
            radio.sendString("Help")
        }
    }
    if (Set_string == 8) {
        Message = 8
        if (input.logoIsPressed()) {
            radio.sendString("Text me")
        }
    }
    if (Set_string == 9) {
        Message = 9
        if (input.logoIsPressed()) {
            radio.sendString("Love you ")
        }
    }
    if (Set_string == 10) {
        Message = 10
        if (input.logoIsPressed()) {
            radio.sendString("Good bye ")
        }
    }
})
