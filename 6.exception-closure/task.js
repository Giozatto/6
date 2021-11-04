function parseCount(text) {
    let toParse = Number.parseInt(text);
    if (toParse === Number(text)) {
        return toParse;
    }
    throw new Error('Невалидное значение');
}
parseCount(51)

function validateCount(text) {
    try {
        return parseCount(text);
    } catch (err) {
        return err;
    }
}

class Triangle {
    constructor(a, b, c) {
        if ((a + b) < c || (a + c) < b || (b + c) < a) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getPerimeter() {
        let per = this.a + this.b + this.c;
        return per;
    }
    getArea() {
        let p = 0.5 * (this.a + this.b + this.c);
        let s = Math.sqrt(p * ((p - this.a) * (p - this.b) * (p - this.c)));
        return Number(s.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        let obj = {
            getArea() {
                return 'Ошибка! Треугольник не существует'
            },
            getPerimeter() {
                return 'Ошибка! Треугольник не существует'
            }
        }
        return obj;
    }
}
