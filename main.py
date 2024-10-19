def on_button_pressed_a():
    global Set_string
    if not (Set_string == 10):
        Set_string += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_string(receivedString):
    basic.show_string(receivedString)
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    global Set_string
    if not (Set_string == 1):
        Set_string += -1
input.on_button_pressed(Button.B, on_button_pressed_b)

Message = 0
Set_string = 0
radio.set_group(1)

def on_forever():
    global Message
    if Set_string == 1:
        Message = 1
        if input.logo_is_pressed():
            radio.send_string("Hello")
    if Set_string == 2:
        Message = 2
        if input.logo_is_pressed():
            radio.send_string("How are you?")
    if Set_string == 3:
        Message = 3
        if input.logo_is_pressed():
            radio.send_string("Good ")
    if Set_string == 4:
        Message = 4
        if input.logo_is_pressed():
            radio.send_string("Ok")
    if Set_string == 5:
        Message = 5
        if input.logo_is_pressed():
            radio.send_string("Bad")
    if Set_string == 6:
        Message = 6
        if input.logo_is_pressed():
            radio.send_string("Sos!")
    if Set_string == 7:
        Message = 7
        if input.logo_is_pressed():
            radio.send_string("Help")
    if Set_string == 8:
        Message = 8
        if input.logo_is_pressed():
            radio.send_string("Text me")
    if Set_string == 9:
        Message = 9
        if input.logo_is_pressed():
            radio.send_string("Love you ")
    if Set_string == 10:
        Message = 10
        if input.logo_is_pressed():
            radio.send_string("Good bye ")
basic.forever(on_forever)
