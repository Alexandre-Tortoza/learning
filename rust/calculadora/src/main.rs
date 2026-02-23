fn main() {
    let x: i32 = 10;
    let y: i32 = 38;

    println!("{}", calc_soma(&x,&y));
    println!("{}", calc_subtracao(&x,&y));
    println!("{}", calc_dividir(&x,&y));
    println!("{}", calc_multiplicar(&x,&y));
}

fn calc_soma(x:  &i32, y: &i32) -> i32 {
    x + y
}

fn calc_subtracao(x: &i32, y:&i32) -> i32 {
    x - y
}

fn calc_dividir(x: &i32, y:&i32) -> i32 {
    x / y
}

    fn calc_multiplicar(x: &i32, y:&i32) -> i32 {
    x * y
}
