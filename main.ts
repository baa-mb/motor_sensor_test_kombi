let distanz = 0
basic.showIcon(IconNames.Yes)
let richtung = false
let richtung_alt = false
basic.forever(function () {
    distanz = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    richtung = distanz > 10
    if (richtung != richtung_alt) {
        if (richtung) {
            pins.servoWritePin(AnalogPin.P0, 0)
        } else {
            pins.servoWritePin(AnalogPin.P0, 180)
        }
        richtung_alt = richtung
    }
    basic.showNumber(distanz)
})
