fn main() {
    let mut counter: i32 = 0;

    let result: i32 = loop {
        // counter = counter + 1
        counter += 1;

        if counter == 10 {
            break counter * 2
        }
    };

    println!("O valor de counter foi de: {result}!")
}
