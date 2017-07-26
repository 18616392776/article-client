export function getPosition(obj: any) {
    let x = 0;
    let y = 0;
    while (obj.offsetParent) {
        x += obj.offsetLeft;
        y += obj.offsetTop;
        obj = obj.offsetParent;
    }
    return {
        x,
        y
    };
}