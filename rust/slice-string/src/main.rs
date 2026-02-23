fn main() {
    let word = String::from("Hello World!");
    println!("{}", word);

    slice_string(&word);
}


fn slice_string(s: &String) -> usize{
    let bytes = s.as_bytes();
    // println!("{}", bytes);
    println!("\n");

    for (i, &item) in bytes.iter().enumerate(){
        println!("{}", item);

        if item == b' '{
            return i;
        }
    }

    s.len()
}
