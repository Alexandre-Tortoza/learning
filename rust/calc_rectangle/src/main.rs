
#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

fn main() {
    let rect1 = Rectangle  {
        width: 10,
        height: dbg!(10*10),
    };

    dbg!(&rect1);
    println!("A area do retangulo é de {}.", calc_area(&rect1));

    fn calc_area(rectangle: &Rectangle) -> u32 {
        rectangle.width * rectangle.height
    }
}
