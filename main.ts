hummingbird.startHummingbird()
hummingbird.setTriLED(
TwoPort.One,
60,
50,
0
)
hummingbird.setTriLED(
TwoPort.Two,
60,
50,
0
)
basic.forever(function () {
    if (hummingbird.getSensor(SensorType.Distance, ThreePort.One) <= 5) {
        for (let index = 0; index < 5; index++) {
            hummingbird.setPositionServo(FourPort.One, 180)
            basic.pause(500)
            hummingbird.setPositionServo(FourPort.One, -180)
            basic.pause(500)
        }
    } else {
        hummingbird.setPositionServo(FourPort.One, 0)
    }
})
