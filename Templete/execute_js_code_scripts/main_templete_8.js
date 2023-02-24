function unixStampTest(stamp) {
    stamp = stamp / 1000;

    let s = stamp % 60;
    stamp = (stamp - s) / 60;

    let m = stamp % 60;
    stamp = (stamp - m) / 60

    let h = (stamp) % 24;
    let d = (stamp - h) / 24;

    let text = ``;
    text += addZero(Math.floor(d)) + " дней. ";
    text += addZero(Math.floor(h)) + " ч. ";

    return text;
}